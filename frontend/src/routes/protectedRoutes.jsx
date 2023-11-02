import { PAGES } from "../data/pages";
import Chat from "../pages/chat/Chat";

export const PROTECTED_ROUTES = [
  {
    path: PAGES.CHAT,
    element: <Chat />,
  },
];
