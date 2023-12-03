import React, { useEffect, useState } from "react";
import TextTransition, { presets } from 'react-text-transition';

import { NUM_BOX_BREATHING, TIME_PER_BREATH, TIME_PER_CYCLE, DELAY_BEFORE_BREATH } from "../Geometry/Cosmic/BreathingSphere";

const TEXTS = ['Breathe In', 'Hold', 'Breathe Out', 'Hold'];

export default function BreathingTxt() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setIndex((index) => index + 1);
      }, TIME_PER_BREATH);
      
      // setTimeout(() => clearTimeout(intervalId), TIME_PER_CYCLE * NUM_BOX_BREATHING);
        return () => clearTimeout(intervalId);
    }, []);
    
      return (
        <h1 className="breathing-text">
          <TextTransition
          springConfig={presets.molasses}
          direction="down"
          delay={DELAY_BEFORE_BREATH}
          translateValue="100%">
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </h1>
      );
};