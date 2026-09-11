// Dữ liệu cho phần Kinh nghiệm làm việc
const experienceData = [
  {
    company: "Công ty cổ phần ZAMIGA",
    isCurrent: true,
    role: "Front-end Developer",
    period: "05/2025 — nay",
    descriptions: [
      "Chuyên xây dựng giao diện, tối ưu trải nghiệm người dùng (UI/UX) trên website và ứng dụng.",
      "Sử dụng HTML, CSS, JavaScript và các framework hiện đại (React, Next.js, TypeScript).",
      "Phát triển hệ thống giám sát an ninh thông minh tích hợp AI với real-time video streaming."
    ]
  },
  {
    company: "Ss It Joint Stock Company",
    isCurrent: false,
    role: "Thực tập sinh",
    period: "08/2024 — 05/2025",
    descriptions: [
      "Phát triển ứng dụng chấm bài trắc nghiệm bằng cách quay video.",
      "Xử lý dữ liệu để tự động chấm điểm nhanh chóng và chính xác."
    ]
  }
];

// Dữ liệu cho phần Dự án
const projectsData = [
  {
    title: "Mobi Vision — AI Vision & Giám sát An ninh Thông minh",
    period: "05/2026 — nay",
    role: "Fullstack Developer",
    tech: "Next.js 16, React 19, TypeScript 5, Ant Design 6, Tailwind CSS 4, Zustand 5, SignalR, Leaflet.",
    description: "Phát triển giao diện nền tảng giám sát an ninh thông minh tích hợp AI — hỗ trợ xem camera trực tiếp, quản lý sự cố và điều phối lực lượng ứng cứu theo thời gian thực.",
    bullets: [
      "Kiến trúc Next.js App Router phức tạp với Feature-based Architecture, state toàn cục bằng Zustand.",
      "Tích hợp Keycloak OIDC (PKCE flow), Axios interceptors tự động refresh token.",
      "Pipeline WebSocket + MediaSource Extensions (MSE) phát video fMP4 trực tiếp; xử lý MJPEG streaming với auto-retry.",
      "SignalR hub nhận cảnh báo sự cố real-time; bản đồ Leaflet với custom SVG markers và lọc địa lý."
    ],
    demoLink: "#",
    githubLink: "https://github.com/canhhieu02",
    hasGithub: true,
    hasDemo: true
  },
  {
    title: "Nền Tảng Cán Bộ Số",
    period: "12/2025 — nay",
    role: "Frontend Developer",
    tech: "",
    description: "Xây dựng môi trường làm việc số, tăng hiệu quả phối hợp và xử lý công việc cho cán bộ, công chức mọi lúc mọi nơi.",
    bullets: [
      "Thiết kế giao diện người dùng, đảm bảo website responsive trên mọi thiết bị.",
      "Phát triển các trang chính: trang chủ, đăng nhập/đăng ký.",
      "Phối hợp với Backend team để tích hợp API và đảm bảo hiệu năng hệ thống."
    ],
    demoLink: "#",
    githubLink: "https://github.com/canhhieu02",
    hasGithub: true,
    hasDemo: true
  },
  {
    title: "Website & Mobile App Tương Tác Người Dân",
    period: "08/2025 — 12/2025",
    role: "Frontend Developer",
    tech: "",
    description: "Nền tảng cung cấp dịch vụ số, tiếp nhận phản ánh kiến nghị nhằm tăng cường tương tác giữa chính quyền và người dân.",
    bullets: [
      "Thiết kế giao diện người dùng, đảm bảo website responsive.",
      "Phát triển các trang chính: trang chủ, đăng nhập/đăng ký.",
      "Phối hợp với Backend team tích hợp API và tối ưu hiệu năng hệ thống."
    ],
    demoLink: "#",
    githubLink: "https://github.com/canhhieu02",
    hasGithub: true,
    hasDemo: true
  },
  {
    title: "Đồ Án Tốt Nghiệp — Kiểm Soát Truy Nhập Linux",
    period: "10/2024 — 01/2025",
    role: "",
    tech: "",
    description: "Xây dựng bài thực hành cho kiểm soát truy nhập và phân tích mã trong môi trường Linux.",
    bullets: [],
    demoLink: "",
    githubLink: "https://github.com/canhhieu02/doantotnghiep",
    hasGithub: true,
    hasDemo: false
  },
  {
    title: "Dự Án Môn Học — Tool Giấu Tin trong Audio",
    period: "06/2024 — 08/2024",
    role: "",
    tech: "Python",
    description: "Xây dựng tool giấu tin trong audio bằng Python (steganography).",
    bullets: [],
    demoLink: "https://rg.com.vn/d5VGg",
    githubLink: "",
    hasGithub: false,
    hasDemo: true
  },
  {
    title: "Website Khoa Tiếng Italia",
    period: "16/09/2025 — 22/09/2025",
    role: "",
    tech: "HTML, CSS, JavaScript",
    description: "Xây dựng một trang web giới thiệu Khoa Tiếng Italia, áp dụng các kỹ năng HTML, CSS, và JavaScript.",
    bullets: [],
    demoLink: "https://thuctap.inevn.com/nguyencanhhieu/TT0/index.html#s1",
    githubLink: "https://github.com/canhhieu02/WebKhoaTiengItalia",
    hasGithub: true,
    hasDemo: true
  },
  {
    title: "Portfolio Cá Nhân",
    period: "03/10/2025 — 06/10/2025",
    role: "",
    tech: "HTML, CSS, JavaScript",
    description: "Xây dựng trang web hồ sơ cá nhân để giới thiệu bản thân, kỹ năng, kinh nghiệm và dự án đã thực hiện.",
    bullets: [],
    demoLink: "https://thuctap.inevn.com/nguyencanhhieu/TT1/index.html#s1",
    githubLink: "https://github.com/canhhieu02/Portfolio",
    hasGithub: true,
    hasDemo: true
  }
];

