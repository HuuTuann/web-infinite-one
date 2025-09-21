"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Loading() {
  const reduce = useReducedMotion();

  return (
    <div className="flex h-screen items-center justify-center">
      <motion.img
        src="/logo.svg"
        alt="Infinite One Loading"
        initial={{ scale: 1 }}
        animate={
          reduce
            ? { scale: 1 }
            : {
                scale: [1, 1.2, 1],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
        }
      />
    </div>
  );
}
