const data = window.resumeData;

const setText = (selector, value) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
};

const createElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
};

const createList = (items) => {
  const list = document.createElement("ul");
  items.forEach((item) => {
    list.append(createElement("li", "", item));
  });
  return list;
};

const createTags = (tags) => {
  const wrapper = createElement("div", "tags");
  tags.forEach((tag) => {
    wrapper.append(createElement("span", "", tag));
  });
  return wrapper;
};

const renderProfile = () => {
  const { profile } = data;

  document.title = `${profile.name} | 後端工程師履歷`;
  setText("[data-profile='name']", profile.name);
  setText("[data-profile='title']", profile.title);
  setText("[data-profile='roleLabel']", profile.roleLabel);
  setText("[data-profile='summary']", profile.summary);
  setText("[data-profile='contactMessage']", profile.contactMessage);

  const photo = document.querySelector("#profilePhoto");
  photo.src = profile.photo;
  photo.alt = `${profile.name} 個人照片`;

  const emailHref = `mailto:${profile.email}`;
  const emailButton = document.querySelector("#emailButton");
  const contactEmailButton = document.querySelector("#contactEmailButton");
  emailButton.href = emailHref;
  contactEmailButton.href = emailHref;
  contactEmailButton.textContent = profile.email;

  const githubButton = document.querySelector("#githubButton");
  const contactGithubButton = document.querySelector("#contactGithubButton");
  githubButton.href = profile.githubUrl;
  contactGithubButton.href = profile.githubUrl;

  const profileDetails = document.querySelector("#profileDetails");
  profileDetails.innerHTML = "";

  [
    { label: "Email", value: profile.email, href: emailHref },
    { label: "Phone", value: profile.phone },
    { label: "GitHub", value: profile.githubName, href: profile.githubUrl },
  ].forEach((item) => {
    const row = document.createElement("div");
    row.append(createElement("dt", "", item.label));

    const description = document.createElement("dd");
    if (item.href) {
      const link = createElement("a", "", item.value);
      link.href = item.href;
      if (item.href.startsWith("http")) {
        link.target = "_blank";
        link.rel = "noreferrer";
      }
      description.append(link);
    } else {
      description.textContent = item.value;
    }

    row.append(description);
    profileDetails.append(row);
  });
};

const renderHighlights = () => {
  const highlights = document.querySelector("#highlights");
  highlights.innerHTML = "";

  data.highlights.forEach((item) => {
    const card = document.createElement("div");
    card.append(createElement("strong", "", item.value));
    card.append(createElement("span", "", item.label));
    highlights.append(card);
  });
};

const renderSections = () => {
  document.querySelectorAll("[data-section]").forEach((element) => {
    const [sectionName, fieldName] = element.dataset.section.split(".");
    element.textContent = data.sections?.[sectionName]?.[fieldName] ?? "";
  });
};

const renderSkills = () => {
  const skillsList = document.querySelector("#skillsList");
  skillsList.innerHTML = "";

  data.skills.forEach((skill) => {
    const card = createElement("article", "skill-card");
    card.append(createElement("h3", "", skill.title));
    card.append(createList(skill.items));
    skillsList.append(card);
  });
};

const renderExperience = () => {
  const experienceList = document.querySelector("#experienceList");
  experienceList.innerHTML = "";

  data.experience.forEach((job) => {
    const card = createElement("article", "experience-card");
    const meta = createElement("div", "experience-meta");
    meta.append(createElement("span", "", job.period));
    meta.append(createElement("span", "", job.company));

    card.append(meta);
    card.append(createElement("h3", "", job.title));
    card.append(createList(job.bullets));
    card.append(createTags(job.tags));
    experienceList.append(card);
  });
};

const renderProjects = () => {
  const projectsList = document.querySelector("#projectsList");
  projectsList.innerHTML = "";

  data.projects.forEach((project) => {
    const card = createElement("article", "project-card");
    const content = document.createElement("div");
    content.append(createElement("p", "project-subtitle", project.subtitle));
    content.append(createElement("h3", "", project.title));
    content.append(createElement("p", "", project.description));

    const footer = document.createElement("div");
    footer.append(createTags(project.tags));

    const links = createElement("div", "project-links");
    project.links.forEach((item) => {
      const link = createElement("a", "", item.label);
      link.href = item.url;
      link.target = "_blank";
      link.rel = "noreferrer";
      links.append(link);
    });
    footer.append(links);

    card.append(content);
    card.append(footer);
    projectsList.append(card);
  });
};

renderProfile();
renderHighlights();
renderSections();
renderSkills();
renderExperience();
renderProjects();
