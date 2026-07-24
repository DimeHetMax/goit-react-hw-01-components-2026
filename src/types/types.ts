export interface ProfileStats {
  followers: number;
  views: number;
  likes: number;
}

export interface ProfileProps {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: ProfileStats;
}

export interface StatisticItem {
  id: string;
  label: string;
  percentage: number;
}

export interface StatisticsProps {
  title?: string;
  stats: StatisticItem[];
}

export interface Friend {
  id: number;
  avatar: string;
  name: string;
  isOnline: boolean;
}

export interface FriendListProps {
  friends: Friend[];
}

export type FriendListItemProps = Omit<Friend, "id">;
export interface TransactionItem {
  id: string;
  type: string;
  amount: string;
  currency: string;
}

export interface TransactionHistoryProps {
  transactions: TransactionItem[];
}
