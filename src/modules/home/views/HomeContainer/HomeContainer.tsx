"use client";

import { Button, HoverBackground, TypingText } from "@/components/re-ui";
import Link from "next/link";

export function HomeContainer() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <HoverBackground
        colors={{
          background: "bg-gradient-to-br from-black via-gray-900 to-zinc-900",
          objects: [
            "bg-emerald-500/30",
            "bg-teal-500/30",
            "bg-green-500/30",
            "bg-lime-500/30",
            "bg-cyan-500/30",
            "bg-blue-500/30",
          ],
          glow: "shadow-emerald-400/70",
        }}
        objectCount={8}
      >
        <div className="absolute top-1/2 left-1/2 flex w-3xl -translate-1/2 transform flex-col items-center gap-8 p-8">
          <TypingText
            text={"Hello, I'm Huu Tuan Nguyen"}
            className="text-gradient bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-5xl leading-snug font-bold text-transparent"
            speed={60}
            pauseDuration={2500}
            showCursor={true}
            cursor="_"
            cursorClassName="text-blue-600 font-extrabold"
            loop={true}
          />
          <p className="text-center text-lg font-semibold text-slate-400">
            Full-stack developer focusing on{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
              React, Next.js, NestJS
            </span>
            , and{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-xl font-bold text-transparent">
              PostgreSQL
            </span>
            .
            <br />I care about DX, performance, and design consistency.
          </p>
          <div className="animate-fade-in flex flex-row justify-center gap-4">
            <Button size="lg" className="w-64">
              View Projects
            </Button>
            <Button size="lg" className="w-64">
              Contact Me
            </Button>
          </div>
        </div>
      </HoverBackground>
    </div>
  );
}
