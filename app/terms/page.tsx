import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Orria",
  description: "Orria's terms of service - rules and guidelines for using our app.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Last Updated: February 8, 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">

          {/* Introduction */}
          <section>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Orria. By downloading, accessing, or using the Orria mobile application (&quot;App&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the App.
            </p>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Eligibility
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You must be at least 13 years old to use Orria. By using the App, you represent that you meet this age requirement. If you are under 18, you must have parental or guardian consent.
            </p>
          </section>

          {/* Account */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Your Account
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Provide accurate and complete information when creating your account</li>
              <li>Keep your login credentials secure</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Not create multiple accounts for abusive purposes</li>
            </ul>
          </section>

          {/* Subscriptions */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Subscriptions and Payments
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              Free and Pro Plans
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Orria offers a free tier with limited AI insights and a Pro subscription with unlimited AI perspectives and advanced analytics. Details of current pricing are available within the App.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              Auto-Renewal
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Orria Pro subscriptions automatically renew unless you cancel at least 24 hours before the end of the current billing period. Your Apple ID account will be charged for renewal within 24 hours prior to the end of the current period.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              Managing Your Subscription
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can manage or cancel your subscription at any time through your Apple ID account settings. Cancellation takes effect at the end of the current billing period. No refunds are provided for partial billing periods.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              Price Changes
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We may change subscription prices from time to time. Price changes will take effect at the start of the next billing period following the date of the change. If you do not agree with the price change, you may cancel your subscription before the change takes effect.
            </p>
          </section>

          {/* User Content */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. User Content
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You retain ownership of the content you create on Orria, including decisions, comments, and reflections. By sharing content publicly on Orria, you grant us a non-exclusive, worldwide license to display that content within the App.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You are solely responsible for the content you post. You agree not to post content that is illegal, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable.
            </p>
          </section>

          {/* AI Content */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. AI-Generated Content
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Orria uses artificial intelligence to provide decision analysis and perspectives. You acknowledge that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>AI-generated insights are for informational purposes only and should not be treated as professional advice</li>
              <li>AI perspectives represent simulated viewpoints, not real individuals</li>
              <li>You should exercise your own judgment when making decisions</li>
              <li>We do not guarantee the accuracy or completeness of AI-generated content</li>
            </ul>
          </section>

          {/* Prohibited Conduct */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Prohibited Conduct
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Use the App for any illegal purpose</li>
              <li>Harass, bully, or intimidate other users</li>
              <li>Post spam, misleading content, or advertisements</li>
              <li>Attempt to gain unauthorized access to the App or its systems</li>
              <li>Interfere with or disrupt the App or its infrastructure</li>
              <li>Impersonate another person or entity</li>
              <li>Circumvent any content moderation or security measures</li>
            </ul>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Account Termination
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may delete your account at any time through the Profile tab in the App. Upon deletion, all your personal data, decisions, and associated content will be permanently removed.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to suspend or terminate your account if you violate these Terms or our Community Guidelines, including but not limited to posting prohibited content or engaging in abusive behavior.
            </p>
          </section>

          {/* Disclaimers */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Disclaimers
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not warrant that the App will be uninterrupted, error-free, or secure.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Orria is a decision journaling tool. It does not provide professional, legal, medical, financial, or therapeutic advice. Always consult qualified professionals for important life decisions.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To the maximum extent permitted by law, Orria and its developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising out of or related to your use of the App.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Changes to These Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update these Terms from time to time. We will notify you of material changes by posting the updated Terms on this page and updating the &quot;Last Updated&quot; date. Your continued use of the App after any changes constitutes acceptance of the new Terms.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-purple-50 rounded-lg p-6">
              <p className="text-gray-800">
                <strong>Email:</strong>{" "}
                <a href="mailto:hello@orria.app" className="text-purple-600 hover:text-purple-700 underline">
                  hello@orria.app
                </a>
              </p>
              <p className="text-gray-800 mt-2">
                <strong>Company:</strong> Orria
              </p>
            </div>
          </section>

          {/* Effective Date */}
          <section className="text-center pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              These Terms of Service are effective as of February 8, 2026
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
