import  React  from  "react";
import { TypeAnimation } from 'react-type-animation';

const  Message  =  ({ message, speaker })  =>  {
  return (
    <div  className="dialogMessage">
      <h3 className="speaker">{speaker}</h3>
      <TypeAnimation
        sequence={message}
        speed={80}
        repeat={0}
        cursor={false}
      />
    </div>
  );
};
export  default  Message;