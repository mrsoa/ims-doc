import React, { useState } from 'react';
import { Ripple, calcEventRelativePos } from './ripple';

function RippleButton(props) {
  const [spawnData, setSpawnData] = useState({});
  function onClick(event) {
    props.onClick && props.onClick();
    setSpawnData({
      ...calcEventRelativePos(event),
      time: Date.now(),
    });
  }

  return (
    <button
      {...props}
      type="button"
      className={`g-btn ${props.className || ' '}`}
      onClick={onClick}
      style={props.style}
    >
      <Ripple spawnData={spawnData} />
      <span>{props.children}</span>
    </button>
  );
}

export { RippleButton };
