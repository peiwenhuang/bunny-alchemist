import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import lotusPath from "../assets/cosmic/lotus.png";

/* 
meditation: complete <-> incomplete
base: chamomile, herb 2, herb 3
energizer: card 1, card 2, card 3
potion: complete <-> incomplete
*/


const imgPaths = [lotusPath, lotusPath, lotusPath, lotusPath];

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const Progress = ({ ingredients, activeIdx }) => {
    const ingredientArr = [
        {
            title: "Meditation",
            status: ingredients.meditation === "incomplete" ? "Incomplete" : "Complete",
            name: ingredients.meditation === "incomplete" ? "Incomplete" : "Complete",
            active: activeIdx === 0 ? "active" : ""
        },
        {
            title: "Base",
            status: ingredients.base === "incomplete" ? "Incomplete" : "Complete",
            name: capitalizeFirstLetter(ingredients.base),
            active: activeIdx === 1 ? "active" : ""
        },
        {
            title: "Energizer",
            status: ingredients.energizer === "incomplete" ? "Incomplete" : "Complete",
            name: capitalizeFirstLetter(ingredients.energizer),
            active: activeIdx === 2 ? "active" : ""
        },
        {
            title: "Potion",
            status: ingredients.potion === "incomplete" ? "Incomplete" : "Complete",
            name: ingredients.potion === "incomplete" ? "Incomplete" : "Complete",
            active: activeIdx === 3 ? "active" : ""
        },
    ];

    return (
        <ul className='progressBar'>
            {
                ingredientArr.map((item, key) => {
                    return (
                        <li key={key} className={`${item.active} fade-wrapper`}>
                            <div className='progressIcon-wrapper'>
                                {item.status === "Complete" ? <img src={imgPaths[key]} /> : null}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.name}</p>
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default Progress;