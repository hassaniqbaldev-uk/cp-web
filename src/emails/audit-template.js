export const getAuditEmailTemplate = (name, email, websiteUrl, service, primaryGoal) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; }
    .message { background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #ED910C; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Free Audit Request</h1>
      <p>You have received a new audit form submission</p>
    </div>

    <div class="field">
      <span class="label">Name:</span> ${name || "Not provided"}
    </div>

    <div class="field">
      <span class="label">Email:</span> ${email}
    </div>

    <div class="field">
      <span class="label">Website URL:</span> <a href="${websiteUrl}">${websiteUrl}</a>
    </div>

    <div class="field">
      <span class="label">Service:</span> ${service || "Not specified"}
    </div>

    <div class="field">
      <span class="label">Primary Goal:</span>
      <div class="message">${primaryGoal || "Not specified"}</div>
    </div>

    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666;">
      <p>This email was sent from your website audit form.</p>
    </div>
  </div>
</body>
</html>
`;
