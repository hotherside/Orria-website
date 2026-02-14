import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Guidelines - Orria",
  description: "Orria's community guidelines - keeping our platform safe and respectful.",
};

export default function CommunityGuidelines() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Community Guidelines
          </h1>
          <p className="text-lg text-text-muted">
            Last Updated: January 31, 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-cream-50 rounded-2xl shadow-soft-lg p-8 md:p-12 space-y-8">

          {/* Introduction */}
          <section>
            <p className="text-text-secondary leading-relaxed mb-4">
              Orria is a platform for authentic, meaningful decision-making discussions. To maintain a safe and respectful community, we ask all users to follow these guidelines.
            </p>
            <div className="bg-cyan-500/5 rounded-lg p-6 mt-4">
              <p className="text-text-primary font-semibold mb-2">
                Our Core Principle:
              </p>
              <p className="text-text-secondary">
                Treat others with respect and kindness. Focus on helping people make better decisions, not on judgment or criticism.
              </p>
            </div>
          </section>

          {/* What's Encouraged */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              ✅ What We Encourage
            </h2>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span><strong>Helpful perspectives:</strong> Share your experiences and insights</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span><strong>Respectful disagreement:</strong> Different views are valuable</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span><strong>Constructive feedback:</strong> Help others see all angles</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span><strong>Personal stories:</strong> Real experiences help others decide</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span><strong>Outcome sharing:</strong> Let others learn from your results</span>
              </li>
            </ul>
          </section>

          {/* Prohibited Content */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              ❌ Prohibited Content
            </h2>
            <p className="text-text-secondary mb-4">
              The following content is not allowed on Orria and may result in content removal or account suspension:
            </p>

            <div className="space-y-6">
              {/* Violence */}
              <div className="bg-red-50 rounded-lg p-4">
                <h3 className="font-semibold text-text-primary mb-2">
                  🚫 Violence & Threats
                </h3>
                <p className="text-text-secondary text-sm">
                  No threats, violence, self-harm content, or dangerous activities. This includes encouraging or glorifying violence.
                </p>
              </div>

              {/* Hate Speech */}
              <div className="bg-red-50 rounded-lg p-4">
                <h3 className="font-semibold text-text-primary mb-2">
                  🚫 Hate Speech & Harassment
                </h3>
                <p className="text-text-secondary text-sm">
                  No attacks based on race, ethnicity, religion, gender, sexual orientation, disability, or other protected characteristics. No bullying, harassment, or targeted abuse.
                </p>
              </div>

              {/* Explicit Content */}
              <div className="bg-red-50 rounded-lg p-4">
                <h3 className="font-semibold text-text-primary mb-2">
                  🚫 Explicit or Graphic Content
                </h3>
                <p className="text-text-secondary text-sm">
                  No pornography, sexually explicit content, or gratuitously graphic material. Keep content appropriate for all ages.
                </p>
              </div>

              {/* Privacy */}
              <div className="bg-red-50 rounded-lg p-4">
                <h3 className="font-semibold text-text-primary mb-2">
                  🚫 Privacy Violations
                </h3>
                <p className="text-text-secondary text-sm">
                  Don't share other people's personal information (doxxing). This includes phone numbers, email addresses, home addresses, or other private details without consent.
                </p>
              </div>

              {/* Spam */}
              <div className="bg-red-50 rounded-lg p-4">
                <h3 className="font-semibold text-text-primary mb-2">
                  🚫 Spam & Scams
                </h3>
                <p className="text-text-secondary text-sm">
                  No promotional content, advertisements, get-rich-quick schemes, or misleading links. Orria is for authentic decision-making discussions only.
                </p>
              </div>

              {/* Misinformation */}
              <div className="bg-red-50 rounded-lg p-4">
                <h3 className="font-semibold text-text-primary mb-2">
                  🚫 Harmful Misinformation
                </h3>
                <p className="text-text-secondary text-sm">
                  No deliberately false information that could cause harm, especially regarding health, safety, or civic processes.
                </p>
              </div>
            </div>
          </section>

          {/* Reporting */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              🚩 Reporting Violations
            </h2>
            <p className="text-text-secondary mb-4">
              If you see content that violates these guidelines:
            </p>

            <div className="bg-cyan-500/5 rounded-lg p-6">
              <h3 className="font-semibold text-text-primary mb-3">
                How to Report
              </h3>
              <ul className="space-y-2 text-text-secondary">
                <li><strong>For Decisions:</strong> Tap the menu (•••) → "Report Decision"</li>
                <li><strong>For Comments:</strong> Long-press the comment → "Report Comment"</li>
              </ul>
              <p className="text-text-muted text-sm mt-4">
                All reports are reviewed by our moderation team. You can't report the same content twice, and your identity as a reporter is protected.
              </p>
            </div>
          </section>

          {/* Consequences */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              ⚖️ Enforcement
            </h2>
            <p className="text-text-secondary mb-4">
              Violations of these guidelines may result in:
            </p>

            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-yellow-500 text-xl mr-3">⚠️</span>
                <div>
                  <strong className="text-text-primary">Warning</strong>
                  <p className="text-text-muted text-sm">First-time minor violations receive a warning</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-orange-500 text-xl mr-3">🗑️</span>
                <div>
                  <strong className="text-text-primary">Content Removal</strong>
                  <p className="text-text-muted text-sm">Violating content is removed from the platform</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 text-xl mr-3">⏸️</span>
                <div>
                  <strong className="text-text-primary">Temporary Suspension</strong>
                  <p className="text-text-muted text-sm">Repeated violations result in temporary account suspension (typically 7 days)</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-700 text-xl mr-3">🚫</span>
                <div>
                  <strong className="text-text-primary">Permanent Ban</strong>
                  <p className="text-text-muted text-sm">Severe or repeated violations result in permanent account termination</p>
                </div>
              </div>
            </div>

            <div className="bg-cream-200 rounded-lg p-6 mt-6">
              <p className="text-text-secondary text-sm">
                <strong>Note:</strong> All moderation actions are logged and visible in your account. You have the right to appeal decisions within 30 days by contacting support.
              </p>
            </div>
          </section>

          {/* Safety Features */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              🛡️ Automated Safety Features
            </h2>
            <p className="text-text-secondary mb-4">
              Orria uses automated systems to keep the community safe:
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3">•</span>
                <span><strong>Keyword Filtering:</strong> Automatically blocks prohibited language before posting</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3">•</span>
                <span><strong>PII Protection:</strong> Prevents accidental sharing of emails and phone numbers</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3">•</span>
                <span><strong>Rate Limiting:</strong> Prevents spam by limiting rapid posting</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3">•</span>
                <span><strong>Link Detection:</strong> Limits excessive URL sharing to prevent spam</span>
              </li>
            </ul>
          </section>

          {/* Best Practices */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              💡 Best Practices
            </h2>
            <div className="bg-cyan-500/5 rounded-lg p-6">
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-3">▸</span>
                  <span><strong>Be specific:</strong> Provide context and details to help others understand</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-3">▸</span>
                  <span><strong>Stay on topic:</strong> Keep discussions focused on the decision at hand</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-3">▸</span>
                  <span><strong>Use anonymous mode:</strong> For sensitive topics, post anonymously (Pro feature)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-3">▸</span>
                  <span><strong>Cite sources:</strong> If sharing facts or statistics, include sources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-3">▸</span>
                  <span><strong>Share outcomes:</strong> Let others learn from your decision results</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section className="border-t border-cream-300 pt-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Questions or Appeals
            </h2>
            <p className="text-text-secondary mb-4">
              If you have questions about these guidelines or want to appeal a moderation decision:
            </p>
            <div className="bg-cyan-500/5 rounded-lg p-6">
              <p className="text-text-primary">
                <strong>Email:</strong>{" "}
                <a href="mailto:hello@orria.app" className="text-cyan-500 hover:text-cyan-600 underline">
                  hello@orria.app
                </a>
              </p>
              <p className="text-text-muted text-sm mt-2">
                Please include your username and details about the specific content or action in question.
              </p>
            </div>
          </section>

          {/* Effective Date */}
          <section className="text-center pt-8 border-t border-cream-300">
            <p className="text-sm text-text-muted">
              These Community Guidelines are effective as of January 31, 2026
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
