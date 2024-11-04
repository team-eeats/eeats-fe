export type VoteListResponse = {
  polls: Polls[];
};

export type Polls = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  options: Options[];
};

export type Options = {
  id: string;
  description: string;
  imageUrl: string;
  voteCount: number;
  voteRate: number;
};
