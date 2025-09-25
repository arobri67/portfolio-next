"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

import { Badge } from "../ui";

const HOBBIES = [
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "5%",
  },
  {
    title: "Movies",
    emoji: "🎥",
    left: "50%",
    top: "5%",
  },
  {
    title: "Music",
    emoji: "🎸",
    left: "40%",
    top: "45%",
  },
  {
    title: "Soccer",
    emoji: "⚽",
    left: "65%",
    top: "40%",
  },
  {
    title: "Racing",
    emoji: "🏎️",
    left: "70%",
    top: "60% ",
  },
  {
    title: "Technology",
    emoji: "💻",
    left: "40%",
    top: "75%",
  },
  {
    title: "Space",
    emoji: "🚀",
    left: "3%",
    top: "35%",
  },
  {
    title: "Star Wars",
    emoji: "⚔️",
    left: "5%",
    top: "70%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "20%",
    top: "30%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "70%",
    top: "10%",
  },
  {
    title: "Cooking",
    emoji: "👨‍🍳",
    left: "80%",
    top: "70%",
  },
  {
    title: "Chess",
    emoji: "♟️",
    left: "30%",
    top: "10%",
  },
  {
    title: "MTG",
    emoji: "🃏",
    left: "30%",
    top: "70%",
  },
];

export const BeyondCode = () => {
  const contraintRef = useRef<HTMLDivElement>(null);
  return (

    <div className="relative h-[300px] rounded-lg border bg-muted/80 p-2" ref={contraintRef}>
      {HOBBIES.map(hobby => (
        <motion.div
          key={hobby.title}
          className="absolute p-2"
          initial={{
            left: `${hobby.left}`,
            top: `${hobby.top}`,
          }}
          drag
          dragConstraints={contraintRef}
          dragElastic={0}
        >
          <Badge className="inline-flex cursor-pointer items-center gap-2 border border-foreground/40 bg-background px-2 py-1 text-base font-medium tracking-wider text-foreground/70 hover:border-muted hover:text-foreground">
            <span>{hobby.title}</span>
            <span>{hobby.emoji}</span>
          </Badge>
        </motion.div>
      ))}
    </div>

  );
};
