import React, { useRef, useState, Suspense } from 'react';

import Forest from './Canvases/Forest';
import Cottage from './Canvases/Cottage';
import Cosmic from './Canvases/Cosmic';
import Garden from './Canvases/Garden';
import DialogBox from './Dialogue/Dialogue';

// TODO: add BGM
// TODO: larger font
/* scenes: 
"forest", "cottage-pre-cosmic", "cosmic-pre-breath", "cosmic-post-breath", 
"cottage-pre-garden", "garden", "cottage-pre-desk", "desk", "cottage-pre-potion"
*/

function App() {
  const [scene, setScene] = useState("cosmic-pre-breath");
  const [dialogScene, setDialogScene] = useState("cosmic-pre-breath");
  const [dialogOpacity, setDialogOpacity] = useState(1);
  const [currentMessage, setCurrentMessage] = useState(0);

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
      handleSetDialogScene={handleSetDialogScene} />
    }
    if(scene == "garden") {
      return <Garden />
    }
    if(scene == "desk") {
      return <Forest />
    }
  }

  return (
    <>
      {display()}
      <DialogBox
      scene={dialogScene}
      handleSetScene={handleSetScene}
      handleCloseDialog={handleCloseDialog}
      currentMessage={currentMessage}
      setCurrentMessage={setCurrentMessage}
      dialogOpacity={dialogOpacity}
      setBreathing={setBreathing}
      />
    </>
  );
}


export default App;
