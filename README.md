# Developer Portfolio - Nguyễn Cảnh Hiếu

Đây là trang web Portfolio cá nhân của **Nguyễn Cảnh Hiếu** - Fullstack Developer, được xây dựng bằng HTML, CSS và JavaScript thuần (Vanilla JS). Dự án này được thiết kế để giới thiệu kỹ năng, kinh nghiệm làm việc, học vấn và các dự án tiêu biểu.

## Tính Năng Nổi Bật

- **Kiến trúc dữ liệu động (Dynamic Rendering):** Thay vì viết cứng dữ liệu (hardcode) vào HTML, toàn bộ nội dung (Dự án, Kỹ năng, Kinh nghiệm, Blog) được tách riêng ra file `js/data.js`. Điều này giúp việc thêm hoặc sửa đổi nội dung trong tương lai vô cùng dễ dàng mà không cần thao tác với thẻ HTML.
- **Hiệu ứng mượt mà (Animations & Micro-interactions):** Sử dụng `IntersectionObserver` API để tự động phát hiện khi nội dung được cuộn tới (scroll) và kích hoạt hiệu ứng `fade-in` / `slide-up`.
- **Thiết kế hiện đại (Modern UI):** Sử dụng font chữ `Inter`, các hiệu ứng hover, glassmorphism và responsive design, đảm bảo trang web hiển thị đẹp mắt trên mọi thiết bị (Mobile, Tablet, Desktop).
- **CSS Module hóa:** Cấu trúc CSS rõ ràng, phân chia theo từng Section (Header, About, Projects...) giúp code dễ bảo trì và mở rộng.

## Cấu Trúc Thư Mục

```text
├── assets/                 # Thư mục chứa hình ảnh, icons, CV PDF
├── css/                    # Các file CSS
│   ├── sections/           # Style cho từng module riêng biệt (header, footer, projects...)
│   ├── main.css            # Nơi import tất cả file CSS con và định nghĩa biến (:root)
│   ├── animation.css       # Các keyframes và class animation
│   └── responsive.css      # Cấu hình hiển thị theo kích thước màn hình
├── js/
│   └── data.js             # [QUAN TRỌNG] Nơi lưu trữ toàn bộ nội dung của trang (JSON/Object)
├── index.html              # File giao diện chính, đóng vai trò layout khung
└── main.js                 # Chứa logic kết xuất dữ liệu (render) và xử lý animation, scroll
```

## Hướng Dẫn Thêm Hoặc Sửa Dữ Liệu

Bạn không cần phải tìm kiếm và chỉnh sửa các thẻ `<div>` hay `<ul>` phức tạp bên trong file `index.html`. Tất cả những gì bạn cần làm là mở file `js/data.js`.

Ví dụ: Để thêm một **Dự án mới**, bạn chỉ cần thêm một object vào mảng `projectsData` ở file `js/data.js`:

```javascript
{
  title: "Tên dự án của bạn",
  period: "09/2026 - nay",
  role: "Frontend Developer",
  tech: "React, Node.js",
  description: "Mô tả ngắn gọn về dự án",
  bullets: [
    "Điểm nổi bật 1",
    "Điểm nổi bật 2"
  ],
  demoLink: "https://link-demo.com",
  githubLink: "https://github.com/canhhieu02/repo",
  hasGithub: true,
  hasDemo: true
}
```
Lưu file lại và load trang, dự án mới sẽ tự động được hiển thị lên thẻ Timeline cùng các hiệu ứng đi kèm!

## Hướng Dẫn Khởi Chạy (Local)

Vì đây là một trang web tĩnh không sử dụng framework build tool phức tạp, bạn có thể khởi chạy bằng cách:

1. Mở thư mục gốc trong **Visual Studio Code**.
2. Cài đặt extension **Live Server**.
3. Chuột phải vào file `index.html` và chọn **"Open with Live Server"**.
4. Trình duyệt sẽ tự động mở trang web tại `http://127.0.0.1:5500`.

## Tác Giả

- **Nguyễn Cảnh Hiếu**
- Vị trí: Fullstack Developer / Frontend Developer
- GitHub: [github.com/canhhieu02](https://github.com/canhhieu02)
- Email: hieucoi098765@gmail.com
