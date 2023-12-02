import React, { useEffect, useState } from "react";
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Forest', 'Building', 'Tree', 'Color'];

export default function BreathingTxt() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((index) => index + 1);
        }, 4000);
        
        return () => clearTimeout(intervalId);
    }, []);
    
      return (
        <h1 className="breathing-text">
          <TextTransition springConfig={presets.molasses}>{TEXTS[index % TEXTS.length]}</TextTransition>
        </h1>
      );
};