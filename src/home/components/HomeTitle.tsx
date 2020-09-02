import React from 'react';

export default function HomeTitle(props) {
  const { title } = props;
  return (
    <div className="tit" align="center" style={{ marginBottom: '100px' }}>
      <span></span>
      <span></span>
      <span>{title}</span>
      <span></span>
      <span></span>
    </div>
  );
}
