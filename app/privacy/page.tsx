import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Orria",
  description: "Orria's privacy policy - how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-text-muted">
            Last Updated: July 18, 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-cream-50 rounded-2xl shadow-soft-lg p-8 md:p-12 space-y-8">

          {/* Introduction */}
          <section>
            <p className="text-text-secondary leading-relaxed">
              At Orria, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              1. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">
              Personal Information
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              When you create an account, we collect:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
              <li>Email address</li>
              <li>Name or display name</li>
              <li>Username</li>
              <li>Profile photo (optional)</li>
            </ul>

            <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">
              User Content
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              We collect the content you create in Orria:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
              <li>Decisions you create</li>
              <li>Options, reflections, and outcomes you choose to record</li>
              <li>Topics and categories you use to organize your decisions</li>
            </ul>

            <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">
              Usage Information
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              We automatically collect certain information about your device and how you interact with our app:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
              <li>Device type and operating system</li>
              <li>App usage analytics</li>
              <li>Performance and crash data</li>
              <li>IP address and general location data</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Create and manage your account</li>
              <li>Generate AI insights and analysis</li>
              <li>Send notifications you choose to enable</li>
              <li>Communicate with you about updates and features</li>
              <li>Analyze usage patterns to improve the app</li>
              <li>Prevent fraud and ensure security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* AI and Data Processing */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              3. AI and Data Processing
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Orria uses artificial intelligence to help you think through decisions and provide insights. Before any data is shared with AI services, we ask for your explicit consent within the app. You can grant or revoke this consent at any time in Settings.
            </p>

            <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">
              What Data is Shared
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              When you use AI features, the following data may be sent for processing:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
              <li>Decision title, description, and options</li>
              <li>Decision topic/category</li>
              <li>Conversation messages (when using the conversational AI feature)</li>
              <li>Your display name (for personalized responses only)</li>
            </ul>

            <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">
              What Data is Never Shared
            </h3>
            <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
              <li>Your email address or password</li>
              <li>Financial or payment information</li>
              <li>Device identifiers or IP address</li>
              <li>Data from other users</li>
            </ul>

            <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">
              Who Processes the Data
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              Your decision data is processed by <strong>Anthropic</strong> via the Claude API to generate AI insights, summaries, conversation responses, and advisor perspectives within Orria. If Anthropic is unavailable, <strong>OpenAI</strong> may process the same data through its API as a fallback so the feature can continue to work.
            </p>

            <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">
              How the Data is Protected
            </h3>
            <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
              <li>Data sent to Anthropic or OpenAI is transmitted securely via encrypted HTTPS connections</li>
              <li>Anthropic and OpenAI state that API content is excluded from model training by default unless the API account explicitly opts in</li>
              <li>Your data is not shared with other Orria users through AI processing</li>
              <li>AI-generated content is stored in your Orria account and follows the same data retention policies as your other content</li>
            </ul>

            <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">
              Your Consent and Control
            </h3>
            <p className="text-text-secondary leading-relaxed">
              You are asked to provide explicit consent before any data is shared with AI services. You can revoke this consent at any time in the app&apos;s Settings under &quot;AI &amp; Privacy.&quot; If you revoke consent, AI features (including decision structuring, insights, summaries, and conversations) will be disabled, but your existing data and decisions will not be affected.
            </p>
          </section>

          {/* Data Storage and Security */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              4. Data Storage and Security
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We use industry-standard security measures to protect your data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
              <li>Data is stored securely using Supabase (a PostgreSQL-based platform)</li>
              <li>All data transmission is encrypted using SSL/TLS</li>
              <li>We implement authentication and access controls</li>
              <li>Regular security audits and updates</li>
            </ul>
            <p className="text-text-secondary leading-relaxed mt-4">
              However, no method of transmission over the internet is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              5. How We Share Your Information
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We do not sell your personal information. We may share your information in these circumstances:
            </p>

            <p className="text-text-secondary leading-relaxed mb-4">
              Orria is private by default: decisions, options, conversations, reflections, and outcomes are not visible to other Orria users through the product. Sharing, where available, is a separate user-reviewed export that you choose to send outside Orria.
            </p>

            <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">
              Service Providers
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              We work with third-party service providers who help us operate our app:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
              <li>Supabase (database and authentication)</li>
              <li>Anthropic (primary AI processing)</li>
              <li>OpenAI (AI processing fallback)</li>
              <li>Apple (payments, subscriptions, and analytics)</li>
            </ul>

            <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">
              Legal Requirements
            </h3>
            <p className="text-text-secondary leading-relaxed">
              We may disclose your information if required by law or to protect our rights, safety, or property.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              6. Your Rights and Choices
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              You have the following rights regarding your data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Update:</strong> Edit your profile information in the app</li>
              <li><strong>Delete:</strong> Request deletion of your account and data</li>
              <li><strong>Export:</strong> Request an export of your data</li>
              <li><strong>Opt-out:</strong> Disable push notifications in your device settings</li>
            </ul>
            <p className="text-text-secondary leading-relaxed mt-4">
              To exercise these rights, contact us at the email address below.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              7. Children&apos;s Privacy
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Orria is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us to have it removed.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              8. Data Retention
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We retain your personal information for as long as your account is active or as needed to provide you services. If you delete your account, we will delete your personal information within 30 days, except where we are required to retain it for legal purposes.
            </p>
          </section>

          {/* International Users */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              9. International Data Transfers
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this privacy policy.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-text-secondary leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t border-cream-300 pt-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Contact Us
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-cyan-500/5 rounded-lg p-6">
              <p className="text-text-primary">
                <strong>Email:</strong>{" "}
                <a href="mailto:hello@orria.app" className="text-cyan-500 hover:text-cyan-600 underline">
                  hello@orria.app
                </a>
              </p>
              <p className="text-text-primary mt-2">
                <strong>Company:</strong> Orria
              </p>
            </div>
          </section>

          {/* Effective Date */}
          <section className="text-center pt-8 border-t border-cream-300">
            <p className="text-sm text-text-muted">
              This Privacy Policy is effective as of July 18, 2026
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
