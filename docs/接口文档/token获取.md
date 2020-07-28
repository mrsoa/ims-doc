# 获取token

出于接口安全性的需要，在请求业务接口之前需要对调用者的身份进行验证，只有正确的获取到token才能调用业务接口

接口类型：即时/同步

| 版本号 | 文档         | 说明 |
| ------ | ------------ | ---- |
| 1.0    | 当前版本文档 |      |

## 接口地址

| 环境     | 请求方法 | 请求地址                                        | 请求主体MIME类型 | 响应主体MIME类型 |
| -------- | -------- | ----------------------------------------------- | ---------------- | ---------------- |
| 正式环境 | POST     | https://ims.51eanj.com/api/system/token         | application/json | application/json |
| 沙箱环境 | POST     | http://timsweb.51eanj.com:9992/api/system/token | application/json | application/json |

## 请求参数

| 字段名        | 位置   | 是否必填 | 描述                                      |
| ------------- | ------ | -------- | ----------------------------------------- |
|               | body   | 是       | token请求参数json字符串，详情请见         |
| Authorization | header | 是       | Basic Authorization，格式为 YIANJU +token |

## 请求字段说明

| 字段名称  | 类型   | 是否必须 | 说明                                 |
| --------- | ------ | -------- | ------------------------------------ |
| corpId    | string | 是       | 企业ID，需要提前与对接人员沟通后开通 |
| appkey    | string | 是       | 应用ID，需要提前与对接人员沟通后开通 |
| appsecret | string | 是       | 秘钥，需要提前与对接人员沟通后开通   |



