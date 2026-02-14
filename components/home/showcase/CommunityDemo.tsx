"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Globe, ThumbsUp, MessageCircle, Users } from "lucide-react";

/* ── Feed data ──────────────────────────────────────────── */
const FEED_CARDS = [
  {
    avatar: "A",
    avatarBg: "#0891B220",
    avatarColor: "#0891B2",
    name: "Anonymous",
    isAnonymous: true,
    topic: "Career",
    topicColor: "#0891B2",
    question: "Should I accept the job abroad?",
    option1: "Accept the offer",
    option2: "Stay and grow here",
    pct1: 65,
    pct2: 35,
    votes: 24,
    comments: 3,
  },
  {
    avatar: "M",
    avatarBg: "#C4704B20",
    avatarColor: "#C4704B",
    name: "Marcus T.",
    isAnonymous: false,
    topic: "Life Change",
    topicColor: "#E5A53D",
    question: "Is it time to go back to school?",
    option1: "Enroll part-time",
    option2: "Wait another year",
    pct1: 58,
    pct2: 42,
    votes: 19,
    comments: 7,
  },
  {
    avatar: "A",
    avatarBg: "#6366F120",
    avatarColor: "#6366F1",
    name: "Anonymous",
    isAnonymous: true,
    topic: "Relationship",
    topicColor: "#C4704B",
    question: "Should we move in together?",
    option1: "Go for it",
    option2: "Not yet",
    pct1: 71,
    pct2: 29,
    votes: 42,
    comments: 11,
  },
];

const COMMENTS = [
  {
    avatar: "J",
    avatarBg: "#E5A53D20",
    avatarColor: "#E5A53D",
    name: "Jordan",
    time: "2h ago",
    text: "I moved abroad 3 years ago. Scariest choice, but it gave me perspective I couldn\u2019t have gotten staying...",
  },
  {
    avatar: "K",
    avatarBg: "#0891B220",
    avatarColor: "#0891B2",
    name: "Kim L.",
    time: "45m ago",
    text: "Went back at 34. Best decision. The experience you bring makes school completely different.",
  },
];

const PHASES = ["idle", "feed", "voting", "comment", "scroll", "card2", "voting2", "comment2"] as const;
type Phase = (typeof PHASES)[number];

const TIMINGS: Record<Phase, number> = {
  idle: 400,
  feed: 800,
  voting: 1000,
  comment: 1200,
  scroll: 600,
  card2: 600,
  voting2: 900,
  comment2: 2200,
};

