# Todo DevOps Assignment

![CI](https://github.com/pathumbandara0111/todo-devops-assignment/actions/workflows/ci.yml/badge.svg)

A responsive Todo List web application developed as part of the **Advanced Git & DevOps Team Collaboration Assignment**.

## 👥 Team Members

| Student | Name as in LMS | Student ID | Role |
|---|---|---|---|
| Pathum Bandara | Bandara A.G.D.P | ITBNM-2211-0111 | DevOps Engineer |
| Awish Easala | Kaluarachchi A.E. | ITBNM-2211-0139 | Full-Stack Developer |

## 📋 Project Overview

The project demonstrates collaborative Git and DevOps practices including feature branching, Pull Requests, peer review, GitHub Actions CI, branch protection, merge-conflict resolution, release management, and Netlify deployment.

Users can:
- Add tasks
- Delete tasks
- Mark tasks as completed
- Filter tasks by All, Active, and Completed
- Store tasks using browser local storage
- View the task counter
- Use the application on desktop and mobile devices

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

## 🌿 Git Branching Strategy

```text
main
  │
  └── Production / Release Branch
       │
       └── develop
            │
            ├── feature/todo-core
            ├── feature/ci-pipeline
            ├── docs/readme
            └── feature/netlify-deployment
```

- `main` - Production/release branch
- `develop` - Integration and validation branch
- `feature/todo-core` - Todo application functionality
- `feature/ci-pipeline` - GitHub Actions CI configuration
- `docs/readme` - Project documentation
- `feature/netlify-deployment` - Netlify deployment configuration

## 🔄 Git Workflow

1. Create a feature branch from `develop`
2. Implement the required change
3. Create meaningful commits
4. Push the feature branch
5. Create a Pull Request
6. A team member reviews the Pull Request
7. The Pull Request is approved and merged into `develop`
8. GitHub Actions CI validation runs
9. The validated `develop` branch is promoted to `main` through a Release Pull Request
10. `main` represents the production/release state

## 👨‍💻 Individual Contributions

### Bandara A.G.D.P — Pathum Bandara
**Role: DevOps Engineer**

- Created and configured the GitHub repository
- Established the Git branching structure
- Configured `develop` and `main`
- Created and maintained GitHub Actions CI
- Added deployment workflow/configuration
- Configured branch protection rules
- Managed Pull Requests and release workflow
- Monitored CI and deployment checks
- Coordinated the production release process
- Prepared CI/CD and Git workflow documentation

### Kaluarachchi A.E. — Awish Easala
**Role: Full-Stack Developer**

- Developed Todo application functionality
- Worked using the feature branch workflow
- Implemented and improved Todo functionality
- Participated in Pull Requests
- Performed peer code reviews and approvals
- Participated in integration and release

## 🔀 Pull Requests & Code Review

The repository contains **6 closed/merged Pull Requests**:

### PR #1 — `feat: complete todo core functionality`
```text
feature/todo-core → develop
```
Todo core functionality was integrated after peer review and approval by Awish Easala.

### PR #2 — `ci: add GitHub Actions build validation`
```text
feature/ci-pipeline → develop
```
GitHub Actions CI validation was added and reviewed before merging.

### PR #3 — `release: promote develop to main`
```text
develop → main
```
The validated development state was promoted to the production branch.

### PR #4 — `docs: add project README`
```text
docs/readme → main
```
Initial project documentation was added through a Pull Request.

### PR #5 — `docs: update README and add Netlify deployment`
```text
feature/netlify-deployment → develop
```
README documentation and Netlify deployment configuration were added. CI and Netlify deployment checks passed, followed by peer approval from Awish Easala.

### PR #6 — `release: promote develop to main`
```text
develop → main
```
The final validated development state, including the README and Netlify deployment configuration, was promoted to `main`.

## 🧩 Merge Conflict Resolution

A real merge conflict occurred during the final release workflow involving `README.md`.

The conflict was resolved before PR #6 was merged. The final Pull Request shows:
- README conflict detected
- Conflict resolution completed
- Peer approval by Awish Easala
- All required checks passed
- Release successfully merged into `main`

This demonstrates practical collaborative conflict resolution rather than only documenting the procedure.

## ⚙️ Continuous Integration

The CI workflow is located at:

```text
.github/workflows/ci.yml
```

The workflow:
1. Checks out the repository
2. Sets up Node.js
3. Installs dependencies using `npm ci`
4. Runs project validation
5. Builds the Vite application

The validation command is:

```bash
npm run check
```

The check executes the application build:

```bash
npm run build
```

The repository's GitHub Actions build check is named:

```text
Build Application
```

## 🚀 Continuous Deployment

### Deployment Platform

**Netlify**

The application is deployed through the connected Netlify project.

Production application:

[https://tododevopsassigment.netlify.app/](https://tododevopsassigment.netlify.app/)

The repository also contains:

```text
.github/workflows/deploy.yml
```

Netlify deployment checks/previews are visible on the Pull Requests, and the production application is publicly accessible.

## 🔐 Branch Protection

Both major branches are protected using GitHub Rulesets.

### `develop`

Configured protections include:
- Pull Request required before merging
- Required approval
- Required CI status check
- Force pushes blocked
- Branch deletion restricted

### `main`

The production branch is also protected so production changes are introduced through the approved Pull Request workflow.

Configured protections include:
- Pull Request required before merging
- Required CI status check
- Force pushes blocked
- Branch deletion restricted

## 🧪 CI & Deployment Evidence

The repository demonstrates successful checks for the final release workflow, including:

- GitHub Actions `Build Application` check passed
- Netlify deployment/preview check passed
- Peer review and approval completed
- Final release Pull Request merged successfully

## 📦 Local Development

### Requirements

- Node.js
- npm
- Git

### Installation

```bash
git clone https://github.com/pathumbandara0111/todo-devops-assignment.git
cd todo-devops-assignment
npm ci
```

Run the development server:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Validation:

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

## ✅ Assignment Evidence

The repository demonstrates:

- Public GitHub repository
- Two-student team collaboration
- Meaningful commit history
- `main` production branch
- `develop` integration branch
- Multiple feature/documentation branches
- Pull Requests
- Peer code review and approval
- GitHub Actions CI
- Required status checks
- Branch protection
- Real merge-conflict resolution
- Release Pull Requests
- Netlify deployment
- Automated build validation
- Individual contribution history
- Project documentation

## 📄 Submission

**GitHub Repository:**

https://github.com/pathumbandara0111/todo-devops-assignment

**Live Application:**

https://tododevopsassignment.netlify.app/
