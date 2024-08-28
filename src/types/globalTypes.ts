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

type BadgeType = 'mod' | 'vip' | 'sub';

export { MessageItem, BadgeType };
