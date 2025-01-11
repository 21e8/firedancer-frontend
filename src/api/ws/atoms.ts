import { atom } from "jotai";
import { SocketState } from "./types";

export const socketStateAtom = atom<SocketState>(SocketState.Disconnected);

export const websocketUrlAtom = atom<string>(
  `wss://fd.juicystake.io/websocket`
);

export const knownSocketUrlsAtom = atom<{ name: string; url: string }[]>([
  {
    name: "JuicyStake",
    url: `wss://fd.juicystake.io/websocket`,
  },
  {
    name: "StakingFacilities",
    url: `wss://fd-mainnet.stakingfacilities.com/websocket`,
  },
]);
