// emails/contact-template.js
export const getCustomerEmailTemplate = (name, service, email, message) => {
  return `
<!doctype html>
<html>
  <head>
    <style>
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      body {
        font-size: 16px;
        line-height: 1.5;
        font-weight: 400;
        font-family: "Onest", sans-serif;
      }

      .main-container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
      }

      .banner {
        width: 100%;
        height: 235px;
        margin: 0 auto;
      }

      .banner img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        object-position: center;
      }

      .content .container {
        max-width: 540px;
        margin: 0 auto;
        padding-top: 22px;
        padding-bottom: 25px;
      }

      .content .container .msg-heading {
        font-weight: 600;
        font-size: 21px;
        letter-spacing: -0.02em;
        color: #070707;
      }

      .content .container .msg-heading span {
        color: #3078ff;
      }

      .content .container .msg-text {
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #070707;
        margin: 25px 0px;
      }

      .content .container .msg-text strong {
        font-weight: 700;
      }

      .content .container .msg-text a {
        color: #ee8d00;
        font-weight: 700;
      }

      .group {
        cursor: pointer;
        text-decoration: none;
        display: inline-block;
      }

      .content .container .button-container {
        position: relative;
        z-index: 2;
        min-width: max-content;
        overflow: hidden;
        border-radius: 60px;
        background-color: #ff37b3;
        padding: 10px 20px;
        margin-top: 10px;
        font-size: 16px;
        font-weight: 600;
        color: white;
        display: inline-block;
        vertical-align: middle;
      }

      .content .container .button-text {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
      }

      .content .container .bottom-card {
        width: 100%;
        height: 338px;
        margin: 0 auto;
        display: block;
        text-decoration: none;
      }

      .content .container .bottom-card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        object-position: center;
        border-radius: 12px;
      }

      .content .container .bottom-grid {
        display: table;
        width: 100%;
        table-layout: fixed;
        margin: 20px 0px;
        border-spacing: 8px;
      }

      .content .container .bottom-grid .grid-column {
        display: table-cell;
        width: 50%;
        border-radius: 12px;
        background: #ffffff;
        border: 2px solid #07070734;
        text-align: center;
        padding: 25px 0px;
      }

      .content .container .bottom-grid .grid-column h4 {
        font-weight: 600;
        font-size: 18px;
        line-height: 21.55px;
        letter-spacing: -0.02em;
        text-align: center;
        color: #070707;
        margin-bottom: 22px;
      }

      .content .container .bottom-grid .grid-column .social-links a {
        width: 38px;
        height: 38px;
        border-radius: 11px;
        background-color: #ff8630;
        display: inline-block;
        vertical-align: middle;
        margin: 0 5px;
      }

      .content .container .bottom-grid .grid-column .button-container {
        position: relative;
        z-index: 2;
        min-width: max-content;
        overflow: hidden;
        border-radius: 60px;
        background-color: #3078ff;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: 600;
        color: white;
        display: inline-block;
        vertical-align: middle;
      }

      .footer {
        width: 100%;
        padding: 15px 30px 32px 30px;
        background-color: #070707;
      }

      .footer h5 {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #8f8f8f;
        margin-bottom: 12px;
      }

      .footer .footer-links a {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #8f8f8f;
        display: inline-block;
        vertical-align: middle;
      }

      .footer .footer-links div {
        width: 4px;
        height: 4px;
        border-radius: 100px;
        background-color: #8f8f8f;
        display: inline-block;
        vertical-align: middle;
      }

      /* Mobile Responsive Styles */
      @media only screen and (max-width: 480px) {
        .main-container {
          width: 100% !important;
        }

        .banner {
          height: 180px !important;
        }

        .content .container {
          padding-top: 15px !important;
          padding-bottom: 20px !important;
        }

        .content .container .msg-heading {
          font-size: 18px !important;
          line-height: 1.3 !important;
          padding: 0 15px !important;
        }

        .content .container .msg-text {
          font-size: 14px !important;
          line-height: 22px !important;
          margin: 20px 0px !important;
          padding: 0 15px !important;
        }

        .content .container .button-container {
          padding: 8px 16px !important;
          font-size: 14px !important;
          margin: 0 15px !important;
          display: block !important;
          text-align: center !important;
        }

        .content .container .bottom-card {
          height: 250px !important;
          padding: 0 15px !important;
        }

        .content .container .bottom-grid {
          display: block !important;
          padding: 0 15px !important;
        }

        .content .container .bottom-grid .grid-column {
          display: block !important;
          width: 100% !important;
          margin-bottom: 15px !important;
        }

        .content .container .bottom-grid .grid-column h4 {
          font-size: 16px !important;
          margin-bottom: 15px !important;
        }

        .content .container .bottom-grid .grid-column .social-links a {
          width: 32px !important;
          height: 32px !important;
          margin: 0 3px !important;
        }

        .content .container .bottom-grid .grid-column .button-container {
          padding: 8px 16px !important;
          font-size: 14px !important;
        }

        .footer {
          padding: 15px 20px 25px 20px !important;
        }

        .footer h5 {
          font-size: 12px !important;
          line-height: 18px !important;
        }

        .footer .footer-links a {
          font-size: 12px !important;
          line-height: 18px !important;
        }
      }
    </style>
  </head>
  <body>
    <div class="main-container">
      <!--  Banner -->
      <div class="banner">
        <img
          src="https://creativepixels.agency/images/email-template-assets/email-template-banner-white.jpg"
          alt="Banner Image"
        />
      </div>

      <!--  Content  -->
      <div class="content">
        <div class="container">
          <p class="msg-text">
            Hi ${name || "there"}, <br /> <br />
            Thank you for getting in touch with CreativePixels. We've received your message and one of our team will be back to you within 1 business day to discuss the next steps.<br /><br />

            Here's a quick summary of what you submitted: <br /> <br />

            • Name: ${name} <br />
            • Service requested: ${service} <br />
            • Your message: ${message}
          </p>

          <p class="msg-text">
            While you wait, feel free to take a look at our recent work to get a feel for how we work and what we deliver:
            <a href="https://creativepixels.agency">www.creativepixels.agency</a> <br /><br />

            Want to speak to someone sooner? You can book a free 15-minute discovery call at a time that suits you: <br /><br />

            We look forward to learning more about your project. <br /><br />

            Best regards, <br />
            CreativePixels Team <br />  
            hello@creativepixels.agency <br />  
            <a href="https://creativepixels.agency">www.creativepixels.agency</a>  
          </p>


          <div class="bottom-grid">
            <div class="grid-column">
              <h4>Connect With Us</h4>

              <div class="social-links">
                <a href="https://www.facebook.com/CPAgencyUK">
                  <img
                    src="https://creativepixels.agency/images/email-template-assets/fb-white.png"
                    alt="Facebook"
                    width="38"
                    height="38"
                    style="display: block;"
                  />
                </a>

                <a href="https://www.instagram.com/cpagencyuk/">
                  <img
                    src="https://creativepixels.agency/images/email-template-assets/ig-white.png"
                    alt="Instagram"
                    width="38"
                    height="38"
                    style="display: block;"
                  />
                </a>

                <a href="https://www.linkedin.com/company/creativepixels/">
                  <img
                    src="https://creativepixels.agency/images/email-template-assets/linkedin-white.png"
                    alt="LinkedIn"
                    width="38"
                    height="38"
                    style="display: block;"
                  />
                </a>
              </div>
            </div>
            <div class="grid-column">
              <h4>View Case Studies</h4>

              <a
                href="https://creativepixels.agency/case-studies"
                class="group"
              >
                <div class="button-container">
                  <span class="button-text">View All</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="footer">
        <h5>This email was sent to ${email} by CreativePixels Team.</h5>

        <div class="footer-links">
          <a href="https://creativepixels.agency/legal/privacy-policy"
            >Privacy Policy</a
          >
          <div></div>
          <a href="https://creativepixels.agency/legal/cookies-policy"
            >Cookies Policy</a
          >
        </div>
      </div>
    </div>
  </body>
</html>
`;
};
