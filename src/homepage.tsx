import React, { Component } from 'react';
import { Card, Typography } from 'antd';
const { Title } = Typography;

const gridStyle = {
  width: '20%',
  textAlign: 'center',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
};

const titleStyle = {
  textAlign: 'center',
};

export default class index extends Component {
  render() {
    return (
      <div>
        <Title level={2} style={titleStyle}>
          对接系统
        </Title>
        <Card style={titleStyle}>
          <Card.Grid style={gridStyle}>
            <img
              style={imageStyle}
              alt="sap"
              src="https://mrduan.oss-cn-beijing.aliyuncs.com/openapi/logo/SAP.png"
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <img
              style={imageStyle}
              alt="oracle"
              src="https://mrduan.oss-cn-beijing.aliyuncs.com/openapi/logo/ORACLE.png"
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <img
              style={imageStyle}
              alt="example"
              src="https://mrduan.oss-cn-beijing.aliyuncs.com/openapi/logo/JDE.png"
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <img
              style={imageStyle}
              alt="万维"
              src="https://mrduan.oss-cn-beijing.aliyuncs.com/openapi/logo/%E4%B8%87%E7%BB%B4.png"
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <img
              style={imageStyle}
              alt="东科"
              src="https://mrduan.oss-cn-beijing.aliyuncs.com/openapi/logo/%E4%B8%9C%E7%A7%91.png"
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <img
              style={imageStyle}
              alt="京东"
              src="https://mrduan.oss-cn-beijing.aliyuncs.com/openapi/logo/%E4%BA%AC%E4%B8%9C.png"
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <img
              style={imageStyle}
              alt="拼多多"
              src="https://mrduan.oss-cn-beijing.aliyuncs.com/openapi/logo/%E6%8B%BC%E5%A4%9A%E5%A4%9A.png"
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <img
              style={imageStyle}
              alt="菜鸟"
              src="https://mrduan.oss-cn-beijing.aliyuncs.com/openapi/logo/%E8%8F%9C%E9%B8%9F.png"
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <img
              style={imageStyle}
              alt="天猫"
              src="https://mrduan.oss-cn-beijing.aliyuncs.com/openapi/logo/%E5%A4%A9%E7%8C%AB.png"
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <img
              style={imageStyle}
              alt="致爱智家"
              src="https://mrduan.oss-cn-beijing.aliyuncs.com/openapi/logo/%E8%87%B3%E7%88%B1%E6%99%BA%E5%AE%B6.png"
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <img
              style={imageStyle}
              alt="科勒"
              src="https://mrduan.oss-cn-beijing.aliyuncs.com/openapi/logo/%E7%A7%91%E5%8B%92.png"
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <img
              style={imageStyle}
              alt="惠达"
              src="https://mrduan.oss-cn-beijing.aliyuncs.com/openapi/logo/%E6%83%A0%E8%BE%BE.png"
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <img
              style={imageStyle}
              alt="美标"
              src="https://mrduan.oss-cn-beijing.aliyuncs.com/openapi/logo/%E7%BE%8E%E6%A0%87.png"
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <img
              style={imageStyle}
              alt="贝朗"
              src="https://mrduan.oss-cn-beijing.aliyuncs.com/openapi/logo/%E8%B4%9D%E6%9C%97.png"
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <img
              style={imageStyle}
              alt="顾家家居"
              src="https://mrduan.oss-cn-beijing.aliyuncs.com/openapi/logo/%E9%A1%BE%E5%AE%B6.png"
            />
          </Card.Grid>
        </Card>
      </div>
    );
  }
}
