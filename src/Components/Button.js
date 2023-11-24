import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function ExitBtn ({ restart }) {
    return (
        <div className='exitBtn'
        onClick={() => {
            window.confirm("Are you sure you want to exit to the start? All your progress will be lost.");
            restart();
        }}>
        <ExitToAppIcon fontSize='large' />
        </div> 
    );
}

function NextBtn ({ handleClick, content = "Next" }) {
    return (
        <div onClick={handleClick} className="dialogFooter">
            {content}
        </div>
    );
}

function EnterBtn ({ scene, handleSetScene, content = "Enter", onClick = null }) {
    if(onClick === null) {
        onClick = () => {
            handleSetScene(scene);
        }
    }
    return (
        <div onClick={onClick} className='dialogFooter'>
            {content}
        </div>
    );
}

function CloseBtn({ handleCloseDialog, content = null }) {
    if(content === null) {
        content = <KeyboardArrowDownIcon />
    }
    return (
        <div onClick={() => {
            handleCloseDialog();
        }} className='dialogFooter'>
            {content}
        </div>
    );
}

export {ExitBtn, NextBtn, EnterBtn, CloseBtn};