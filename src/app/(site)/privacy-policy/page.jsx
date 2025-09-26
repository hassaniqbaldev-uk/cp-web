import CtaSection2 from "@/components/common/CtaSection2";
import SectionLabel2 from "@/components/common/SectionLabel2";
import SectionTitle from "@/components/common/SectionTitle";
import TextMarquee from "@/components/common/TextMarquee";
import {
  additionalInformationPolicyData,
  detailedInformationPolicyData,
  personalPolicyData,
  processingPolicyData,
  refrencesPolicyData,
} from "@/constants/privacyPolicyPage";

const PrivacyPolicyPage = () => {
  return (
    <>
      <section className="pt-[18rem] pb-[5rem] xl:pt-[20rem] xl:pb-[10rem]">
        <div className="mx-auto max-w-[120rem] px-[3rem] xl:px-[0rem]">
          <div className="flex flex-col items-center gap-[2rem] text-center xl:items-start xl:text-left">
            <div className="inline-flex rotate-[2deg]">
              <SectionLabel2 text="Legal | Creative Pixels" />
            </div>

            <SectionTitle label="Privacy Policy" />

            <p className="text-[1.8rem] leading-[2.4rem] font-medium md:text-[2.2rem] md:leading-[3.2rem]">
              This Website collects some Personal Data from its Users.
            </p>

            <p className="border-y border-[#070707]/20 py-[1.5rem] text-[1.8rem] leading-[2.4rem] font-medium md:text-[2.2rem] md:leading-[3.2rem]">
              This document can be printed for reference by using the print
              command in the settings of any browser.
            </p>
          </div>

          <div className="my-[4rem] flex flex-col items-center text-center md:my-[6rem] xl:items-start xl:text-left">
            <h5 className="text-[2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] md:text-[2.6rem] md:leading-[3.2rem]">
              Policy Summary
            </h5>

            <h3 className="mt-[1rem] mb-[3rem] max-w-[90rem] text-[2.6rem] leading-[3.8rem] font-semibold tracking-[-0.02em] md:mt-[2rem] md:mb-[4rem] md:text-[3.4rem] md:leading-[4.8rem]">
              Personal Data processed for the following purposes and using the
              following services:
            </h3>

            <div className="grid grid-cols-1 gap-[4rem] lg:grid-cols-2">
              {personalPolicyData.slice(0, 11).map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-[2.2rem] text-center xl:flex-row xl:items-start xl:text-left"
                >
                  <div className="inline-flex h-[5.6rem] min-w-[5.6rem] items-center justify-center rounded-[.8rem] border border-[#9c9c9c]">
                    <item.icon />
                  </div>
                  <div className="flex flex-col gap-[1rem]">
                    <h5 className="text-[2.2rem] leading-[3.2rem] font-medium">
                      {item.title}
                    </h5>

                    <div className="flex flex-col gap-[2rem]">
                      {item.features.map((f, j) => (
                        <div key={j} className="flex flex-col gap-[.5rem]">
                          <h6 className="text-[1.8rem] leading-[2.6rem] font-bold">
                            {f.name}
                          </h6>
                          <div className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-medium">
                            {f.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="my-[4rem] flex flex-col gap-[.5rem]">
              <h5 className="text-[2.2rem] leading-[3.2rem] font-medium">
                Information on opting out of interest-based advertising
              </h5>

              <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                In addition to any opt-out feature provided by any of the
                services listed in this document, Users may learn more on how to
                generally opt out of interest-based advertising within the
                dedicated section of the Cookie Policy.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-[4rem] lg:grid-cols-2">
              {personalPolicyData.slice(11, 13).map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-[2.2rem] text-center xl:flex-row xl:items-start xl:text-left"
                >
                  <div className="inline-flex h-[5.6rem] min-w-[5.6rem] items-center justify-center rounded-[.8rem] border border-[#9c9c9c]">
                    <item.icon />
                  </div>
                  <div className="flex flex-col gap-[1rem]">
                    <h5 className="text-[2.2rem] leading-[3.2rem] font-medium">
                      {item.title}
                    </h5>

                    <div className="flex flex-col gap-[2rem]">
                      {item.features.map((f, j) => (
                        <div key={j} className="flex flex-col gap-[.5rem]">
                          <h6 className="text-[1.8rem] leading-[2.6rem] font-bold">
                            {f.name}
                          </h6>
                          <div className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-medium">
                            {f.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center text-center xl:items-start xl:text-left">
            <h5 className="text-[2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] md:text-[2.6rem] md:leading-[3.2rem]">
              Full Policy
            </h5>

            <h3 className="my-[1rem] text-[2.6rem] leading-[3.8rem] font-semibold tracking-[-0.02em] md:my-[2rem] md:text-[3.4rem] md:leading-[4.8rem]">
              Owner and Data Controller
            </h3>

            <div className="text-[1.6rem] leading-[2.4rem] font-medium">
              Personal Data: Trackers; Usage Data
            </div>

            <div className="text-[1.6rem] leading-[2.4rem] font-medium">
              <strong className="text-[1.8rem] leading-[2.6rem] font-bold">
                Owner contact email:
              </strong>{" "}
              hello@cp.agency
            </div>
          </div>

          <div className="my-[4rem] flex flex-col items-center gap-[1rem] text-center md:my-[6rem] xl:items-start xl:text-left">
            <h5 className="text-[2.2rem] leading-[3.2rem] font-medium">
              Types of Data collected
            </h5>

            <p className="text-[1.6rem] leading-[2.4rem] font-medium">
              Among the types of Personal Data that this Website collects, by
              itself or through third parties, there are: Cookies; Usage Data;
              first name; last name; phone number; company name; profession;
              address; country; county; email address; ZIP/Postal code; city;
              website; various types of Data; Data communicated while using the
              service. <br /> <br />
              Complete details on each type of Personal Data collected are
              provided in the dedicated sections of this privacy policy or by
              specific explanation texts displayed prior to the Data collection.
              <br /> <br />
              Personal Data may be freely provided by the User, or, in case of
              Usage Data, collected automatically when using this Website.
              <br /> <br />
              Unless specified otherwise, all Data requested by this Website is
              mandatory and failure to provide this Data may make it impossible
              for this Website to provide its services. In cases where this
              Website specifically states that some Data is not mandatory, Users
              are free not to communicate this Data without consequences to the
              availability or the functioning of the Service. <br /> <br />
              Users who are uncertain about which Personal Data is mandatory are
              welcome to contact the Owner. <br /> <br />
              Any use of Cookies – or of other tracking tools — by this Website
              or by the owners of third-party services used by this Website
              serves the purpose of providing the Service required by the User,
              in addition to any other purposes described in the present
              document and in the Cookie Policy. <br /> <br />
              Users are responsible for any third-party Personal Data obtained,
              published or shared through this Website.
            </p>
          </div>

          <div className="flex flex-col items-center gap-[1rem] text-center xl:items-start xl:text-left">
            <h5 className="text-[2.2rem] leading-[3.2rem] font-medium">
              {processingPolicyData.title}
            </h5>

            <ul className="flex flex-col gap-[3rem]">
              {processingPolicyData.items.map((item, i) => (
                <li key={i} className="flex flex-col gap-[.5rem]">
                  <h6 className="text-[1.8rem] leading-[2.6rem] font-bold">
                    {item.subtitle}
                  </h6>
                  {item.description.map((para, idx) => (
                    <p
                      key={idx}
                      className="mb-[2rem] text-[1.6rem] leading-[2.4rem] font-medium last:mb-0"
                    >
                      {para}
                    </p>
                  ))}
                </li>
              ))}
            </ul>
          </div>

          <div className="my-[4rem] flex flex-col gap-[4rem] md:my-[6rem]">
            <div className="flex flex-col items-center gap-[1rem] text-center md:gap-[2rem] xl:items-start xl:text-left">
              <h3 className="text-[2.6rem] leading-[3.8rem] font-semibold tracking-[-0.02em] md:text-[3.4rem] md:leading-[4.8rem]">
                Detailed information on the processing of Personal Data
              </h3>

              <h6 className="text-[1.6rem] leading-[2.4rem] font-medium">
                Personal Data is collected for the following purposes and using
                the following services:
              </h6>
            </div>

            <div className="grid grid-cols-1 gap-[4rem]">
              {detailedInformationPolicyData.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-[2.2rem] text-center xl:flex-row xl:items-start xl:text-left"
                >
                  <div className="inline-flex h-[5.6rem] min-w-[5.6rem] items-center justify-center rounded-[.8rem] border border-[#9c9c9c]">
                    <item.icon />
                  </div>

                  <div className="flex flex-col gap-[1rem]">
                    <h5 className="text-[2.2rem] leading-[3.2rem] font-medium">
                      {item.title}
                    </h5>

                    {item.desc && item.desc.length > 0 && (
                      <div>
                        {item.desc.map((para, idx) => (
                          <p
                            key={idx}
                            className="mb-[0rem] text-[1.6rem] leading-[2.4rem] font-medium last:mb-0"
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    )}

                    <div className="mt-[1rem] flex flex-col gap-[2rem]">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="flex flex-col gap-[.5rem]">
                          <h6 className="text-[1.8rem] leading-[2.6rem] font-bold">
                            {feature.name}
                          </h6>

                          {feature.description.map((para, idx) => (
                            <p
                              key={idx}
                              className="mb-[2rem] text-[1.6rem] leading-[2.4rem] font-medium last:mb-0"
                            >
                              {para}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-[2rem] text-center xl:items-start xl:text-left">
            <h3 className="text-[2.6rem] leading-[3.8rem] font-semibold tracking-[-0.02em] md:text-[3.4rem] md:leading-[4.8rem]">
              Information on opting out of interest-based advertising
            </h3>

            <p className="text-[1.6rem] leading-[2.4rem] font-medium">
              In addition to any opt-out feature provided by any of the services
              listed in this document, Users may learn more on how to generally
              opt out of interest-based advertising within the dedicated section
              of the Cookie Policy.
            </p>
          </div>

          <div className="my-[4rem] flex flex-col items-center gap-[1rem] text-center md:my-[6rem] md:gap-[2rem] xl:items-start xl:text-left">
            <h3 className="text-[2.6rem] leading-[3.8rem] font-semibold tracking-[-0.02em] md:text-[3.4rem] md:leading-[4.8rem]">
              Cookie Policy
            </h3>

            <p className="text-[1.6rem] leading-[2.4rem] font-medium">
              This Website uses Trackers. To learn more, Users may consult
              the Cookie Policy.
            </p>
          </div>

          <div className="flex flex-col gap-[2rem]">
            <h3 className="text-center text-[2.6rem] leading-[3.8rem] font-semibold tracking-[-0.02em] md:text-[3.4rem] md:leading-[4.8rem] xl:text-left">
              Further Information for Users
            </h3>

            <div className="flex flex-col gap-[3rem]">
              <div className="flex flex-col gap-[1rem]">
                <h4 className="text-[2.2rem] leading-[3.2rem] font-medium">
                  Legal basis of processing
                </h4>

                <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                  The Owner may process Personal Data relating to Users if one
                  of the following applies:
                </p>

                <ul className="list-outside list-disc pl-6">
                  {[
                    "Users have given their consent for one or more specific purposes.",
                    "Provision of Data is necessary for the performance of an agreement with the User and/or for any pre-contractual obligations thereof;",
                    "Processing is necessary for compliance with a legal obligation to which the Owner is subject;",
                    "Processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Owner;",
                    "Processing is necessary for the purposes of the legitimate interests pursued by the Owner or by a third party.",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="text-[1.6rem] leading-[2.4rem] font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                  In any case, the Owner will gladly help to clarify the
                  specific legal basis that applies to the processing, and in
                  particular whether the provision of Personal Data is a
                  statutory or contractual requirement, or a requirement
                  necessary to enter into a contract.
                </p>
              </div>

              <div className="flex flex-col gap-[1rem]">
                <h4 className="text-[2.2rem] leading-[3.2rem] font-medium">
                  Further information about retention time
                </h4>

                <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                  Unless specified otherwise in this document, Personal Data
                  shall be processed and stored for as long as required by the
                  purpose they have been collected for and may be retained for
                  longer due to applicable legal obligation or based on the
                  Users’ consent. <br /> <br />
                  Therefore:
                </p>

                <ul className="list-outside list-disc pl-6">
                  {[
                    "Personal Data collected for purposes related to the performance of a contract between the Owner and the User shall be retained until such contract has been fully performed.",
                    "Personal Data collected for the purposes of the Owner’s legitimate interests shall be retained as long as needed to fulfill such purposes. Users may find specific information regarding the legitimate interests pursued by the Owner within the relevant sections of this document or by contacting the Owner.",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="text-[1.6rem] leading-[2.4rem] font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                  The Owner may be allowed to retain Personal Data for a longer
                  period whenever the User has given consent to such processing,
                  as long as such consent is not withdrawn. Furthermore, the
                  Owner may be obliged to retain Personal Data for a longer
                  period whenever required to fulfil a legal obligation or upon
                  order of an authority. <br /> <br /> Once the retention period
                  expires, Personal Data shall be deleted. Therefore, the right
                  of access, the right to erasure, the right to rectification
                  and the right to data portability cannot be enforced after
                  expiration of the retention period.
                </p>
              </div>

              <div className="flex flex-col gap-[1rem]">
                <h4 className="text-[2.2rem] leading-[3.2rem] font-medium">
                  The rights of Users based on the General Data Protection
                  Regulation (GDPR)
                </h4>

                <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                  Users may exercise certain rights regarding their Data
                  processed by the Owner. <br /> <br />
                  In particular, Users have the right to do the following, to
                  the extent permitted by law:
                </p>

                <ul className="list-outside list-disc pl-6">
                  {[
                    {
                      title: "Withdraw their consent at any time.",
                      description:
                        "Users have the right to withdraw consent where they have previously given their consent to the processing of their Personal Data.",
                    },
                    {
                      title: "Object to processing of their Data.",
                      description:
                        "Users have the right to object to the processing of their Data if the processing is carried out on a legal basis other than consent.",
                    },
                    {
                      title: "Access their Data.",
                      description:
                        "Users have the right to learn if Data is being processed by the Owner, obtain disclosure regarding certain aspects of the processing and obtain a copy of the Data undergoing processing.",
                    },
                    {
                      title: "Verify and seek rectification.",
                      description:
                        "Users have the right to verify the accuracy of their Data and ask for it to be updated or corrected.",
                    },
                    {
                      title: "Restrict the processing of their Data.",
                      description:
                        "Users have the right to restrict the processing of their Data. In this case, the Owner will not process their Data for any purpose other than storing it.",
                    },
                    {
                      title:
                        "Have their Personal Data deleted or otherwise removed.",
                      description:
                        "Users have the right to obtain the erasure of their Data from the Owner.",
                    },
                    {
                      title:
                        "Receive their Data and have it transferred to another controller.",
                      description:
                        "Users have the right to receive their Data in a structured, commonly used and machine readable format and, if technically feasible, to have it transmitted to another controller without any hindrance.",
                    },
                    {
                      title: "Lodge a complaint.",
                      description:
                        "Users have the right to bring a claim before their competent data protection authority.",
                    },
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="text-[1.6rem] leading-[2.4rem] font-medium"
                    >
                      {item.title && (
                        <strong className="font-bold">{item.title} </strong>
                      )}
                      {item.description}
                    </li>
                  ))}
                </ul>

                <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                  Users are also entitled to learn about the legal basis for
                  Data transfers abroad including to any international
                  organization governed by public international law or set up by
                  two or more countries, such as the UN, and about the security
                  measures taken by the Owner to safeguard their Data.
                </p>

                <p className="text-[1.6rem] leading-[2.4rem] font-bold">
                  Details about the right to object to processing Where Personal
                  Data is processed for a public interest, in the exercise of an
                  official authority vested in the Owner or for the purposes of
                  the legitimate interests pursued by the Owner, Users may
                  object to such processing by providing a ground related to
                  their particular situation to justify the objection. Users
                  must know that, however, should their Personal Data be
                  processed for direct marketing purposes, they can object to
                  that processing at any time, free of charge and without
                  providing any justification. Where the User objects to
                  processing for direct marketing purposes, the Personal Data
                  will no longer be processed for such purposes. To learn
                  whether the Owner is processing Personal Data for direct
                  marketing purposes, Users may refer to the relevant sections
                  of this document.
                </p>
              </div>

              <div className="flex flex-col gap-[1rem]">
                <h4 className="text-[2.2rem] leading-[3.2rem] font-medium">
                  Further information about retention time
                </h4>

                <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                  Unless specified otherwise in this document, Personal Data
                  shall be processed and stored for as long as required by the
                  purpose they have been collected for and may be retained for
                  longer due to applicable legal obligation or based on the
                  Users’ consent. <br /> <br />
                  Therefore:
                </p>

                <ul className="list-outside list-disc pl-6">
                  {[
                    "Personal Data collected for purposes related to the performance of a contract between the Owner and the User shall be retained until such contract has been fully performed.",
                    "Personal Data collected for the purposes of the Owner’s legitimate interests shall be retained as long as needed to fulfill such purposes. Users may find specific information regarding the legitimate interests pursued by the Owner within the relevant sections of this document or by contacting the Owner.",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="text-[1.6rem] leading-[2.4rem] font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                  The Owner may be allowed to retain Personal Data for a longer
                  period whenever the User has given consent to such processing,
                  as long as such consent is not withdrawn. Furthermore, the
                  Owner may be obliged to retain Personal Data for a longer
                  period whenever required to fulfil a legal obligation or upon
                  order of an authority. <br /> <br /> Once the retention period
                  expires, Personal Data shall be deleted. Therefore, the right
                  of access, the right to erasure, the right to rectification
                  and the right to data portability cannot be enforced after
                  expiration of the retention period.
                </p>
              </div>

              <div className="flex flex-col gap-[1rem]">
                <h4 className="text-[2.2rem] leading-[3.2rem] font-medium">
                  How to exercise these rights
                </h4>

                <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                  Any requests to exercise User rights can be directed to the
                  Owner through the contact details provided in this document.
                  Such requests are free of charge and will be answered by the
                  Owner as early as possible and always within one month,
                  providing Users with the information required by law. Any
                  rectification or erasure of Personal Data or restriction of
                  processing will be communicated by the Owner to each
                  recipient, if any, to whom the Personal Data has been
                  disclosed unless this proves impossible or involves
                  disproportionate effort. At the Users’ request, the Owner will
                  inform them about those recipients.
                </p>
              </div>

              <div className="flex flex-col gap-[1rem]">
                <h4 className="text-[2.2rem] leading-[3.2rem] font-medium">
                  Transfer of Personal Data outside of the European Union
                </h4>

                <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                  <strong className="font-bold">
                    Data transfer abroad based on standard contractual clauses
                  </strong>{" "}
                  <br /> <br />
                  If this is the legal basis, the transfer of Personal Data from
                  the EU to third countries is carried out by the Owner
                  according to “standard contractual clauses” provided by the
                  European Commission. <br /> This means that Data recipients
                  have committed to process Personal Data in compliance with the
                  data protection standards set forth by EU data protection
                  legislation. For further information, Users are requested to
                  contact the Owner through the contact details provided in the
                  present document.
                </p>
              </div>
            </div>
          </div>

          <div className="my-[4rem] flex flex-col items-center gap-[1rem] text-center md:my-[6rem] md:gap-[2rem] xl:items-start xl:text-left">
            <h3 className="text-[2.6rem] leading-[3.8rem] font-semibold tracking-[-0.02em] md:text-[3.4rem] md:leading-[4.8rem]">
              Additional information about Data collection and processing
            </h3>

            <div className="flex flex-col gap-[3rem]">
              {additionalInformationPolicyData.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-[1rem]">
                  <h5 className="text-[2.2rem] leading-[3.2rem] font-medium">
                    {item.title}
                  </h5>

                  {item.desc.map((para, idx) => (
                    <p
                      key={idx}
                      className="mb-[2rem] text-[1.6rem] leading-[2.4rem] font-medium last:mb-0"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-[2rem] text-center xl:items-start xl:text-left">
            <h3 className="text-[2.6rem] leading-[3.8rem] font-semibold tracking-[-0.02em] md:text-[3.4rem] md:leading-[4.8rem]">
              Definitions and legal references
            </h3>

            <div className="flex flex-col gap-[3rem]">
              {refrencesPolicyData.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-[1rem]">
                  <h5 className="text-[2.2rem] leading-[3.2rem] font-medium">
                    {item.title}
                  </h5>

                  <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
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
    </>
  );
};

export default PrivacyPolicyPage;
