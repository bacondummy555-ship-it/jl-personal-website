const projects = [

  {
    id: 1,

    title:
      "Personal Website",

    category:
      "website",

    categoryLabel:
      "WEB DEVELOPMENT",

    icon:
      "🌐",

    image:
      "assets/projects/personal-website.jpg",

    status:
      "LIVE",

    statusClass:
      "live",

    year:
      "2026",

    description:
      "A modern personal portfolio website built to showcase my profile, skills, projects, and digital work.",

    fullDescription:
      "A modern portfolio website designed as my personal digital space. It includes responsive layouts, animated sections, project showcases, interactive components, a command palette, developer terminal, and a futuristic visual style.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript"
    ],

    features: [
      "Responsive design",
      "Animated loading screen",
      "Interactive profile card",
      "Command palette",
      "Developer terminal",
      "Project showcase",
      "Skill animations",
      "Social preview and SEO"
    ],

    github:
      "#",

    live:
      "https://jl-personal-website-ten.vercel.app/"
  },

  {
    id: 2,

    title:
      "Idle Cultivation",

    category:
      "game",

    categoryLabel:
      "WEB GAME",

    icon:
      "⚔️",

    image:
      "assets/projects/idle-cultivation.jpg",

    status:
      "DEVELOPMENT",

    statusClass:
      "development",

    year:
      "2026",

    description:
      "A browser-based idle cultivation game featuring progression, upgrades, rewards, and character growth.",

    fullDescription:
      "A cultivation-inspired browser game where the player grows stronger over time by cultivating, earning resources, improving stats, advancing realms, and unlocking additional progression systems.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "LocalStorage"
    ],

    features: [
      "Cultivation system",
      "Realm progression",
      "Idle resource generation",
      "Character statistics",
      "Upgrade systems",
      "Local save data"
    ],

    github:
      "#",

    live:
      "#"
  },

  {
    id: 3,

    title:
      "Discord Tools",

    category:
      "bot",

    categoryLabel:
      "DISCORD AUTOMATION",

    icon:
      "🤖",

    image:
      "assets/projects/discord-tools.jpg",

    status:
      "PRIVATE",

    statusClass:
      "private",

    year:
      "2026",

    description:
      "Custom Discord bots and automation systems built for communities and server management.",

    fullDescription:
      "A collection of custom Discord systems made for moderation, community interaction, anonymous messages, server management, automation, and custom commands.",

    technologies: [
      "Node.js",
      "JavaScript",
      "Discord.js",
      "Database"
    ],

    features: [
      "Custom commands",
      "Moderation systems",
      "Anonymous messages",
      "Interactive buttons",
      "Database integration",
      "Community automation"
    ],

    github:
      "#",

    live:
      "#"
  },

  {
    id: 4,

    title:
      "Video Filter Tool",

    category:
      "tool",

    categoryLabel:
      "WEB TOOL",

    icon:
      "🎬",

    image:
      "assets/projects/video-tool.jpg",

    status:
      "DEVELOPMENT",

    statusClass:
      "development",

    year:
      "2026",

    description:
      "An experimental browser tool for uploading and processing videos.",

    fullDescription:
      "A web-based video processing experiment featuring uploads, previews, processing options, and a custom interface designed for working with video files.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Video Processing"
    ],

    features: [
      "Video upload",
      "Video preview",
      "Processing interface",
      "Drag and drop",
      "Responsive layout"
    ],

    github:
      "#",

    live:
      "#"
  },

  {
    id: 5,

    title:
      "Community Website",

    category:
      "website",

    categoryLabel:
      "COMMUNITY WEBSITE",

    icon:
      "👥",

    image:
      "assets/projects/community-site.jpg",

    status:
      "LIVE",

    statusClass:
      "live",

    year:
      "2026",

    description:
      "A community-focused website featuring members, rules, statistics, and interactive pages.",

    fullDescription:
      "A complete community website featuring member displays, statistics, gallery pages, community rules, announcements, and integration with external community systems.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "API"
    ],

    features: [
      "Member directory",
      "Community statistics",
      "Rules page",
      "Gallery",
      "API integration",
      "Responsive interface"
    ],

    github:
      "#",

    live:
      "#"
  },

  {
    id: 6,

    title:
      "Anonymous Confession Bot",

    category:
      "bot",

    categoryLabel:
      "DISCORD BOT",

    icon:
      "💬",

    image:
      "assets/projects/confession-bot.jpg",

    status:
      "PRIVATE",

    statusClass:
      "private",

    year:
      "2026",

    description:
      "A custom Discord confession bot built around anonymous community interactions.",

    fullDescription:
      "A custom Discord bot that allows members to submit anonymous confessions and replies while including moderation controls, user restrictions, persistent data, and interactive Discord components.",

    technologies: [
      "Node.js",
      "Discord.js",
      "SQLite",
      "JavaScript"
    ],

    features: [
      "Anonymous confessions",
      "Anonymous replies",
      "User ban system",
      "Persistent database",
      "Discord modals",
      "Interactive buttons"
    ],

    github:
      "#",

    live:
      "#"
  }

];

