import React, { useRef, useState, Suspense } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// designing dialogue boxes (ref: https://codeworkshop.dev/blog/2020-03-01-creating-an-rpg-dialog-effect-with-react-and-react-spring)

import { NextBtn, EnterBtn, CloseBtn } from '../Components/Button';
import Message from './Message';

const DialogBox = ({ scene, handleSetScene, handleCloseDialog, currentMessage, setCurrentMessage, dialogOpacity, setBreathing, completeBase, playMusic }) => {
    const handleClick = () => {
        if (currentMessage < msgLength - 1) {
            setCurrentMessage(currentMessage + 1);
        }
        else {
            setCurrentMessage(0);
        }
    };

    const scene_messages = {
        "forest": [
            {
                message: "Welcome.\nWe've been waiting for you...",
                response: [
                    <NextBtn
                    content={"Who's this?"}
                    handleClick={() => {
                        playMusic();
                        handleClick();
                    }} 
                    />
                    ,
                    <EnterBtn
                    content={"Skip & Enter"}
                    handleSetScene={() => {
                        handleSetScene();
                        handleClick();
                    }}
                    scene={"cottage-pre-cosmic"}
                    />
                ]
            },
            {
                message: "I have guided you in another life,\nassisted you in your dreams,\nand will continue to be your loyal companion throughout your journey.",
                response: []
            },
            {
                message: "You chose to forget me simply to experience knowing me again.\nBehind the door lies the secret you've already known.",
                response: [
                    <EnterBtn
                    content={"- Enter -"}
                    handleSetScene={handleSetScene}
                    scene={"cottage-pre-cosmic"}
                    />
                ]
            }
        ],
        "cottage-pre-cosmic": [
            {
                message: "You're finally home, my love.",
                response: [
                    <NextBtn
                    content={"Do I know you...?"}
                    handleClick={handleClick}
                    />
                ]
            },
            {
                message: "I am Leymus, a herbalist alchemist and the keeper of this cottage.",
                response: []
            },
            {
                message: "You have come to me in times of hurt, in your dreams, for my magic potions always heal and invigorate.",
                response: [
                    <NextBtn
                    content={"That's cool! Can I make one?"}
                    handleClick={handleClick}
                    />
                ]
            },
            {
                message: "Of course! That is what I am always here for.",
                response: []
            },
            {
                message: "Before we start, let's do a little ritual to get to a calm head space in order to make pure and magical potions.",
                response: []
            },
            {
                message: "We will be using my celestial globe here to relax, let go, surrender to the galaxy, just for 1 minute...",
                response: [
                    <EnterBtn
                    content={"- Start -"}
                    handleSetScene={handleSetScene}
                    scene={"cosmic-pre-breath"}
                    />
                ]
            }
        ],
        "cosmic-pre-breath": [
            {
                message: "Welcome to the tranquil cosmos.",
                response: []
            },
            {
                message: "We are doing a short 1-minute breathing technique called “Box Breathing”. It is often used to manage our emotions when we feel paralyzed by extreme levels of stress.",
                response: []
            },
            {
                message: "We can practice box breathing to control our ruminating thoughts to focus and calm ourselves.",
                response: []
            },
            {
                message: "The practice is simple: Breathe in for the count of four, hold your breath for the count of four, breathe out for the count of four, hold for the count of four, and repeat.",
                response: []
            },
            {
                message: "Let's focus on this box in front of you...",
                response: [
                    <CloseBtn
                    handleCloseDialog={() => {
                        handleCloseDialog();
                        setBreathing(true);
                    }}
                    />
                ]
            }
        ], 
        "cosmic-post-breath": [
            {
                message: "Great job.",
                response: [
                    <EnterBtn
                    content={"- Go back to cottage -"}
                    handleSetScene={handleSetScene}
                    scene={"cottage-pre-garden"}
                    />
                ]
            },
        ],
        "cottage-pre-garden": [
            // TODO: progress bar of base, card, etc
            {
                message: "Welcome back. Hopefully you are feeling better, even if it is just for a moment.",
                response: []
            },
            {
                message: "Now, we can choose the base ingredient for our potion. Could you go to my garden and pick one for me?",
                response: [
                    <EnterBtn
                    content={"- Lead me to your garden then! -"}
                    handleSetScene={handleSetScene}
                    scene={"garden"}
                    />
                ]
            }
        ],
        "garden": [
            {
                message: "Only plants with a hovering star are ripe for use. Click on them to see their effects.",
                response: [
                    <CloseBtn
                    handleCloseDialog={handleCloseDialog}
                    />
                ]
            }
        ],
        "chamomile": [
            {
                message: "Chamomile. It's used for fighting anxiety and depression and acts as a mild sedative which calms nerves and reduces anxiety.",
                response: [
                    <EnterBtn
                    content={"- Pick Chamomile as Base -"}
                    handleSetScene={handleSetScene}
                    onClick={() => {
                        completeBase("chamomile");
                    }}
                    scene={"cottage-pre-desk"}
                    />,
                    <CloseBtn
                    content="Cancel"
                    handleCloseDialog={handleCloseDialog}
                    />
                ]
            }
        ],
        "herb 2": [
            {
                message: "herb 2. It's used for fighting anxiety and depression and acts as a mild sedative which calms nerves and reduces anxiety.",
                response: [
                    <EnterBtn
                    content={"- Pick herb 2 as Base -"}
                    handleSetScene={handleSetScene}
                    onClick={() => {
                        completeBase("herb 2");
                    }}
                    scene={"cottage-pre-desk"}
                    />,
                    <CloseBtn
                    content="Cancel"
                    handleCloseDialog={handleCloseDialog}
                    />
                ]
            }
        ],
        "herb 3": [
            {
                message: "herb 3. It's used for fighting anxiety and depression and acts as a mild sedative which calms nerves and reduces anxiety.",
                response: [
                    <EnterBtn
                    content={"- Pick herb 3 as Base -"}
                    handleSetScene={handleSetScene}
                    onClick={() => {
                        completeBase("herb 3");
                    }}
                    scene={"cottage-pre-desk"}
                    />,
                    <CloseBtn
                    content="Cancel"
                    handleCloseDialog={handleCloseDialog}
                    />
                ]
            }
        ],
        "desk": [
    
        ]
    };
    const msgLength = scene_messages[scene].length;


    const button = () => {
        if(scene_messages[scene][currentMessage].response.length) {
            return scene_messages[scene][currentMessage].response.map((item) => {
                return item;
            })
        }
        return <NextBtn
        content={
            <KeyboardArrowDownIcon
            />
        }
        handleClick={handleClick}
        />
    }
    
    return (
        <div className="dialogWindow fade-wrapper"
        style={{opacity: dialogOpacity}}>
            <Message message={scene_messages[scene][currentMessage].message} key={currentMessage} />
            <div className="responses">
                {button()}
            </div>
        </div>
        
    );
};

export default DialogBox;