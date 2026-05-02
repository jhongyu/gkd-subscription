import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      rules: {
        matches: 'TextView[id="tv.danmaku.bili:id/count_down"]',
      },
    },
  ],
});
