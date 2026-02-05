import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Orria",
  description: "Orria's privacy policy - how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last Updated: January 31, 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">

          {/* Introduction */}
          <section>
            <p className="text-gray-700 leading-relaxed">
              At Orria, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              Personal Information
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you create an account, we collect:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Email address</li>
              <li>Name or display name</li>
              <li>Username</li>
              <li>Profile photo (optional)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              User Content
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect the content you create and share on Orria:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Decisions you create</li>
              <li>Votes you cast</li>
              <li>Comments you post</li>
              <li>Topics and categories you follow</li>
              <li>Reports you submit for inappropriate content</li>
              <li>Content moderation actions taken on your account</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              Usage Information
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We automatically collect certain information about your device and how you interact with our app:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Device type and operating system</li>
              <li>App usage analytics</li>
              <li>Performance and crash data</li>
              <li>IP address and general location data</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Create and manage your account</li>
              <li>Show you relevant decisions and content</li>
              <li>Generate AI insights and analysis</li>
              <li>Send you notifications about activity on your decisions</li>
              <li>Communicate with you about updates and features</li>
              <li>Analyze usage patterns to improve the app</li>
              <li>Prevent fraud and ensure security</li>
              <li>Enforce our Community Guidelines and moderate content</li>
              <li>Process and respond to user reports of inappropriate content</li>
              <li>Track and manage content moderation actions</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* AI and Data Processing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. AI and Data Processing
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Orria uses artificial intelligence to analyze decisions and provide insights. When you request AI analysis, your decision data may be processed by third-party AI services (such as OpenAI). This data is used solely to generate insights for you and is not used to train AI models or shared with other users.
            </p>
          </section>

          {/* Data Storage and Security */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Data Storage and Security
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use industry-standard security measures to protect your data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Data is stored securely using Supabase (a PostgreSQL-based platform)</li>
              <li>All data transmission is encrypted using SSL/TLS</li>
              <li>We implement authentication and access controls</li>
              <li>Regular security audits and updates</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              However, no method of transmission over the internet is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. How We Share Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information in these circumstances:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              Public Content
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Decisions, votes, and comments you create are visible to other Orria users as intended by the app's functionality.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              Service Providers
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We work with third-party service providers who help us operate our app:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Supabase (database and authentication)</li>
              <li>OpenAI (AI insights)</li>
              <li>RevenueCat (subscription management)</li>
              <li>Apple (payments and analytics)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              Legal Requirements
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We may disclose your information if required by law or to protect our rights, safety, or property.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Your Rights and Choices
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the following rights regarding your data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Update:</strong> Edit your profile information in the app</li>
              <li><strong>Delete:</strong> Request deletion of your account and data</li>
              <li><strong>Export:</strong> Request an export of your data</li>
              <li><strong>Opt-out:</strong> Disable push notifications in your device settings</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise these rights, contact us at the email address below.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Children's Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Orria is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us to have it removed.
            </p>
          </section>

          {/* Content Moderation */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Content Moderation and Safety
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Orria is committed to maintaining a safe and respectful community. Our content moderation system includes:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              Automated Content Filtering
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use automated systems to detect and prevent:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Explicit or inappropriate content (violence, hate speech, harassment)</li>
              <li>Personal information exposure (emails, phone numbers)</li>
              <li>Spam and scam attempts</li>
              <li>Excessive link sharing</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              User Reporting
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Users can report inappropriate content. When you submit a report:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Your report is stored for moderation review</li>
              <li>You can view the status of your submitted reports</li>
              <li>Your identity as a reporter is protected</li>
              <li>We track report history to prevent abuse</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              Moderation Actions
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If your content violates our Community Guidelines, we may:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Issue a warning</li>
              <li>Remove the violating content</li>
              <li>Temporarily suspend your account</li>
              <li>Permanently ban repeat offenders</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              All moderation actions are logged and you can view your account status in the app. Removed content is archived for 90 days to support the appeals process.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Data Retention
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal information for as long as your account is active or as needed to provide you services. If you delete your account, we will delete your personal information within 30 days, except where we are required to retain it for legal purposes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Moderation Data:</strong> Reports and moderation actions are retained for 90 days after resolution to support appeals and prevent abuse. Deleted content is archived for 90 days before permanent removal.
            </p>
          </section>

          {/* International Users */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. International Data Transfers
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this privacy policy.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
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
              This Privacy Policy is effective as of January 31, 2026
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
