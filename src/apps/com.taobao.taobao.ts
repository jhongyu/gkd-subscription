import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      rules: {
        matches: 'TextView[id="com.taobao.taobao:id/tv_close"]',
      },
    },
  ],
});
