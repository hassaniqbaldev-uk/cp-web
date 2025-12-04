import AdvertiseIcon from "@/assets/icons/advertise-icon.svg";
import AnalyticsIcon from "@/assets/icons/analytics-icon.svg";
import ContactUserIcon from "@/assets/icons/contact-user-icon.svg";
import TransferIcon from "@/assets/icons/transfer-icon.svg";
import HeatMapIcon from "@/assets/icons/heat-map-icon.svg";
import PaymentIcon from "@/assets/icons/payment-icon.svg";
import InteractionIcon from "@/assets/icons/interaction-icon.svg";
import HostingIcon from "@/assets/icons/hosting-icon.svg";
import SurveyIcon from "@/assets/icons/survey-icon.svg";
import ChatIcon from "@/assets/icons/chat-icon.svg";
import LocationArrowIcon from "@/assets/icons/location-arrow-icon.svg";
import MailIcon from "@/assets/icons/mail-icon.svg";

export const personalPolicyData = [
  {
    icon: AdvertiseIcon,
    title: "Advertising",
    features: [
      {
        name: "X Ads conversion tracking",
        description: "Personal Data: Trackers; Usage Data",
      },
    ],
  },
  {
    icon: AnalyticsIcon,
    title: "Analytics",
    features: [
      {
        name: "Google Analytics (Universal Analytics)",
        description: "Personal Data: Cookies; Usage Data",
      },
    ],
  },
  {
    icon: ContactUserIcon,
    title: "Contacting the User",
    features: [
      {
        name: "Contact form",
        description:
          "Personal Data: address; city; company name; country; county; email address; first name; last name; phone number; profession; website; ZIP/Postal code",
      },
      {
        name: "Phone contact",
        description: "Personal Data: phone number",
      },
      {
        name: "Mailing list or newsletter",
        description:
          "Personal Data: company name; country; email address; first name; last name; phone number; website",
      },
    ],
  },
  {
    icon: AnalyticsIcon,
    title: "Analytics",
    features: [
      {
        name: "Comment system managed directly",
        description: "Personal Data: email address; first name; last name",
      },
    ],
  },
  {
    icon: HeatMapIcon,
    title: "Heat mapping and session recording",
    features: [
      {
        name: "Hotjar Heat Maps & Recordings",
        description:
          "Personal Data: Cookies; Usage Data; various types of Data as specified in the privacy policy of the service",
      },
    ],
  },
  {
    icon: TransferIcon,
    title: "Data transfer outside the EU",
    features: [
      {
        name: "Data transfer abroad based on standard contractual clauses",
        description: "Personal Data: various types of Data",
      },
    ],
  },
  {
    icon: InteractionIcon,
    title: "Interaction with data collection platforms and other third parties",
    features: [
      {
        name: "Hotjar Recruit User Testers",
        description:
          "Personal Data: Cookies; Usage Data; various types of Data",
      },
    ],
  },
  {
    icon: PaymentIcon,
    title: "Handling payments",
    features: [
      {
        name: "Stripe",
        description:
          "Personal Data: various types of Data as specified in the privacy policy of the service",
      },
    ],
  },
  {
    icon: SurveyIcon,
    title: "Interaction with online survey platforms",
    features: [
      {
        name: "Hotjar Poll & Survey widgets",
        description:
          "Personal Data: Cookies; Usage Data; various types of Data",
      },
    ],
  },
  {
    icon: HostingIcon,
    title: "Hosting and backend infrastructure",
    features: [
      {
        name: "Iubenda Consent Solution",
        description: "Personal Data: Data communicated while using the service",
      },
    ],
  },
  {
    icon: ChatIcon,
    title: "Interaction with live chat platforms",
    features: [
      {
        name: "Crisp Widget",
        description:
          "Personal Data: Cookies; Data communicated while using the service; Usage Data; various types of Data as specified in the privacy policy of the service",
      },
    ],
  },
  {
    icon: LocationArrowIcon,
    title: "Contact information",
    features: [
      {
        name: "Owner and Data Controller",
        description:
          "CreativePixels, Innospace, The Shed, Chester Street, Manchester, M1 5GD",
      },
    ],
  },
  {
    icon: MailIcon,
    title: "Owner contact",
    features: [
      {
        name: "Email",
        description: "hello@cp.agency",
      },
    ],
  },
];

