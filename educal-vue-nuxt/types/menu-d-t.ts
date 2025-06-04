export interface IMenuData {
  id: number;
  title: string;
  link: string;
  submenu?: {
      id: number;
      title: string;
      link: string;
  }[];
}