const projectsGrid =
  document.getElementById(
    "projectsGrid"
  );

const projectSearch =
  document.getElementById(
    "projectSearch"
  );

const filterButtons =
  document.querySelectorAll(
    ".filter"
  );

const projectCount =
  document.getElementById(
    "projectCount"
  );

const noResults =
  document.getElementById(
    "noResults"
  );

const modal =
  document.getElementById(
    "projectModal"
  );

const modalClose =
  document.getElementById(
    "modalClose"
  );

const modalBackdrop =
  document.getElementById(
    "modalBackdrop"
  );

let currentFilter =
  "all";

function createProjectCard(
  project
) {

  const card =
    document.createElement(
      "article"
    );

  card.className =
    "project-card";

  const tags =
    project.technologies
      .slice(0, 3)
      .map(
        tech =>
          `<span>${tech}</span>`
      )
      .join("");

  card.innerHTML =
    `
      <div class="project-image">

        <img
          src="${project.image}"
          alt="${project.title}"
          onerror="this.style.display='none'"
        />

        <div class="project-placeholder">
          ${project.icon}
        </div>

        <span class="status ${project.statusClass}">
          ${project.status}
        </span>

      </div>

      <div class="project-content">

        <p class="project-category">
          ${project.categoryLabel}
        </p>

        <h2>
          ${project.title}
        </h2>

        <p>
          ${project.description}
        </p>

        <div class="tags">
          ${tags}
        </div>

        <div class="project-actions">

          <button
            class="details-button"
            data-id="${project.id}"
          >
            View Details
          </button>

          <a
            href="${project.github}"
            class="icon-button project-external-link"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            GH
          </a>

          <a
            href="${project.live}"
            class="icon-button project-external-link"
            target="_blank"
            rel="noopener noreferrer"
            title="Live Demo"
          >
            ↗
          </a>

        </div>

      </div>
    `;

  return card;

}

function renderProjects() {

  const searchValue =
    projectSearch.value
      .toLowerCase()
      .trim();

  const filtered =
    projects.filter(
      project => {

        const matchesCategory =
          currentFilter === "all" ||
          project.category ===
          currentFilter;

        const searchable =
          `
          ${project.title}
          ${project.description}
          ${project.categoryLabel}
          ${project.technologies.join(" ")}
          `
          .toLowerCase();

        const matchesSearch =
          searchable.includes(
            searchValue
          );

        return (
          matchesCategory &&
          matchesSearch
        );

      }
    );

  projectsGrid.innerHTML =
    "";

  filtered.forEach(
    project => {

      projectsGrid.appendChild(
        createProjectCard(
          project
        )
      );

    }
  );

  projectCount.textContent =
    filtered.length;

  noResults.style.display =
    filtered.length === 0
      ? "block"
      : "none";

  setupProjectButtons();

}

filterButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        filterButtons.forEach(
          btn => {

            btn.classList.remove(
              "active"
            );

          }
        );

        button.classList.add(
          "active"
        );

        currentFilter =
          button.dataset.filter;

        renderProjects();

      }
    );

  }
);

projectSearch.addEventListener(
  "input",
  renderProjects
);

const modalImage =
  document.getElementById(
    "modalImage"
  );

const modalPlaceholder =
  document.getElementById(
    "modalPlaceholder"
  );

const modalCategory =
  document.getElementById(
    "modalCategory"
  );

const modalTitle =
  document.getElementById(
    "modalTitle"
  );

const modalDescription =
  document.getElementById(
    "modalDescription"
  );

const modalStatus =
  document.getElementById(
    "modalStatus"
  );

const modalYear =
  document.getElementById(
    "modalYear"
  );

const modalTags =
  document.getElementById(
    "modalTags"
  );

const modalFeatures =
  document.getElementById(
    "modalFeatures"
  );

const modalGithub =
  document.getElementById(
    "modalGithub"
  );

const modalLive =
  document.getElementById(
    "modalLive"
  );

function openModal(
  id
) {

  const project =
    projects.find(
      project =>
        project.id === id
    );

  if (
    !project
  ) {

    return;

  }

  modalTitle.textContent =
    project.title;

  modalCategory.textContent =
    project.categoryLabel;

  modalDescription.textContent =
    project.fullDescription;

  modalStatus.textContent =
    project.status;

  modalYear.textContent =
    project.year;

  modalPlaceholder.textContent =
    project.icon;

  modalTags.innerHTML =
    "";

  project.technologies.forEach(
    tech => {

      const span =
        document.createElement(
          "span"
        );

      span.textContent =
        tech;

      modalTags.appendChild(
        span
      );

    }
  );

  modalFeatures.innerHTML =
    "";

  project.features.forEach(
    feature => {

      const item =
        document.createElement(
          "li"
        );

      item.textContent =
        feature;

      modalFeatures.appendChild(
        item
      );

    }
  );

  modalImage.style.display =
    "block";

  modalImage.src =
    project.image;

  modalImage.alt =
    project.title;

  modalImage.onerror =
    () => {

      modalImage.style.display =
        "none";

    };

  modalGithub.href =
    project.github;

  modalLive.href =
    project.live;

  modal.classList.add(
    "open"
  );

  document.body.classList.add(
    "modal-open"
  );

}

function closeModal() {

  modal.classList.remove(
    "open"
  );

  document.body.classList.remove(
    "modal-open"
  );

}

function setupProjectButtons() {

  document
    .querySelectorAll(
      ".details-button"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            openModal(
              Number(
                button.dataset.id
              )
            );

          }
        );

      }
    );

  document
    .querySelectorAll(
      ".project-external-link"
    )
    .forEach(
      link => {

        if (
          link.getAttribute(
            "href"
          ) === "#"
        ) {

          link.addEventListener(
            "click",
            event => {

              event.preventDefault();

            }
          );

        }

      }
    );

}

modalClose.addEventListener(
  "click",
  closeModal
);

modalBackdrop.addEventListener(
  "click",
  closeModal
);

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key ===
      "Escape"
    ) {

      closeModal();

    }

  }
);

document.getElementById(
  "year"
).textContent =
  new Date().getFullYear();

const stars =
  document.getElementById(
    "stars"
  );

for (
  let i = 0;
  i < 50;
  i++
) {

  const star =
    document.createElement(
      "span"
    );

  star.className =
    "star";

  const size =
    Math.random() *
    1.5 +
    0.5;

  star.style.width =
    `${size}px`;

  star.style.height =
    `${size}px`;

  star.style.left =
    `${Math.random() * 100}%`;

  star.style.top =
    `${Math.random() * 100}%`;

  stars.appendChild(
    star
  );

}

renderProjects();
