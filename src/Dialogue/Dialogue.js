import React, { useRef, useState, Suspense } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// designing dialogue boxes (ref: https://codeworkshop.dev/blog/2020-03-01-creating-an-rpg-dialog-effect-with-react-and-react-spring)

import { NextBtn, EnterBtn, CloseBtn } from '../Components/Button';
import Message from './Message';

import character from "../assets/griffon.png";
import galaxy from "../assets/cosmic/galaxy.png";
import camomilePath from "../assets/garden/camomile.png";
import eveningPrimrosePath from "../assets/garden/evening-primrose.png";
import rosePath from "../assets/garden/rose.png";
import letter1 from "../assets/love-letter-1.png";

const DialogBox = ({ scene, handleSetScene, handleSetDialogScene, handleCloseDialog, 
    currentMessage, setCurrentMessage, dialogOpacity, setBreathing, setMakePotion, 
    completeBase, handleLetterPath, setClickable, playMusic, reset }) => {
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
                speaker: "???",
                response: [
                    <NextBtn
                    content={"Who's this?"}
                    primary={true}
                    handleClick={() => {
                        playMusic();
                        handleClick();
                    }} 
                    />
                    ,
                    <EnterBtn
                    content={"Skip & Enter"}
                    handleSetScene={() => {
                        playMusic();
                        handleSetScene("cottage-pre-cosmic");
                        setTimeout(() => handleClick(), 800);
                    }}
                    />
                ]
            },
            {
                message: "I have guided you in another life,\ntalked with you in your dreams,\nand will continue to be your loyal companion throughout your journey.",
                speaker: "???",
                response: []
            },
            {
                message: "You chose to forget me simply to experience knowing me again.\nBehind the door lies the secret you've already known.",
                speaker: "???",
                response: [
                    <EnterBtn
                    primary={true}
                    content={"- Enter -"}
                    handleSetScene={() => {
                        handleSetScene("cottage-pre-cosmic");
                    }}
                    />
                ]
            }
        ],
        "cottage-pre-cosmic": [
            {
                message: "You're finally home, my love.",
                speaker: "???",
                response: [
                    <NextBtn
                    content={"Do I know you...?"}
                    handleClick={handleClick}
                    />
                ]
            },
            {
                message: "I am Leymus, a herbalist, an alchemist, and the keeper of this cottage.",
                speaker: "Leymus",
                img: character,
                response: []
            },
            {
                message: "You have come to me in times of hurt, in your dreams, for my magic potions always heal and invigorate.",
                speaker: "Leymus",
                img: character,
                response: [
                    <NextBtn
                    content={"That's cool! Can I make one?"}
                    handleClick={handleClick}
                    />
                ]
            },
            {
                message: "Of course! That is what I am always here for.",
                speaker: "Leymus",
                img: character,
                response: []
            },
            {
                message: "Before we start, let's do a little ritual to get to a calm head space in order to make pure and magical potions.",
                speaker: "Leymus",
                img: character,
                response: []
            },
            {
                message: "My celestial globe will immerse you in the Space to relax, let go, surrender to the galaxy, just for 1 minute...",
                speaker: "Leymus",
                img: character,
                response: [
                    <EnterBtn
                    primary={true}
                    content={"- Start -"}
                    handleSetScene={() => {
                        handleSetScene("cosmic-pre-breath");
                    }}
                    />
                ]
            }
        ],
        "cosmic-pre-breath": [
            {
                message: "Welcome to the tranquil cosmos.",
                speaker: "Galaxy",
                img: galaxy,
                response: []
            },
            {
                message: "We are doing a short 1-minute breathing technique called “Box Breathing”. It is often used to manage our emotions when we feel paralyzed by extreme levels of stress.",
                speaker: "Galaxy",
                img: galaxy,
                response: []
            },
            {
                message: "We can practice box breathing to control our ruminating thoughts to focus and calm ourselves.",
                speaker: "Galaxy",
                img: galaxy,
                response: []
            },
            {
                message: "The practice is simple: Breathe in for the count of four, hold your breath for the count of four, breathe out for the count of four, hold for the count of four, and repeat.",
                speaker: "Galaxy",
                img: galaxy,
                response: []

            },
            {
                message: "Let's focus on this beautiful sphere in front of you...",
                speaker: "Galaxy",
                img: galaxy,
                response: [
                    <CloseBtn
                    handleCloseDialog={() => {
                        handleCloseDialog();
                        setBreathing(true);
                    }}
                    content={"- OK -"}
                    />
                ]
            }
        ], 
        "cosmic-post-breath": [
            {
                message: "Great job.",
                speaker: "Galaxy",
                img: galaxy,
                response: [
                    <EnterBtn
                    primary={true}
                    content={"- Go back to cottage -"}
                    handleSetScene={() => handleSetScene("cottage-pre-garden")}
                    />
                ]
            },
        ],
        "cottage-pre-garden": [
            {
                message: "Welcome back. Hopefully you are feeling better, even if it is just for a moment.",
                speaker: "Leymus",
                img: character,
                response: []
            },
            {
                message: "Now, we can choose the base ingredient for our potion. Could you go to my garden and pick one for me?",
                speaker: "Leymus",
                img: character,
                response: [
                    <EnterBtn
                    primary={true}
                    content={"- Lead me to your garden then! -"}
                    handleSetScene={() => handleSetScene("garden")}
                    />
                ]
            }
        ],
        "garden": [
            {
                message: "Only the hovering plants are ripe for use. Click on them to see their effects.",
                speaker: "Leymus",
                img: character,
                response: [
                    <CloseBtn
                    content={"- OK -"}
                    handleCloseDialog={handleCloseDialog}
                    />
                ]
            }
        ],
        "chamomile": [
            {
                message: "It's used for fighting anxiety and depression and acts as a mild sedative which calms nerves and reduces anxiety.",
                speaker: "Chamomile",
                img: camomilePath,
                response: [
                    <EnterBtn
                    primary={true}
                    content={"- Pick Chamomile as Base -"}
                    handleSetScene={() => {
                        completeBase("chamomile");
                        handleSetScene("cottage-pre-desk-chamomile");
                    }}
                    />,
                    <CloseBtn
                    content="Cancel"
                    handleCloseDialog={() => {
                        setClickable(true);
                        handleCloseDialog();
                    }}
                    />
                ]
            }
        ],
        "evening-primrose": [
            {
                message: "Its seeds can be used to make oil that may help ease acne, relieve PMS symptoms such as swelling and irritability.",
                speaker: "Evening Primrose",
                img: eveningPrimrosePath,
                response: [
                    <EnterBtn
                    primary={true}
                    content={"- Pick Primrose as Base -"}
                    handleSetScene={() => {
                        completeBase("Eve. Primrose");
                        handleSetScene("cottage-pre-desk-evening-primrose");
                    }}
                    />,
                    <CloseBtn
                    content="Cancel"
                    handleCloseDialog={() => {
                        setClickable(true);
                        handleCloseDialog();
                    }}
                    />
                ]
            }
        ],
        "rose": [
            {
                message: "People often have rose tea to enjoy its sweet aroma along with its relaxation, stress reduction and antidepressant effects.",
                speaker: "Rose",
                img: rosePath,
                response: [
                    <EnterBtn
                    primary={true}
                    content={"- Pick Rose as Base -"}
                    handleSetScene={() => {
                        completeBase("Rose");
                        handleSetScene("cottage-pre-desk-rose");
                    }}
                    />,
                    <CloseBtn
                    content="Cancel"
                    handleCloseDialog={() => {
                        setClickable(true);
                        handleCloseDialog();
                    }}
                    />
                ]
            }
        ],
        "cottage-pre-desk-chamomile": [
            {
                message: "Welcome back. I see that you've chosen chamomile. Good choice for anxiety relief.",
                speaker: "Leymus",
                img: character,
                response: []
            },
            {
                message: "Now it's time to pick our core energizer... Why don't we do a little tarot drawing at my alchemy table to match your energy.",
                speaker: "Leymus",
                img: character,
                response: [
                    <EnterBtn
                    primary={true}
                    content={"- Sure, let's pick a card! -"}
                    handleSetScene={() => {
                        handleSetScene("desk");
                    }}
                    />
                ]
            }
        ],
        "cottage-pre-desk-evening-primrose": [
            {
                message: "Welcome back. I see that you've chosen evening primrose. Good choice for improving skin health.",
                speaker: "Leymus",
                img: character,
                response: []
            },
            {
                message: "Now it's time to pick our core energizer... Why don't we do a little tarot drawing at my alchemy table to match your energy.",
                speaker: "Leymus",
                img: character,
                response: [
                    <EnterBtn
                    primary={true}
                    content={"- Sure, let's pick a card! -"}
                    handleSetScene={() => {
                        handleSetScene("desk");
                    }}
                    />
                ]
            }
        ],
        "cottage-pre-desk-rose": [
            {
                message: "Welcome back. I see that you've chosen rose. Good choice for stress relief.",
                speaker: "Leymus",
                img: character,
                response: []
            },
            {
                message: "Now it's time to pick our core energizer... Why don't we do a little tarot drawing at my alchemy table to match your energy.",
                speaker: "Leymus",
                img: character,
                response: [
                    <EnterBtn
                    primary={true}
                    content={"- Sure, let's pick a card! -"}
                    handleSetScene={() => {
                        handleSetScene("desk");
                    }}
                    />
                ]
            }
        ],
        "desk": [
            {
                message: "Three cards lie ahead, reflecting your current state of mind. Pick one to which our magic potion will tailor.",
                speaker: "Leymus",
                img: character,
                response: [
                    <CloseBtn
                    content={"- OK -"}
                    handleCloseDialog={handleCloseDialog}
                    />
                ]
            }
        ],
        "desk-the-fool": [
            {
                message: "Hmm. The Fool. Beginnings, innocence, spontaneity, a free spirit.",
                speaker: "Leymus",
                img: character,
                response: []
            },
            {
                message: "You are on the verge of an unexpected and exciting new adventure in your daily life. This may require you to take a blind leap of faith.",
                speaker: "Leymus",
                img: character,
                response: [
                    <EnterBtn
                    primary={true}
                    content={"- Next -"}
                    handleSetScene={() => {
                        handleSetScene("cottage-the-fool");
                    }}
                    />
                ]
            }
        ],
        "desk-strength": [
            {
                message: "Hmm. Strength. Courage, compassion, a triumphant conclusion.",
                speaker: "Leymus",
                img: character,
                response: []
            },
            {
                message: "You are persevering and can achieve anything you want. You're committed to what you must do and go about it very well and maturely. Keep behaving this way, and you will succeed in anything you want.",
                speaker: "Leymus",
                img: character,
                response: [
                    <EnterBtn
                    primary={true}
                    content={"- Next -"}
                    handleSetScene={() => {
                        handleSetScene("cottage-strength");
                    }}
                    />
                ]
            },
        ],
        "desk-the-magician": [
            {
                message: "Hmm. The Magician. Willpower, creation, inner strength.",
                speaker: "Leymus",
                img: character,
                response: []
            },
            {
                message: "You have the drive and power to make your dreams happen. The outer world will follow if you create your inner world. Yet, you have to focus and concentrate on achieving your dream.",
                speaker: "Leymus",
                img: character,
                response: [
                    <EnterBtn
                    primary={true}
                    content={"- Next -"}
                    handleSetScene={() => {
                        handleSetScene("cottage-the-magician");
                    }}
                    />
                ]
            }
        ],
        "cottage-the-fool": [
            {
                message: "Wow. The fool. I've always admired their free spirit.",
                speaker: "Leymus",
                img: character,
                response: []
            },
            {
                message: "Now that we've gathered all the ingredients, let me perform a little magic for you...",
                speaker: "Leymus",
                img: character,
                response: [
                    <CloseBtn
                    handleCloseDialog={() => {
                        handleCloseDialog();
                        setMakePotion(true);
                    }}
                    content={"- OK -"}
                    />
                ]
            }
        ],
        "cottage-strength": [
            {
                message: "Wow. Strength. I've always admired their determination.",
                speaker: "Leymus",
                img: character,
                response: []
            },
            {
                message: "Now that we've gathered all the ingredients, let me perform a little magic for you...",
                speaker: "Leymus",
                img: character,
                response: [
                    <CloseBtn
                    handleCloseDialog={() => {
                        handleCloseDialog();
                        setMakePotion(true);
                    }}
                    content={"- OK -"}
                    />
                ]
            }
        ],
        "cottage-the-magician": [
            {
                message: "Wow. The magician. I've always admired their creativity.",
                speaker: "Leymus",
                img: character,
                response: []
            },
            {
                message: "Now that we've gathered all the ingredients, let me perform a little magic for you...",
                speaker: "Leymus",
                img: character,
                response: [
                    <CloseBtn
                    handleCloseDialog={() => {
                        handleCloseDialog();
                        setMakePotion(true);
                    }}
                    content={"- OK -"}
                    />
                ]
            }
        ],
        "cottage-purple-potion": [
            {
                message: "Voila! Here's your personalized potion, take a look at the note I have made just for you...",
                speaker: "Leymus",
                img: character,
                response: [
                    <NextBtn
                    primary={true}
                    content={"- Take A Look -"}
                    handleClick={() => {
                        handleLetterPath(letter1);
                        handleSetDialogScene("cottage-letter-1");
                    }}
                    />
                ]
            }
        ],
        "cottage-yellow-potion": [

        ],
        "cottage-red-potion": [

        ],
        "cottage-letter-1": [
            {
                message: "I am free to love, to know peace, and to bring joy.",
                speaker: "Note",
                response: [
                    <EnterBtn
                    content={"- Go Back -"}
                    handleSetScene={() => {
                        handleSetDialogScene("cottage-finale");
                    }}
                    />
                ]
            }
        ],
        "cottage-finale": [
            {
                message: "Thank you for allowing me to make you this beautiful potion. Is there anything I can do?",
                speaker: "Leymus",
                img: character,
                response: [
                    <NextBtn
                    content={"- Remake Potion -"}
                    handleClick={() => {
                        reset();
                    }}
                    />,
                    <EnterBtn
                    primary={true}
                    content={"- Finish -"}
                    handleSetScene={() => {
                        handleSetScene("credit");
                        handleLetterPath(null);
                    }}
                    />
                ]
            }
        ],
        "credit": [
            {
                message: "Thank you for spending time with me here, I hope we'll meet again soon.",
                speaker: "Leymus",
                img: character,
                response: [
                    <NextBtn
                    content={"- Play Again -"}
                    handleClick={() => {
                        reset();
                    }}
                    />
                ]
            }
        ]
    };
    const msgLength = scene_messages[scene].length;

    const button = () => {
        if(scene_messages[scene][currentMessage].response.length) {
            return scene_messages[scene][currentMessage].response.map((item, key) => {
                return <li key={key}>
                    {item}
                </li>;
            })
        }
        else {
            return <NextBtn
            handleClick={handleClick}
            />
        }
    }
    
    return (
        <div className="dialog-wrapper fade-wrapper"
        style={{opacity: dialogOpacity, pointerEvents: dialogOpacity === 0 ? "none": "auto"}}>
            <div className="dialogWindow">
                <Message speaker={scene_messages[scene][currentMessage].speaker} message={scene_messages[scene][currentMessage].message} key={currentMessage} />
                <div className="img-container">
                    <img
                    id={scene_messages[scene][currentMessage].speaker.replace(" ", "-")}
                    style={{display: scene_messages[scene][currentMessage].img ? "block" : "none"}}
                    src={scene_messages[scene][currentMessage].img} alt="speaker character" />
                </div>
            </div>
            <ul className="dialogFooter">
                {button()}
            </ul>
        </div>
    );
};

export default DialogBox;