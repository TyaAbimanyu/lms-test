
export type IReview = {
  user: string;
  name: string;
  date: string;
  comment: string;
  rating: number;
}

export interface ICourse {
  id: number;
  img: string;
  title: string;
  lesson: number;
  language: string;
  skill_label: string;
  y_video_id: string;
  instructor_img: string;
  course_summary: string;
  instructor_name: string;
  category: string;
  price: string | number;
  oldPrice?: string | number;
  duration: string;
  enrollment: number;
  overview: string;
  tags: string[];
  orderQuantity?: number;
  target_audience?: string[];
  other_instructor?: {
    teacher_img: string;
    teacher_name: string;
    teacher_title: string;
  }[];
  curriculum: {
    id: string;
    course_c_title: string;
    course_info: {
      course_c_text: string;
      course_c_text_2: string;
      minute: string;
      questions?: string;
      video?: boolean;
      audio?: boolean;
    }[];
  }[];
  reviews?: IReview[];
  members?: {
    img: string;
    name: string;
    title: string;
    member_info: {
      courses: number;
      reviews: number;
      rating: number;
    }
  }[];
  created_at: string;
  updated_at: string;
}