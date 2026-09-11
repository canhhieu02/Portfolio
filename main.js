
// ----------------- RENDER DATA DYNAMICALLY -------------------
function renderSkills() {
  const container = document.getElementById('skills-logos-container');
  if(!container) return;

  const renderIconList = (techList) => {
    return `
      <div class="icons-list-wrapper">
        <div class="icons-list">
          ${techList.map(tech => `<div class="icon-badges"><img src="${tech.icon}" alt="${tech.name}"/><span>${tech.name}</span></div>`).join('')}
        </div>
        <div class="icons-list">
          ${techList.map(tech => `<div class="icon-badges"><img src="${tech.icon}" alt="${tech.name}"/><span>${tech.name}</span></div>`).join('')}
        </div>
      </div>
    `;
  };

  container.innerHTML = renderIconList(skillsData.coreTech) + renderIconList(skillsData.advancedTech);

  const softSkillsContainer = document.getElementById('softSkills-container');
  if (softSkillsContainer) {
    let softHTML = '';
    skillsData.softSkills.forEach(skill => {
      softHTML += `<div class="softSkills_badge"><p>${skill}</p></div>`;
    });
    softHTML += `<div class="softSkills__book_icons">
      <img src="./assets/closed-book.svg" alt="closed book icon"/>
      <img src="./assets/closed-book.svg" alt="closed book icon"/>
      <img src="./assets/closed-book.svg" alt="closed book icon"/>
      <img src="./assets/closed-book.svg" alt="closed book icon"/>
    </div>`;
    softSkillsContainer.innerHTML = softHTML;
  }
}

function renderExperience() {
  const container = document.getElementById('experience-container');
  if (!container) return;
  
  let html = '';
  experienceData.forEach(job => {
    html += `
      <div class="experience__card">
        <div class="experience__card_header">
          <div class="experience__company">
            <h2>${job.company}</h2>
            ${job.isCurrent ? '<span class="experience__badge experience__badge--current">Hiện tại</span>' : ''}
          </div>
          <div class="experience__meta">
            <span class="experience__role">${job.role}</span>
            <span class="experience__period">${job.period}</span>
          </div>
        </div>
        <div class="experience__body">
          <ul>
            ${job.descriptions.map(desc => `<li>${desc}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function renderProjects() {
  const container = document.getElementById('projects-timeline');
  if (!container) return;
  
  let html = '<div class="line"></div>';
  projectsData.forEach((project, index) => {
    html += `
      <div class="projects__cards_container">
        <div class="bead"></div>
        <div class="projects_cards">
          <div class="projects__container">
            <div class="projects__content_container">
              <h1 class="section__title">${project.title}</h1>
              <p><span>Thời gian:</span> <strong>${project.period}</strong></p>
              ${project.role ? `<p><span>Vai trò:</span> ${project.role}</p>` : ''}
              ${project.tech ? `<p><span>Công nghệ:</span> ${project.tech}</p>` : ''}
              <p><span>Mô tả:</span> ${project.description}</p>
              ${project.bullets && project.bullets.length > 0 ? `<ul style="margin: 0.5rem 0 0 1rem; font-size: 0.9rem; opacity: 0.85;">
                ${project.bullets.map(b => `<li>${b}</li>`).join('')}
              </ul>` : ''}
              <div class="CTA" style="margin-top: 1rem;">
                ${project.hasDemo ? `<a href="${project.demoLink}" target="_blank" rel="noopener noreferrer" class="primaryButton">Demo</a>` : ''}
                ${project.hasGithub ? `<a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="outlineButton">GitHub</a>` : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function renderNews() {
  const container = document.getElementById('news-container');
  if (!container) return;
  
  let html = '';
  newsData.forEach(news => {
    html += `
      <article class="news__card">
        <div class="news__img_wrapper">
          <img src="${news.image}" alt="${news.tag}" />
        </div>
        <div class="news__content">
          <div class="news__meta">
            <span class="news__tag">${news.tag}</span>
            <span class="news__date">${news.date}</span>
          </div>
          <h2>${news.title}</h2>
          <p>${news.description}</p>
          <a href="${news.link}" class="news__readmore">Đọc tiếp <i class="fas fa-arrow-right"></i></a>
        </div>
      </article>
    `;
  });
  container.innerHTML = html;
}

function renderEducation() {
  const container = document.getElementById('education-container');
  if (!container) return;
  
  let html = '';
  educationData.forEach(edu => {
    html += `
      <div class="education__card">
        <div class="education__icon">${edu.icon}</div>
        <div class="education__content">
          <h2>${edu.title}</h2>
          ${edu.major ? `<p class="education__major">${edu.major}</p>` : ''}
          ${edu.period ? `<p class="education__period">${edu.period}</p>` : ''}
          <p>${edu.description}</p>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

// Call render functions before setting up scroll handlers
renderSkills();
renderExperience();
renderProjects();
renderNews();
renderEducation();
// -----------------------------------------------------------


function qs(selector, all = false) {
    return all ? document.querySelectorAll(selector) : document.querySelector(selector)
}

const sections = qs('.projects__cards_container', true);
const timeline = qs('.timeline');
const line = qs('.line');
line.style.bottom = `calc(100% - 20px)`;
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * 0.8;

function scrollHandler(e){
    const{
        scrollY
    } = window;
    up = scrollY < prevScrollY;
    down = !up;
    const timelineRect = timeline.getBoundingClientRect();
    const lineRect = line.getBoundingClientRect(); //CONST LINEHEIGHT = lineRect.bottom - lineRect.top

    const dist = targetY - timelineRect.top
    console.log(dist);

    if (down && !full){
        set = Math.max(set, dist);
            line.style.bottom = `calc(100% - ${set}px)`
    }

    if (dist > timeline.offsetHeight + 50 && !full){
        full = true;
        line.style.bottom = `-50px`
    }

    sections.forEach(item => {
        //console.log(items);
        const rect = item.getBoundingClientRect();

        if(rect.top + item.offsetHeight / 5 < targetY) {
            item.classList.add('show-me')
        }
    });

    prevScrollY = window.scrollY;
}

scrollHandler();
line.style.display = 'block';
window.addEventListener('scroll', scrollHandler)


// ----------------- cursor -------------------
const coords = { x: 0, y: 0 };

const circles = document.querySelectorAll(".circle");

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();

// ----------------- SCROLL ANIMATION OBSERVER -------------------
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Select elements to animate and observe them
const animateElements = document.querySelectorAll(
  '.section__title, .section__description, .experience__card, .projects_cards, .news__card, .education__card, .skills__grid_item'
);

animateElements.forEach(el => {
  el.classList.add('fade-in-section');
  observer.observe(el);
});