export const processingPolicyData = {
  title: "Mode and place of processing the Data",
  items: [
    {
      subtitle: "Methods of processing",
      description: [
        "The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data.",
        "The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Owner, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of this Website (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Owner at any time.",
      ],
    },
    {
      subtitle: "Place",
      description: [
        "The Data is processed at the Owner's operating offices and in any other places where the parties involved in the processing are located.",
        "Depending on the User's location, data transfers may involve transferring the User's Data to a country other than their own. To find out more about the place of processing of such transferred Data, Users can check the section containing details about the processing of Personal Data.",
      ],
    },
    {
      subtitle: "Retention time",
      description: [
        "Unless specified otherwise in this document, Personal Data shall be processed and stored for as long as required by the purpose they have been collected for and may be retained for longer due to applicable legal obligation or based on the Users’ consent.",
      ],
    },
    {
      subtitle: "The purposes of processing",
      description: [
        "The Data concerning the User is collected to allow the Owner to provide its Service, comply with its legal obligations, respond to enforcement requests, protect its rights and interests (or those of its Users or third parties), detect any malicious or fraudulent activity, as well as the following: Analytics, Contacting the User, Heat mapping and session recording, Handling payments, Data transfer outside the EU, Content commenting, Advertising, Hosting and backend infrastructure, Interaction with data collection platforms and other third parties, Interaction with live chat platforms and Interaction with online survey platforms.",
        "For specific information about the Personal Data used for each purpose, the User may refer to the section “Detailed information on the processing of Personal Data”.",
      ],
    },
  ],
};

