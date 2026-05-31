import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mcdonalds.gma.cn',
  name: '麦当劳',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      rules: {
        matches: 'TextView[id="com.mcdonalds.gma.cn:id/tv_skip"]',
      },
    },
  ],
});
