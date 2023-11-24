import React, { useRef, useState, Suspense } from 'react';

import { ExitBtn } from './Components/Button';
import Progress from './Components/Progress';
import Forest from './Canvases/Forest';
import Cottage from './Canvases/Cottage';
import Cosmic from './Canvases/Cosmic';
import Garden from './Canvases/Garden';
import Desk from './Canvases/Desk';
import DialogBox from './Dialogue/Dialogue';

import music from './assets/forest/forest-bgm.mp3';
// TODO: dialog box with character / plant img
// TODO: model env + animate character
// TODO: on refresh -> alert "Are you sure?"
// TODO: cosmic add "breath in/out" text
// TODO: 3D depth map

/* scenes: 
"forest", "cottage-pre-cosmic", "cosmic-pre-breath", "cosmic-post-breath", 
"cottage-pre-garden", "garden", "cottage-pre-desk", "desk", "cottage-pre-potion"
*/

function arrayContains(item, arr) {
  return (arr.indexOf(item) > -1);
}

function App() {
  const [scene, setScene] = useState("desk");
  const [dialogScene, setDialogScene] = useState("desk");
  const [dialogOpacity, setDialogOpacity] = useState(1);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [ingredients, setIngredients] = useState({
    meditation: "incomplete",
    base: "incomplete",
    energizer: "incomplete",
    potion: "incomplete"
  });
  const [active, setActive] = useState(-1);
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

    // !dialogScene in ["forest", "cottage-pre-cosmic", "cosmic-pre-breath"]
    if(!arrayContains(dialogScene, ["forest", "cottage-pre-cosmic", "cosmic-pre-breath", "cosmic-post-breath"])) {;
      return <Progress
      ingredients={ingredients}
      activeIdx={active}
      />
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
      return <Desk />
    }
  }
  const play = () => {
    const bgm = new Audio(music);
    bgm.loop = true;
    bgm.play();
  }
  
  return (
    <>
      {progressBar()}
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
