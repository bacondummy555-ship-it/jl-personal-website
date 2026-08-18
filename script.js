// ========================================
// ELEMENTS
// ========================================

const body =
  document.body;

const root =
  document.documentElement;

const loader =
  document.getElementById(
    "loader"
  );

const header =
  document.getElementById(
    "header"
  );

const nav =
  document.getElementById(
    "nav"
  );

const menuBtn =
  document.getElementById(
    "menuBtn"
  );

const navLinks =
  document.querySelectorAll(
    ".nav-link"
  );

const sections =
  document.querySelectorAll(
    "main section"
  );

const typingText =
  document.getElementById(
    "typingText"
  );

const cursorGlow =
  document.getElementById(
    "cursorGlow"
  );

const profileCard =
  document.getElementById(
    "profileCard"
  );

const starsContainer =
  document.getElementById(
    "stars"
  );

// ========================================
// CURRENT YEAR
// ========================================

const yearElement =
  document.getElementById(
    "year"
  );

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}

// ========================================
// LOADER
// ========================================

body.classList.add(
  "loading"
);

window.addEventListener(
  "load",
  () => {

    setTimeout(
      () => {

        loader.classList.add(
          "hidden"
        );

        body.classList.remove(
          "loading"
        );

      },
      1400
    );

  }
);

// ========================================
// HEADER
// ========================================

function updateHeader() {

  if (
    window.scrollY >
    20
  ) {

    header.classList.add(
      "scrolled"
    );

  } else {

    header.classList.remove(
      "scrolled"
    );

  }

}

window.addEventListener(
  "scroll",
  updateHeader
);

updateHeader();

// ========================================
// MOBILE MENU
// ========================================

menuBtn.addEventListener(
  "click",
  () => {

    nav.classList.toggle(
      "open"
    );

  }
);

navLinks.forEach(
  link => {

    link.addEventListener(
      "click",
      () => {

        nav.classList.remove(
          "open"
        );

      }
    );

  }
);

// ========================================
// ACTIVE NAVIGATION
// ========================================

function updateNavigation() {

  let current =
    "home";

  sections.forEach(
    section => {

      const top =
        section.offsetTop -
        220;

      const bottom =
        top +
        section.offsetHeight;

      if (
        window.scrollY >=
        top &&
        window.scrollY <
        bottom
      ) {

        current =
          section.id;

      }

    }
  );

  navLinks.forEach(
    link => {

      link.classList.remove(
        "active"
      );

      if (
        link.getAttribute(
          "href"
        ) ===
        `#${current}`
      ) {

        link.classList.add(
          "active"
        );

      }

    }
  );

}

window.addEventListener(
  "scroll",
  updateNavigation
);

updateNavigation();

// ========================================
// TYPING EFFECT
// ========================================

const roles = [
  "Developer",
  "Creator",
  "Gamer",
  "Builder",
  "Student"
];

let roleIndex = 0;
let letterIndex = 0;
let deleting = false;

typingText.textContent =
  "";

function typeText() {

  const current =
    roles[roleIndex];

  if (
    !deleting
  ) {

    typingText.textContent =
      current.substring(
        0,
        letterIndex + 1
      );

    letterIndex++;

    if (
      letterIndex ===
      current.length
    ) {

      deleting = true;

      setTimeout(
        typeText,
        1300
      );

      return;

    }

  } else {

    typingText.textContent =
      current.substring(
        0,
        letterIndex - 1
      );

    letterIndex--;

    if (
      letterIndex ===
      0
    ) {

      deleting = false;

      roleIndex =
        (
          roleIndex + 1
        ) %
        roles.length;

    }

  }

  setTimeout(
    typeText,
    deleting
      ? 45
      : 85
  );

}

setTimeout(
  typeText,
  1600
);

// ========================================
// CURSOR GLOW
// ========================================

document.addEventListener(
  "mousemove",
  event => {

    if (
      !cursorGlow
    ) {

      return;

    }

    cursorGlow.style.left =
      `${event.clientX}px`;

    cursorGlow.style.top =
      `${event.clientY}px`;

  }
);

// ========================================
// PROFILE CARD 3D
// ========================================