// Dữ liệu cho phần Tin tức / Blog
const newsData = [
  {
    image: "./assets/cat1.jpeg",
    tag: "Công nghệ",
    date: "20/10/2025",
    title: "Có gì mới trong React 19? Cập nhật những tính năng quan trọng",
    description: "React 19 mang đến nhiều cải tiến vượt bậc như Server Components, Actions và các hook mới. Cùng tìm hiểu cách áp dụng vào dự án thực tế.",
    link: "#"
  },
  {
    image: "./assets/cat2.jpeg",
    tag: "Lập trình",
    date: "15/10/2025",
    title: "Xây dựng ứng dụng Real-time với Next.js và SignalR",
    description: "Hướng dẫn chi tiết cách tích hợp SignalR vào Next.js App Router để tạo các ứng dụng thời gian thực hiệu suất cao, dễ bảo trì.",
    link: "#"
  },
  {
    image: "./assets/cat3.jpeg",
    tag: "Câu chuyện",
    date: "01/10/2025",
    title: "Hành trình từ sinh viên An toàn thông tin đến Fullstack Developer",
    description: "Câu chuyện chia sẻ về quá trình chuyển hướng và những bài học kinh nghiệm quý giá trong quá trình học tập và làm việc.",
    link: "#"
  }
];

// Dữ liệu cho phần Học vấn & Chứng chỉ
const educationData = [
  {
    icon: "🎓",
    title: "Học viện Công nghệ Bưu chính Viễn thông",
    major: "An toàn thông tin",
    period: "10/2020 — 05/2025",
    description: "Đã tốt nghiệp · GPA: <strong>2.9 / 4</strong>"
  },
  {
    icon: "📜",
    title: "Aptis ESOL — B1",
    major: "Chứng chỉ tiếng Anh quốc tế",
    period: "11/2024",
    description: "Có khả năng đọc hiểu tài liệu tiếng Anh ở mức cơ bản."
  },
  {
    icon: "🏸",
    title: "Sở Thích",
    major: "",
    period: "",
    description: "Chơi cầu lông · Nghe nhạc · Hoạt động ngoài trời"
  }
];

// Dữ liệu cho phần Kỹ năng & Chuyên môn
const skillsData = {
  coreTech: [
    { name: "JavaScript", icon: "./assets/icons/JS.svg" },
    { name: "HTML5", icon: "./assets/icons/html.svg" },
    { name: "CSS3", icon: "./assets/icons/css.svg" },
    { name: "React 19", icon: "./assets/icons/react.svg" },
    { name: "Next.js 16", icon: "./assets/icons/nextjs.svg" },
    { name: "Node.js", icon: "./assets/icons/node-js.svg" },
    { name: "PostgreSQL", icon: "./assets/icons/postgresql.svg" },
    { name: "GitHub", icon: "./assets/icons/github.svg" },
    { name: "C/C++", icon: "./assets/icons/C.svg" }
  ],
  advancedTech: [
    { name: "TypeScript 5", icon: "./assets/icons/JS.svg" }, // Assuming TS icon is JS.svg in original HTML
    { name: "Java", icon: "./assets/icons/java.svg" },
    { name: "Zustand 5", icon: "./assets/icons/react.svg" },
    { name: "ExpressJS", icon: "./assets/icons/node-js.svg" },
    { name: "Tailwind CSS 4", icon: "./assets/icons/css.svg" },
    { name: "GitLab", icon: "./assets/icons/github.svg" },
    { name: "MongoDB", icon: "./assets/icons/postgresql.svg" }, // MongoDB using postgres icon in HTML?
    { name: "Docker", icon: "./assets/icons/nextjs.svg" }
  ],
  softSkills: [
    "Giao tiếp chuyên nghiệp",
    "Làm việc nhóm hiệu quả",
    "Quản lý thời gian",
    "Giải quyết vấn đề",
    "Ham học hỏi",
    "Thích nghi nhanh",
    "Tư duy hệ thống",
    "Chủ động & Trách nhiệm"
  ]
};
