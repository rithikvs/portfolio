import React, { useEffect, useState } from "react";
import "./CinematicRobotIntro.css";

interface CinematicRobotIntroProps {
  onEnter: () => void;
}

const CinematicRobotIntro: React.FC<CinematicRobotIntroProps> = ({ onEnter }) => {
  const [backflip, setBackflip] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start rotation immediately on mount
    setBackflip(true);
    // Head rotation duration: 1.2s (2 rounds)
    setTimeout(() => {
      setGlitch(true);
      // Glitch duration: 0.3s
      setTimeout(() => {
        setFadeOut(true);
        // Fade/zoom duration: 0.2s
        setTimeout(() => {
          onEnter();
        }, 200);
      }, 300);
    }, 1200);
  }, [onEnter]);

  return (
    <div className={`cinematic-intro-bg${glitch ? " glitch" : ""}${fadeOut ? " fade-out" : ""}`}>
      <div className="cinematic-intro-center">
        <div className="cinematic-robot-anim"> 
          <div
            className={`robot-head-intro${backflip ? " rotate" : ""}`}
            style={{ width: 140, height: 140, minWidth: 100, minHeight: 100, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <div className="robot-antenna" />
            <div className="robot-head">
              <div className="robot-eyes">
                <span className="eye left-eye" />
                <span className="eye right-eye" />
              </div>
            </div>
          </div>
        </div>
        {/* Glitch overlay */}
        {glitch && <div className="cinematic-glitch-overlay" />}
      </div>
    </div>
  );
};

export default CinematicRobotIntro;
