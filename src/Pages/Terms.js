import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function Terms() {
  const [isOpenSidebar, setOpenSidebar] = useState(false);

  const openSidebar = () => {
    setOpenSidebar(true);
  };

  const closeSidebar = () => {
    setOpenSidebar(false);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <header className="flex justify-between items-center max-w-screen-xl mx-auto w-full">
        <Navbar clickOpen={openSidebar} styleClass="text-white" />
        <Sidebar isOpen={isOpenSidebar} clickClose={closeSidebar} />
      </header>
      <div className="h-auto relative overflow-hidden flex lg:items-center items-start lg:justify-center justify-start">
        <div
          id="bolb"
          className="absolute w-[300px] h-[300px] S-xl:-top-[5px] lg:top-1 -top-25 right-[100px] rounded-full"
        ></div>
        <div className="mx-auto mb-20 lg:max-w-max-custom max-w-max-width w-smallWidth">
          <div className="flex flex-col items-start justify-center mt-5 space-y-10">
            <h1 className="text-main-clr-secondary-bright text-5xl font-bold text-center w-full mt-10">
              Terms of Use
            </h1>
            <div className="flex flex-col text-clr-off-white space-y-8">
              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-secondary-bright font-semibold text-xl">
                  Acceptance of the Terms of Use
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  These terms of use are entered into by and between you and
                  Phydias SA (the “Company”, “we”, or “us”). The following terms
                  and conditions, together with any documents they expressly
                  incorporate by reference (collectively, these “Terms of Use”),
                  govern your access to and use of any website published by the
                  Company, including, but not limited to, any content,
                  functionality, and services offered on or through
                  www.trevanta.ae (the “Website”).
                </p>

                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  Please read the Terms of Use carefully before you start to use
                  the Website. By using the Website or by clicking to accept or
                  agree to the Terms of Use when this option is made available
                  to you, you accept and agree to be bound and abide by these
                  Terms of Use in addition to our Privacy Policy, incorporated
                  herein by reference.
                </p>

                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  If you do not agree to these Terms of Use, you must not access
                  or use the Website
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-secondary-bright font-semibold text-xl">
                  Who May Use the Website
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  The Website are offered and available to users who are 13
                  years of age or older. The Website are not intended for
                  children under 13 years of age. By using the Website, you
                  represent and warrant that you (i) are 13 years of age or
                  older, (ii) are not barred to use the Website under any
                  applicable law, and (iii) are using the Website only for your
                  own personal use. If you do not meet these requirements, you
                  must not access or use the Website.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-secondary-bright font-semibold text-xl">
                  Changes to the Terms of Use
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  We may revise and update these Terms of Use from time to time
                  in our sole discretion. All changes are effective immediately
                  when we post them. Your continued use of the Website following
                  the posting of revised Terms of Use means that you accept and
                  agree to the changes. You are expected to check this page
                  frequently so you are aware of any changes, as they are
                  binding on you
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-secondary-bright font-semibold text-xl">
                  Accessing the Websites and Account Security
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  We reserve the right to withdraw or amend the Website, and any
                  service or material we provide on the Website, in our sole
                  discretion without notice. We do not guarantee that our
                  Website or any content on them will always be available or be
                  interrupted. We will not be liable if for any reason all or
                  any part of the Website are unavailable at any time or for any
                  period. From time to time, we may restrict access to some
                  parts of the Website, or entire Website, to users.
                </p>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  You are responsible for:
                </p>
                <ul className="ml-14 list-outside list-disc text-main-clr-off-white">
                  <li>
                    Making all arrangements necessary for you to have access to
                    the Website; and
                  </li>
                  <li>
                    Ensuring that all persons who access the Website through
                    your internet connection are aware of these Terms of Use and
                    comply with them.
                  </li>
                </ul>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  To access the Website or some of the resources it offers, you
                  may be asked to provide certain registration details or other
                  information. It is a condition of your use of the Website that
                  all the information you provide on the Website is correct,
                  current, and complete. You agree that all information you
                  provide to use the Website, including, but not limited to,
                  using any interactive features on the Website, is governed by
                  our Privacy Policy, and you consent to all actions we may take
                  with respect to your information that are consistent with our
                  Privacy Policy. You should use particular caution when
                  inputting personal information onto the Website on a public or
                  shared computer so that others are not able to view or record
                  your personal information.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-secondary-bright font-semibold text-xl">
                  Intellectual Property Rights
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  The Website and their entire contents, features, and
                  functionality (including but not limited to all information,
                  software, text, displays, images, video and audio, and the
                  design, selection, and arrangement thereof), are owned by the
                  Company, its licensors or other providers of such material and
                  are protected by copyright, trademark, patent, trade secret,
                  and other intellectual property or proprietary rights laws.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-secondary-bright font-semibold text-xl">
                  Trademarks
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  The Company name, the terms Trevanta Switzerland, Trevanta
                  Asia, the Company logo and all related names, logos, product
                  and service names, designs and slogans are trademarks of the
                  Company or its affiliates or licensors. You must not use such
                  marks without the prior written permission of the Company. All
                  other names, logos, product and service names, designs and
                  slogans on this Website are the trademarks of their respective
                  owners.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-secondary-bright font-semibold text-xl">
                  Prohibited Uses
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  You may use the Website only for lawful purposes and in
                  accordance with these Terms of Use.
                </p>

                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  You agree not to use the Websites:
                </p>

                <ul className="ml-14 list-outside list-disc text-main-clr-off-white">
                  <li>
                    In any way that violates any applicable federal, state,
                    local, or international law or regulation (including,
                    without limitation, any laws regarding the export of data or
                    software to and from the US or other countries);
                  </li>
                  <li>
                    For the purpose of exploiting, harming, or attempting to
                    exploit or harm minors in any way by exposing them to
                    inappropriate content, asking for personally identifiable
                    information or otherwise;
                  </li>
                  <li>
                    To send, knowingly receive, upload, download, use, or re-use
                    any material which does not comply with these Terms of Use;
                  </li>
                  <li>
                    To transmit, or procure the sending of, any advertising or
                    promotional material without our prior written consent,
                    including any “junk mail”, “chain letter”, “spam”, or any
                    other similar solicitation;
                  </li>
                  <li>
                    To impersonate or attempt to impersonate the Company, a
                    Company employee, another user, or any other person or
                    entity (including, without limitation, by using e-mail
                    addresses or screen names associated with any of the
                    foregoing); and
                  </li>
                  <li>
                    To engage in any other conduct that restricts or inhibits
                    anyone's use or enjoyment of the Website, or which, as
                    determined by us, may harm the Company or users of the
                    Website or expose them to liability.
                  </li>
                </ul>

                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  Additionally, you agree not to
                </p>

                <ul className="ml-14 list-outside list-disc text-main-clr-off-white">
                  <li>
                    Use the Website in any manner that could disable,
                    overburden, damage, or impair the Website or interfere with
                    any other party’s use of the Website, including their
                    ability to engage in real time activities through the
                    Website;
                  </li>
                  <li>
                    Use any robot, spider, or other automatic device, process or
                    means to access the Website for any purpose, including
                    monitoring or copying any of the material on the Website;
                  </li>
                  <li>
                    Use any manual process to monitor or copy any of the
                    material on the Website or for any other unauthorized
                    purpose without our prior written consent;
                  </li>
                  <li>
                    Use any device, software or routine that interferes with the
                    proper working of the Website;
                  </li>
                  <li>
                    Introduce any viruses, trojan horses, worms, logic bombs, or
                    other material which is malicious or technologically
                    harmful;
                  </li>
                  <li>
                    Attempt to gain unauthorized access to, interfere with,
                    damage, or disrupt any parts of the Website, the server(s)
                    on which the Website is stored, or any server, computer or
                    database connected to the Website;
                  </li>
                  <li>
                    Attack the Website via a denial-of-service attack or a
                    distributed denial-of-service attack; and
                  </li>
                  <li>
                    Otherwise attempt to interfere with the proper working of
                    the Website.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-off-white font-semibold text-xl">
                  Reliance on Information Posted
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  The information presented on or through the Website is made
                  available solely for general information purposes. We do not
                  warrant the accuracy, completeness or usefulness of this
                  information. Any reliance you place on such information is
                  strictly at your own risk. We disclaim all liability and
                  responsibility arising from any reliance placed on such
                  materials by you or any other visitor to the Website, or by
                  anyone who may be informed of any of its contents. The Website
                  may include content provided by third parties, including
                  materials provided by other users, bloggers and third-party
                  licensors, syndicators, aggregators, and/or reporting
                  services. All statements and/or opinions expressed in these
                  materials, and all articles and responses to questions and
                  other content, other than the content provided by the Company,
                  are solely the opinions and the responsibility of the person
                  or entity providing those materials. These materials do not
                  necessarily reflect the opinion of the Company. We are not
                  responsible, or liable to you or any third party, for the
                  content or accuracy of any materials provided by any third
                  parties.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-secondary-bright font-semibold text-xl">
                  Changes to the Websites
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  We may update the content on the Website from time to time,
                  but its content is not necessarily complete or up-to-date. Any
                  of the material on the Website may be out of date at any given
                  time, and we are under no obligation to update such material.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-secondary-bright font-semibold text-xl">
                  Information About You and Your Visits to the Websites
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  All information we collect on the Website is subject to our
                  Privacy Policy. By using the Website, you consent to all
                  actions that may be taken by us with respect to your
                  information in compliance with the Privacy Policy.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-secondary-bright font-semibold text-xl">
                  Online Purchases and Other Terms and Conditions
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  Additional terms and conditions may also apply to specific
                  portions, services or features of the Website, including the
                  registration and sponsorship for conference events. All such
                  additional terms and conditions are hereby incorporated by
                  this reference into these Terms of Use. In the event of terms
                  that are directly conflicting between these Terms of Use and
                  terms of conditions for the registration or sponsorship of a
                  conference event, the terms and conditions for the event shall
                  control.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-secondary-bright font-semibold text-xl">
                  Linking to the Websites and Social Media Features
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  You may link to our homepage, provided you do so in a way that
                  is fair and legal and does not damage our reputation or take
                  advantage of it, but you must not establish a link in such a
                  way as to suggest any form of association, approval or
                  endorsement on our part without our express written consent
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-secondary-bright font-semibold text-xl">
                  Links from the Websites
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  If the Website contains links to other sites and resources
                  provided by third parties, these links are provided for your
                  convenience only. This includes links contained in
                  advertisements, including banner advertisements and sponsored
                  links. We have no control over the contents of those sites or
                  resources, and accept no responsibility for them or for any
                  loss or damage that may arise from your use of them. If you
                  decide to access any of the third party website linked to the
                  Website, you do so entirely at your own risk and subject to
                  the terms and conditions of use for such website. We reserve
                  the right to withdraw linking permission without notice.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-secondary-bright font-semibold text-xl">
                  Geographic Restrictions
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  The owner of the Website is based in Switzerland. We make no
                  claims that the Website or any of its content is accessible or
                  appropriate outside of Switzerland. Access to the Website may
                  not be legal by certain persons or in certain countries. If
                  you access the Website from outside Switzerland, you do so on
                  your own initiative and are responsible for compliance with
                  local laws.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-secondary-bright font-semibold text-xl">
                  Disclaimer of Warranties
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  You understand that we cannot and do not guarantee or warrant
                  that files available for downloading from the internet or the
                  Website will be free of viruses or other destructive code. You
                  are responsible for implementing sufficient procedures and
                  checkpoints to satisfy your particular requirements for
                  anti-virus protection and accuracy of data input and output,
                  and for maintaining a means external to our site for any
                  reconstruction of any lost data. WE WILL NOT BE LIABLE FOR ANY
                  LOSS OR DAMAGE CAUSED BY A DISTRIBUTED DENIAL-OF-SERVICE
                  ATTACK, VIRUSES, OR OTHER TECHNOLOGICALLY HARMFUL MATERIAL
                  THAT MAY INFECT YOUR COMPUTER EQUIPMENT, COMPUTER PROGRAMS,
                  DATA, OR OTHER PROPRIETARY MATERIAL DUE TO YOUR USE OF THE
                  WEBSITE OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE
                  OR TO YOUR DOWNLOADING OF ANY MATERIAL POSTED ON IT, OR ON ANY
                  WEBSITE LINKED TO IT. YOUR USE OF THE WEBSITE, THEIR CONTENT
                  AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE IS AT
                  YOUR OWN RISK. THE WEBSITE, THEIR CONTENT AND ANY SERVICES OR
                  ITEMS OBTAINED THROUGH THE WEBSITE ARE PROVIDED ON AN "AS IS"
                  AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND,
                  EITHER EXPRESS OR IMPLIED. NEITHER THE COMPANY NOR ANY PERSON
                  ASSOCIATED WITH THE COMPANY MAKES ANY WARRANTY OR
                  REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY,
                  RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE
                  WEBSITE. WITHOUT LIMITING THE FOREGOING, NEITHER THE COMPANY
                  NOR ANYONE ASSOCIATED WITH THE COMPANY REPRESENTS OR WARRANTS
                  THAT THE WEBSITE, THEIR CONTENT OR ANY SERVICES OR ITEMS
                  OBTAINED THROUGH THE WEBSITE WILL BE ACCURATE, RELIABLE,
                  ERROR-FREE OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED,
                  THAT THE WEBSITE OR THE SERVER(S) THAT MAKES THEM AVAILABLE
                  ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE
                  WEBSITE OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE
                  WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS. THE COMPANY
                  HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS
                  OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED
                  TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND
                  FITNESS FOR PARTICULAR PURPOSE. SOME JURISDICTIONS DO NOT
                  ALLOW EXCLUSION OF WARRANTIES OR LIMITATIONS ON THE DURATION
                  OF IMPLIED WARRANTIES, SO THE ABOVE DISCLAIMER MAY NOT APPLY
                  TO YOU IN THEIR ENTIRETIES, BUT WILL APPLY TO THE MAXIMUM
                  EXTENT PERMITTED BY APPLICABLE LAW.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-secondary-bright font-semibold text-xl">
                  Limitation on Liability
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  IN NO EVENT WILL THE COMPANY, ITS AFFILIATES OR THEIR
                  LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR
                  DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL
                  THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR
                  INABILITY TO USE, THE WEBSITE, ANY WEBSITE LINKED TO THEM, ANY
                  CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITE OR ANY SERVICES
                  OR ITEMS OBTAINED THROUGH THE WEBSITE OR SUCH OTHER WEBSITE,
                  INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL,
                  CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED
                  TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS,
                  LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR
                  ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF
                  DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE),
                  BREACH OF CONTRACT OR OTHERWISE, EVEN IF FORESEEABLE. THE
                  FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE
                  EXCLUDED OR LIMITED UNDER APPLICABLE LAW WHICH MAY INCLUDE
                  FRAUD.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-secondary-bright font-semibold text-xl">
                  Indemnification
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  You agree to defend, indemnify, and hold harmless the Company,
                  its affiliates, licensors, and service providers, and its and
                  their respective officers, directors, employees, contractors,
                  agents, licensors, suppliers, successors, and assigns from and
                  against any claims, liabilities, damages, judgments, awards,
                  losses, costs, expenses, or fees (including reasonable
                  attorneys’ fees) arising out of or relating to your violation
                  of these Terms of Use or your use of the Website, including,
                  but not limited to, any use of the Website’ content, services
                  and products other than as expressly authorized in these Terms
                  of Use or your use of any information obtained from the
                  Website.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-secondary-bright font-semibold text-xl">
                  Governing Law and Jurisdiction
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  All matters relating to the Website and these Terms of Use and
                  any dispute or claim arising therefrom or related thereto (in
                  each case, including non-contractual disputes or claims),
                  shall be governed by and construed in accordance with the
                  internal laws of Switzerland without giving effect to any
                  choice or conflict of law provision or rule (whether of
                  Switzerland or any other jurisdiction). Any legal suit, action
                  or proceeding arising out of, or related to, these Terms of
                  Use or the Website shall be instituted exclusively in Geneva,
                  Switzerland although we retain the right to bring any suit,
                  action or proceeding against you for breach of these Terms of
                  Use in your country of residence or any other relevant
                  country. You waive any and all objections to the exercise of
                  jurisdiction over you by such courts and to venue in such
                  courts.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-secondary-bright font-semibold text-xl">
                  Waiver and Severability
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  No waiver by the Company of any term or condition set forth in
                  these Terms of Use shall be deemed a further or continuing
                  waiver of such term or condition or a waiver of any other term
                  or condition, and any failure of the Company to assert a right
                  or provision under these Terms of Use shall not constitute a
                  waiver of such right or provision. If any provision of these
                  Terms of Use is held by a court or other tribunal of competent
                  jurisdiction to be invalid, illegal, or unenforceable for any
                  reason, such provision shall be eliminated or limited to the
                  minimum extent such that the remaining provisions of the Terms
                  of Use will continue in full force and effect.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-secondary-bright font-semibold text-xl">
                  Entire Agreement
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  The Terms of Use, our Privacy Policy and terms of conditions
                  for the registration of events constitute the sole and entire
                  agreement between you and the Company with respect to the
                  Website and supersede all prior and contemporaneous
                  understandings, agreements, representations and warranties,
                  both written and oral, with respect to the Website.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-secondary-bright font-semibold text-xl">
                  Your Comments and Concerns
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  The Website are operated by the Company. All other feedback,
                  comments, requests for technical support and other
                  communications relating to the Website should be directed to:
                  support@trevanta.ae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Terms;
