import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Decision Privacy - Orria",
  description: "How Orria keeps your decision record private.",
};

export default function DecisionPrivacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Decision Privacy
          </h1>
          <p className="text-lg text-text-muted">
            Last Updated: July 18, 2026
          </p>
        </div>

        <div className="bg-cream-50 rounded-2xl shadow-soft-lg p-8 md:p-12 space-y-8">
          <section>
            <p className="text-text-secondary leading-relaxed">
              Orria is a private decision companion, not a public decision community.
              Your decisions, options, conversations, reflections, and outcomes are not
              visible to other Orria users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              What private means
            </h2>
            <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
              <li>There is no Explore feed, public profile, voting, or comments in the consumer product.</li>
              <li>Your decision record is available only in your account.</li>
              <li>Sharing, where available, is a deliberate export that you review before sending outside Orria.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              AI processing
            </h2>
            <p className="text-text-secondary leading-relaxed">
              With your consent, Orria sends the decision information needed to provide
              AI insights to Anthropic&apos;s Claude API. OpenAI may process the same data as
              a fallback when Anthropic is unavailable. These providers help generate your
              insights; they do not make or share your decision for you.
            </p>
          </section>

          <section className="border-t border-cream-300 pt-8">
            <p className="text-text-secondary leading-relaxed">
              Read the full <a href="/privacy" className="text-cyan-500 hover:text-cyan-600 underline">Privacy Policy</a> or contact <a href="mailto:hello@orria.app" className="text-cyan-500 hover:text-cyan-600 underline">hello@orria.app</a> with questions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
