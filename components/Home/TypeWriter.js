import React from "react";
import ReactTypingEffect from 'react-typing-effect';

const TypeWriter = () => {
  return (
  
        <>
      <ReactTypingEffect
       
        text={["Full Stack Developer !","Front End Developer !", "Back End Developer !","Software Engineer !"]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1 style={{fontWeight:"bold"}}>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={ { color: '#583ee8'} }
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
    </>
  );
};
export default TypeWriter;
