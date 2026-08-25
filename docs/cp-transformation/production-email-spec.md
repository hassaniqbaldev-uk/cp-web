# Production email setup — spec for Hassan / MTB

**Status:** SPEC ONLY. No production or DNS setting has been changed. This lists exactly what
production needs. Everything below is for MTB to action in AWS + DNS.

## Where things stand (staging, verified 25 Aug 2026)

All four forms send correctly on staging. Config in use:

| Item | Current (staging) |
| --- | --- |
| Transport | nodemailer → **SES SMTP**, `email-smtp.eu-west-2.amazonaws.com:587` (STARTTLS) |
| Sending identity (`SMTP_FROM`) | **`website@cpdev.uk`** (a verified SES identity) |
| Region | **eu-west-2** (London) |
| Recipients | contact/audit + lp-audit → `hello@cp.agency, afzal@cp.agency`; jobs → `join@cp.agency`; plus a thank-you to the submitter |

**The gap:** we send **from `cpdev.uk`** (a dev domain) **to `cp.agency`**. That works, but mail from an
unrelated dev domain to your real inboxes is far more likely to land in spam or be quarantined. For
production, the sending identity should be on **`cp.agency`** (or a subdomain of it), fully authenticated.

## What production needs — action list

### 1. Choose the production sending identity
- Verify a **domain identity in SES eu-west-2**: recommend a subdomain, **`mail.cp.agency`** (keeps
  email DNS separate from the website), sending as e.g. **`website@mail.cp.agency`** or
  **`no-reply@mail.cp.agency`**. A bare `cp.agency` identity also works if you prefer `website@cp.agency`.
- Verifying the **domain** (not just one address) lets you send from any address on it and is required for
  DKIM.

### 2. DNS records to publish (in cp.agency DNS)
For the chosen identity, SES will generate the exact values — publish all of these:
- **DKIM — 3 × CNAME** records (SES "Easy DKIM" gives you `<token>._domainkey…` → `…dkim.amazonses.com`).
  Required; without DKIM, deliverability suffers badly.
- **Custom MAIL FROM** (recommended, for SPF alignment) on the sending subdomain, e.g. `mail.cp.agency`:
  - **MX**: `mail.cp.agency` → `feedback-smtp.eu-west-2.amazonses.com`, priority **10**.
  - **SPF (TXT)** on `mail.cp.agency`: `v=spf1 include:amazonses.com ~all`.
- **DMARC (TXT)** at `_dmarc.cp.agency`: start monitoring-only —
  `v=DMARC1; p=none; rua=mailto:dmarc@cp.agency` — then tighten to `p=quarantine` once DKIM/SPF pass.

### 3. Move SES out of the sandbox
- Confirm the **eu-west-2 account's current status** (Account dashboard → "Sending statistics" shows if it's
  in the sandbox). On staging nothing was rejected, so it may already have production access — **confirm it**.
- If still in sandbox: **Request production access** (Account dashboard → "Request production access"). In the
  sandbox SES only sends to **verified** recipients, so the customer thank-you (to arbitrary submitter emails)
  would fail in production traffic. Production access removes that limit.

### 4. Production SMTP credentials + app env
- Create **SES SMTP credentials** for production (SES → SMTP settings → "Create SMTP credentials"; this makes
  an IAM user with `ses:SendRawEmail`). These are distinct from AWS API keys.
- Set the **production** environment variables (Vercel project settings, Production scope):
  - `SMTP_HOST=email-smtp.eu-west-2.amazonaws.com`, `SMTP_PORT=587`
  - `SMTP_USER` / `SMTP_PASSWORD` = the new production SMTP credentials
  - `SMTP_FROM` = the new cp.agency identity (e.g. `website@mail.cp.agency`)
  - `LP_AUDIT_RECIPIENTS` = the intended recipients (currently `hello@cp.agency,afzal@cp.agency`)
- Recipients (`hello@`, `afzal@`, `join@`) are inboxes you own — **no verification needed once out of sandbox**.

### 5. Nice-to-have (not a launch blocker)
- **Bounce/complaint handling**: an SNS topic on the identity so hard bounces/complaints are captured and the
  sending reputation is protected.
- **A monitored `dmarc@cp.agency`** mailbox (or a DMARC reporting service) to read the `rua` reports.

## Acceptance test (after the above)
Re-run the same four-form test against production (or a production-config preview) and confirm each email
**arrives in the inbox, not spam**, with DKIM=pass and SPF=pass shown in the received headers.

## Do NOT change
Per Hassan: this is a spec only. No production env var, SES setting, or DNS record has been touched.