export const detailedInformationPolicyData = [
  {
    icon: AdvertiseIcon,
    title: "Advertising",
    desc: [
      "This type of service allows User Data to be utilized for advertising communication purposes. These communications are displayed in the form of banners and other advertisements on this Website, possibly based on User interests.",
      "This does not mean that all Personal Data are used for this purpose. Information and conditions of use are shown below.",
      "Some of the services listed below may use Trackers for identifying Users, behavioral retargeting i.e. displaying ads tailored to the User’s interests and behavior, or to measure ads performance. For more information, please check the privacy policies of the relevant services.",
      "Services of this kind usually offer the possibility to opt out of such tracking. In addition to any opt-out feature offered by any of the services below, Users may learn more on how to generally opt out of interest-based advertising within the dedicated section 'How to opt-out of interest-based advertising' in this document,",
    ],
    features: [
      {
        name: "X Ads conversion tracking",
        description: [
          "X Ads conversion tracking is an analytics service provided by X Corp. that connects data from the X advertising network with actions performed on this Website.",
          "Personal Data processed: Trackers; Usage Data.",
          "Place of processing: United States - Privacy Policy.",
        ],
      },
    ],
  },
  {
    icon: AnalyticsIcon,
    title: "Analytics",
    desc: [
      "The services contained in this section enable the Owner to monitor and analyze web traffic and can be used to keep track of User behavior.",
    ],
    features: [
      {
        name: "Google Analytics (Universal Analytics) (Google Inc.)",
        description: [
          "Google Analytics (Universal Analytics) is a web analysis service provided by Google Inc. (“Google”). Google utilizes the Data collected to track and examine the use of this Website, to prepare reports on its activities and share them with other Google services.",
          "Google may use the Data collected to contextualize and personalize the ads of its own advertising network.",
          "In order to understand Google's use of Data, consult Google's partner policy.",
          "Personal Data processed: Cookies; Usage Data.",
          "Place of processing: United States - Privacy Policy - Opt Out.",
        ],
      },
    ],
  },
  {
    icon: ContactUserIcon,
    title: "Contacting the User",
    features: [
      {
        name: "Contact form (this Website)",
        description: [
          "By filling in the contact form with their Data, the User authorizes this Website to use these details to reply to requests for information, quotes or any other kind of request as indicated by the form’s header.",
          "Personal Data processed: address; city; company name; country; county; email address; first name; last name; phone number; profession; website; ZIP/Postal code.",
        ],
      },
      {
        name: "Phone contact (this Website)",
        description: [
          "Users that provided their phone number might be contacted for commercial or promotional purposes related to this Website, as well as for fulfilling support requests.",
          "Personal Data processed: phone number.",
        ],
      },
      {
        name: "Mailing list or newsletter (this Website)",
        description: [
          "By registering on the mailing list or for the newsletter, the User’s email address will be added to the contact list of those who may receive email messages containing information of commercial or promotional nature concerning this Website. Your email address might also be added to this list as a result of signing up to this Website or after making a purchase.",
          "Personal Data processed: company name; country; email address; first name; last name; phone number; website.",
        ],
      },
    ],
  },
  {
    icon: AdvertiseIcon,
    title: "Content commenting",
    desc: [
      "Content commenting services allow Users to make and publish their comments on the contents of this Website.",
      "Depending on the settings chosen by the Owner, Users may also leave anonymous comments. If there is an email address among the Personal Data provided by the User, it may be used to send notifications of comments on the same content. Users are responsible for the content of their own comments.",
      "If a content commenting service provided by third parties is installed, it may still collect web traffic data for the pages where the comment service is installed, even when Users do not use the content commenting service.",
    ],
    features: [
      {
        name: "Comment system managed directly (this Website)",
        description: [
          "This Website has its own internal content comment system.",
          "Personal Data processed: email address; first name; last name.",
        ],
      },
    ],
  },
  {
    icon: PaymentIcon,
    title: "Handling payments",
    desc: [
      "Payment processing services enable this Website to process payments by credit card, bank transfer or other means. To ensure greater security, this Website shares only the information necessary to execute the transaction with the financial intermediaries handling the transaction.",
      "Some of these services may also enable the sending of timed messages to the User, such as emails containing invoices or notifications concerning the payment.",
    ],
    features: [
      {
        name: "Stripe (Stripe Inc)",
        description: [
          "Stripe is a payment service provided by Stripe Inc.",
          "Personal Data processed: various types of Data as specified in the privacy policy of the service.",
          "Place of processing: United States - Privacy Policy.",
        ],
      },
    ],
  },
  {
    icon: HeatMapIcon,
    title: "Heat mapping and session recording",
    desc: [
      "Heat mapping services are used to display the areas of a page where Users most frequently move the mouse or click. This shows where the points of interest are. These services make it possible to monitor and analyze web traffic and keep track of User behavior.",
      "Some of these services may record sessions and make them available for later visual playback.",
    ],
    features: [
      {
        name: "Hotjar Heat Maps & Recordings (Hotjar Ltd.)",
        description: [
          "Hotjar is a session recording and heat mapping service provided by Hotjar Ltd.",
          "Hotjar honors generic „Do Not Track” headers. This means the browser can tell its script not to collect any of the User's data. This is a setting that is available in all major browsers. Find Hotjar’s opt-out information here.",
          "Personal Data processed: Cookies; Usage Data; various types of Data as specified in the privacy policy of the service.",
          "Place of processing: Malta – Privacy Policy – Opt Out.",
        ],
      },
    ],
  },
  {
    icon: HostingIcon,
    title: "Hosting and backend infrastructure",
    desc: [
      "This type of service has the purpose of hosting Data and files that enable this Website to run and be distributed as well as to provide a ready-made infrastructure to run specific features or parts of this Website. Some of these services work through geographically distributed servers, making it difficult to determine the actual location where the Personal Data are stored.",
    ],
    features: [
      {
        name: "Iubenda Consent Solution (Iubenda srl)",
        description: [
          "Iubenda Consent Solution is a service that facilitates the collection and management of proofs of consent provided by iubenda srl.",
          "Personal Data processed: Data communicated while using the service.",
          "Place of processing: Italy - Privacy Policy.",
        ],
      },
    ],
  },
  {
    icon: InteractionIcon,
    title: "Interaction with data collection platforms and other third parties",
    desc: [
      "This type of service allows Users to interact with data collection platforms or other services directly from the pages of this Website for the purpose of saving and reusing data.",
      "If one of these services is installed, it may collect browsing and Usage Data in the pages where it is installed, even if the Users do not actively use the service.",
    ],
    features: [
      {
        name: "Hotjar Recruit User Testers (Hotjar Ltd.)",
        description: [
          "The Hotjar Recruit User Testers widget is a service for interacting with the Hotjar data collection platform provided by Hotjar Ltd.",
          "Hotjar honors generic „Do Not Track” headers. This means the browser can tell its script not to collect any of the User's data. This is a setting that is available in all major browsers. Find Hotjar’s opt-out information here.",
          "Personal Data processed: Cookies; Usage Data; various types of Data.",
          "Place of processing: Malta – Privacy Policy – Opt Out.",
        ],
      },
    ],
  },
  {
    icon: SurveyIcon,
    title: "Interaction with online survey platforms",
    desc: [
      "This type of service allows Users to interact with third-party online survey platforms directly from the pages of this Website.",
      "If one of these services is installed, it may collect browsing and Usage Data in the pages where it is installed, even if the Users do not actively use the service.",
    ],
    features: [
      {
        name: "Hotjar Poll & Survey widgets (Hotjar Ltd.)",
        description: [
          "The Hotjar Poll & Survey widgets are services that enable interaction with the Hotjar platform provided by Hotjar Ltd.",
          "Hotjar honors generic „Do Not Track” headers. This means the browser can tell its script not to collect any of the User's data. This is a setting that is available in all major browsers. Find Hotjar’s opt-out information here.",
          "Personal Data processed: Cookies; Usage Data; various types of Data.",
          "Place of processing: Malta – Privacy Policy – Opt Out.",
        ],
      },
    ],
  },
];

