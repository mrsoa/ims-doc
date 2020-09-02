import React, { Component } from 'react';
import { Row, Col, Divider } from 'antd';
import HomeTitle from './components/HomeTitle';
import ApiItem from './components/ApiItem';
import UpdateLog from './components/UpdateLog';
import ConnetionSystemShow from './components/ConnetionSystemShow';
import './css/bootstrap.min.css';
import './css/index.css';
import logo from './images/logo.png';
import bgs from './images/bgs.png';
import left1 from './images/bgs.png';

import apiIcon1 from './images/apiIcon1.png';
import apiIcon2 from './images/apiIcon2.png';
import apiIcon3 from './images/apiIcon3.png';
import apiIcon4 from './images/apiIcon4.png';
import apiIcon5 from './images/apiIcon5.png';
import apiIcon6 from './images/apiIcon6.png';
import apiIcon7 from './images/apiIcon7.png';
import apiIcon8 from './images/apiIcon8.png';
import SAP from './images/SAP.png';
import ORACLE from './images/ORACLE.png';
import JDE from './images/JDE.png';
import AnyWell from './images/AnyWell.png';
import DONCKE from './images/DONCKE.png';
import JD from './images/JD.png';
import PINDUODUO from './images/PINDUODUO.png';
import CAINIAO from './images/CAINIAO.png';
import TIANMAO from './images/TIANMAO.png';
import ZJZA from './images/ZJZA.png';
import KOHLER from './images/KOHLER.png';
import HUIDA from './images/HUIDA.png';
import MEIBIAO from './images/MEIBIAO.png';
import BRAVAT from './images/BRAVAT.png';
import KUKA from './images/KUKA.png';

const logData = [{}];

export default class index extends Component {
  render() {
    return (
      <div>
        {/* <div className="header">
          <div className="contain">
            <div className="logos">
              <img src={logo} alt=""></img>
            </div>

            <ul className="navUl">
              <li>文档中心</li>
              <li>接入登录</li>
              <li>
                <a className="waves ts-btn">注册</a>
              </li>
            </ul>
          </div>
        </div> */}

        <div className="banner">
          <img src={bgs} alt=""></img>
          <div className="totalTitle">
            <span>欢迎使用蚁安居OpenAPI</span>
            <span>系统自动抓单&nbsp;&nbsp;&nbsp;私密数据共享</span>
          </div>
        </div>

        <div
          className="apiIntroduction clearfix"
          style={{ marginTop: '100px' }}
        >
          <HomeTitle title="API概览"></HomeTitle>

          <div className="container clearfix">
            <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
              <ApiItem
                span="6"
                image={apiIcon1}
                name="订单接入"
                desc="查看说明文档"
                path="/接口文档/订单接入"
              />
              <ApiItem
                span="6"
                image={apiIcon2}
                name="商品同步"
                desc="查看说明文档"
                path="/接口文档/商品同步"
              />
              <ApiItem
                span="6"
                image={apiIcon3}
                name="取消订单"
                desc="查看说明文档"
                path="/接口文档/取消订单"
              />
              <ApiItem
                span="6"
                image={apiIcon4}
                name="电子回单"
                desc="查看说明文档"
                path="/"
              />
              <ApiItem
                span="6"
                image={apiIcon5}
                name="轨迹查询"
                desc="查看说明文档"
                path="/接口文档/服务轨迹"
              />
              <ApiItem
                span="6"
                image={apiIcon6}
                name="库存转移"
                desc="查看说明文档"
                path="/接口文档/库存转移确认"
              />
              <ApiItem
                span="6"
                image={apiIcon7}
                name="时时库存"
                desc="查看说明文档"
                path="/接口文档/客户库存获取"
              />
              <ApiItem
                span="6"
                image={apiIcon8}
                name="库存核对"
                desc="查看说明文档"
                path="/接口文档/库存核对"
              />
            </Row>
          </div>
        </div>

        <div className="apiMessage clearfix">
          <HomeTitle title="最新动态" />
          <UpdateLog
            data={[
              {
                date: '2020-07-29',
                desc:
                  '订单服务轨迹查询接口，新增按照客户订单号，查询条件，新增节点状态对照表',
              },
              { date: '2020-07-28', desc: '新增订单服务轨迹查询接口' },
              { date: '2020-07-28', desc: '库存查询接口新增仓库参数' },
              { date: '2020-07-27', desc: '新增订单查询接口' },
              { date: '2020-07-26', desc: '新增订单取消接口' },
              { date: '2020-07-25', desc: '新增订单接入接口' },
            ]}
          />
        </div>

        <div className="SystemDocking ">
          <HomeTitle title="对接系统" />
          <ConnetionSystemShow
            data={[
              SAP,
              ORACLE,
              JDE,
              AnyWell,
              DONCKE,
              JD,
              PINDUODUO,
              CAINIAO,
              TIANMAO,
              ZJZA,
              KOHLER,
              HUIDA,
              MEIBIAO,
              BRAVAT,
              KUKA,
            ]}
          />
        </div>
      </div>
    );
  }
}
