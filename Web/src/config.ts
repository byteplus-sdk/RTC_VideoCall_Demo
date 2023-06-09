import { AudioProfileType } from '@byteplus/rtc';

export const BusinessId = 'veRtc_bid_videocall';

export const DEMO_VERSION = '1.1.1';

export const TOS = 'https://docs.byteplus.com/byteplus-rtc/docs/68917';
export const PrivacyPolicy = 'https://docs.byteplus.com/legal/docs/privacy-policy';

export const isDev = process.env.NODE_ENV === 'development';

// const isProd = location.origin.includes('demo.byteplus.com');

export const BASENAME = isDev ? '/' : '/rtc/solution/videocall';

export const RESOLUTIOIN_LIST = [
  {
    text: '1280 * 720',
    val: {
      width: 1280,
      height: 720,
      frameRate: 15,
      maxKbps: 1200,
    },
  },
  {
    text: '960 * 540',
    val: {
      width: 960,
      height: 540,
      frameRate: 15,
      maxKbps: 1000,
    },
  },
  {
    text: '640 * 360',
    val: {
      width: 640,
      height: 360,
      frameRate: 15,
      maxKbps: 600,
    },
  },
  {
    text: '320 * 180',
    val: {
      width: 320,
      height: 180,
      frameRate: 15,
      maxKbps: 300,
    },
  },
];

export const AudioProfile = [
  {
    text: '24kbps',
    type: AudioProfileType.fluent,
  },
  {
    text: '48kbps',
    type: AudioProfileType.standard,
  },
  {
    text: '128kbps',
    type: AudioProfileType.hd,
  },
];

export const MAX_PLAYERS = 4;
