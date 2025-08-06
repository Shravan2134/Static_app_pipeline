const bioText = [
  "Passionate about building secure cloud architectures.",
  "Loves solving algorithmic challenges in Python.",
  "Exploring CI/CD pipelines and Kubernetes workflows.",
];

const skills = ["Python", "Azure", "Docker", "FastAPI", "GitHub Actions", "SQL", "Helm", "Harness"];

const projects = [
  { name: "String Toolkit", tech: "Python", description: "A web tool for string manipulation." },
  { name: "Secure HR Portal", tech: "Azure", description: "Designed secure access flows using Bastion and NSGs." },
  { name: "CI/CD Pipeline", tech: "Docker", description: "Automated builds and deployments with GitHub Actions." },
];

document.getElementById("bio").textContent = bioText[Math.floor(Math.random() * bioText.length)];

const skillsList = document.getElementById("skillsList");
skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

const projectCards = document.getElementById("projectCards");
function renderProjects(filter = "all") {
  projectCards.innerHTML = "";
  projects
    .filter(p => filter === "all" || p.tech === filter)
    .forEach(p => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `<h3>${p.name}</h3><p>${p.description}</p><small><strong>${p.tech}</strong></small>`;
      projectCards.appendChild(card);
    });
}
renderProjects();

document.querySelectorAll("#projectFilters button").forEach(btn => {
  btn.addEventListener("click", () => renderProjects(btn.dataset.tech));
});

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
