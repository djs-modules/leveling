export interface Options {
  dbName: string;
  dbPath?: string;
}

export interface ManagerEvents {
  newLevel: (data: NewLevelData) => void;
}

export interface GuildData {
  id: string;
  members: GuildMember[];
}

export interface GuildMember {
  id: string;
  level: number;
  xp: number;
}

interface NewLevelData {
  memberID: string;
  guildID: string;
  level: number;
}
