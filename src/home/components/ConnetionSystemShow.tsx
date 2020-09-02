import React from 'react';

export default function ConnetionSystemShow(props) {
  const { data } = props;
  return (
    <div className="SystemDockingList">
      <div className="container SystemDockingListDiv">
        {data.map(item => (
          <div className="col-xs-1-5 col-sm-1-5 col-md-1-5 col-lg-1-5 ">
            <img src={item} alt="" width="100%" height="100%"></img>
          </div>
        ))}
      </div>
    </div>
  );
}
