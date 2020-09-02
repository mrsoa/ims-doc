import React from 'react';

interface UpdateList {
  date: string;
  desc: string;
}

interface UpdateLogProps {
  data: Array<UpdateList>;
}

export default function UpdateLog(props: UpdateLogProps) {
  const { data } = props;
  return (
    <div className="container">
      <div className="col-md-1 col-sm-1 col-xs-1 col-lg-1"></div>
      <div className="col-md-10 col-sm-10 col-xs-10 col-lg-10 apiMessageList">
        {data.map(item => (
          <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
            <span>{item.date}</span>
            <span>{item.desc}</span>
          </div>
        ))}
      </div>
      <div className="col-md-1 col-sm-1 col-xs-1 col-lg-1"></div>
    </div>
  );
}
