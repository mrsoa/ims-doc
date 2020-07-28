import { defineConfig } from 'dumi';

export default defineConfig({
  title: '蚁安居开放平台',
  favicon: 'https://mrduan.oss-cn-beijing.aliyuncs.com/108.png',
  logo: 'https://mrduan.oss-cn-beijing.aliyuncs.com/108.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config

  theme: {
    '@c-primary': '#ff652f',
  },

  // 单语言配置方式如下
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/mrsoa/ims-doc',
    },
  ],
});
