import * as React from "react";
import { PageProps } from "gatsby";

import Spline from "@splinetool/react-spline";
import { useState } from "react";
export const Header: React.FC<any> = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="hero-bg">
      <Spline
        scene="https://prod.spline.design/Gk-nuLpJVOluwii5/scene.splinecode"
        onLoad={() => setIsLoaded(true)}
      />
      {isLoaded && (
        <div className="hero-container">
          <h1 className="text-center">Shaurya Manocha</h1>
          <h4 className="text-center">Full Stack Developer</h4>
        </div>
      )}
    </div>
  );
};
