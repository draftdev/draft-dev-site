import FAQ from '@/components/global/faq'
import { MedHeader } from '@/components/global/headers/med-header'
import { LogosDark } from '@/components/media/logos-dark'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    "Draft.dev's privacy policy explaining how we collect, use, and protect your personal information when you use our technical content marketing services.",
  keywords:
    'draft.dev privacy policy, privacy protection, data security, personal information policy',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Privacy Policy - Draft.dev',
    description: 'How we collect, use, and protect your personal information.',
    url: 'https://draft.dev/privacy-policy',
    images: [
      {
        url: 'https://draft.dev/draft/og/privacy_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Draft.dev Privacy Policy',
      },
    ],
  },
  alternates: {
    canonical: 'https://draft.dev/privacy-policy',
  },
}

export default function PrivacyPolicy() {
  return (
    <>
      <MedHeader
        title="Draft.dev Privacy Policy"
        descriptionOne="Updated 12/22/20"
        descriptionTwo="We want to protect your privacy. In order to operate, our web sites and business operations may gather information about you with your consent. These terms explain how this may happen, what we do with any potentially personal information, and how you can get in contact should you have any concerns."
      />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="subheader-dark mt-16">Information Collected</h2>
        <p className="paragraph-dark my-5 max-w-5xl">
          Portable CTO, LLC - which owns and operates this site - collects your
          information when you register for our email lists or any services
          offered by our brands: Draft.dev, karllhughes.com, Side Project
          Checklist, CFP Land, and our third-party sponsors. Our content or
          services include newsletters, premium content, webcasts, video, white
          papers, research, and events.
        </p>
        <h2 className="subheader-dark mt-16">
          Personally Identifiable Information Collected
        </h2>
        <p className="paragraph-dark my-5 max-w-5xl">
          The personal information we ask for is limited to what can be found on
          a typical business card:
        </p>
        <ul
          className="paragraph-dark my-5 max-w-5xl list-disc pl-5"
          role="list"
        >
          <li className="py-2">your name</li>
          <li className="py-2">your job title</li>
          <li className="py-2">your employer/company name</li>
          <li className="py-2">your work email</li>
          <li className="py-2">your work phone</li>
        </ul>

        <h2 className="subheader-dark mt-16">Cookies & Web Beacons</h2>
        <p className="paragraph-dark my-5 max-w-5xl">
          Portable CTO, LLC, its advertisers or analytics partners may send a
          cookie to your computer or use web beacons to gather statistical
          information. A cookie does not personally identify you. It is simply a
          way to know that a particular web browser was used to visit our sites.
          A web beacon does not personally identify you. It is simply a way to
          automatically send information about pages and content used to an
          analysis tool.
        </p>
        <p className="paragraph-dark my-5 max-w-5xl">
          Cookies and web beacons allows us to understand things such as whether
          a particular web browser is spending much time on our sites, visiting
          several times per month and other types of analysis. If you never
          provide us with personally identifiable information, then your visits
          – despite us using cookies or web beacons – are anonymous. We don’t
          know the actual person linked with the cookie. It’s like having a
          library card but never having to provide your name, address or phone
          number to check out books. The books are checked out by someone using
          a particular library card number, but who owns that number isn’t
          known. If you do provide personally identifiable information, then
          potentially we could link that with your cookie, then gather the
          visits with web beacons and understand how you personally have acted
          when visiting our web site.
        </p>
        <p className="paragraph-dark my-5 max-w-5xl">
          Advertisers may also use cookies and web beacons to ascertain how many
          times you’ve seen an advertisement. No personally identifiable
          information you give us is provided to them for cookie or web beacon
          use, so they cannot personally identify you with that information on
          our web sites. Browsers can be set to accept or reject cookies or
          notify you when a cookie is being sent. Privacy software can be used
          to override web beacons. Taking either of these actions shouldn’t
          cause a problem with our sites, should you so choose. If you do
          encounter a problem, please let us know.
        </p>
        <h2 className="subheader-dark mt-16">
          What We Do with Your Personal Information
        </h2>
        <p className="paragraph-dark my-5 max-w-5xl">
          Portable CTO, LLC has a legitimate business interest to keep its
          customers, audience, and contacts informed of our latest products,
          content, and services. We process customer and client personal
          information and use direct marketing as part of this legitimate
          interest. Personal information you provide may be used to:
        </p>

        <ul
          className="paragraph-dark my-5 max-w-5xl list-disc pl-5"
          role="list"
        >
          <li className="py-2">
            Send you something you’ve requested, such as email newsletter
          </li>
          <li className="py-2">
            Send you information from Portable CTO, LLC that we think you’ll be
            interested in
          </li>
          <li className="py-2">Send you information from our advertisers</li>
          <li className="py-2">Target advertising based on your interests</li>
        </ul>

        <p className="paragraph-dark my-5 max-w-5xl">
          We keep your information safely and securely for as long as necessary
          or according to your instructions, and we review the data we hold at
          least once every two years.
        </p>
        <h2 className="subheader-dark mt-16">
          When and How We Share Your Personal Information with Others
        </h2>
        <p className="paragraph-dark my-5 max-w-5xl">
          Portable CTO, LLC may share your personal information to deliver
          content and services from our sites, affiliated companies and third
          parties that might interest you; including sponsored content and
          events, for business operations, and to comply with valid legal
          processes.
        </p>

        <ul
          className="paragraph-dark my-5 max-w-5xl list-disc pl-5"
          role="list"
        >
          <li className="py-2">
            We may share your information with advertisers, partners, and
            sponsors when you give permission and agree to our terms and privacy
            policy by registering for content or services offered by Portable
            CTO, LLC and our sponsors.
          </li>
          <li className="py-2">
            We need to provide your information to other companies in order to
            deliver the services you want from us, such as having an email list
            sent out and managing your email preferences, or to process your
            event order. In these cases, the information is used only for the
            specific service you wanted from us.
          </li>
        </ul>

        <p className="paragraph-dark my-5 max-w-5xl">
          We may also aggregate information and disclose it to advertisers and
          other third parties for marketing, promotional, and other purposes. In
          these cases, we do NOT disclose any personally identifiable
          information as part of this. Use of your contact data by others is
          governed by the terms and conditions of their Privacy Policy.
        </p>
        <h2 className="subheader-dark mt-16">Transfers</h2>
        <p className="paragraph-dark my-5 max-w-5xl">
          We may buy or sell a company or property. If we sell a business, we
          may transfer some or all of your information as a part of the sale so
          that you will continue to receive the service being provided to you or
          for other business purposes.
        </p>
        <h2 className="subheader-dark mt-16">
          Your Rights Over Your Personal Information
        </h2>

        <ul
          className="paragraph-dark my-5 max-w-5xl list-disc pl-5"
          role="list"
        >
          <li className="py-2">
            You have the right to opt out of our direct marketing at any point.
            You can unsubscribe from our emails by following the unsubscribe
            link at the bottom of each email, or by contacting us directly.
          </li>
          <li className="py-2">
            You can request access to the personal information we hold on you,
            at any time, and we will provide that information within one month
            of receiving your request.
          </li>
          <li className="py-2">
            You can also request your information to be deleted, and we will
            respond within one month of receiving your request.
          </li>
        </ul>

        <h2 className="subheader-dark mt-16">
          Policy Changes, Questions & Comments
        </h2>
        <p className="paragraph-dark mt-5 max-w-5xl">
          We’ll post changes to this policy on this page. Requests for more
          information and questions about this policy should be emailed to us at
          info@portablecto.com.
        </p>
      </div>
      <LogosDark />
      <FAQ />
    </>
  )
}
