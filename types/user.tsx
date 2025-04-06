export type User = {
  id: string;
  fullName: string;
  age: number;
  photo: string;
  location: string;
};

export enum MatchType {
  FRIENDSHIP = "friendship",
  DATING = "dating",
  RELATIONSHIP = "relationship",
}