if (
  profileCard
) {

  profileCard.addEventListener(
    "mousemove",
    event => {

      if (
        window.innerWidth <=
        900
      ) {

        return;

      }

      const rect =
        profileCard
          .getBoundingClientRect();

      const x =
        event.clientX -
        rect.left;

      const y =
        event.clientY -
        rect.top;

      const rotateY =
        (
          (
            x -
            rect.width / 2
          ) /
          (
            rect.width / 2
          )
        ) *
        5;

      const rotateX =
        (
          (
            y -
            rect.height / 2
          ) /
          (
            rect.height / 2
          )
        ) *
        -5;

      profileCard.style.transform =
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-5px)
        `;

    }
  );

  profileCard.addEventListener(
    "mouseleave",
    () => {

      profileCard.style.transform =
        "";

    }
  );

}

// ========================================
// REVEAL
// ========================================

const revealItems =
  document.querySelectorAll(
    `
    .about-grid,
    .projects-header,
    .project-card,
    .skills-layout,
    .contact-card
    `
  );

revealItems.forEach(
  item => {

    item.classList.add(
      "reveal"
    );

  }
);

const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(
        entry => {

          if (
            entry.isIntersecting
          ) {

            entry.target
              .classList.add(
                "visible"
              );

            revealObserver
              .unobserve(
                entry.target
              );

          }

        }
      );

    },
    {
      threshold: 0.12
    }
  );

revealItems.forEach(
  item => {

    revealObserver.observe(
      item
    );

  }
);

// ========================================
// SKILL BARS
// ========================================

const skillBars =
  document.querySelectorAll(
    ".skill-progress"
  );

const skillObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(
        entry => {

          if (
            !entry.isIntersecting
          ) {

            return;

          }

          const width =
            entry.target
              .dataset.width;

          entry.target
            .style.width =
              `${width}%`;

          skillObserver
            .unobserve(
              entry.target
            );

        }
      );

    },
    {
      threshold: 0.5
    }
  );

skillBars.forEach(
  bar => {

    skillObserver.observe(
      bar
    );

  }
);

// ========================================
// STARS
// ========================================

function createStars() {

  if (
    !starsContainer
  ) {

    return;

  }

  const amount =
    window.innerWidth <
    700
      ? 25
      : 55;

  for (
    let i = 0;
    i < amount;
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

    star.style.animationDuration =
      `${
        Math.random() *
        4 +
        3
      }s`;

    star.style.animationDelay =
      `${
        Math.random() *
        4
      }s`;

    starsContainer
      .appendChild(
        star
      );

  }

}

createStars();

// ========================================
// IMAGE FALLBACK
// ========================================

document
  .querySelectorAll(
    ".project-screenshot"
  )
  .forEach(
    image => {

      image.addEventListener(
        "error",
        () => {

          image.style.display =
            "none";

        }
      );

    }
  );

// ========================================
// EMPTY LINKS
// ========================================

document
  .querySelectorAll(
    'a[href="#"]'
  )
  .forEach(
    link => {

      link.addEventListener(
        "click",
        event => {

          event.preventDefault();

        }
      );

    }
  );

// ========================================
// GO TO SECTION
// ========================================

function goToSection(
  id
) {

  const section =
    document.getElementById(
      id
    );

  if (
    !section
  ) {

    return;

  }

  section.scrollIntoView({
    behavior:
      "smooth",
    block:
      "start"
  });

}

// ========================================
// COMMAND PALETTE ELEMENTS
// ========================================

const commandPalette =
  document.getElementById(
    "commandPalette"
  );

const commandBackdrop =
  document.getElementById(
    "commandBackdrop"
  );

const commandTrigger =
  document.getElementById(
    "commandTrigger"
  );

const commandInput =
  document.getElementById(
    "commandInput"
  );

const commandResults =
  document.getElementById(
    "commandResults"
  );

let selectedCommandIndex =
  0;

let visibleCommands =
  [];

// ========================================
// TERMINAL ELEMENTS
// ========================================

const terminalOverlay =
  document.getElementById(
    "terminalOverlay"
  );

const terminalBackdrop =
  document.getElementById(
    "terminalBackdrop"
  );

const terminalClose =
  document.getElementById(
    "terminalClose"
  );

const terminalTrigger =
  document.getElementById(
    "terminalTrigger"
  );

const terminalBody =
  document.getElementById(
    "terminalBody"
  );

const terminalOutput =
  document.getElementById(
    "terminalOutput"
  );

const terminalInput =
  document.getElementById(
    "terminalInput"
  );

// ========================================
// OPEN / CLOSE TERMINAL
// ========================================

function openTerminal() {

  closeCommandPalette();

  terminalOverlay
    .classList.add(
      "open"
    );

  terminalOverlay
    .setAttribute(
      "aria-hidden",
      "false"
    );

  body.classList.add(
    "overlay-open"
  );

  setTimeout(
    () => {

      terminalInput.focus();

      scrollTerminalBottom();

    },
    60
  );

}

function closeTerminal() {

  if (
    !terminalOverlay
  ) {

    return;

  }

  terminalOverlay
    .classList.remove(
      "open"
    );

  terminalOverlay
    .setAttribute(
      "aria-hidden",
      "true"
    );

  if (
    !commandPalette
      .classList
      .contains(
        "open"
      )
  ) {

    body.classList.remove(
      "overlay-open"
    );

  }

}

// ========================================
// PALETTE COMMANDS
// ========================================

const paletteCommands = [

  {
    icon:
      "⌂",

    title:
      "Home",

    description:
      "Return to the top of the website",

    keywords:
      "home start top main",

    action:
      () => {

        goToSection(
          "home"
        );

      }
  },

  {
    icon:
      "◉",

    title:
      "About Me",

    description:
      "Learn more about who I am",

    keywords:
      "about profile biography",

    action:
      () => {

        goToSection(
          "about"
        );

      }
  },

  {
    icon:
      "◆",

    title:
      "Featured Projects",

    description:
      "Jump to my featured projects",

    keywords:
      "projects work portfolio websites games bots",

    action:
      () => {

        goToSection(
          "projects"
        );

      }
  },

  {
    icon:
      "↗",

    title:
      "All Projects",

    description:
      "Open the full project archive",

    keywords:
      "all projects archive portfolio",

    action:
      () => {

        window.location.href =
          "projects.html";

      }
  },

  {
    icon:
      "⌘",

    title:
      "Skills",

    description:
      "See the technologies and tools I use",

    keywords:
      "skills html css javascript python vscode github",

    action:
      () => {

        goToSection(
          "skills"
        );

      }
  },

  {
    icon:
      "✉",

    title:
      "Contact",

    description:
      "Jump to the contact section",

    keywords:
      "contact email message collaborate",

    action:
      () => {

        goToSection(
          "contact"
        );

      }
  },

  {
    icon:
      ">_",

    title:
      "Developer Terminal",

    description:
      "Open the interactive JL.DEV terminal",

    keywords:
      "terminal console developer command shell",

    action:
      () => {

        openTerminal();

      }
  }

];

// ========================================
// RENDER COMMANDS
// ========================================

function renderCommands() {

  const query =
    commandInput.value
      .trim()
      .toLowerCase();

  visibleCommands =
    paletteCommands.filter(
      command => {

        const searchable =
          `
          ${command.title}
          ${command.description}
          ${command.keywords}
          `
          .toLowerCase();

        return searchable
          .includes(
            query
          );

      }
    );

  if (
    selectedCommandIndex >=
    visibleCommands.length
  ) {

    selectedCommandIndex =
      0;

  }

  commandResults.innerHTML =
    "";

  if (
    visibleCommands.length ===
    0
  ) {

    const empty =
      document.createElement(
        "div"
      );

    empty.className =
      "command-empty";

    empty.textContent =
      "No commands found.";

    commandResults
      .appendChild(
        empty
      );

    return;

  }

  visibleCommands.forEach(
    (
      command,
      index
    ) => {

      const button =
        document.createElement(
          "button"
        );

      button.className =
        "command-item";

      if (
        index ===
        selectedCommandIndex
      ) {

        button.classList.add(
          "selected"
        );

      }

      button.innerHTML =
        `
        <span class="command-item-icon">
          ${command.icon}
        </span>

        <span class="command-item-copy">

          <span class="command-item-title">
            ${command.title}
          </span>

          <span class="command-item-description">
            ${command.description}
          </span>

        </span>

        <span class="command-item-arrow">
          →
        </span>
        `;

      button.addEventListener(
        "mouseenter",
        () => {

          selectedCommandIndex =
            index;

          updateSelectedCommand();

        }
      );

      button.addEventListener(
        "click",
        () => {

          runSelectedCommand(
            index
          );

        }
      );

      commandResults
        .appendChild(
          button
        );

    }
  );

}

// ========================================
// UPDATE SELECTED COMMAND
// ========================================

function updateSelectedCommand() {

  const items =
    commandResults
      .querySelectorAll(
        ".command-item"
      );

  items.forEach(
    (
      item,
      index
    ) => {

      item.classList.toggle(
        "selected",
        index ===
        selectedCommandIndex
      );

    }
  );

  const selected =
    items[
      selectedCommandIndex
    ];

  if (
    selected
  ) {

    selected.scrollIntoView({
      block:
        "nearest"
    });

  }

}

// ========================================
// OPEN / CLOSE PALETTE
// ========================================

function openCommandPalette() {

  closeTerminal();

  commandPalette
    .classList.add(
      "open"
    );

  commandPalette
    .setAttribute(
      "aria-hidden",
      "false"
    );

  body.classList.add(
    "overlay-open"
  );

  commandInput.value =
    "";

  selectedCommandIndex =
    0;

  renderCommands();

  setTimeout(
    () => {

      commandInput.focus();

    },
    50
  );

}

function closeCommandPalette() {

  commandPalette
    .classList.remove(
      "open"
    );

  commandPalette
    .setAttribute(
      "aria-hidden",
      "true"
    );

  if (
    !terminalOverlay
      .classList
      .contains(
        "open"
      )
  ) {

    body.classList.remove(
      "overlay-open"
    );

  }

}

function runSelectedCommand(
  index =
    selectedCommandIndex
) {

  const command =
    visibleCommands[
      index
    ];

  if (
    !command
  ) {

    return;

  }

  closeCommandPalette();

  setTimeout(
    () => {

      command.action();

    },
    80
  );

}

// ========================================
// PALETTE EVENTS
// ========================================

commandTrigger
  .addEventListener(
    "click",
    openCommandPalette
  );

commandBackdrop
  .addEventListener(
    "click",
    closeCommandPalette
  );

commandInput
  .addEventListener(
    "input",
    () => {

      selectedCommandIndex =
        0;

      renderCommands();

    }
  );

commandInput
  .addEventListener(
    "keydown",
    event => {

      if (
        event.key ===
        "ArrowDown"
      ) {

        event.preventDefault();

        if (
          visibleCommands.length
        ) {

          selectedCommandIndex =
            (
              selectedCommandIndex +
              1
            ) %
            visibleCommands.length;

          updateSelectedCommand();

        }

      }

      if (
        event.key ===
        "ArrowUp"
      ) {

        event.preventDefault();

        if (
          visibleCommands.length
        ) {

          selectedCommandIndex =
            (
              selectedCommandIndex -
              1 +
              visibleCommands.length
            ) %
            visibleCommands.length;

          updateSelectedCommand();

        }

      }

      if (
        event.key ===
        "Enter"
      ) {

        event.preventDefault();

        runSelectedCommand();

      }

      if (
        event.key ===
        "Escape"
      ) {

        closeCommandPalette();

      }

    }
  );

// ========================================
// CTRL + K
// ========================================

document.addEventListener(
  "keydown",
  event => {

    const shortcut =
      (
        event.ctrlKey ||
        event.metaKey
      ) &&
      event.key
        .toLowerCase() ===
        "k";

    if (
      shortcut
    ) {

      event.preventDefault();

      if (
        commandPalette
          .classList
          .contains(
            "open"
          )
      ) {

        closeCommandPalette();

      } else {

        openCommandPalette();

      }

    }

  }
);

// ========================================
// TERMINAL HISTORY
// ========================================

let terminalHistory =
  [];

let terminalHistoryIndex =
  0;

// ========================================
// TERMINAL HELPERS
// ========================================

function scrollTerminalBottom() {

  terminalBody.scrollTop =
    terminalBody.scrollHeight;

}

function appendTerminalText(
  text,
  className =
    "terminal-response"
) {

  const line =
    document.createElement(
      "div"
    );

  line.className =
    `
    terminal-entry
    ${className}
    `;

  line.textContent =
    text;

  terminalOutput
    .appendChild(
      line
    );

  scrollTerminalBottom();

}

function appendTerminalCommand(
  command
) {

  const line =
    document.createElement(
      "div"
    );

  line.className =
    "terminal-entry terminal-command-line";

  const symbol =
    document.createElement(
      "span"
    );

  symbol.className =
    "terminal-command-symbol";

  symbol.textContent =
    "visitor@jl.dev:~$ ";

  const text =
    document.createElement(
      "span"
    );

  text.textContent =
    command;

  line.appendChild(
    symbol
  );

  line.appendChild(
    text
  );

  terminalOutput
    .appendChild(
      line
    );

}

// ========================================
// THEMES
// ========================================

const themes = {

  purple: {
    primary:
      "#7c5cff",

    secondary:
      "#2ec8ff"
  },

  red: {
    primary:
      "#ff475f",

    secondary:
      "#ff8a45"
  },

  blue: {
    primary:
      "#397cff",

    secondary:
      "#36d6ff"
  },

  green: {
    primary:
      "#3ed98a",

    secondary:
      "#46ffd1"
  },

  gold: {
    primary:
      "#f4b942",

    secondary:
      "#ffe08a"
  }

};

function applyTheme(
  themeName,
  save =
    true
) {

  const theme =
    themes[
      themeName
    ];

  if (
    !theme
  ) {

    return false;

  }

  root.style.setProperty(
    "--purple",
    theme.primary
  );

  root.style.setProperty(
    "--blue",
    theme.secondary
  );

  if (
    themeName !==
    "green"
  ) {

    body.classList.remove(
      "matrix-mode"
    );

  }

  if (
    save
  ) {

    localStorage.setItem(
      "jl-theme",
      themeName
    );

  }

  return true;

}

const savedTheme =
  localStorage.getItem(
    "jl-theme"
  );

if (
  savedTheme &&
  themes[
    savedTheme
  ]
) {

  applyTheme(
    savedTheme,
    false
  );

}

// ========================================
// TERMINAL COMMANDS
// ========================================

function executeTerminalCommand(
  rawCommand
) {

  const trimmed =
    rawCommand.trim();

  if (
    !trimmed
  ) {

    return;

  }

  appendTerminalCommand(
    trimmed
  );

  terminalHistory.push(
    trimmed
  );

  terminalHistoryIndex =
    terminalHistory.length;

  const parts =
    trimmed.split(
      /\s+/
    );

  const command =
    parts[0]
      .toLowerCase();

  const args =
    parts.slice(
      1
    );

  switch (
    command
  ) {

    case "help":

      appendTerminalText(
`Available commands:

help                  Show this command list
whoami                Display my profile
about                 Go to About Me
projects              Go to Featured Projects
allprojects           Open the full Projects page
skills                Go to Skills
contact               Go to Contact
home                  Return to Home
theme                  Show available themes
theme purple           Purple theme
theme red              Red theme
theme blue             Blue theme
theme green            Green theme
theme gold             Gold theme
matrix                 Toggle Matrix mode
date                   Show current date and time
echo [text]            Print text
clear                  Clear the terminal
palette                Open the Command Palette
exit                   Close the terminal`
      );

      break;

    case "whoami":

      appendTerminalText(
`JL IBANEZ

Developer • Gamer • Creator

Location: Philippines
Current focus: Web Development
Status: Building new projects`
      );

      break;

    case "about":

      appendTerminalText(
        "Opening About Me...",
        "terminal-success"
      );

      setTimeout(
        () => {

          closeTerminal();

          goToSection(
            "about"
          );

        },
        450
      );

      break;

    case "projects":

      appendTerminalText(
        "Opening Featured Projects...",
        "terminal-success"
      );

      setTimeout(
        () => {

          closeTerminal();

          goToSection(
            "projects"
          );

        },
        450
      );

      break;

    case "allprojects":

      appendTerminalText(
        "Opening project archive...",
        "terminal-success"
      );

      setTimeout(
        () => {

          window.location.href =
            "projects.html";

        },
        450
      );

      break;

    case "skills":

      appendTerminalText(
        "Opening Skills...",
        "terminal-success"
      );

      setTimeout(
        () => {

          closeTerminal();

          goToSection(
            "skills"
          );

        },
        450
      );

      break;

    case "contact":

      appendTerminalText(
        "Opening Contact...",
        "terminal-success"
      );

      setTimeout(
        () => {

          closeTerminal();

          goToSection(
            "contact"
          );

        },
        450
      );

      break;

    case "home":

      appendTerminalText(
        "Returning home...",
        "terminal-success"
      );

      setTimeout(
        () => {

          closeTerminal();

          goToSection(
            "home"
          );

        },
        450
      );

      break;

    case "clear":

      terminalOutput.innerHTML =
        "";

      break;

    case "date":

      appendTerminalText(
        new Date()
          .toLocaleString()
      );

      break;

    case "echo":

      appendTerminalText(
        args.join(
          " "
        )
      );

      break;

    case "theme":

      if (
        args.length ===
        0
      ) {

        appendTerminalText(
`Available themes:
purple
red
blue
green
gold

Example:
theme red`
        );

        break;

      }

      const themeName =
        args[0]
          .toLowerCase();

      if (
        applyTheme(
          themeName
        )
      ) {

        appendTerminalText(
          `Theme changed to ${themeName}.`,
          "terminal-success"
        );

      } else {

        appendTerminalText(
          `Unknown theme "${themeName}".`,
          "terminal-error"
        );

      }

      break;

    case "matrix":

      const matrixEnabled =
        body.classList.toggle(
          "matrix-mode"
        );

      if (
        matrixEnabled
      ) {

        applyTheme(
          "green"
        );

        appendTerminalText(
          "Matrix mode enabled.",
          "terminal-success"
        );

      } else {

        applyTheme(
          "purple"
        );

        appendTerminalText(
          "Matrix mode disabled.",
          "terminal-info"
        );

      }

      break;

    case "palette":

      appendTerminalText(
        "Opening command palette...",
        "terminal-success"
      );

      setTimeout(
        () => {

          closeTerminal();

          openCommandPalette();

        },
        300
      );

      break;

    case "exit":

      closeTerminal();

      break;

    default:

      appendTerminalText(
        `Command not found: ${command}`,
        "terminal-error"
      );

      appendTerminalText(
        'Type "help" to see available commands.'
      );

      break;

  }

  scrollTerminalBottom();

}

// ========================================
// TERMINAL INPUT
// ========================================

terminalInput.addEventListener(
  "keydown",
  event => {

    if (
      event.key ===
      "Enter"
    ) {

      const command =
        terminalInput.value;

      terminalInput.value =
        "";

      executeTerminalCommand(
        command
      );

    }

    if (
      event.key ===
      "ArrowUp"
    ) {

      event.preventDefault();

      if (
        terminalHistory.length ===
        0
      ) {

        return;

      }

      terminalHistoryIndex =
        Math.max(
          0,
          terminalHistoryIndex -
          1
        );

      terminalInput.value =
        terminalHistory[
          terminalHistoryIndex
        ];

    }

    if (
      event.key ===
      "ArrowDown"
    ) {

      event.preventDefault();

      if (
        terminalHistory.length ===
        0
      ) {

        return;

      }

      terminalHistoryIndex =
        Math.min(
          terminalHistory.length,
          terminalHistoryIndex +
          1
        );

      if (
        terminalHistoryIndex ===
        terminalHistory.length
      ) {

        terminalInput.value =
          "";

      } else {

        terminalInput.value =
          terminalHistory[
            terminalHistoryIndex
          ];

      }

    }

  }
);

// ========================================
// TERMINAL EVENTS
// ========================================

terminalTrigger
  .addEventListener(
    "click",
    openTerminal
  );

terminalClose
  .addEventListener(
    "click",
    closeTerminal
  );

terminalBackdrop
  .addEventListener(
    "click",
    closeTerminal
  );

terminalBody
  .addEventListener(
    "click",
    () => {

      terminalInput.focus();

    }
  );

// ========================================
// ESCAPE
// ========================================

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key !==
      "Escape"
    ) {

      return;

    }

    if (
      terminalOverlay
        .classList
        .contains(
          "open"
        )
    ) {

      closeTerminal();

      return;

    }

    if (
      commandPalette
        .classList
        .contains(
          "open"
        )
    ) {

      closeCommandPalette();

    }

  }
);
