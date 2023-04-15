export type ISectionHome = {
  records: Array<ISectionItem>;
};

export type ISectionItem = {
  id: number;
  name: string;
  data: Array<IDataSectionItem>;
};

export type IDataSectionItem = {
  index: number;
  id: number;
  image: string;
  coins: number;
  des: string;
};

export interface IRenderSectionItem {
  item: IDataSectionItem;
  index: number;
}
