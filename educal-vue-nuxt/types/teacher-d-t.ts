export interface ITeacherData {
  id: number;
  img: string;
  name: string;
  title: string;
  social_links: {
    icon: string;
    link: string;
  }[];
  short_bio: string;
}