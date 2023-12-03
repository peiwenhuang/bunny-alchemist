import React, { useEffect, useState, Suspense } from 'react';

import { isTablet, isMobile } from './Canvases/Desk';
import { ExitBtn, ProgressBtn } from './Components/Button';
import Progress from './Components/Progress';
import { ProgressPopup } from './Components/Progress';
import Forest from './Canvases/Forest';
import Cottage from './Canvases/Cottage';
import Cosmic from './Canvases/Cosmic';
import Garden from './Canvases/Garden';
import Desk from './Canvases/Desk';
import DialogBox from './Dialogue/Dialogue';
import BreathingTxt from './Dialogue/Breathing';
import Letter from './Dialogue/Letter';
import Credit from './Dialogue/Credit';

import music from './assets/forest/forest-bgm.mp3';
import { click } from '@testing-library/user-event/dist/click';

// TODO: FINISH + credit page

// TODO: set breathing times to 4

/* scenes: 
"forest", "cottage-pre-cosmic", "cosmic-pre-breath", "cosmic-post-breath", 
"cottage-pre-garden", "garden", "cottage-pre-desk", "desk", "cottage-pre-potion", "potion-making"
"post-finale"
*/

function arrayContains(item, arr) {
  return (arr.indexOf(item) > -1);
}

const INIT_INGREDIENTS = {
  meditation: "Incomplete",
  base: "Incomplete",
  energizer: "Incomplete",
  potion: "Incomplete"
};

function App() {
  const [scene, setScene] = useState("forest");
  const [sceneOpacity, setSceneOpacity] = useState(1);
  const [dialogScene, setDialogScene] = useState("forest");
  const [dialogOpacity, setDialogOpacity] = useState(1);
  const [progressOpacity, setProgressOpacity] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [ingredients, setIngredients] = useState(INIT_INGREDIENTS);
  const [active, setActive] = useState(-1);
  const [breathing, setBreathing] = useState(false);
  const [breathOpacity, setBreathOpacity] = useState(0);
  const [clickable, setClickable] = useState(true);
  const [makePotion, setMakePotion] = useState(false);
  const [letterPath, setLetterPath] = useState(null);
  const [bgm] = useState(new Audio(music));
  bgm.loop = true;

  // alert user before refreshing: changes will be lost
  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);

  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };

  useEffect(() => {
    if(!arrayContains(dialogScene, ["forest", "cottage-pre-cosmic", "cosmic-pre-breath", "cosmic-post-breath"])) {;
      if(dialogScene !== "credits") {
        setProgressOpacity(1);
      }
    }
  }, [dialogScene]);
  
  useEffect(() => {
    if(scene === "credits") {
      setProgressOpacity(0);
    }
  }, [scene]);

  const reset = () => {
    bgm.pause();
    bgm.currentTime = 0;
    handleSetScene("forest");
    handleSetDialogScene("forest");
    setBreathing(false);
    setProgressOpacity(0);
    setActive(-1);
    setMakePotion(false);
    setLetterPath(null);
    setIngredients(INIT_INGREDIENTS);
  }
  const handleSetScene = (newScene) => {
    setSceneOpacity(0);
    setDialogOpacity(0);

    setTimeout(() => {
      setScene(newScene.split("-")[0]);
      setSceneOpacity(1);
      
      setTimeout(() => {
        setDialogScene(newScene);
        setCurrentMessage(0);
        
        setTimeout(() => {
          setDialogOpacity(1);
        }, 1800);
      }, 0);
    }, 5000);
  }
  const handleSetDialogScene = (newScene) => {
    setDialogOpacity(0);
    setTimeout(() => {
      setDialogScene(newScene);
      setCurrentMessage(0);
      setDialogOpacity(1);
    }, 800);
  }
  const handleCloseDialog = () => {
    setDialogOpacity(0);
  }
  const completeMeditation = () => {
    setIngredients({
      ...ingredients,
      meditation: "complete"
    });
    setActive(active + 1);
  }
  const completeBase = (newBase) => {
    setIngredients({
      ...ingredients,
      base: newBase
    });
    setActive(active + 1);
  }
  const completeEnergizer = (newEnergizer) => {
    setIngredients({
      ...ingredients,
      energizer: newEnergizer
    });
    setActive(active + 1);
  }
  const completePotion = () => {
    setIngredients({
      ...ingredients,
      potion: "complete"
    });
    setActive(active + 1);
  }
  const handleLetterPath = (path) => {
    setLetterPath(path);
  }

  const exitIcon = () => {
    if(scene !== "forest") {
      return <ExitBtn
      restart={() => {
        reset();
      }}
      />
    }
  }
  const popupIcon = () => {
    if(progressOpacity) {
      return <ProgressBtn
      handleClick={() => setShowPopup(true)}
      />
    }
  }
  
  const display = () => {
    if(scene === "forest") {
      return <Forest />
    }
    if(scene.includes("cottage")) {
      return <Cottage
      makePotion={makePotion} setMakePotion={setMakePotion}
      handleSetDialogScene={handleSetDialogScene}
      completePotion={completePotion}
      />
    }
    if(scene.includes("cosmic")) {
      return <Cosmic
      breathing={breathing} setBreathing={setBreathing}
      handleSetDialogScene={handleSetDialogScene}
      completeMeditation={completeMeditation} />
    }
    if(scene === "garden") {
      return <Garden
      clickable={clickable} setClickable={setClickable}
      handleSetDialogScene={handleSetDialogScene} />
    }
    if(scene === "desk") {
      return <Desk
      handleCardFlip={(dialogScene, energizer) => {
        handleSetDialogScene(dialogScene);
        setTimeout(() => completeEnergizer(energizer), 1600);
      }} />
    }
    if(scene === "credit") {
      return <Credit />
    }
  }
  const play = () => {
    bgm.play();
  }

  const breathTxt = () => {
    if(breathing) {
      return (
        <div className="fade-wrapper">
          <BreathingTxt
          />
        </div>
      );
    }
    return null;
  }
  
  return (
    <div id="curtain" className="fade-wrapper" style={{opacity: sceneOpacity}}>
      <Progress
      opacity={progressOpacity}
      ingredients={ingredients}
      activeIdx={active}
      />
      <ProgressPopup
      show={showPopup}
      hide={() => setShowPopup(false)}
      ingredients={ingredients}
      activeIdx={active}
      />
      {popupIcon()}
      {exitIcon()}
      {display()}
      <Letter
      letterPath={letterPath}
      />
      <DialogBox
      scene={dialogScene}
      handleSetScene={handleSetScene}
      handleSetDialogScene={handleSetDialogScene}
      handleCloseDialog={handleCloseDialog}
      currentMessage={currentMessage}
      setCurrentMessage={setCurrentMessage}
      dialogOpacity={dialogOpacity}
      setBreathing={setBreathing}
      setClickable={setClickable}
      setMakePotion={setMakePotion}
      completeBase={completeBase}
      handleLetterPath={handleLetterPath}
      playMusic={play}
      reset={reset}
      />
      {breathTxt()}
    </div>
  );
}

export default App;
