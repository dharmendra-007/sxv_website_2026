"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [jp, setJp] = useState(true);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const langSwitch = setInterval(() => {
      setJp((v) => !v);
    }, 2200);

    const glitchPulse = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 80);
    }, 400 + Math.random() * 300);

    return () => {
      clearInterval(langSwitch);
      clearInterval(glitchPulse);
    };
  }, []);

  const samaveshText = jp ? "サマヴェシュ" : "SAMAVESH";
  const xText = jp ? "×" : "X";
  const vassauntText = jp ? "ヴァサウント" : "VASSAUNT";

  const paraText =
    "An exploration of identity, design, and technology inspired by modern cyber culture and editorial storytelling.";

  return (
    <div className={`${styles.content} ${!jp ? styles.englishFont : ''}`}>
      <div className={styles.titleContainer}>
        <h1
          className={`${styles.glitchTitle} ${glitch ? styles.active : ""}`}
          data-text={samaveshText}
        >
          {samaveshText}
        </h1>
        <h1
          className={`${styles.glitchX} ${glitch ? styles.active : ""}`}
          data-text={xText}
        >
          {xText}
        </h1>
        <h1
          className={`${styles.glitchTitle} ${glitch ? styles.active : ""}`}
          data-text={vassauntText}
        >
          {vassauntText}
        </h1>
      </div>

      <p
        className={`${styles.glitchPara} ${glitch ? styles.active : ""}`}
        data-text={paraText}
      >
        {paraText}
      </p>
    </div>
  );
}
