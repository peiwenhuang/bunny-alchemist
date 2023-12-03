import { ClosePopup } from "./Button";

import galaxyPath from "../assets/cosmic/galaxy.png";
import camomilePath from "../assets/garden/camomile.png";
import eveningPrimrosePath from "../assets/garden/evening-primrose.png";
import rosePath from "../assets/garden/rose.png";
import theFoolPath from '../assets/desk/the-fool-tarot-card.jpg';
import strengthPath from '../assets/desk/strength-tarot-card.jpg';
import theMagicianPath from '../assets/desk/the-magician-tarot-card.jpg';
import purplePotionPath from "../assets/cottage/purple-potion.png";

/* 
meditation: complete <-> incomplete
base: chamomile, herb 2, herb 3
energizer: card 1, card 2, card 3
potion: complete <-> incomplete
*/


const imgPaths = {
    "Meditation": {
        "Complete": galaxyPath
    },
    "Base": {
        "Chamomile": camomilePath,
        "Eve. Primrose": eveningPrimrosePath,
        "Rose": rosePath
    },
    "Energizer": {
        "The Fool": theFoolPath,
        "Strength": strengthPath,
        "The Magician": theMagicianPath
    },
    "Potion": {
        "Complete": purplePotionPath
    }
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const Progress = ({ ingredients, activeIdx, opacity }) => {
    const ingredientArr = [
        {
            title: "Meditation",
            status: ingredients.meditation === "Incomplete" ? "Incomplete" : "Complete",
            name: ingredients.meditation === "Incomplete" ? "Incomplete" : "Complete",
            active: activeIdx === 0 ? "active" : ""
        },
        {
            title: "Base",
            status: ingredients.base === "Incomplete" ? "Incomplete" : "Complete",
            name: capitalizeFirstLetter(ingredients.base),
            active: activeIdx === 1 ? "active" : ""
        },
        {
            title: "Energizer",
            status: ingredients.energizer === "Incomplete" ? "Incomplete" : "Complete",
            name: capitalizeFirstLetter(ingredients.energizer),
            active: activeIdx === 2 ? "active" : ""
        },
        {
            title: "Potion",
            status: ingredients.potion === "Incomplete" ? "Incomplete" : "Complete",
            name: ingredients.potion === "Incomplete" ? "Incomplete" : "Complete",
            active: activeIdx === 3 ? "active" : ""
        },
    ];

    return (
        <ul className='progressBar fade-wrapper'
        style={{opacity: opacity}}>
            {
                ingredientArr.map((item, key) => {
                    return (
                        <li key={key} className={`${item.active} fade-wrapper`}>
                            <div className='progressIcon-wrapper'>
                                {item.status === "Complete" ? <img src={imgPaths[item.title][item.name]} id={`progress-${key}`} /> : null}
                            </div>
                            <div className="text-container">
                                <h3>{item.title}</h3>
                                <p>{item.name}</p>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    );
}

const ProgressPopup = ({ show, hide, ingredients, active }) => {
    return (
        <div className="popup-container" style={{display: show ? "block" : "none"}}>
            <div className="popup">
                <div className="header">
                    <h2>Progress</h2>
                    <ClosePopup handleClick={() => hide()} />
                </div>
                <div className="progress-wrapper">
                    <Progress
                    opacity={1}
                    ingredients={ingredients}
                    activeIdx={active}
                    />
                </div>
            </div>
        </div>
    );
}



export default Progress;
export { ProgressPopup };