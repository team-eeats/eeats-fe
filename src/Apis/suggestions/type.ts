export type CreateSuggestRequest = {
  title: string;
  content: string;
};

export type SuggestListResponse = {
  suggestions: Suggestions[];
};

export type Suggestions = {
  id: string;
  userId: string;
  title: string;
  content: string;
  createdAt: string;
  coment: SuggestComment[];
};

export type SuggestComment = {
  id: string;
  content: string;
  createdAt: string;
};

export type ModifySuggestRequest = {
  title: string;
  content: string;
};

export type GetMySuggestResponse = {
  suggestions: MySuggestions[];
};

export type MySuggestions = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  accountId: string;
  comment: Comment[];
};

export type Comment = {
  id: string;
  content: string;
};
