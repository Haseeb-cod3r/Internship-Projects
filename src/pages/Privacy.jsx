import React from "react";
import { Faq } from "../components/Faq";

export default function Privacy() {
  const content1 = (
    <div className="flex flex-col gap-5">
      <p>
        The personal information that you are asked to provide, and the reasons
        why you are asked to provide it, will be made clear to you at the point
        we ask you to provide your personal information.
      </p>
      <p>
        If you contact us directly, we may receive additional information about
        you such as your name, email address, phone number, the contents of the
        message and/or attachments you may send us, and any other information
        you may choose to provide.
      </p>
      <p>
        When you register for an Account, we may ask for your contact
        information, including items such as name, company name, address, email
        address, and telephone number.
      </p>
    </div>
  );
  const content2 = (
    <div className="flex flex-col gap-5">
      <p>We use the information we collect in various ways, including to:</p>
      <ul>
        <li>1. Provide, operate, and maintain our website</li>
        <li>2. Improve, personalize, and expand our website</li>
        <li>3. Understand and analyze how you use our website</li>
        <li>4. Develop new products, services, features, and functionality</li>
        <li>
          5. Communicate with you, either directly or through one of our
          partners, including for customer service, to provide you with updates
          and other information relating to the website, and for marketing and
          promotional purposes
        </li>
        <li>6. Send you emails</li>
        <li>7. Find and prevent fraud</li>
      </ul>
    </div>
  );
  const content3 = (
    <div>
      Pakistan's Virtual Internship Platform follows a standard procedure of
      using log files. These files log visitors when they visit websites. All
      hosting companies do this and a part of hosting services' analytics. The
      information collected by log files include internet protocol (IP)
      addresses, browser type, Internet Service Provider (ISP), date and time
      stamp, referring/exit pages, and possibly the number of clicks. These are
      not linked to any information that is personally identifiable. The purpose
      of the information is for analyzing trends, administering the site,
      tracking users' movement on the website, and gathering demographic
      information.
    </div>
  );
  const content4 = (
    <div>
      Like any other website, Pakistan's Virtual Internship Platform uses
      "cookies". These cookies are used to store information including visitors'
      preferences, and the pages on the website that the visitor accessed or
      visited. The information is used to optimize the users' experience by
      customizing our web page content based on visitors' browser type and/or
      other information.
    </div>
  );
  const content5 = (
    <div>
      Google is one of a third-party vendor on our site. It also uses cookies,
      known as DART cookies, to serve ads to our site visitors based upon their
      visit to www.website.com and other sites on the internet. However,
      visitors may choose to decline the use of DART cookies by visiting the
      Google ad and content network Privacy Policy at the following URL <br />
      <a
        className="text-[#47ff8d]"
        href="https://policies.google.com/technologies/ads"
      >
        https://policies.google.com/technologies/ads
      </a>
    </div>
  );
  const content6 = (
    <div>
      Some of advertisers on our site may use cookies and web beacons. Our
      advertising partners are listed below. Each of our advertising partners
      has their own Privacy Policy for their policies on user data. For easier
      access, we hyperlinked to their Privacy Policies below. <br />
      <a
        className="text-[#3cfd86]"
        href="https://policies.google.com/technologies/ads"
      >
        https://policies.google.com/technologies/ads
      </a>
    </div>
  );

  return (
    <>
      <div className="bg-[var(--bg)] px-10 flex flex-col items-center">
        <div className="max-w-[1300px] text-[var(--text)] flex flex-col gap-5 mt-20">
          <h1 className="text-[var(--text2)] text-[clamp(2rem,3vw,5rem)] font-bold text-center">
            Privacy Policy for Internee.pk
          </h1>
          <p>
            At <strong className="text-[var(--brand)]">internee.pk</strong> ,
            one of our main priorities is the privacy of our visitors. This
            Privacy Policy document contains types of information that is
            collected and recorded by Pakistan's Virtual Internship Platform and
            how we use it.
          </p>
          <p>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us at{" "}
            <strong className="text-[var(--brand)]">issues@internee.pk</strong>
          </p>
          <p>
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in Pakistan's Virtual Internship
            Platform. This policy is not applicable to any information collected
            offline or via channels other than this website.
          </p>
        </div>
        <div className="max-w-[1300px] mt-20 flex flex-col gap-5 mb-20">
          <Faq title={"Information we collect"} content={content1} />
          <Faq title={"How we use your information"} content={content2} />
          <Faq title={"Log Files"} content={content3} />
          <Faq title={"Cookies and Web Beacons"} content={content4} />
          <Faq title={"Google DoubleClick DART Cookie"} content={content5} />
          <Faq title={"Our Advertising Partners"} content={content6} />

          <p className="mx-auto mt-5 text-[var(--text)]">
            Didn't find the answer you are looking for?
            <span className="cursor-pointer text-blue-500">
              Contact our support
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
