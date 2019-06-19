import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
//import PlayIcon from '../img/play.svg';
//import StopIcon from '../img/stop.svg';
// Load styles
require('../styles/default.scss');


const Speech = (props) => {
  const [animating, setAnimating] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  
  useEffect(() => {
    if(props.isOpen){
    }else{

    }
    /*
    if(props.isOpen){
      setOverlayStyle({display: "block", opacity: "0"});
      setplayControllerStyle({display: "block", opacity: "0"});
      setOverlayStyle({display: "block", opacity: "0"});
      setTimeout(() => {
        setOverlayStyle({display: "block", opacity: "1"});
        setplayControllerStyle({display: "block", opacity: "1"});
      },100);
    }else{
      setOverlayStyle({display: "block", opacity: "0"});
      setplayControllerStyle({display: "block", opacity: "0"});
      setTimeout(() => {
        setOverlayStyle({display: "none", opacity: "0"});
        setplayControllerStyle({display: "none", opacity: "0"});
      },transition);
    }
    */
  },[props.isOpen],);

  const defaultProps = {
    title: props.title,
    text: props.text,
    lang: props.lang,
    pitch: props.pitch
  };

  const wrapperClass = 'speech-controller-wrapper';
  const triggerClass = 'speech-controller-trigger';

  let playControllerClass = `speech-controller ${props.isOpen ? 'is-open' : ''}`.trim();

  const synth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance();
  utterThis.text = defaultProps.text;
  utterThis.pitch = defaultProps.pitch; //default 1
  utterThis.lang = defaultProps.lang;

  const speak = () => {
    synth.speak(utterThis);
    setIsPlay(true);
  }
  const cancel = () => {
    synth.cancel();
    setIsPlay(false);
  }
  const toggle = () => {
    props.toggleFunc();
    cancel();
  }

  return(
      <div className={wrapperClass}>
        <div className={triggerClass}>
          {props.children}
        </div>
        <div className={playControllerClass}>
          {/*<div className="icon" onClick={() => {speak();}} ><img src={PlayIcon} alt="play"/></div>
          <div className="icon" onClick={() => {cancel();}} ><img src={StopIcon} alt="stop"/></div>*/}
          { isPlay ? 
          <div className="icon" onClick={() => {cancel();}} >stop</div> : 
          <div className="icon" onClick={() => {speak();}} >play</div> }
        </div>
      </div>
    );
}

Speech.propTypes = {
  lang: PropTypes.string,
  pitch: PropTypes.number,
  transition: PropTypes.number,
};

Speech.defaultProps = {
  lang: 'en-US',
  pitch: 1,
  transition: 0.5,
};

export default Speech;