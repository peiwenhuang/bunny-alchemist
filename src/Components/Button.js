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

function NextBtn ({ handleClick, content = null, primary = false }) {
    if(content === null) {
        content = <KeyboardArrowDownIcon sx={{fontSize: 40}} className="next-arrow" />
    }
    return (
        <div onClick={handleClick} className={primary ? "primary" : ""}>
            {content}
        </div>
    );
}

function EnterBtn ({ handleSetScene, content = "Enter", onClick = null, primary = false }) {
    if(onClick === null) {
        onClick = () => {
            handleSetScene();
        }
    }
    return (
        <div onClick={onClick} className={primary ? "primary" : ""}>
            {content}
        </div>
    );
}

function CloseBtn({ handleCloseDialog, content = null, primary = false }) {
    if(content === null) {
        content = <KeyboardArrowDownIcon />
    }
    return (
        <div onClick={() => {
            handleCloseDialog();
        }} className={primary ? "primary" : ""}>
            {content}
        </div>
    );
}

export {ExitBtn, NextBtn, EnterBtn, CloseBtn};