export const additionalInformationPolicyData = [
  {
    title: "Legal action",
    desc: [
      "The User's Personal Data may be used for legal purposes by the Owner in Court or in the stages leading to possible legal action arising from improper use of this Website or the related Services.",
      "The User declares to be aware that the Owner may be required to reveal personal data upon request of public authorities.",
    ],
  },
  {
    title: "Additional information about User's Personal Data",
    desc: [
      "In addition to the information contained in this privacy policy, this Website may provide the User with additional and contextual information concerning particular Services or the collection and processing of Personal Data upon request.",
    ],
  },
  {
    title: "System logs and maintenance",
    desc: [
      "For operation and maintenance purposes, this Website and any third-party services may collect files that record interaction with this Website (System logs) or use other Personal Data (such as the IP Address) for this purpose.",
    ],
  },
  {
    title: "Information not contained in this policy",
    desc: [
      "More details concerning the collection or processing of Personal Data may be requested from the Owner at any time. Please see the contact information at the beginning of this document.",
    ],
  },
  {
    title: "Changes to this privacy policy",
    desc: [
      "The Owner reserves the right to make changes to this privacy policy at any time by notifying its Users on this page and possibly within this Website and/or - as far as technically and legally feasible - sending a notice to Users via any contact information available to the Owner. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom.",
      "Should the changes affect processing activities performed on the basis of the User’s consent, the Owner shall collect new consent from the User, where required.",
    ],
  },
];

export const refrencesPolicyData = [
  {
    title: "Personal Data (or Data)",
    desc: "Any information that directly, indirectly, or in connection with other information — including a personal identification number — allows for the identification or identifiability of a natural person.",
  },
  {
    title: "Usage Data",
    desc: "Information collected automatically through this Website (or third-party services employed in this Website), which can include: the IP addresses or domain names of the computers utilized by the Users who use this Website, the URI addresses (Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server's answer (successful outcome, error, etc.), the country of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time spent on each page within the Application) and the details about the path followed within the Application with special reference to the sequence of pages visited, and other parameters about the device operating system and/or the User's IT environment.",
  },
  {
    title: "User",
    desc: "The individual using this Website who, unless otherwise specified, coincides with the Data Subject.",
  },
  {
    title: "Data Subject",
    desc: "The natural person to whom the Personal Data refers.",
  },
  {
    title: "Data Processor (or Processor)",
    desc: "The natural or legal person, public authority, agency or other body which processes Personal Data on behalf of the Controller, as described in this privacy policy.",
  },
  {
    title: "Data Controller (or Owner)",
    desc: "The natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of Personal Data, including the security measures concerning the operation and use of this Website. The Data Controller, unless otherwise specified, is the Owner of this Website.",
  },
  {
    title: "This Website (or this Application)",
    desc: "The means by which the Personal Data of the User is collected and processed.",
  },
  {
    title: "Service",
    desc: "The service provided by this Website as described in the relative terms (if available) and on this site/application.",
  },
  {
    title: "European Union (or EU)",
    desc: "Unless otherwise specified, all references made within this document to the European Union include all current member states to the European Union and the European Economic Area.",
  },
  {
    title: "Cookie",
    desc: "Cookies are Trackers consisting of small sets of data stored in the User's browser.",
  },
  {
    title: "Tracker",
    desc: "Tracker indicates any technology - e.g Cookies, unique identifiers, web beacons, embedded scripts, e-tags and fingerprinting - that enables the tracking of Users, for example by accessing or storing information on the User’s device.",
  },
  {
    title: "Legal information",
    desc: "This privacy policy relates solely to this Website, if not stated otherwise within this document.",
  },
];