export function CommunityDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [phase, setPhase] = useState<Phase>("idle");
  const [vote1, setVote1] = useState(0);
  const [vote2, setVote2] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);

  const reset = useCallback(() => {
    setPhase("idle");
    setVote1(0);
    setVote2(0);
  }, []);

  useEffect(() => {
    if (!isInView) {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
      reset();
      return;
    }

    const currentIdx = PHASES.indexOf(phase);

    if (phase === "voting") {
      let count = 0;
      intervalRef.current = setInterval(() => {
        count += 1;
        setVote1(count);
        if (count >= FEED_CARDS[0].votes) clearInterval(intervalRef.current);
      }, 35);
      timeoutRef.current = setTimeout(() => {
        clearInterval(intervalRef.current);
        setVote1(FEED_CARDS[0].votes);
        setPhase(PHASES[currentIdx + 1]);
      }, TIMINGS.voting);
    } else if (phase === "voting2") {
      let count = 0;
      intervalRef.current = setInterval(() => {
        count += 1;
        setVote2(count);
        if (count >= FEED_CARDS[1].votes) clearInterval(intervalRef.current);
      }, 40);
      timeoutRef.current = setTimeout(() => {
        clearInterval(intervalRef.current);
        setVote2(FEED_CARDS[1].votes);
        setPhase(PHASES[currentIdx + 1]);
      }, TIMINGS.voting2);
    } else if (currentIdx < PHASES.length - 1) {
      timeoutRef.current = setTimeout(() => {
        setPhase(PHASES[currentIdx + 1]);
      }, TIMINGS[phase]);
    } else {
      timeoutRef.current = setTimeout(reset, TIMINGS.comment2);
    }

    return () => {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
    };
  }, [isInView, phase, reset]);

  const showCard1 = phase !== "idle";
  const showVotes1 = ["voting", "comment", "scroll", "card2", "voting2", "comment2"].includes(phase);
  const showComment1 = ["comment", "scroll", "card2", "voting2", "comment2"].includes(phase);
  const scrolled = ["scroll", "card2", "voting2", "comment2"].includes(phase);
  const showCard2 = ["card2", "voting2", "comment2"].includes(phase);
  const showVotes2 = ["voting2", "comment2"].includes(phase);
  const showComment2 = phase === "comment2";

  const card1 = FEED_CARDS[0];
  const card2 = FEED_CARDS[1];

  return (
    <div ref={ref} className="w-full h-full flex flex-col" style={{ backgroundColor: "#FAF8F5" }}>
      <div className="h-12 flex-shrink-0" />

      {/* Header */}
      <div className="px-4 pb-2.5 flex items-center gap-2" style={{ borderBottom: "1px solid #EDE8DC" }}>
        <Globe size={14} className="text-cyan-600" />
        <p className="text-[11px] font-medium" style={{ color: "#2D2926" }}>Community</p>
        <div className="ml-auto flex items-center gap-1.5">
          <Users size={9} style={{ color: "#9C948A" }} />
          <span className="text-[8px]" style={{ color: "#9C948A" }}>1.2k online</span>
        </div>
      </div>

      {/* Scrolling feed */}
      <div className="flex-1 overflow-hidden relative">
        <motion.div
          className="px-3 py-2.5 flex flex-col gap-2"
          animate={{ y: scrolled ? -120 : 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <AnimatePresence>
            {phase === "idle" && (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center py-8"
              >
                <div className="text-center">
                  <Globe size={18} style={{ color: "#9C948A" }} className="mx-auto mb-1.5" />
                  <p className="text-[9px]" style={{ color: "#9C948A" }}>Loading community...</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Card 1 */}
          {showCard1 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-2.5"
              style={{ border: "1px solid #EDE8DC" }}
            >
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: card1.avatarBg }}>
                  <span className="text-[6px] font-bold" style={{ color: card1.avatarColor }}>{card1.avatar}</span>
                </div>
                <span className="text-[8px]" style={{ color: "#9C948A" }}>{card1.name}</span>
                <span className="ml-auto text-[6px] px-1.5 py-0.5 rounded-full" style={{ backgroundColor: `${card1.topicColor}10`, color: card1.topicColor }}>{card1.topic}</span>
              </div>
              <p className="text-[9px] font-medium mb-1.5" style={{ color: "#2D2926", fontFamily: "var(--font-playfair), Playfair Display, serif" }}>
                &ldquo;{card1.question}&rdquo;
              </p>

              {showVotes1 && (
                <div className="space-y-1.5">
                  <div>
                    <div className="flex justify-between mb-0.5">
                      <span className="text-[7px]" style={{ color: "#2D2926" }}>{card1.option1}</span>
                      <span className="text-[7px] font-medium text-cyan-600">{Math.round((vote1 / card1.votes) * card1.pct1)}%</span>
                    </div>
                    <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: "#F5F1EA" }}>
                      <motion.div className="h-full rounded-full bg-cyan-500" initial={{ width: "0%" }} animate={{ width: `${(vote1 / card1.votes) * card1.pct1}%` }} transition={{ duration: 0.2 }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-0.5">
                      <span className="text-[7px]" style={{ color: "#2D2926" }}>{card1.option2}</span>
                      <span className="text-[7px] font-medium" style={{ color: "#C4704B" }}>{Math.round((vote1 / card1.votes) * card1.pct2)}%</span>
                    </div>
                    <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: "#F5F1EA" }}>
                      <motion.div className="h-full rounded-full" style={{ backgroundColor: "#C4704B" }} initial={{ width: "0%" }} animate={{ width: `${(vote1 / card1.votes) * card1.pct2}%` }} transition={{ duration: 0.2 }} />
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 pt-0.5">
                    <div className="flex items-center gap-1">
                      <ThumbsUp size={7} style={{ color: "#9C948A" }} />
                      <span className="text-[7px]" style={{ color: "#9C948A" }}>{vote1}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle size={7} style={{ color: "#9C948A" }} />
                      <span className="text-[7px]" style={{ color: "#9C948A" }}>{card1.comments}</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Comment 1 */}
          {showComment1 && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-xl p-2.5 ml-4"
              style={{ border: "1px solid #EDE8DC" }}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{ backgroundColor: COMMENTS[0].avatarBg }}>
                  <span className="text-[5px] font-bold" style={{ color: COMMENTS[0].avatarColor }}>{COMMENTS[0].avatar}</span>
                </div>
                <span className="text-[7px] font-medium" style={{ color: "#2D2926" }}>{COMMENTS[0].name}</span>
                <span className="text-[6px]" style={{ color: "#9C948A" }}>{COMMENTS[0].time}</span>
              </div>
              <p className="text-[8px] leading-relaxed italic" style={{ color: "#6B635A" }}>
                &ldquo;{COMMENTS[0].text}&rdquo;
              </p>
            </motion.div>
          )}

          {/* Card 2 */}
          {showCard2 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-2.5"
              style={{ border: "1px solid #EDE8DC" }}
            >
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: card2.avatarBg }}>
                  <span className="text-[6px] font-bold" style={{ color: card2.avatarColor }}>{card2.avatar}</span>
                </div>
                <span className="text-[8px] font-medium" style={{ color: "#2D2926" }}>{card2.name}</span>
                <span className="ml-auto text-[6px] px-1.5 py-0.5 rounded-full" style={{ backgroundColor: `${card2.topicColor}10`, color: card2.topicColor }}>{card2.topic}</span>
              </div>
              <p className="text-[9px] font-medium mb-1.5" style={{ color: "#2D2926", fontFamily: "var(--font-playfair), Playfair Display, serif" }}>
                &ldquo;{card2.question}&rdquo;
              </p>

              {showVotes2 && (
                <div className="space-y-1.5">
                  <div>
                    <div className="flex justify-between mb-0.5">
                      <span className="text-[7px]" style={{ color: "#2D2926" }}>{card2.option1}</span>
                      <span className="text-[7px] font-medium text-cyan-600">{Math.round((vote2 / card2.votes) * card2.pct1)}%</span>
                    </div>
                    <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: "#F5F1EA" }}>
                      <motion.div className="h-full rounded-full bg-cyan-500" initial={{ width: "0%" }} animate={{ width: `${(vote2 / card2.votes) * card2.pct1}%` }} transition={{ duration: 0.2 }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-0.5">
                      <span className="text-[7px]" style={{ color: "#2D2926" }}>{card2.option2}</span>
                      <span className="text-[7px] font-medium" style={{ color: "#C4704B" }}>{Math.round((vote2 / card2.votes) * card2.pct2)}%</span>
                    </div>
                    <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: "#F5F1EA" }}>
                      <motion.div className="h-full rounded-full" style={{ backgroundColor: "#C4704B" }} initial={{ width: "0%" }} animate={{ width: `${(vote2 / card2.votes) * card2.pct2}%` }} transition={{ duration: 0.2 }} />
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 pt-0.5">
                    <div className="flex items-center gap-1">
                      <ThumbsUp size={7} style={{ color: "#9C948A" }} />
                      <span className="text-[7px]" style={{ color: "#9C948A" }}>{vote2}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle size={7} style={{ color: "#9C948A" }} />
                      <span className="text-[7px]" style={{ color: "#9C948A" }}>{card2.comments}</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Comment 2 */}
          {showComment2 && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-xl p-2.5 ml-4"
              style={{ border: "1px solid #EDE8DC" }}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{ backgroundColor: COMMENTS[1].avatarBg }}>
                  <span className="text-[5px] font-bold" style={{ color: COMMENTS[1].avatarColor }}>{COMMENTS[1].avatar}</span>
                </div>
                <span className="text-[7px] font-medium" style={{ color: "#2D2926" }}>{COMMENTS[1].name}</span>
                <span className="text-[6px]" style={{ color: "#9C948A" }}>{COMMENTS[1].time}</span>
              </div>
              <p className="text-[8px] leading-relaxed italic" style={{ color: "#6B635A" }}>
                &ldquo;{COMMENTS[1].text}&rdquo;
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
