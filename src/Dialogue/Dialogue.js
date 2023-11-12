import React, { useRef, useState, Suspense } from 'react';
// designing dialogue boxes (ref: https://codeworkshop.dev/blog/2020-03-01-creating-an-rpg-dialog-effect-with-react-and-react-spring)

import Message from './Message';

// Our DialogBox Component.
const DialogBox = ({ messages, msgLength }) => {
    const [currentMessage, setCurrentMessage] = useState(0);
    const handleClick = () => {
        if (currentMessage < msgLength - 1) {
            setCurrentMessage(currentMessage + 1);
        }
        else {
            setCurrentMessage(0);
        }
    };
    return (
        <div className="dialogWindow">
            <div className="dialogTitle">Cameron</div>
            <Message message={messages[currentMessage]} key={currentMessage} />
            <div onClick={handleClick} className="dialogFooter">
                Next
            </div>
        </div>
        
    );
};

export default DialogBox;