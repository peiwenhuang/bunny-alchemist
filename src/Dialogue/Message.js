import  React  from  "react";
import { TypeAnimation } from 'react-type-animation';

const  Message  =  ({ message, speaker })  =>  {
  return (
    <div className="dialogMessage">
      <h3 className="speaker">{speaker}</h3>
      <p>
        {message}
      </p>
      {/* <TypeAnimation
        sequence={[message]}
        speed={90}
        repeat={0}
        cursor={false}
        omitDeletionAnimation={true}
      /> */}
    </div>
  );
};
export  default  Message;