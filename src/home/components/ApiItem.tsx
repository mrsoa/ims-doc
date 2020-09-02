import React from 'react';
import { Col } from 'antd';

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

export default function ApiItem(props: ApiItemProps) {
  const { span, image, name, desc, path } = props;
  return (
    <Col className="gutter-row" span={span}>
      <div className="containerList">
        <img src={image} alt="" style={apiItemStyle} alt=""></img>
        <span>{name}</span>
        <a className="waves ts-btn" href={path}>
          {desc}
        </a>
      </div>
    </Col>
  );
}
