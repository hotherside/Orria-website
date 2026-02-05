import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support - Orria",
  description: "Get help with Orria - FAQ, contact information, and troubleshooting.",
};

export default function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Can We Help?
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions or get in touch with our team
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-xl p-8 mb-12">
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-6">
              Have a question? We're here to help!
            </p>
            <a
              href="mailto:hello@orria.app"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Email Support
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            {/* FAQ Item */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What is Orria?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Orria is a social decision-making platform that helps you make better choices through AI insights and community wisdom. Create decisions, get votes from the community, and receive AI-powered analysis to see all angles of your choices.
              </p>
            </div>

            {/* FAQ Item */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How do I create an account?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Download the Orria app from the App Store, tap "Get Started," and sign up using your email or Sign in with Apple. It takes less than a minute to get started!
              </p>
            </div>

            {/* FAQ Item */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Is Orria free to use?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes! Orria is free to download and use. We offer optional premium features through Orria Pro for users who want advanced analytics, unlimited AI insights, and priority support.
              </p>
            </div>

            {/* FAQ Item */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How does the AI analysis work?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our AI analyzes voting patterns, comments, and decision context to provide data-driven insights. It helps you see different perspectives, potential outcomes, and factors you might not have considered. The AI uses your decision data only to generate insights for you and doesn't share it with other users.
              </p>
            </div>

            {/* FAQ Item */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Are my decisions public?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You can choose! When creating a decision, you can make it public for the community to see and vote on, or keep it private for your personal use. You have full control over who sees your decisions.
              </p>
            </div>

            {/* FAQ Item */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How do I delete my account?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Go to your Profile tab → Settings (gear icon) → scroll to the bottom → Delete Account. Your account and all data will be permanently removed. This action cannot be undone. If you need help, contact us at hello@orria.app.
              </p>
            </div>

            {/* FAQ Item */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Can I cancel my subscription?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, you can cancel your Orria Pro subscription anytime through your iPhone Settings → [Your Name] → Subscriptions → Orria. You'll retain Pro features until the end of your billing period.
              </p>
            </div>

            {/* FAQ Item */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                The app isn't working properly. What should I do?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Try these steps: 1) Make sure you have the latest version of the app from the App Store, 2) Close and reopen the app, 3) Restart your device, 4) Check your internet connection. If the problem persists, contact us at hello@orria.app with details about the issue.
              </p>
            </div>

            {/* FAQ Item */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How do I report inappropriate content?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Tap the three dots (•••) on any decision or comment and select "Report." We review all reports within 24 hours and take appropriate action.
              </p>
            </div>

            {/* FAQ Item */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                I have a feature suggestion. Where can I share it?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We love hearing from our users! Email your suggestions to hello@orria.app. We read every message and many of our best features come from user feedback.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for?
          </p>
          <a
            href="mailto:hello@orria.app"
            className="text-purple-600 hover:text-purple-700 font-semibold underline"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </div>
  );
}
