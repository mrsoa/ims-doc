import React, { useState } from 'react';

export default function ConnetionSystemShow(props) {
  const { data } = props;

  const [state, setstate] = useState(false);
  const hover = () => {
    setstate(!state);
  };

  return (
    <div className="SystemDockingList">
      <div className="container SystemDockingListDiv">
        {data.map(item => (
          <div className="col-xs-1-5 col-sm-1-5 col-md-1-5 col-lg-1-5 ">
            <img
              src={item}
              alt=""
              style={{ width: '100%', height: '100%' }}
            ></img>
          </div>
        ))}
      </div>
      <div style={{ height: '100px' }}></div>
    </div>
  );
}
