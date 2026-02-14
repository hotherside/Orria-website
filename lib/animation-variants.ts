import { Variants } from "framer-motion";

// Soft fade-up reveal animation
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

// Fade in without movement
export const fadeIn: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Slide from left
export const slideLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

// Slide from right
export const slideRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

// Scale up animation
export const scaleUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

// Faster stagger for grids
export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

// Item variant for use with stagger
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Button hover animation
export const buttonHover = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -2,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  tap: {
    y: 0,
    scale: 0.98
  }
};

// Card hover animation
export const cardHover = {
  rest: {
    scale: 1,
    boxShadow: "0 4px 20px rgba(61, 56, 51, 0.06), 0 1px 3px rgba(61, 56, 51, 0.04)"
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 8px 30px rgba(61, 56, 51, 0.1), 0 2px 6px rgba(61, 56, 51, 0.05)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Viewport settings for scroll animations
export const viewportSettings = {
  once: true,
  margin: "-100px 0px",
  amount: 0.2
};

// Gentle float animation for decorative elements
export const gentleFloat = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Delayed float for variety
export const gentleFloatDelayed = {
  initial: { y: 0 },
  animate: {
    y: [10, -10, 10],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1
    }
  }
};

// ═══ New Showcase Animation Variants ═══

// Stagger for chat message sequences
export const staggerMessages: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.8,
      delayChildren: 0.3
    }
  }
};

// Individual message bubble entry
export const messageItem: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

// Draw SVG path animation
export const pathDraw: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.5, ease: "easeInOut" },
      opacity: { duration: 0.3 }
    }
  }
};
