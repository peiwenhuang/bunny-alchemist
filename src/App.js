import React, { useRef, useState, Suspense } from 'react';

import { ExitBtn } from './Components/Button';
import Forest from './Canvases/Forest';
import Cottage from './Canvases/Cottage';
import Cosmic from './Canvases/Cosmic';
import Garden from './Canvases/Garden';
import DialogBox from './Dialogue/Dialogue';

import music from './assets/forest/forest-bgm.mp3';
// TODO: dialog box with character / plant img
// TODO: on refresh -> alert "Are you sure?"
// TODO: cosmic add "breath in/out" text
/* scenes: 
"forest", "cottage-pre-cosmic", "cosmic-pre-breath", "cosmic-post-breath", 
"cottage-pre-garden", "garden", "cottage-pre-desk", "desk", "cottage-pre-potion"
*/

function App() {
  const [scene, setScene] = useState("forest");
  const [dialogScene, setDialogScene] = useState("forest");
  const [dialogOpacity, setDialogOpacity] = useState(1);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [ingredients, setIngredients] = useState({
    meditation: "incomplete",
    base: "incomplete",
    energizer: "incomplete",
    potion: "incomplete"
  });
  const [breathing, setBreathing] = useState(false);

  const handleSetScene = (newScene) => {
    // TODO: set scene / dialog box transition
    setScene(newScene.split("-")[0]);
    handleSetDialogScene(newScene);
  }
  const handleSetDialogScene = (newScene) => {
    setDialogScene(newScene);
    setCurrentMessage(0);
    setDialogOpacity(1);
  }
  const handleCloseDialog = () => {
    setDialogOpacity(0);
  }
  const completeMeditation = () => {
    setIngredients({
      ...ingredients,
      meditation: "complete"
    });
  }
  const completeBase = (newBase) => {
    setIngredients({
      ...ingredients,
      base: newBase
    });
  }
  const completeEnergizer = (newEnergizer) => {
    setIngredients({
      ...ingredients,
      energizer: newEnergizer
    });
  }
  const completePotion = () => {
    setIngredients({
      ...ingredients,
      potion: "complete"
    });
  }

  const exitIcon = () => {
    if(scene !== "forest") {
      return <ExitBtn
      restart={() => {
        handleSetScene("forest");
      }}
      />
    }
  }
  const progressBar = () => {
    if(!dialogScene in ["forest", "cottage-pre-cosmic", "cosmic-pre-breath"]) {
      return 
    }
  }
  const display = () => {
    if(scene == "forest") {
      console.log("forest");
      return <Forest />
    }
    if(scene.includes("cottage")) {
      console.log("cottage");
      return <Cottage />
    }
    if(scene.includes("cosmic")) {
      return <Cosmic
      breathing={breathing} setBreathing={setBreathing}
      handleSetDialogScene={handleSetDialogScene}
      completeMeditation={completeMeditation} />
    }
    if(scene == "garden") {
      return <Garden
      handleSetDialogScene={handleSetDialogScene} />
    }
    if(scene == "desk") {
      return <Forest />
    }
  }
  const play = () => {
    new Audio(music).play();
  }
  
  return (
    <>
      {exitIcon()}
      {display()}
      <DialogBox
      scene={dialogScene}
      handleSetScene={handleSetScene}
      handleCloseDialog={handleCloseDialog}
      currentMessage={currentMessage}
      setCurrentMessage={setCurrentMessage}
      dialogOpacity={dialogOpacity}
      setBreathing={setBreathing}
      completeBase={completeBase}
      playMusic={play}
      />
    </>
  );
}

export default App;
