# Todo DevOps Assignment

![CI](https://github.com/pathumbandara0111/todo-devops-assignment/actions/workflows/ci.yml/badge.svg)

A responsive Todo List web application developed as part of the Advanced Git & DevOps Team Collaboration Assignment.

## 👥 Team Members

| Student | Name as in LMS | Student ID | Role |
|---|---|---|---|
| Pathum Bandara | Bandara A.G.D.P | ITBNM-2211-0111 | DevOps Engineer |
| Awish Easala | Kaluarachchi A.E. | ITBNM-2211-0139 | Full-Stack Developer |

## 📋 Project Overview

A Todo List application demonstrating Git collaboration, feature branching, Pull Requests, code review, GitHub Actions CI/CD, branch protection, and cloud deployment.

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
- Vercel

## 🌿 Git Branching Strategy

```text
main
  │
  └── Production / Release Branch
       │
       └── develop
            │
            ├── feature/todo-core
            └── feature/ci-pipeline
```

- `main` - Production-ready code
- `develop` - Integration and validation branch
- `feature/todo-core` - Todo application functionality
- `feature/ci-pipeline` - GitHub Actions CI configuration

## 🔄 Git Workflow

1. Create a feature branch from `develop`
2. Implement the required feature
3. Create meaningful commits
4. Push the feature branch
5. Create a Pull Request
6. Team member reviews the Pull Request
7. Approved Pull Request is merged into `develop`
8. CI validation runs automatically
9. `develop` is promoted to `main` through a Release Pull Request
10. `main` represents the production version

## 👨‍💻 Individual Contributions

### Bandara A.G.D.P — Pathum Bandara
**Role: DevOps Engineer**

- Created and configured the GitHub repository
- Established the Git branching structure
- Configured `develop` and `main`
- Created and maintained GitHub Actions CI workflow
- Configured branch protection rules
- Managed Pull Requests and release workflow
- Monitored CI results
- Coordinated the production release process
- Prepared CI/CD and Git workflow documentation

Relevant commits:
- `304a222` — feat: add local storage persistence
- `5a8a59f` — feat: add task deletion functionality
- `6c8e8fb` — feat: add task completion functionality
- `c34f8f3` — ci: add GitHub Actions build validation

### Kaluarachchi A.E. — Awish Easala
**Role: Full-Stack Developer**

- Developed Todo application functionality
- Worked using the feature branch workflow
- Implemented and improved Todo functionality
- Created Pull Requests for feature integration
- Performed code review and approval
- Participated in integration and release

Relevant Pull Requests:
- PR #1 — Todo core
- PR #2 — CI pipeline
- PR #3 — Release: promote develop to main

## ⚙️ Continuous Integration

The CI workflow is located at:

```text
.github/workflows/ci.yml
```

It:
1. Checks out the repository
2. Sets up Node.js
3. Uses npm dependency caching
4. Installs dependencies with `npm ci`
5. Runs validation
6. Builds the Vite application

Triggers:
- Pushes to `develop`
- Pushes to feature branches
- Pull Requests targeting `develop`

Validation:

```bash
npm run check
```

The check executes:

```bash
npm run build
```

## 🚀 Continuous Deployment

The production branch is:

```text
main
```

The deployment pipeline is designed to automatically deploy the application when production changes are merged into `main`.

Deployment platform:

**Vercel**

Live deployment URL:

> To be added after deployment setup.

## 🔐 Branch Protection

The `develop` branch is protected using GitHub Rulesets.

Configured protections include:
- Pull Request required before merging
- Required approval
- Required CI status check
- Force pushes blocked
- Branch deletion restricted

The production `main` branch is intended to remain protected so production changes are introduced through the approved Pull Request workflow.

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

For collaborative development, merge conflicts are resolved by updating the feature branch with the latest `develop` changes:

```bash
git checkout develop
git pull origin develop

git checkout feature/your-feature
git merge develop
```

If a conflict occurs, the team resolves the conflicting sections, removes conflict markers, and completes the merge:

```bash
git add .
git commit -m "fix: resolve merge conflict"
git push origin feature/your-feature
```

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

Run development server:

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
│       └── ci.yml
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
- `main` production branch
- `develop` integration branch
- Feature branches
- Pull Requests
- Peer code review
- GitHub Actions CI
- Branch protection
- Release workflow
- Automated build validation
- Individual contribution history
- Cloud deployment configuration

## 📄 Submission

GitHub repository:

https://github.com/pathumbandara0111/todo-devops-assignment
