"use client";

import { useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowRightFromLineIcon,
  Eye,
  PlayIcon,
} from "lucide-react";
import { Navbar } from "./layout/navbar";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setScrollPosition(latest);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <div className="relative min-h-[120vh] flex items-center justify-center overflow-hidden">
      <Navbar />
      <div
        className="absolute inset-0 z-0"
        style={{
          maskImage:
            "radial-gradient(ellipse 100% 50px at 50% 100%, transparent 50%, black 60%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 50px at 50% 100%, transparent 50%, black 60%)",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-100"
        >
          <source src="/videos/blink.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl items-center justify-center mx-auto px-8 text-center md:mt-28">
        <div className="space-y-8 mb-60">
          <h1
            className={`text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F5F3EE] drop-shadow-2xl font-playfair`}
          >
            Protect Your{" "}
            <span
              className="text-amber-200
            "
            >
              VISION
            </span>
            {/* <span className="relative inline-block"> */}
            {/* <span
                className={`text-8xl font-extrabold text-transparent px-2 rounded uppercase`}
                style={{
                  background: "rgba(245, 243, 238, 0.1)",
                  // background: "rgb(253 186 116)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  // WebkitTextStroke: "2px rgba(245, 243, 238, 0.8)",
                  // WebkitTextStroke: "2px rgb(253 186 116)",
                  // WebkitTextStroke: "2px rgb(251, 146, 60)",
                  // WebkitTextStroke: "2px rgb(255, 242, 178)",
                  WebkitTextStroke: "2px rgb(255, 224, 130)",
                  WebkitTextFillColor: "transparent",
                  backdropFilter: "blur(0.5px)",
                }}
              >
                Vision
              </span> */}
            {/* </span> */}
          </h1>
          <p className="text-xl md:text-2xl font-light text-[#F5F3EE]/80 tracking-wide max-w-2xl mx-auto">
            <a className="text-amber-200 pr-2 cursor-pointer hover:text-orange-400">
              Start Your
            </a>
            AI-powered eye care for the{" "}
            <span className="text-white uppercase"> digital </span>age
          </p>
        </div>
      </div>
      {/* Watch Demo Button - Bottom Left */}
      <div className="absolute bottom-8 left-8 z-20">
        <button
          className="group flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-orange-200/20 hover:bg-white/20 px-6 py-4 rounded-full transition-all duration-300 hover:scale-105"
          onClick={() => {
            // You can add demo video functionality here
            alert("Demo video coming soon!");
          }}
        >
          <div className="w-12 h-12 cursor-pointer bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
            <PlayIcon className="text-amber-200" />
          </div>
          <div className="text-left">
            <div className="text-[#F5F3EE] font-semibold text-lg">
              Watch
              <span className="text-amber-200"> Demo</span>
            </div>
            <div className="text-[#F5F3EE]/70 text-sm">See how it works</div>
          </div>
        </button>
      </div>
      {/* EYEKON-AI Brand Text - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="text-right">
          <h2
            className={`text-4xl md:text-5xl font-black tracking-wider text-[#F5F3EE] drop-shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-default select-none font-playfair`}
          >
            EYEKON
            <span className="text-amber-200">-</span>AI
          </h2>
          <div className="text-xs font-medium text-[#F5F3EE]/70 tracking-[0.2em] uppercase mt-1">
            Digital Eye Protection
          </div>
        </div>
      </div>
    </div>
  );
}
