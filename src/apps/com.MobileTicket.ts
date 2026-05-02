import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.MobileTicket',
  name: '铁路12306',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      rules: {
        matches: 'TextView[id="com.MobileTicket:id/tv_skip"]',
      },
    },
  ],
});
