interface MessageItem {
  ID: string;
  channel?: string;
  nickname: string;
  color: string;
  mod: boolean;
  sub: boolean;
  vip: boolean;
  message: string;
}

interface FileContent {
  channel: string;
  messages: {
    ID: string;
    nickname: string;
    color: string;
    message: string;
    mod: boolean;
    sub: boolean;
    vip: boolean;
  }[];
}

type BadgeType = 'mod' | 'vip' | 'sub';

export { MessageItem, FileContent, BadgeType };
