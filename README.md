# Todo DevOps Assignment

![CI](https://github.com/pathumbandara0111/todo-devops-assignment/actions/workflows/ci.yml/badge.svg)
![Deploy](https://github.com/pathumbandara0111/todo-devops-assignment/actions/workflows/deploy.yml/badge.svg)

A responsive Todo List web application developed for the **Advanced Git & DevOps Team Collaboration Assignment**.

## 👥 Group Information

| Student | Name as in LMS | Student ID | Role |
|---|---|---|---|
| Pathum Bandara | Bandara A.G.D.P | ITBNM-2211-0111 | DevOps Engineer |
| Awish Easala | Kaluarachchi A.E. | ITBNM-2211-0139 | Full-Stack Developer |

## 📋 Project Description

A responsive Todo List application demonstrating professional Git and DevOps collaboration practices.

### Features

- Add tasks
- Delete tasks
- Mark tasks as completed
- Filter tasks by All, Active, and Completed
- Local storage persistence
- Task counter
- Responsive desktop and mobile interface

## 🚀 Live Deployment

**Platform:** Netlify

**Live URL:** https://tododevopsassignment.netlify.app

The production `main` branch is connected to Netlify for automatic deployment.

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Vite
- Node.js
- npm
- Git
- GitHub
- GitHub Actions
- Netlify

## 🌿 Branch Strategy

```text
main
│
└── develop
    ├── feature/todo-core
    └── feature/ci-pipeline
```

- `main` — Production branch
- `develop` — Development and integration branch
- `feature/todo-core` — Todo functionality
- `feature/ci-pipeline` — CI workflow

## 🔄 Git Workflow

1. Create a feature branch from `develop`
2. Develop the required feature
3. Create meaningful commits
4. Push the feature branch
5. Create a Pull Request
6. Team member reviews the Pull Request
7. Merge the approved Pull Request into `develop`
8. CI validation runs automatically
9. Create a release Pull Request from `develop` to `main`
10. Merge after approval
11. Netlify deploys the production `main` branch

## 👨‍💻 Individual Contributions

### Bandara A.G.D.P — Pathum Bandara

**Role: DevOps Engineer**

- Created and configured the GitHub repository
- Established the branch structure
- Configured `main` and `develop`
- Configured GitHub Actions CI
- Configured repository rules and branch protection
- Managed Pull Requests and release workflow
- Configured Netlify production deployment
- Coordinated CI/CD and release activities

Relevant commits:

- `304a222` — `feat: add local storage persistence`
- `5a8a59f` — `feat: add task deletion functionality`
- `6c8e8fb` — `feat: add task completion functionality`
- `c34f8f3` — `ci: add GitHub Actions build validation`

### Kaluarachchi A.E. — Awish Easala

**Role: Full-Stack Developer**

- Developed Todo application functionality
- Worked using the feature branch workflow
- Implemented and improved Todo functionality
- Created Pull Requests for feature integration
- Performed peer code review and approval
- Participated in integration and production release

Relevant Pull Requests:

- **PR #1** — Todo Core
- **PR #2** — CI Pipeline
- **PR #3** — Release: promote develop to main

## ⚙️ Continuous Integration

The CI workflow is located at:

```text
.github/workflows/ci.yml
```

The CI pipeline checks out the repository, sets up Node.js, installs dependencies, validates the project, and builds the Vite application.

Validation:

```bash
npm run check
```

Build:

```bash
npm run build
```

## 🚢 Continuous Deployment

The required deployment workflow is:

```text
.github/workflows/deploy.yml
```

Production deployment targets the `main` branch.

**Deployment platform:** Netlify

**Build command:**

```text
npm run build
```

**Publish directory:**

```text
dist
```

Netlify is also connected to the GitHub repository for automatic production deployment from `main`.

## 🔐 Branch Protection

The project uses GitHub repository rulesets.

Configured protections include:

- Pull Request required before merging
- Required approval
- Required CI status check
- Force pushes blocked
- Branch deletion restricted

The `main` branch is intended to remain protected so production changes are introduced through the approved Pull Request workflow.

## 🔀 Pull Requests & Code Review

### Pull Request #1 — Todo Core

```text
feature/todo-core → develop
```

Reviewed and approved before merging.

### Pull Request #2 — CI Pipeline

```text
feature/ci-pipeline → develop
```

Reviewed and approved before merging.

### Pull Request #3 — Release

```text
develop → main
```

Promoted the validated development branch to production.

## 🧩 Merge Conflict Resolution

The project follows the standard Git conflict-resolution process for collaborative development.

```bash
git checkout develop
git pull origin develop

git checkout feature/your-feature
git merge develop
```

After resolving conflicting sections:

```bash
git add .
git commit -m "fix: resolve merge conflict"
git push origin feature/your-feature
```

## 📦 Local Development

### Prerequisites

- Node.js 18 or higher
- npm
- Git

### Installation

```bash
git clone https://github.com/pathumbandara0111/todo-devops-assignment.git
cd todo-devops-assignment
npm ci
```

### Run

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Validation

```bash
npm run check
```

## 📁 Repository Structure

```text
todo-devops-assignment/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
├── public/
├── src/
├── .gitignore
├── README.md
├── index.html
├── package.json
└── package-lock.json
```

## ✅ Assignment Verification

- [x] Public GitHub repository
- [x] All student names and IDs included
- [x] `main` branch
- [x] `develop` branch
- [x] Feature branches
- [x] Pull Requests and peer approval
- [x] CI workflow
- [x] Netlify deployment
- [x] Live deployment URL
- [ ] `deploy.yml` created and passing
- [ ] `main` protection re-enabled
- [ ] Merge-conflict evidence documented with the actual conflict/commit
- [ ] Final repository verification

## 📄 Submission

The assignment requires **ONLY the GitHub repository link** to be submitted in the LMS.

https://github.com/pathumbandara0111/todo-devops-assignment.git
