interface MessageItem {
  channel?: string;
  nickname: string;
  mod: boolean;
  sub: boolean;
  vip: boolean;
  message: string;
}

interface FileContent {
  channel: string;
  messages: {
    nickname: string;
    message: string;
    mod: boolean;
    sub: boolean;
    vip: boolean;
  }[];
}

type UserType = 'mod' | 'vip' | 'sub';

export { MessageItem, FileContent, UserType };
