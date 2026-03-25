// Team notification email — sent to your team when someone applies
export const getJobApplicationEmailTemplate = (fullName, email, phone, portfolio, message, jobTitle) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #EE8D00; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; }
    .message { background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #EE8D00; }
    .badge { display: inline-block; background: #EE8D00; color: white; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Job Application</h1>
      <p>You have received a new application for <span class="badge">${jobTitle}</span></p>
    </div>

    <div class="field">
      <span class="label">Name:</span> ${fullName}
    </div>

    <div class="field">
      <span class="label">Email:</span> ${email}
    </div>

    <div class="field">
      <span class="label">Phone:</span> ${phone || "Not provided"}
    </div>

    <div class="field">
      <span class="label">Portfolio:</span> ${portfolio || "Not provided"}
    </div>

    <div class="field">
      <span class="label">Cover Letter / Message:</span>
      <div class="message">${message || "No message provided"}</div>
    </div>

    <div class="field">
      <span class="label">Resume:</span> Attached to this email
    </div>

    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666;">
      <p>This email was sent from your website job application form.</p>
    </div>
  </div>
</body>
</html>
`;

// Applicant confirmation email — sent to the person who applied
export const getJobApplicantEmailTemplate = (fullName, email, jobTitle) => `
<!doctype html>
<html>
  <head>
    <style>
      * { padding: 0; margin: 0; box-sizing: border-box; }
      body { font-size: 16px; line-height: 1.5; font-weight: 400; font-family: "Onest", Arial, sans-serif; }
      .main-container { width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; }
      .banner { width: 100%; height: 235px; margin: 0 auto; }
      .banner img { width: 100%; height: 100%; object-fit: cover; display: block; object-position: center; }
      .content .container { max-width: 540px; margin: 0 auto; padding-top: 22px; padding-bottom: 25px; }
      .content .container .msg-heading { font-weight: 600; font-size: 21px; letter-spacing: -0.02em; color: #070707; }
      .content .container .msg-heading span { color: #EE8D00; }
      .content .container .msg-text { font-weight: 400; font-size: 16px; line-height: 26px; color: #070707; margin: 25px 0px; }
      .content .container .msg-text strong { font-weight: 700; }
      .content .container .msg-text a { color: #ee8d00; font-weight: 700; }
      .group { cursor: pointer; text-decoration: none; display: inline-block; }
      .content .container .button-container { position: relative; z-index: 2; min-width: max-content; overflow: hidden; border-radius: 60px; background-color: #EE8D00; padding: 10px 20px; margin-top: 10px; font-size: 16px; font-weight: 600; color: white; display: inline-block; vertical-align: middle; }
      .footer { width: 100%; padding: 15px 30px 32px 30px; background-color: #070707; }
      .footer h5 { font-weight: 400; font-size: 14px; line-height: 22px; color: #8f8f8f; margin-bottom: 12px; }
      .footer .footer-links a { font-weight: 400; font-size: 14px; line-height: 22px; color: #8f8f8f; display: inline-block; vertical-align: middle; }
      .footer .footer-links div { width: 4px; height: 4px; border-radius: 100px; background-color: #8f8f8f; display: inline-block; vertical-align: middle; }
    </style>
  </head>
  <body>
    <div class="main-container">
      <div class="banner">
        <img src="https://creativepixels.agency/images/email-template-assets/email-template-banner-white.jpg" alt="Banner Image" />
      </div>

      <div class="content">
        <div class="container">
          <h2 class="msg-heading">
            Thanks for applying for <span>"${jobTitle}"</span>
          </h2>

          <p class="msg-text">
            Hi ${fullName}, <br />
            Thank you for applying to <strong>CreativePixels Agency</strong>. We've received your application for <strong>${jobTitle}</strong> and our team will review it shortly. <br />
            <br />
            If your profile matches what we're looking for, we'll reach out to schedule the next steps. We appreciate your interest in joining our team. <br />
            <br />
            In the meantime, feel free to explore our work below.
          </p>

          <a href="https://creativepixels.agency" class="group">
            <div class="button-container">
              <span>View Our Work</span>
            </div>
          </a>
        </div>
      </div>

      <div class="footer">
        <h5>This email was sent to ${email} by CreativePixels Team.</h5>
        <div class="footer-links">
          <a href="https://creativepixels.agency/privacy-policy">Privacy Policy</a>
          <div></div>
          <a href="https://creativepixels.agency/cookies-policy">Cookies Policy</a>
        </div>
      </div>
    </div>
  </body>
</html>
`;
