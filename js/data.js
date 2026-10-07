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
    hasGithub: false,
    hasDemo: false
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
    hasGithub: false,
    hasDemo: false
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
    hasGithub: false,
    hasDemo: false
  },
  {
    title: "Dự án cá nhân - Todolist",
    period: "2025",
    role: "Fullstack Developer",
    tech: "React 19, Vite 7, TailwindCSS 4, Node.js, Express.js, MongoDB",
    description: "Xây dựng ứng dụng web quản lý công việc theo mô hình Fullstack.",
    bullets: [
      "Xây dựng ứng dụng web quản lý công việc theo mô hình Fullstack, frontend dùng React + Vite, backend dùng Node.js + Express theo kiến trúc MVC.",
      "Thiết kế MongoDB schema với Mongoose, hỗ trợ CRUD đầy đủ và lọc dữ liệu theo khoảng thời gian (ngày / tuần / tháng).",
      "Tối ưu truy vấn bằng MongoDB Aggregation Pipeline ($facet) để lấy danh sách task và thống kê trong một lần gọi API duy nhất.",
      "Xây dựng giao diện với TailwindCSS v4, Radix UI, tích hợp pagination, bộ lọc trạng thái, toast notifications.",
      "Cấu hình CORS, dotenv, path alias, ES Modules cho môi trường phát triển chuẩn."
    ],
    demoLink: "#",
    githubLink: "https://github.com/canhhieu02/todolist",
    hasGithub: true,
    hasDemo: false
  }
];

// Dữ liệu cho phần Tin tức / Blog
const newsData = [
  {
    image: "./assets/cat1.jpeg",
    tag: "Công nghệ",
    date: "20/10/2025",
    title: "Có gì mới trong React 19? Cập nhật những tính năng quan trọng",
    description: "React 19 mang đến hàng loạt cải tiến đột phá, định hình lại cách xây dựng ứng dụng web. Từ Server Components giúp tối ưu hóa hiệu suất tải trang, đến Actions đơn giản hóa việc quản lý trạng thái form, cùng các hook mới như useOptimistic. Bài viết phân tích sâu từng tính năng và hướng dẫn áp dụng vào dự án thực tế.",
    link: "#"
  },
  {
    image: "./assets/cat2.jpeg",
    tag: "Lập trình",
    date: "15/10/2025",
    title: "Xây dựng ứng dụng Real-time với Next.js và SignalR",
    description: "Xây dựng ứng dụng thời gian thực là một bài toán thú vị nhưng đầy thách thức. Bài viết hướng dẫn chi tiết cách tích hợp SignalR vào kiến trúc App Router của Next.js, giải quyết các vấn đề quản lý kết nối, xác thực và luồng dữ liệu hai chiều, giúp triển khai hệ thống thông báo hoặc dashboard hiệu suất cao.",
    link: "#"
  },
  {
    image: "./assets/cat3.jpeg",
    tag: "Câu chuyện",
    date: "01/10/2025",
    title: "Hành trình từ sinh viên An toàn thông tin đến Fullstack Developer",
    description: "Khởi đầu từ chuyên ngành An toàn thông tin, hành trình chuyển hướng sang Fullstack Developer là một chặng đường dài đầy thử thách. Bài viết là những chia sẻ chân thực về quá trình tự học, cách vượt qua áp lực khi tiếp cận công nghệ mới và những kinh nghiệm xương máu đúc kết được từ môi trường làm việc thực tế.",
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
