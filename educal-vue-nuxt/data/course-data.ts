import type { ICourse } from "@/types/course-d-t";


const course_data: ICourse[] = [
  {
    id: 1,
    img: '/images/course/course-1.jpg',
    title: 'Become a product Manager learn the skills & job.',
    lesson: 43,
    language: 'English',
    skill_label: 'Beginner',
    y_video_id: 'Vgte7oCgNtU',
    instructor_img: '/images/course/teacher/teacher-1.jpg',
    course_summary: 'Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem',
    instructor_name: 'Jim Séchen',
    category: 'Data Science',
    price: 'free',
    duration: '6 Weeks',
    enrollment: 35,
    overview: "Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well. Give us a bell bits and bobs Charles he lost his bottle super my lady cras starkers bite your arm off Queen's English, pardon me horse play Elizabeth a blinding shot chinwag knees up do one David, blag cup of tea Eaton so I said bleeding haggle James Bond cup of char. Gosh William ummm I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do with me nancy boy show off show off pick your nose and blow off spiffing good time lavatory me old mucker, chimney pot what a load of rubbish boot squiffy lost the plot brolly wellies excuse my french.",
    tags: ['Big data', 'Data analysis', 'Data modeling'],
    target_audience: ["Business's managers, leaders", "Downloadable lectures, code and design assets for all projects", "Anyone who is finding a chance to get the promotion"],
    other_instructor: [
      {
        teacher_img: "/images/course/teacher/teacher-3.jpg",
        teacher_name: "Eleanor Fant",
        teacher_title: "Instructor"
      },
      {
        teacher_img: "/images/course/teacher/teacher-2.jpg",
        teacher_name: "Lauren Stamps",
        teacher_title: "Teacher"
      },
      {
        teacher_img: "/images/course/teacher/teacher-1.jpg",
        teacher_name: "Jonquil Von",
        teacher_title: "Associate"
      },
    ],
    curriculum: [
      {
        id: 'course__accordion',
        course_c_title: 'Week 01',
        course_info: [
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            minute: '14 minutes',
            video: true,
          },
          {
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            minute: '15 minutes',
            questions: '3 questions',
            audio: true,
          },
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '22 minutes',
          },
        ]
      },
      {
        id: 'course__accordion-2',
        course_c_title: 'Week 02',
        course_info: [
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            minute: '14 minutes',
            video: true,
          },
          {
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            minute: '15 minutes',
            questions: '3 questions',
            audio: true,
          },
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '22 minutes',
          },
        ]
      },
    ],
    reviews: [
      {
        user: '/images/course/comment/course-comment-1.jpg',
        name: 'Eleanor Fant',
        date: 'July 14, 2022',
        comment: "So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
        rating: 5,
      },
      {
        user: '/images/course/comment/course-comment-2.jpg',
        name: 'Shahnewaz Sakil',
        date: 'July 17, 2022',
        comment: "David blatant have it, standard A bit of how's your father my lady absolutely.",
        rating: 4,
      },
    ],
    created_at: 'July 14, 2022',
    updated_at: 'July 18, 2023',
  },
  {
    id: 2,
    img: '/images/course/course-2.jpg',
    title: 'Fundamentals of music theory Learn new',
    lesson: 35,
    language: 'Russian',
    skill_label: 'Intermediate',
    y_video_id: 'TKnufs85hXk',
    instructor_img: '/images/course/teacher/teacher-2.jpg',
    course_summary: 'Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem',
    instructor_name: 'Barry Tone',
    category: 'Data Science',
    price: 32,
    oldPrice: 35,
    duration: '8 Weeks',
    enrollment: 50,
    overview: "Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well. Give us a bell bits and bobs Charles he lost his bottle super my lady cras starkers bite your arm off Queen's English, pardon me horse play Elizabeth a blinding shot chinwag knees up do one David, blag cup of tea Eaton so I said bleeding haggle James Bond cup of char. Gosh William ummm I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do with me nancy boy show off show off pick your nose and blow off spiffing good time lavatory me old mucker, chimney pot what a load of rubbish boot squiffy lost the plot brolly wellies excuse my french.",
    tags: ['Big data', 'Data analysis', 'Data modeling'],
    target_audience: ["Business's managers, leaders", "Downloadable lectures, code and design assets for all projects", "Anyone who is finding a chance to get the promotion"],
    other_instructor: [
      {
        teacher_img: "/images/course/teacher/teacher-2.jpg",
        teacher_name: "Eleanor Fant",
        teacher_title: "Instructor"
      },
      {
        teacher_img: "/images/course/teacher/teacher-1.jpg",
        teacher_name: "Lauren Stamps",
        teacher_title: "Teacher"
      },
      {
        teacher_img: "/images/course/teacher/teacher-3.jpg",
        teacher_name: "Jonquil Von",
        teacher_title: "Associate"
      },
    ],
    curriculum: [
      {
        id: 'course__accordion',
        course_c_title: 'Week 01',
        course_info: [
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            minute: '14 minutes',
            video: true,
          },
          {
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            minute: '15 minutes',
            questions: '3 questions',
            audio: true,
          },
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '22 minutes',
          },
        ]
      },
      {
        id: 'course__accordion-2',
        course_c_title: 'Week 02',
        course_info: [
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            minute: '14 minutes',
            video: true,
          },
          {
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            minute: '15 minutes',
            questions: '3 questions',
            audio: true,
          },
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '22 minutes',
          },
        ]
      },
    ],
    reviews: [
      {
        user: '/images/course/comment/course-comment-1.jpg',
        name: 'Eleanor Fant',
        date: 'July 14, 2023',
        comment: "So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
        rating: 3.5,
      },
      {
        user: '/images/course/comment/course-comment-2.jpg',
        name: 'Shahnewaz Sakil',
        date: 'July 17, 2023',
        comment: "David blatant have it, standard A bit of how's your father my lady absolutely.",
        rating: 4.5,
      },
    ],
    created_at: 'June 9, 2022',
    updated_at: 'June 21, 2023',
  },
  {
    id: 3,
    img: '/images/course/course-3.jpg',
    title: 'Bases Matemáticas dios Álgebra Ecuacion',
    lesson: 22,
    language: 'English',
    skill_label: 'Expert',
    y_video_id: '4CTMvjquyi4',
    instructor_img: '/images/course/teacher/teacher-3.jpg',
    course_summary: 'Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem',
    instructor_name: 'Samuel Serif',
    category: 'Data Science',
    price: 29,
    oldPrice: 39,
    duration: '9 Weeks',
    enrollment: 55,
    overview: "Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well. Give us a bell bits and bobs Charles he lost his bottle super my lady cras starkers bite your arm off Queen's English, pardon me horse play Elizabeth a blinding shot chinwag knees up do one David, blag cup of tea Eaton so I said bleeding haggle James Bond cup of char. Gosh William ummm I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do with me nancy boy show off show off pick your nose and blow off spiffing good time lavatory me old mucker, chimney pot what a load of rubbish boot squiffy lost the plot brolly wellies excuse my french.",
    tags: ['Big data', 'Data analysis', 'Data modeling'],
    target_audience: ["Business's managers, leaders", "Downloadable lectures, code and design assets for all projects", "Anyone who is finding a chance to get the promotion"],
    other_instructor: [
      {
        teacher_img: "/images/course/teacher/teacher-2.jpg",
        teacher_name: "Eleanor Fant",
        teacher_title: "Instructor"
      },
      {
        teacher_img: "/images/course/teacher/teacher-1.jpg",
        teacher_name: "Lauren Stamps",
        teacher_title: "Teacher"
      },
      {
        teacher_img: "/images/course/teacher/teacher-3.jpg",
        teacher_name: "Jonquil Von",
        teacher_title: "Associate"
      },
    ],
    curriculum: [
      {
        id: 'course__accordion',
        course_c_title: 'Week 01',
        course_info: [
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            minute: '14 minutes',
            video: true,
          },
          {
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            minute: '15 minutes',
            questions: '3 questions',
            audio: true,
          },
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '22 minutes',
          },
        ]
      },
      {
        id: 'course__accordion-2',
        course_c_title: 'Week 02',
        course_info: [
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            minute: '14 minutes',
            video: true,
          },
          {
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            minute: '15 minutes',
            questions: '3 questions',
            audio: true,
          },
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '22 minutes',
          },
        ]
      },
    ],
    reviews: [
      {
        user: '/images/course/comment/course-comment-1.jpg',
        name: 'Eleanor Fant',
        date: 'July 14, 2023',
        comment: "So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
        rating: 3.5,
      },
      {
        user: '/images/course/comment/course-comment-2.jpg',
        name: 'Shahnewaz Sakil',
        date: 'July 17, 2023',
        comment: "David blatant have it, standard A bit of how's your father my lady absolutely.",
        rating: 4.5,
      },
    ],
    created_at: 'June 9, 2022',
    updated_at: 'June 21, 2023',
  },
  {
    id: 4,
    img: '/images/course/course-4.jpg',
    title: 'Strategy law and organization Foundation',
    lesson: 22,
    language: 'Hindi',
    skill_label: 'Beginner',
    y_video_id: '4CTMvjquyi4',
    instructor_img: '/images/course/teacher/teacher-4.jpg',
    course_summary: 'Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem',
    instructor_name: 'Elon Gated',
    category: 'Business',
    price: 50,
    oldPrice: 59,
    duration: '7 Weeks',
    enrollment: 47,
    overview: "Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well. Give us a bell bits and bobs Charles he lost his bottle super my lady cras starkers bite your arm off Queen's English, pardon me horse play Elizabeth a blinding shot chinwag knees up do one David, blag cup of tea Eaton so I said bleeding haggle James Bond cup of char. Gosh William ummm I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do with me nancy boy show off show off pick your nose and blow off spiffing good time lavatory me old mucker, chimney pot what a load of rubbish boot squiffy lost the plot brolly wellies excuse my french.",
    tags: ['Big data', 'Data analysis', 'Data modeling'],
    target_audience: ["Business's managers, leaders", "Downloadable lectures, code and design assets for all projects", "Anyone who is finding a chance to get the promotion"],
    other_instructor: [
      {
        teacher_img: "/images/course/teacher/teacher-1.jpg",
        teacher_name: "Eleanor Fant",
        teacher_title: "Instructor"
      },
      {
        teacher_img: "/images/course/teacher/teacher-3.jpg",
        teacher_name: "Lauren Stamps",
        teacher_title: "Teacher"
      },
      {
        teacher_img: "/images/course/teacher/teacher-2.jpg",
        teacher_name: "Jonquil Von",
        teacher_title: "Associate"
      },
    ],
    curriculum: [
      {
        id: 'course__accordion',
        course_c_title: 'Week 01',
        course_info: [
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            minute: '14 minutes',
            video: true,
          },
          {
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            minute: '15 minutes',
            questions: '3 questions',
            audio: true,
          },
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '22 minutes',
          },
        ]
      },
      {
        id: 'course__accordion-2',
        course_c_title: 'Week 02',
        course_info: [
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            minute: '14 minutes',
            video: true,
          },
          {
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            minute: '15 minutes',
            questions: '3 questions',
            audio: true,
          },
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '22 minutes',
          },
        ]
      },
    ],
    reviews: [
      {
        user: '/images/course/comment/course-comment-1.jpg',
        name: 'Eleanor Fant',
        date: 'July 14, 2023',
        comment: "So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
        rating: 3.5,
      },
      {
        user: '/images/course/comment/course-comment-2.jpg',
        name: 'Shahnewaz Sakil',
        date: 'July 17, 2023',
        comment: "David blatant have it, standard A bit of how's your father my lady absolutely.",
        rating: 4.5,
      },
    ],
    created_at: 'Novermber 9, 2022',
    updated_at: 'December 21, 2023',
  },
  {
    id: 5,
    img: '/images/course/course-5.jpg',
    title: 'The business Intelligence analyst Course 2023',
    lesson: 22,
    language: 'Bangla',
    skill_label: 'Intermediate',
    y_video_id: '4CTMvjquyi4',
    instructor_img: '/images/course/teacher/teacher-5.jpg',
    course_summary: 'Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem',
    instructor_name: 'Eleanor Fant',
    category: 'Art & Design',
    price: 62,
    oldPrice: 78,
    duration: '5 Weeks',
    enrollment: 52,
    overview: "Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well. Give us a bell bits and bobs Charles he lost his bottle super my lady cras starkers bite your arm off Queen's English, pardon me horse play Elizabeth a blinding shot chinwag knees up do one David, blag cup of tea Eaton so I said bleeding haggle James Bond cup of char. Gosh William ummm I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do with me nancy boy show off show off pick your nose and blow off spiffing good time lavatory me old mucker, chimney pot what a load of rubbish boot squiffy lost the plot brolly wellies excuse my french.",
    tags: ['Big data', 'Data analysis', 'Data modeling'],
    target_audience: ["Business's managers, leaders", "Downloadable lectures, code and design assets for all projects", "Anyone who is finding a chance to get the promotion"],
    other_instructor: [
      {
        teacher_img: "/images/course/teacher/teacher-3.jpg",
        teacher_name: "Eleanor Fant",
        teacher_title: "Instructor"
      },
      {
        teacher_img: "/images/course/teacher/teacher-1.jpg",
        teacher_name: "Lauren Stamps",
        teacher_title: "Teacher"
      },
      {
        teacher_img: "/images/course/teacher/teacher-2.jpg",
        teacher_name: "Jonquil Von",
        teacher_title: "Associate"
      },
    ],
    curriculum: [
      {
        id: 'course__accordion',
        course_c_title: 'Week 01',
        course_info: [
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            minute: '14 minutes',
            video: true,
          },
          {
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            minute: '15 minutes',
            questions: '3 questions',
            audio: true,
          },
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '22 minutes',
          },
        ]
      },
      {
        id: 'course__accordion-2',
        course_c_title: 'Week 02',
        course_info: [
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            minute: '14 minutes',
            video: true,
          },
          {
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            minute: '15 minutes',
            questions: '3 questions',
            audio: true,
          },
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '22 minutes',
          },
        ]
      },
    ],
    reviews: [
      {
        user: '/images/course/comment/course-comment-1.jpg',
        name: 'Eleanor Fant',
        date: 'July 14, 2023',
        comment: "So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
        rating: 3.5,
      },
      {
        user: '/images/course/comment/course-comment-2.jpg',
        name: 'Shahnewaz Sakil',
        date: 'July 17, 2023',
        comment: "David blatant have it, standard A bit of how's your father my lady absolutely.",
        rating: 4.5,
      },
    ],
    created_at: 'Novermber 12, 2022',
    updated_at: 'December 25, 2023',
  },
  {
    id: 6,
    img: '/images/course/course-6.jpg',
    title: 'Bases Matemáticas dios Álgebra Ecuacion',
    lesson: 25,
    language: 'English',
    skill_label: 'Expert',
    y_video_id: '4CTMvjquyi4',
    instructor_img: '/images/course/teacher/teacher-6.jpg',
    course_summary: 'Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem',
    instructor_name: 'Brian Cumin',
    category: 'Art & Design',
    price: 38,
    oldPrice: 42,
    duration: '10 Weeks',
    enrollment: 75,
    overview: "Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well. Give us a bell bits and bobs Charles he lost his bottle super my lady cras starkers bite your arm off Queen's English, pardon me horse play Elizabeth a blinding shot chinwag knees up do one David, blag cup of tea Eaton so I said bleeding haggle James Bond cup of char. Gosh William ummm I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do with me nancy boy show off show off pick your nose and blow off spiffing good time lavatory me old mucker, chimney pot what a load of rubbish boot squiffy lost the plot brolly wellies excuse my french.",
    tags: ['Big data', 'Data analysis', 'Data modeling'],
    target_audience: ["Business's managers, leaders", "Downloadable lectures, code and design assets for all projects", "Anyone who is finding a chance to get the promotion"],
    other_instructor: [
      {
        teacher_img: "/images/course/teacher/teacher-3.jpg",
        teacher_name: "Eleanor Fant",
        teacher_title: "Instructor"
      },
      {
        teacher_img: "/images/course/teacher/teacher-1.jpg",
        teacher_name: "Lauren Stamps",
        teacher_title: "Teacher"
      },
      {
        teacher_img: "/images/course/teacher/teacher-2.jpg",
        teacher_name: "Jonquil Von",
        teacher_title: "Associate"
      },
    ],
    curriculum: [
      {
        id: 'course__accordion',
        course_c_title: 'Week 01',
        course_info: [
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            minute: '14 minutes',
            video: true,
          },
          {
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            minute: '15 minutes',
            questions: '3 questions',
            audio: true,
          },
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '22 minutes',
          },
        ]
      },
      {
        id: 'course__accordion-2',
        course_c_title: 'Week 02',
        course_info: [
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            minute: '14 minutes',
            video: true,
          },
          {
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            minute: '15 minutes',
            questions: '3 questions',
            audio: true,
          },
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '22 minutes',
          },
        ]
      },
    ],
    reviews: [
      {
        user: '/images/course/comment/course-comment-1.jpg',
        name: 'Eleanor Fant',
        date: 'July 14, 2023',
        comment: "So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
        rating: 3.5,
      },
      {
        user: '/images/course/comment/course-comment-2.jpg',
        name: 'Shahnewaz Sakil',
        date: 'July 17, 2023',
        comment: "David blatant have it, standard A bit of how's your father my lady absolutely.",
        rating: 4.5,
      },
    ],
    created_at: 'Novermber 12, 2022',
    updated_at: 'December 25, 2023',
  },
  {
    id: 7,
    img: '/images/course/course-7.jpg',
    title: 'Build your media and Public presence',
    lesson: 25,
    language: 'Russian',
    skill_label: 'Expert',
    y_video_id: 'uVwtVBpw7RQ',
    instructor_img: '/images/course/teacher/teacher-7.jpg',
    course_summary: 'Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem',
    instructor_name: 'Jim Séchen',
    category: 'Lifestyle',
    price: 50,
    duration: '12 Weeks',
    enrollment: 80,
    overview: "Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well. Give us a bell bits and bobs Charles he lost his bottle super my lady cras starkers bite your arm off Queen's English, pardon me horse play Elizabeth a blinding shot chinwag knees up do one David, blag cup of tea Eaton so I said bleeding haggle James Bond cup of char. Gosh William ummm I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do with me nancy boy show off show off pick your nose and blow off spiffing good time lavatory me old mucker, chimney pot what a load of rubbish boot squiffy lost the plot brolly wellies excuse my french.",
    tags: ['Big data', 'Data analysis', 'Data modeling'],
    target_audience: ["Business's managers, leaders", "Downloadable lectures, code and design assets for all projects", "Anyone who is finding a chance to get the promotion"],
    other_instructor: [
      {
        teacher_img: "/images/course/teacher/teacher-3.jpg",
        teacher_name: "Eleanor Fant",
        teacher_title: "Instructor"
      },
      {
        teacher_img: "/images/course/teacher/teacher-1.jpg",
        teacher_name: "Lauren Stamps",
        teacher_title: "Teacher"
      },
      {
        teacher_img: "/images/course/teacher/teacher-2.jpg",
        teacher_name: "Jonquil Von",
        teacher_title: "Associate"
      },
    ],
    curriculum: [
      {
        id: 'course__accordion',
        course_c_title: 'Week 01',
        course_info: [
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            minute: '14 minutes',
            video: true,
          },
          {
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            minute: '15 minutes',
            questions: '3 questions',
            audio: true,
          },
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '22 minutes',
          },
        ]
      },
      {
        id: 'course__accordion-2',
        course_c_title: 'Week 02',
        course_info: [
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            minute: '14 minutes',
            video: true,
          },
          {
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            minute: '15 minutes',
            questions: '3 questions',
            audio: true,
          },
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '22 minutes',
          },
        ]
      },
    ],
    reviews: [
      {
        user: '/images/course/comment/course-comment-1.jpg',
        name: 'Eleanor Fant',
        date: 'July 14, 2023',
        comment: "So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
        rating: 3.5,
      },
      {
        user: '/images/course/comment/course-comment-2.jpg',
        name: 'Shahnewaz Sakil',
        date: 'July 17, 2023',
        comment: "David blatant have it, standard A bit of how's your father my lady absolutely.",
        rating: 4.5,
      },
    ],
    created_at: 'Novermber 12, 2022',
    updated_at: 'December 25, 2023',
  },
  {
    id: 8,
    img: '/images/course/course-7.jpg',
    title: 'Build your media and Public presence',
    lesson: 25,
    language: 'Russian',
    skill_label: 'Expert',
    y_video_id: 'uVwtVBpw7RQ',
    instructor_img: '/images/course/teacher/teacher-7.jpg',
    course_summary: 'Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem',
    instructor_name: 'Barry Tone',
    category: 'Lifestyle',
    price: 50,
    duration: '12 Weeks',
    enrollment: 80,
    overview: "Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well. Give us a bell bits and bobs Charles he lost his bottle super my lady cras starkers bite your arm off Queen's English, pardon me horse play Elizabeth a blinding shot chinwag knees up do one David, blag cup of tea Eaton so I said bleeding haggle James Bond cup of char. Gosh William ummm I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do with me nancy boy show off show off pick your nose and blow off spiffing good time lavatory me old mucker, chimney pot what a load of rubbish boot squiffy lost the plot brolly wellies excuse my french.",
    tags: ['Big data', 'Data analysis', 'Data modeling'],
    target_audience: ["Business's managers, leaders", "Downloadable lectures, code and design assets for all projects", "Anyone who is finding a chance to get the promotion"],
    other_instructor: [
      {
        teacher_img: "/images/course/teacher/teacher-3.jpg",
        teacher_name: "Eleanor Fant",
        teacher_title: "Instructor"
      },
      {
        teacher_img: "/images/course/teacher/teacher-1.jpg",
        teacher_name: "Lauren Stamps",
        teacher_title: "Teacher"
      },
      {
        teacher_img: "/images/course/teacher/teacher-2.jpg",
        teacher_name: "Jonquil Von",
        teacher_title: "Associate"
      },
    ],
    curriculum: [
      {
        id: 'course__accordion',
        course_c_title: 'Week 01',
        course_info: [
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            minute: '14 minutes',
            video: true,
          },
          {
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            minute: '15 minutes',
            questions: '3 questions',
            audio: true,
          },
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '22 minutes',
          },
        ]
      },
      {
        id: 'course__accordion-2',
        course_c_title: 'Week 02',
        course_info: [
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            minute: '14 minutes',
            video: true,
          },
          {
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            minute: '15 minutes',
            questions: '3 questions',
            audio: true,
          },
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '22 minutes',
          },
        ]
      },
    ],
    reviews: [
      {
        user: '/images/course/comment/course-comment-1.jpg',
        name: 'Eleanor Fant',
        date: 'July 14, 2023',
        comment: "So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
        rating: 3.5,
      },
      {
        user: '/images/course/comment/course-comment-2.jpg',
        name: 'Shahnewaz Sakil',
        date: 'July 17, 2023',
        comment: "David blatant have it, standard A bit of how's your father my lady absolutely.",
        rating: 4.5,
      },
    ],
    created_at: 'Novermber 12, 2022',
    updated_at: 'December 25, 2023',
  },
  {
    id: 9,
    img: '/images/course/course-8.jpg',
    title: 'Creative writing through Storytelling',
    lesson: 32,
    language: 'Bangla',
    skill_label: 'Intermediate',
    y_video_id: 'uxZZzmeCoLE',
    instructor_img: '/images/course/teacher/teacher-8.jpg',
    course_summary: 'Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem',
    instructor_name: 'Samuel Serif',
    category: 'Lifestyle',
    price: 44,
    duration: '5 Weeks',
    enrollment: 50,
    overview: "Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well. Give us a bell bits and bobs Charles he lost his bottle super my lady cras starkers bite your arm off Queen's English, pardon me horse play Elizabeth a blinding shot chinwag knees up do one David, blag cup of tea Eaton so I said bleeding haggle James Bond cup of char. Gosh William ummm I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do with me nancy boy show off show off pick your nose and blow off spiffing good time lavatory me old mucker, chimney pot what a load of rubbish boot squiffy lost the plot brolly wellies excuse my french.",
    tags: ['Big data', 'Data analysis', 'Data modeling'],
    target_audience: ["Business's managers, leaders", "Downloadable lectures, code and design assets for all projects", "Anyone who is finding a chance to get the promotion"],
    other_instructor: [
      {
        teacher_img: "/images/course/teacher/teacher-3.jpg",
        teacher_name: "Eleanor Fant",
        teacher_title: "Instructor"
      },
      {
        teacher_img: "/images/course/teacher/teacher-1.jpg",
        teacher_name: "Lauren Stamps",
        teacher_title: "Teacher"
      },
      {
        teacher_img: "/images/course/teacher/teacher-2.jpg",
        teacher_name: "Jonquil Von",
        teacher_title: "Associate"
      },
    ],
    curriculum: [
      {
        id: 'course__accordion',
        course_c_title: 'Week 01',
        course_info: [
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            minute: '14 minutes',
            video: true,
          },
          {
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            minute: '15 minutes',
            questions: '3 questions',
            audio: true,
          },
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '22 minutes',
          },
        ]
      },
      {
        id: 'course__accordion-2',
        course_c_title: 'Week 02',
        course_info: [
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            minute: '14 minutes',
            video: true,
          },
          {
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            minute: '15 minutes',
            questions: '3 questions',
            audio: true,
          },
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '22 minutes',
          },
        ]
      },
    ],
    reviews: [
      {
        user: '/images/course/comment/course-comment-1.jpg',
        name: 'Eleanor Fant',
        date: 'July 14, 2023',
        comment: "So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
        rating: 3.5,
      },
      {
        user: '/images/course/comment/course-comment-2.jpg',
        name: 'Shahnewaz Sakil',
        date: 'July 17, 2023',
        comment: "David blatant have it, standard A bit of how's your father my lady absolutely.",
        rating: 4.5,
      },
    ],
    created_at: 'October 12, 2022',
    updated_at: 'October 15, 2023',
  },
  {
    id: 10,
    img: '/images/course/course-9.jpg',
    title: 'Product Manager Learn the Skills & job.',
    lesson: 15,
    language: 'English',
    skill_label: 'Expert',
    y_video_id: '2ReR1YJrNOM',
    instructor_img: '/images/course/teacher/teacher-9.jpg',
    course_summary: 'Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem',
    instructor_name: 'Elon Gated',
    category: 'Marketing',
    price: 65,
    duration: '8 Weeks',
    enrollment: 60,
    overview: "Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well. Give us a bell bits and bobs Charles he lost his bottle super my lady cras starkers bite your arm off Queen's English, pardon me horse play Elizabeth a blinding shot chinwag knees up do one David, blag cup of tea Eaton so I said bleeding haggle James Bond cup of char. Gosh William ummm I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do with me nancy boy show off show off pick your nose and blow off spiffing good time lavatory me old mucker, chimney pot what a load of rubbish boot squiffy lost the plot brolly wellies excuse my french.",
    tags: ['Big data', 'Data analysis', 'Data modeling'],
    target_audience: ["Business's managers, leaders", "Downloadable lectures, code and design assets for all projects", "Anyone who is finding a chance to get the promotion"],
    other_instructor: [
      {
        teacher_img: "/images/course/teacher/teacher-3.jpg",
        teacher_name: "Eleanor Fant",
        teacher_title: "Instructor"
      },
      {
        teacher_img: "/images/course/teacher/teacher-1.jpg",
        teacher_name: "Lauren Stamps",
        teacher_title: "Teacher"
      },
      {
        teacher_img: "/images/course/teacher/teacher-2.jpg",
        teacher_name: "Jonquil Von",
        teacher_title: "Associate"
      },
    ],
    curriculum: [
      {
        id: 'course__accordion',
        course_c_title: 'Week 01',
        course_info: [
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            minute: '14 minutes',
            video: true,
          },
          {
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            minute: '15 minutes',
            questions: '3 questions',
            audio: true,
          },
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '22 minutes',
          },
        ]
      },
      {
        id: 'course__accordion-2',
        course_c_title: 'Week 02',
        course_info: [
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            minute: '14 minutes',
            video: true,
          },
          {
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            minute: '15 minutes',
            questions: '3 questions',
            audio: true,
          },
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '22 minutes',
          },
        ]
      },
    ],
    reviews: [
      {
        user: '/images/course/comment/course-comment-1.jpg',
        name: 'Eleanor Fant',
        date: 'July 14, 2023',
        comment: "So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
        rating: 4.5,
      },
      {
        user: '/images/course/comment/course-comment-2.jpg',
        name: 'Shahnewaz Sakil',
        date: 'July 17, 2023',
        comment: "David blatant have it, standard A bit of how's your father my lady absolutely.",
        rating: 3.5,
      },
    ],
    created_at: 'April 15, 2022',
    updated_at: 'May 28, 2023',
  },
  {
    id: 11,
    img: '/images/course/course-10.jpg',
    title: 'The Complete Python Programming Course',
    lesson: 21,
    language: 'Hindi',
    skill_label: 'Beginner',
    y_video_id: 'XBoZPCgdnm8',
    instructor_img: '/images/course/teacher/teacher-1.jpg',
    course_summary: 'Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem',
    instructor_name: 'Eleanor Fant',
    category: 'Marketing',
    price: 25,
    duration: '10 Weeks',
    enrollment: 70,
    overview: "Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well. Give us a bell bits and bobs Charles he lost his bottle super my lady cras starkers bite your arm off Queen's English, pardon me horse play Elizabeth a blinding shot chinwag knees up do one David, blag cup of tea Eaton so I said bleeding haggle James Bond cup of char. Gosh William ummm I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do with me nancy boy show off show off pick your nose and blow off spiffing good time lavatory me old mucker, chimney pot what a load of rubbish boot squiffy lost the plot brolly wellies excuse my french.",
    tags: ['Big data', 'Data analysis', 'Data modeling'],
    target_audience: ["Business's managers, leaders", "Downloadable lectures, code and design assets for all projects", "Anyone who is finding a chance to get the promotion"],
    other_instructor: [
      {
        teacher_img: "/images/course/teacher/teacher-1.jpg",
        teacher_name: "Eleanor Fant",
        teacher_title: "Instructor"
      },
      {
        teacher_img: "/images/course/teacher/teacher-2.jpg",
        teacher_name: "Lauren Stamps",
        teacher_title: "Teacher"
      },
      {
        teacher_img: "/images/course/teacher/teacher-3.jpg",
        teacher_name: "Jonquil Von",
        teacher_title: "Associate"
      },
    ],
    curriculum: [
      {
        id: 'course__accordion',
        course_c_title: 'Week 01',
        course_info: [
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            minute: '14 minutes',
            video: true,
          },
          {
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            minute: '15 minutes',
            questions: '3 questions',
            audio: true,
          },
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '22 minutes',
          },
        ]
      },
      {
        id: 'course__accordion-2',
        course_c_title: 'Week 02',
        course_info: [
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            minute: '14 minutes',
            video: true,
          },
          {
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            minute: '15 minutes',
            questions: '3 questions',
            audio: true,
          },
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '22 minutes',
          },
        ]
      },
    ],
    reviews: [
      {
        user: '/images/course/comment/course-comment-1.jpg',
        name: 'Eleanor Fant',
        date: 'July 14, 2023',
        comment: "So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
        rating: 5.0,
      },
      {
        user: '/images/course/comment/course-comment-2.jpg',
        name: 'Shahnewaz Sakil',
        date: 'July 17, 2023',
        comment: "David blatant have it, standard A bit of how's your father my lady absolutely.",
        rating: 3.0,
      },
    ],
    created_at: 'April 15, 2022',
    updated_at: 'May 28, 2023',
  },
  {
    id: 12,
    img: '/images/course/course-11.jpg',
    title: 'How to become a successfull businessman',
    lesson: 28,
    language: 'English',
    skill_label: 'Beginner',
    y_video_id: '6oFuwhIibo4',
    instructor_img: '/images/course/teacher/teacher-2.jpg',
    course_summary: 'Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem',
    instructor_name: 'Brian Cumin',
    category: 'Finance',
    price: 32,
    duration: '4 Weeks',
    enrollment: 50,
    overview: "Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well. Give us a bell bits and bobs Charles he lost his bottle super my lady cras starkers bite your arm off Queen's English, pardon me horse play Elizabeth a blinding shot chinwag knees up do one David, blag cup of tea Eaton so I said bleeding haggle James Bond cup of char. Gosh William ummm I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do with me nancy boy show off show off pick your nose and blow off spiffing good time lavatory me old mucker, chimney pot what a load of rubbish boot squiffy lost the plot brolly wellies excuse my french.",
    tags: ['Big data', 'Data analysis', 'Data modeling'],
    target_audience: ["Business's managers, leaders", "Downloadable lectures, code and design assets for all projects", "Anyone who is finding a chance to get the promotion"],
    other_instructor: [
      {
        teacher_img: "/images/course/teacher/teacher-1.jpg",
        teacher_name: "Eleanor Fant",
        teacher_title: "Instructor"
      },
      {
        teacher_img: "/images/course/teacher/teacher-2.jpg",
        teacher_name: "Lauren Stamps",
        teacher_title: "Teacher"
      },
      {
        teacher_img: "/images/course/teacher/teacher-3.jpg",
        teacher_name: "Jonquil Von",
        teacher_title: "Associate"
      },
    ],
    curriculum: [
      {
        id: 'course__accordion',
        course_c_title: 'Week 01',
        course_info: [
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            minute: '14 minutes',
            video: true,
          },
          {
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            minute: '15 minutes',
            questions: '3 questions',
            audio: true,
          },
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '22 minutes',
          },
        ]
      },
      {
        id: 'course__accordion-2',
        course_c_title: 'Week 02',
        course_info: [
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            minute: '14 minutes',
            video: true,
          },
          {
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            minute: '15 minutes',
            questions: '3 questions',
            audio: true,
          },
          {
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            minute: '22 minutes',
          },
        ]
      },
    ],
    reviews: [
      {
        user: '/images/course/comment/course-comment-1.jpg',
        name: 'Eleanor Fant',
        date: 'July 14, 2023',
        comment: "So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
        rating: 4.0,
      },
      {
        user: '/images/course/comment/course-comment-2.jpg',
        name: 'Shahnewaz Sakil',
        date: 'July 17, 2023',
        comment: "David blatant have it, standard A bit of how's your father my lady absolutely.",
        rating: 3.5,
      },
    ],
    created_at: 'April 15, 2022',
    updated_at: 'May 28, 2023',
  },
]

export default course_data;