import React, { useState, useEffect } from 'react';
import { Col } from 'antd';
import { RippleButton } from '../../ripplebuttom/ripple-button';

const apiItemStyle = {
  width: '100px',
  height: '100px',
};

interface ApiItemProps {
  span: any;
  image: string;
  name: string;
  desc: string;
  path: string;
}

const mouseEnterStyle = {
  border: '1px solid #488bff',
};

const mouseLeaveStyle = {
  border: '1px solid #488bff',
};

export default function ApiItem(props: ApiItemProps) {
  const { span, image, name, desc, path } = props;

  const [state, setstate] = useState(false);

  let mouseDivStyle;

  let mouseAstyle;

  const mouseEnter = () => {
    setstate(!state);
    console.log('state', state);
    console.log('mouseDivStyle', mouseDivStyle);
    console.log('mouseAstyle', mouseAstyle);
  };

  useEffect(() => {
    if (state) {
      mouseDivStyle = {
        border: '1px solid #eeeeee',
      };
      mouseAstyle = {
        backgroundColor: '#fff',
        color: '#488bff',
      };
    } else {
      mouseDivStyle = {
        border: '1px solid #488bff',
      };
      mouseAstyle = {
        backgroundColor: '#488bff',
        color: '#fff',
      };
    }
  }, []);

  return (
    <div className="col-md-3 col-sm-6 col-xs-6">
      <div
        className="containerList"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseEnter}
        style={
          state
            ? { border: '1px solid #488bff' }
            : { border: '1px solid #eeeeee' }
        }
      >
        <img src={image} alt="" style={apiItemStyle} alt=""></img>
        <span>{name}</span>
        <a
          className="waves ts-btn ripple"
          href={path}
          style={
            state
              ? {
                  backgroundColor: '#488bff',
                  color: '#fff',
                }
              : {
                  backgroundColor: '#fff',
                  color: '#488bff',
                }
          }
        >
          {desc}
        </a>
      </div>
    </div>
  );
}
