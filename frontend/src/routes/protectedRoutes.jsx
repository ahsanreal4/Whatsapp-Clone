import { PAGES } from "../data/pages";
import Chat from "../pages/chat/Chat";
import MobileChat from "../pages/mobile/MobileChat";
export const PROTECTED_ROUTES = [
  {
    path: PAGES.CHAT,
    element: <Chat />,
  },
  {
    path: PAGES.MOBILECHAT,
    element: <MobileChat />,
  },
];
