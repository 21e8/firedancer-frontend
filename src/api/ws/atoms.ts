import { atom } from "jotai";
import { SocketState } from "./types";
const isProd = import.meta.env.PROD;

export const socketStateAtom = atom<SocketState>(SocketState.Disconnected);

const KNOWN_SOCKET_URLS = [
  {
    name: "StakingFacilities",
    url: `wss://fd-mainnet.stakingfacilities.com/websocket`,
  },
  {
    name: "JuicyStake",
    url: `wss://fd.juicystake.io/websocket`,
  },
];

export const websocketUrlAtom = atom<string>(
  isProd
    ? KNOWN_SOCKET_URLS[0].url
    : `ws://${window.location.hostname}:${window.location.port}/websocket`
);

export const knownSocketUrlsAtom = atom<{ name: string; url: string }[]>(
  [
    {
      name: "localhost",
      url:
        (import.meta.env.VITE_DEFAULT_WS_URL as string) ||
        `ws://${window.location.hostname}:${window.location.port}/websocket`,
    },
    ...KNOWN_SOCKET_URLS,
  ].filter((url) => {
    if (isProd && url.name === "localhost") {
      return false;
    }
    return true;
  })
);
