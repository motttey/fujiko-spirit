export type FujikoSpiritIssue = {
  id: number;
  name: string;
  description: string;
  subdescription?: string;
  src: string;
  url: string;
  new: boolean;
  soldout: boolean;
  size: string;
  pages: string;
  price: string;
  onlineOrderUrl: string;
};

export type FujikoSpiritAuthor = {
  author: string;
  title: string;
  type: string;
};
