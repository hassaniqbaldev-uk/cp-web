import TextMarquee from "@/components/common/TextMarquee";
import CtaSection2 from "@/components/common/CtaSection2";
import SectionLabel2 from "@/components/common/SectionLabel2";
import SectionTitle from "@/components/common/SectionTitle";

const CookiesPolicyPage = () => {
  return (
    <section className="pt-[18rem] pb-[5rem] xl:pt-[20rem] xl:pb-[10rem]">
      <div className="mx-auto max-w-[120rem] px-[3rem] xl:px-[0rem]">
        {/* Cookie Policy Header */}
        <div className="flex flex-col items-center gap-[2rem] text-center xl:items-start xl:text-left">
          <div className="inline-flex rotate-[2deg]">
            <SectionLabel2 text="Legal | Creative Pixels" />
          </div>

          <SectionTitle label="Cookie Policy" />

          <p className="text-[1.8rem] leading-[2.4rem] font-medium md:text-[2.2rem] md:leading-[3.2rem]">
            This document informs Users about the technologies that help this
            Website to achieve the purposes described below.
          </p>

          <p className="border-y border-[#070707]/20 py-[1.5rem] text-[1.8rem] leading-[2.4rem] font-medium md:text-[2.2rem] md:leading-[3.2rem]">
            This document can be printed for reference by using the print
            command in the settings of any browser.
          </p>
        </div>

        {/* Introduction to Trackers */}
        <div className="my-[4rem] flex flex-col items-center text-center md:my-[6rem] xl:items-start xl:text-left">
          <h5 className="text-[2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] md:text-[2.6rem] md:leading-[3.2rem]">
            About Trackers
          </h5>

          <div className="mt-[2rem] flex flex-col gap-[2rem] text-left">
            <p className="text-[1.6rem] leading-[2.4rem] font-medium">
              Cookies consist of portions of code installed in the browser that
              assist the Owner in providing the Service according to the
              purposes described.
            </p>

            <p className="text-[1.6rem] leading-[2.4rem] font-medium">
              For simplicity, all such technologies are defined as "Trackers"
              within this document – unless there is a reason to differentiate.
              For example, while Cookies can be used on both web and mobile
              browsers, it would be inaccurate to talk about Cookies in the
              context of mobile apps as they are a browser-based Tracker. For
              this reason, within this document, the term Cookies is only used
              where it is specifically meant to indicate that particular type of
              Tracker.
            </p>

            <p className="text-[1.6rem] leading-[2.4rem] font-medium">
              Some of the purposes for which Trackers are used may also require
              the User's consent. Whenever consent is given, it can be freely
              withdrawn at any time following the instructions provided in this
              document.
            </p>
          </div>
        </div>

        {/* Types of Trackers */}
        <div className="my-[4rem] flex flex-col items-center text-center md:my-[6rem] xl:items-start xl:text-left">
          <h5 className="text-[2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] md:text-[2.6rem] md:leading-[3.2rem]">
            Types of Trackers
          </h5>

          <div className="mt-[2rem] flex flex-col gap-[2rem] text-left">
            <p className="text-[1.6rem] leading-[2.4rem] font-medium">
              This Website uses Trackers managed directly by the Owner
              (so-called "first-party" Trackers) and Trackers that enable
              services provided by a third-party (so-called "third-party"
              Trackers). Unless otherwise specified within this document,
              third-party providers may access the Trackers managed by them.
            </p>

            <p className="text-[1.6rem] leading-[2.4rem] font-medium">
              The validity and expiration periods of Cookies and other similar
              Trackers may vary depending on the lifetime set by the Owner or
              the relevant provider. Some of them expire upon termination of the
              User's browsing session.
            </p>

            <p className="text-[1.6rem] leading-[2.4rem] font-medium">
              In addition to what's specified in the descriptions within each of
              the categories below, Users may find more precise and updated
              information regarding lifetime specification as well as any other
              relevant information — such as the presence of other Trackers — in
              the linked privacy policies of the respective third-party
              providers or by contacting the Owner.
            </p>
          </div>
        </div>

        {/* How this Website uses Trackers */}
        <div className="my-[4rem] flex flex-col items-center text-center md:my-[6rem] xl:items-start xl:text-left">
          <h5 className="text-[2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] md:text-[2.6rem] md:leading-[3.2rem]">
            How this Website uses Trackers
          </h5>

          <h3 className="mt-[1rem] mb-[3rem] max-w-[90rem] text-[2.6rem] leading-[3.8rem] font-semibold tracking-[-0.02em] md:mt-[2rem] md:mb-[4rem] md:text-[3.4rem] md:leading-[4.8rem]">
            Trackers are used for the following purposes:
          </h3>

          <div className="grid grid-cols-1 gap-[4rem] lg:grid-cols-2">
            {/* Necessary Trackers */}
            <div className="flex flex-col items-center gap-[2.2rem] text-center xl:flex-row xl:items-start xl:text-left">
              <div className="inline-flex h-[5.6rem] min-w-[5.6rem] items-center justify-center rounded-[.8rem] border border-[#9c9c9c]">
                {/* You would add an icon component here */}
                <span>🔒</span>
              </div>
              <div className="flex flex-col gap-[1rem]">
                <h5 className="text-[2.2rem] leading-[3.2rem] font-medium">
                  Necessary
                </h5>
                <div className="flex flex-col gap-[2rem]">
                  <div className="flex flex-col gap-[.5rem]">
                    <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-medium">
                      This Website uses so-called "technical" Cookies and other
                      similar Trackers to carry out activities that are strictly
                      necessary for the operation or delivery of the Service.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Functionality Trackers */}
            <div className="flex flex-col items-center gap-[2.2rem] text-center xl:flex-row xl:items-start xl:text-left">
              <div className="inline-flex h-[5.6rem] min-w-[5.6rem] items-center justify-center rounded-[.8rem] border border-[#9c9c9c]">
                {/* You would add an icon component here */}
                <span>⚙️</span>
              </div>
              <div className="flex flex-col gap-[1rem]">
                <h5 className="text-[2.2rem] leading-[3.2rem] font-medium">
                  Functionality
                </h5>
                <div className="flex flex-col gap-[2rem]">
                  <div className="flex flex-col gap-[.5rem]">
                    <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-medium">
                      This Website uses Trackers to enable basic interactions
                      and functionalities, allowing Users to access selected
                      features of the Service and facilitating the User's
                      communication with the Owner.
                    </p>
                  </div>

                  {/* Crisp Widget */}
                  <div className="flex flex-col gap-[.5rem]">
                    <h6 className="text-[1.8rem] leading-[2.6rem] font-bold">
                      Crisp Widget (Crisp IM SARL)
                    </h6>
                    <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-medium">
                      The Crisp Widget is a service for interacting with the
                      Crisp live chat platform provided by Crisp IM SARL.
                    </p>
                    <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-medium">
                      <strong>Personal Data processed:</strong> Cookies, Data
                      communicated while using the service, Usage Data and
                      various types of Data as specified in the privacy policy
                      of the service.
                    </p>
                    <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-medium">
                      <strong>Place of processing:</strong> France – Privacy
                      Policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Trackers */}
            <div className="flex flex-col items-center gap-[2.2rem] text-center xl:flex-row xl:items-start xl:text-left">
              <div className="inline-flex h-[5.6rem] min-w-[5.6rem] items-center justify-center rounded-[.8rem] border border-[#9c9c9c]">
                {/* You would add an icon component here */}
                <span>🌟</span>
              </div>
              <div className="flex flex-col gap-[1rem]">
                <h5 className="text-[2.2rem] leading-[3.2rem] font-medium">
                  Experience
                </h5>
                <div className="flex flex-col gap-[2rem]">
                  <div className="flex flex-col gap-[.5rem]">
                    <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-medium">
                      This Website uses Trackers to improve the quality of the
                      user experience and enable interactions with external
                      content, networks and platforms.
                    </p>
                  </div>

                  {/* Hotjar Recruit User Testers */}
                  <div className="flex flex-col gap-[.5rem]">
                    <h6 className="text-[1.8rem] leading-[2.6rem] font-bold">
                      Hotjar Recruit User Testers (Hotjar Ltd.)
                    </h6>
                    <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-medium">
                      The Hotjar Recruit User Testers widget is a service for
                      interacting with the Hotjar data collection platform
                      provided by Hotjar Ltd.
                    </p>
                    <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-medium">
                      Hotjar honors generic "Do Not Track" headers. This means
                      the browser can tell its script not to collect any of the
                      User's data. This is a setting that is available in all
                      major browsers.
                    </p>
                    <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-medium">
                      <strong>Personal Data processed:</strong> Cookies, Usage
                      Data and various types of Data.
                    </p>
                    <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-medium">
                      <strong>Place of processing:</strong> Malta – Privacy
                      Policy – Opt Out.
                    </p>
                  </div>

                  {/* Hotjar Poll & Survey widgets */}
                  <div className="flex flex-col gap-[.5rem]">
                    <h6 className="text-[1.8rem] leading-[2.6rem] font-bold">
                      Hotjar Poll & Survey widgets (Hotjar Ltd.)
                    </h6>
                    <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-medium">
                      The Hotjar Poll & Survey widgets are services that enable
                      interaction with the Hotjar platform provided by Hotjar
                      Ltd.
                    </p>
                    <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-medium">
                      <strong>Personal Data processed:</strong> Cookies, Usage
                      Data and various types of Data.
                    </p>
                    <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-medium">
                      <strong>Place of processing:</strong> Malta – Privacy
                      Policy – Opt Out.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Measurement Trackers */}
            <div className="flex flex-col items-center gap-[2.2rem] text-center xl:flex-row xl:items-start xl:text-left">
              <div className="inline-flex h-[5.6rem] min-w-[5.6rem] items-center justify-center rounded-[.8rem] border border-[#9c9c9c]">
                {/* You would add an icon component here */}
                <span>📊</span>
              </div>
              <div className="flex flex-col gap-[1rem]">
                <h5 className="text-[2.2rem] leading-[3.2rem] font-medium">
                  Measurement
                </h5>
                <div className="flex flex-col gap-[2rem]">
                  <div className="flex flex-col gap-[.5rem]">
                    <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-medium">
                      This Website uses Trackers to measure traffic and analyze
                      User behavior to improve the Service.
                    </p>
                  </div>

                  {/* Google Analytics */}
                  <div className="flex flex-col gap-[.5rem]">
                    <h6 className="text-[1.8rem] leading-[2.6rem] font-bold">
                      Google Analytics (Universal Analytics) (Google Inc.)
                    </h6>
                    <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-medium">
                      Google Analytics (Universal Analytics) is a web analysis
                      service provided by Google Inc. ("Google"). Google
                      utilizes the Data collected to track and examine the use
                      of this Website, to prepare reports on its activities and
                      share them with other Google services.
                    </p>
                    <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-medium">
                      <strong>Personal Data processed:</strong> Cookies and
                      Usage Data.
                    </p>
                    <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-medium">
                      <strong>Place of processing:</strong> United States –
                      Privacy Policy – Opt Out.
                    </p>
                  </div>

                  {/* Hotjar Heat Maps & Recordings */}
                  <div className="flex flex-col gap-[.5rem]">
                    <h6 className="text-[1.8rem] leading-[2.6rem] font-bold">
                      Hotjar Heat Maps & Recordings (Hotjar Ltd.)
                    </h6>
                    <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-medium">
                      Hotjar is a session recording and heat mapping service
                      provided by Hotjar Ltd.
                    </p>
                    <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-medium">
                      <strong>Personal Data processed:</strong> Cookies, Usage
                      Data and various types of Data as specified in the privacy
                      policy of the service.
                    </p>
                    <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-medium">
                      <strong>Place of processing:</strong> Malta – Privacy
                      Policy – Opt Out.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Marketing Trackers */}
            <div className="flex flex-col items-center gap-[2.2rem] text-center xl:flex-row xl:items-start xl:text-left">
              <div className="inline-flex h-[5.6rem] min-w-[5.6rem] items-center justify-center rounded-[.8rem] border border-[#9c9c9c]">
                {/* You would add an icon component here */}
                <span>📢</span>
              </div>
              <div className="flex flex-col gap-[1rem]">
                <h5 className="text-[2.2rem] leading-[3.2rem] font-medium">
                  Marketing
                </h5>
                <div className="flex flex-col gap-[2rem]">
                  <div className="flex flex-col gap-[.5rem]">
                    <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-medium">
                      This Website uses Trackers to deliver personalized ads or
                      marketing content, and to measure their performance.
                    </p>
                  </div>

                  {/* X Ads conversion tracking */}
                  <div className="flex flex-col gap-[.5rem]">
                    <h6 className="text-[1.8rem] leading-[2.6rem] font-bold">
                      X Ads conversion tracking (X Corp.)
                    </h6>
                    <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-medium">
                      X Ads conversion tracking is an analytics service provided
                      by X Corp. that connects data from the X advertising
                      network with actions performed on this Website.
                    </p>
                    <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-medium">
                      <strong>Personal Data processed:</strong> Trackers and
                      Usage Data.
                    </p>
                    <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-medium">
                      <strong>Place of processing:</strong> United States –
                      Privacy Policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Managing Preferences and Consent */}
        <div className="my-[4rem] flex flex-col items-center text-center md:my-[6rem] xl:items-start xl:text-left">
          <h5 className="text-[2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] md:text-[2.6rem] md:leading-[3.2rem]">
            Managing Preferences and Providing or Withdrawing Consent
          </h5>

          <div className="mt-[2rem] flex flex-col gap-[2rem] text-left">
            <p className="text-[1.6rem] leading-[2.4rem] font-medium">
              Whenever the use of Trackers is based on consent, users can
              provide or withdraw such consent by setting or updating their
              preferences via the relevant privacy choices panel available on
              this Website.
            </p>

            <p className="text-[1.6rem] leading-[2.4rem] font-medium">
              With regard to any third-party Trackers, Users can manage their
              preferences via the related opt-out link (where provided), by
              using the means indicated in the third party's privacy policy, or
              by contacting the third party.
            </p>
          </div>
        </div>

        {/* Browser Settings for Cookie Management */}
        <div className="my-[4rem] flex flex-col items-center text-center md:my-[6rem] xl:items-start xl:text-left">
          <h5 className="text-[2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] md:text-[2.6rem] md:leading-[3.2rem]">
            How to control or delete Cookies and similar technologies via your
            device settings
          </h5>

          <div className="mt-[2rem] flex flex-col gap-[2rem] text-left">
            <p className="text-[1.6rem] leading-[2.4rem] font-medium">
              Users may use their own browser settings to:
            </p>

            <ul className="list-outside list-disc pl-6">
              <li className="text-[1.6rem] leading-[2.4rem] font-medium">
                See what Cookies or other similar technologies have been set on
                the device;
              </li>
              <li className="text-[1.6rem] leading-[2.4rem] font-medium">
                Block Cookies or similar technologies;
              </li>
              <li className="text-[1.6rem] leading-[2.4rem] font-medium">
                Clear Cookies or similar technologies from the browser.
              </li>
            </ul>

            <p className="text-[1.6rem] leading-[2.4rem] font-medium">
              The browser settings, however, do not allow granular control of
              consent by category.
            </p>

            <p className="text-[1.6rem] leading-[2.4rem] font-medium">
              Users can, for example, find information about how to manage
              Cookies in the most commonly used browsers at the following
              addresses:
            </p>

            <ul className="list-outside list-disc pl-6">
              <li className="text-[1.6rem] leading-[2.4rem] font-medium">
                Google Chrome
              </li>
              <li className="text-[1.6rem] leading-[2.4rem] font-medium">
                Mozilla Firefox
              </li>
              <li className="text-[1.6rem] leading-[2.4rem] font-medium">
                Apple Safari
              </li>
              <li className="text-[1.6rem] leading-[2.4rem] font-medium">
                Microsoft Internet Explorer
              </li>
              <li className="text-[1.6rem] leading-[2.4rem] font-medium">
                Microsoft Edge
              </li>
              <li className="text-[1.6rem] leading-[2.4rem] font-medium">
                Brave
              </li>
              <li className="text-[1.6rem] leading-[2.4rem] font-medium">
                Opera
              </li>
            </ul>

            <p className="text-[1.6rem] leading-[2.4rem] font-medium">
              Users may also manage certain categories of Trackers used on
              mobile apps by opting out through relevant device settings such as
              the device advertising settings for mobile devices, or tracking
              settings in general (Users may open the device settings and look
              for the relevant setting).
            </p>
          </div>
        </div>

        {/* Opting out of interest-based advertising */}
        <div className="my-[4rem] flex flex-col items-center text-center md:my-[6rem] xl:items-start xl:text-left">
          <h5 className="text-[2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] md:text-[2.6rem] md:leading-[3.2rem]">
            How to opt out of interest-based advertising
          </h5>

          <div className="mt-[2rem] flex flex-col gap-[2rem] text-left">
            <p className="text-[1.6rem] leading-[2.4rem] font-medium">
              Notwithstanding the above, Users may follow the instructions
              provided by YourOnlineChoices (EU and UK), the Network Advertising
              Initiative (US) and the Digital Advertising Alliance (US), DAAC
              (Canada), DDAI (Japan) or other similar services. Such initiatives
              allow Users to select their tracking preferences for most of the
              advertising tools. The Owner thus recommends that Users make use
              of these resources in addition to the information provided in this
              document.
            </p>

            <p className="text-[1.6rem] leading-[2.4rem] font-medium">
              The Digital Advertising Alliance offers an application called
              AppChoices that helps Users to control interest-based advertising
              on mobile apps.
            </p>
          </div>
        </div>

        {/* Consequences of denying Trackers */}
        <div className="my-[4rem] flex flex-col items-center text-center md:my-[6rem] xl:items-start xl:text-left">
          <h5 className="text-[2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] md:text-[2.6rem] md:leading-[3.2rem]">
            Consequences of denying the use of Trackers
          </h5>

          <div className="mt-[2rem] flex flex-col gap-[2rem] text-left">
            <p className="text-[1.6rem] leading-[2.4rem] font-medium">
              Users are free to decide whether or not to allow the use of
              Trackers. However, please note that Trackers help this Website to
              provide a better experience and advanced functionalities to Users
              (in line with the purposes outlined in this document). Therefore,
              if the User chooses to block the use of Trackers, the Owner may be
              unable to provide related features.
            </p>
          </div>
        </div>

        {/* Owner and Data Controller */}
        <div className="my-[4rem] flex flex-col items-center text-center md:my-[6rem] xl:items-start xl:text-left">
          <h5 className="text-[2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] md:text-[2.6rem] md:leading-[3.2rem]">
            Owner and Data Controller
          </h5>

          <div className="mt-[2rem] flex flex-col gap-[2rem] text-left">
            <p className="text-[1.6rem] leading-[2.4rem] font-medium">
              CreativePixels, Innospace, The Shed, Chester Street, Manchester,
              M1 5GD
            </p>

            <p className="text-[1.6rem] leading-[2.4rem] font-medium">
              <strong>Owner contact email:</strong> hello@cp.agency
            </p>

            <p className="text-[1.6rem] leading-[2.4rem] font-medium">
              Since the use of third-party Trackers through this Website cannot
              be fully controlled by the Owner, any specific references to
              third-party Trackers are to be considered indicative. In order to
              obtain complete information, Users are kindly requested to consult
              the privacy policies of the respective third-party services listed
              in this document.
            </p>

            <p className="text-[1.6rem] leading-[2.4rem] font-medium">
              Given the objective complexity surrounding tracking technologies,
              Users are encouraged to contact the Owner should they wish to
              receive any further information on the use of such technologies by
              this Website.
            </p>
          </div>
        </div>

        {/* Definitions and legal references */}
        <div className="my-[4rem] flex flex-col items-center text-center md:my-[6rem] xl:items-start xl:text-left">
          <h5 className="text-[2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] md:text-[2.6rem] md:leading-[3.2rem]">
            Definitions and legal references
          </h5>

          <div className="mt-[2rem] flex flex-col gap-[2rem] text-left">
            <div className="flex flex-col gap-[.5rem]">
              <h6 className="text-[1.8rem] leading-[2.6rem] font-bold">
                Personal Data (or Data)
              </h6>
              <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                Any information that directly, indirectly, or in connection with
                other information — including a personal identification number —
                allows for the identification or identifiability of a natural
                person.
              </p>
            </div>

            <div className="flex flex-col gap-[.5rem]">
              <h6 className="text-[1.8rem] leading-[2.6rem] font-bold">
                Usage Data
              </h6>
              <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                Information collected automatically through this Website (or
                third-party services employed in this Website), which can
                include: the IP addresses or domain names of the computers
                utilized by the Users who use this Website, the URI addresses
                (Uniform Resource Identifier), the time of the request, the
                method utilized to submit the request to the server, the size of
                the file received in response, the numerical code indicating the
                status of the server's answer (successful outcome, error, etc.),
                the country of origin, the features of the browser and the
                operating system utilized by the User, the various time details
                per visit (e.g., the time spent on each page within the
                Application) and the details about the path followed within the
                Application with special reference to the sequence of pages
                visited, and other parameters about the device operating system
                and/or the User's IT environment.
              </p>
            </div>

            <div className="flex flex-col gap-[.5rem]">
              <h6 className="text-[1.8rem] leading-[2.6rem] font-bold">User</h6>
              <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                The individual using this Website who, unless otherwise
                specified, coincides with the Data Subject.
              </p>
            </div>

            <div className="flex flex-col gap-[.5rem]">
              <h6 className="text-[1.8rem] leading-[2.6rem] font-bold">
                Data Subject
              </h6>
              <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                The natural person to whom the Personal Data refers.
              </p>
            </div>

            <div className="flex flex-col gap-[.5rem]">
              <h6 className="text-[1.8rem] leading-[2.6rem] font-bold">
                Data Processor (or Processor)
              </h6>
              <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                The natural or legal person, public authority, agency or other
                body which processes Personal Data on behalf of the Controller,
                as described in this privacy policy.
              </p>
            </div>

            <div className="flex flex-col gap-[.5rem]">
              <h6 className="text-[1.8rem] leading-[2.6rem] font-bold">
                Data Controller (or Owner)
              </h6>
              <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                The natural or legal person, public authority, agency or other
                body which, alone or jointly with others, determines the
                purposes and means of the processing of Personal Data, including
                the security measures concerning the operation and use of this
                Website. The Data Controller, unless otherwise specified, is the
                Owner of this Website.
              </p>
            </div>

            <div className="flex flex-col gap-[.5rem]">
              <h6 className="text-[1.8rem] leading-[2.6rem] font-bold">
                This Website (or this Application)
              </h6>
              <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                The means by which the Personal Data of the User is collected
                and processed.
              </p>
            </div>

            <div className="flex flex-col gap-[.5rem]">
              <h6 className="text-[1.8rem] leading-[2.6rem] font-bold">
                Service
              </h6>
              <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                The service provided by this Website as described in the
                relative terms (if available) and on this site/application.
              </p>
            </div>

            <div className="flex flex-col gap-[.5rem]">
              <h6 className="text-[1.8rem] leading-[2.6rem] font-bold">
                European Union (or EU)
              </h6>
              <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                Unless otherwise specified, all references made within this
                document to the European Union include all current member states
                to the European Union and the European Economic Area.
              </p>
            </div>

            <div className="flex flex-col gap-[.5rem]">
              <h6 className="text-[1.8rem] leading-[2.6rem] font-bold">
                Cookie
              </h6>
              <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                Cookies are Trackers consisting of small sets of data stored in
                the User's browser.
              </p>
            </div>

            <div className="flex flex-col gap-[.5rem]">
              <h6 className="text-[1.8rem] leading-[2.6rem] font-bold">
                Tracker
              </h6>
              <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                Tracker indicates any technology - e.g Cookies, unique
                identifiers, web beacons, embedded scripts, e-tags and
                fingerprinting - that enables the tracking of Users, for example
                by accessing or storing information on the User's device.
              </p>
            </div>
          </div>
        </div>

        {/* Legal information */}
        <div className="my-[4rem] flex flex-col items-center text-center md:my-[6rem] xl:items-start xl:text-left">
          <h5 className="text-[2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] md:text-[2.6rem] md:leading-[3.2rem]">
            Legal information
          </h5>

          <div className="mt-[2rem] flex flex-col gap-[2rem] text-left">
            <p className="text-[1.6rem] leading-[2.4rem] font-medium">
              This privacy policy relates solely to this Website, if not stated
              otherwise within this document.
            </p>

            <p className="text-[1.6rem] leading-[2.4rem] font-medium">
              Latest update: March 07, 2024
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[3rem] mb-[8rem] xl:my-[10rem]">
        <TextMarquee />
      </div>

      <div className="relative z-[3] mx-auto max-w-[120rem] px-[3rem] xl:px-[0rem]">
        <CtaSection2 />
      </div>
    </section>
  );
};

export default CookiesPolicyPage;
