# Web Technology Assignment 01

A front-end web development practical project developed as part of the college **Web Technology Assignment 01** curriculum. The project demonstrates core foundational web technologies including semantic HTML5 markup, responsive CSS3 styling, and client-side Vanilla JavaScript validation.

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Folder Structure](#folder-structure)
4. [Module Descriptions](#module-descriptions)
   - [Root Home Page](#root-home-page)
   - [Module 01 – Login Page](#module-01--login-page)
   - [Module 02 – Student Marks Table](#module-02--student-marks-table)
5. [How to Open and Run Locally](#how-to-open-and-run-locally)
6. [GitHub Upload Instructions](#github-upload-instructions)
7. [GitHub Pages Deployment Instructions](#github-pages-deployment-instructions)
8. [Practical Verification Checklist](#practical-verification-checklist)

---

## 🚀 Project Overview

This repository contains two core practical modules alongside a unified navigation landing page:

- **Module 01 (Login Page):** A responsive user login card implementing interactive client-side form validation using Vanilla JavaScript. Upon successful login, creates a session in `sessionStorage` and redirects to the Student Marks Table.
- **Module 02 (Student Marks Table):** A protected tabular display of 10 student academic records, CET scores, contact numbers, and specializations, equipped with horizontal scroll, live search, sorting, pagination, and a Logout button. Direct access without logging in is guarded and redirected to the Login page.
- **Project Landing Page:** A clean, professional blue-and-white portal linking both practical modules.

---

## 🛠️ Technologies Used

- **HTML5:** Semantic document structure (`<header>`, `<main>`, `<footer>`, `<nav>`, `<table>`, `<thead>`, `<tbody>`).
- **CSS3:** Custom responsive layout, CSS grid, flexbox, CSS custom properties (variables), mobile-first breakpoints, and smooth transitions.
- **JavaScript (Vanilla / ES6):** DOM selection and manipulation, event-driven form validation, dynamic message display.
- **External Dependencies:** None (Zero frameworks, zero external libraries, zero backend/database dependencies).

---

## 📁 Folder Structure

```text
web-tech/
│
├── index.html                   # Project Landing / Home Page
├── home.css                     # Stylesheet for Home Page
├── README.md                    # Project Documentation & Guide
│
├── 01-Login-Page/               # Module 01: Login Form with JS Validation
│   ├── index.html               # Login page markup
│   ├── style.css                # Login page responsive styles
│   └── main.js                  # Client-side form validation script
│
└── 02-Student-Marks/            # Module 02: Student Marks Table
    ├── students.html            # Table markup with 10 student records
    └── students.css             # Responsive table styling with horizontal scroll
```

---

## 📦 Module Descriptions

### Root Home Page
- **Files:** `index.html`, `home.css`
- **Features:**
  - Professional blue and white visual theme.
  - Header with assignment title and description.
  - Interactive module cards with feature highlights and direct links to Module 01 and Module 02.
  - Fully responsive grid layout across mobile, tablet, and desktop viewports.

### Module 01 – Login Page
- **Folder:** `01-Login-Page/`
- **Files:** `index.html`, `style.css`, `main.js`
- **Form Elements:**
  - Username input (`#user`) with placeholder and accessible label.
  - Password input (`#pass`) with hidden character masking (`type="password"`).
  - Login action button (`#loginBtn`).
  - Dynamic status paragraph (`#msg`).
- **Validation Logic:**
  - When **both** fields contain values: Displays `"Login details entered!"` (with positive green styling).
  - When **either** field is empty: Displays `"Enter username and password."` (with warning red styling).
- **Navigation:** Includes a `"← Back to Home"` button to navigate back to the main landing page.

### Module 02 – Student Marks Table
- **Folder:** `02-Student-Marks/`
- **Files:** `students.html`, `students.css`, `students.js`
- **Columns:**
  1. `Roll No`
  2. `Student Name`
  3. `Mob No`
  4. `CET Score`
  5. `Area of Interest`
- **Interactive Features:**
  - **Live Search Filtering:** Instantly filter records in real time by name, roll number, CET score, or area of interest.
  - **Multi-Column Sorting:** Click on Roll No, Student Name, CET Score, or Area of Interest headers to toggle Ascending (▲) / Descending (▼) order.
  - **Pagination Controls:** Clean pagination (5 records per page) with Previous/Next buttons and real-time record count indicators.
  - **Responsive Horizontal Scroll:** Wrapped in `.table-responsive` with `overflow-x: auto` ensuring smooth horizontal scrolling on touch devices and small screens without breaking the page layout.
- **Dataset:** Contains exactly 10 student records from the college assignment syllabus:
  - 1: Amit (9876543210, CET: 85, Web Design)
  - 2: Priya (9876543211, CET: 90, AI)
  - 3: Rahul (9876543212, CET: 78, Java)
  - 4: Neha (9876543213, CET: 88, Python)
  - 5: Rohan (9876543214, CET: 82, Web Design)
  - 6: Sneha (9876543215, CET: 91, AI)
  - 7: Akash (9876543216, CET: 75, Cloud)
  - 8: Pooja (9876543217, CET: 87, Java)
  - 9: Om (9876543218, CET: 80, Python)
  - 10: Kiran (9876543219, CET: 92, AI)
- **Responsive Handling:** Wrapped in `.table-responsive` with `overflow-x: auto` ensuring smooth horizontal scrolling on touch devices and small screens without breaking the page layout.

---

## 💻 How to Open and Run Locally

### Option 1: Direct Browser Opening (No Server Required)
Because this project uses pure HTML5, CSS3, and Vanilla JavaScript with relative links, no build steps or local servers are mandatory:

1. Open your file manager and navigate to the project directory:
   ```bash
   cd /Users/rugved/Desktop/Somesh/web-tech
   ```
2. Double-click `index.html` (or right-click &rarr; **Open With** &rarr; **Google Chrome** / **Mozilla Firefox** / **Safari** / **Microsoft Edge**).
3. From the home page, click on either module card to open the respective module.
4. Use the `"← Back to Home"` link on either module page to return to the root menu.

### Option 2: Using VS Code Live Server Extension
1. Open the `web-tech` folder in Visual Studio Code.
2. If installed, click **Go Live** on the bottom status bar, or right-click `index.html` and select **Open with Live Server**.
3. The browser will open automatically at `http://127.0.0.1:5500/index.html`.

### Option 3: Using Python Built-in HTTP Server (Terminal)
Run the following command inside the project root folder:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## 📤 GitHub Upload Instructions

Follow these step-by-step commands to upload the project to a GitHub repository:

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com/).
2. In the top-right corner, click the **`+`** icon and select **New repository**.
3. Name the repository (e.g., `Web-Technology` or `web-tech-assignment-01`).
4. Keep the repository **Public** (recommended for college submissions and GitHub Pages).
5. Do **not** initialize with a README, .gitignore, or license (we already have a local project).
6. Click **Create repository**.

### Step 2: Push Local Project to GitHub
In your terminal, navigate to your project directory and execute:

```bash
# 1. Navigate to the project folder
cd /Users/rugved/Desktop/Somesh/web-tech

# 2. Initialize git repository (if not already initialized)
git init

# 3. Add all files to the staging area
git add .

# 4. Commit the files with a descriptive message
git commit -m "feat: complete Web Technology Assignment 01 with modules and audit"

# 5. Rename the default branch to main
git branch -M main

# 6. Link your local repository to your GitHub remote repository
# (Replace YOUR_USERNAME and REPO_NAME with your actual GitHub username and repository name)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 7. Push files to GitHub
git push -u origin main
```

---

## 🌐 GitHub Pages Deployment Instructions

Host your assignment live online free using GitHub Pages:

1. Open your repository on **GitHub**.
2. Navigate to the **Settings** tab located at the top menu.
3. In the left sidebar, click on **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   - **Source:** Select `Deploy from a branch`.
   - **Branch:** Select `main` from the dropdown, and keep the folder as `/(root)`.
   - Click **Save**.
5. Wait 1 to 2 minutes for GitHub to build and deploy your site.
6. Refresh the page; a banner will appear at the top:
   > *"Your site is live at `https://<YOUR_USERNAME>.github.io/<REPO_NAME>/`"*
7. Click the URL to view your live, fully functional assignment online!

---

## ✅ Practical Verification Checklist

| Item | Requirement | Status |
| :--- | :--- | :---: |
| 1 | Pure HTML5, CSS3, and Vanilla JavaScript (No frameworks) | ✅ Verified |
| 2 | Root `index.html` displays assignment heading & 2 module cards | ✅ Verified |
| 3 | Both module links in `index.html` resolve properly | ✅ Verified |
| 4 | Login page contains username, password, login button, and status display | ✅ Verified |
| 5 | Login validation displays `"Login details entered!"` when both fields filled | ✅ Verified |
| 6 | Login validation displays `"Enter username and password."` when any field empty | ✅ Verified |
| 7 | Student marks table displays exactly 10 student records | ✅ Verified |
| 8 | Table includes Roll No, Name, Mob No, CET Score, Area of Interest | ✅ Verified |
| 9 | Responsive horizontal scrolling configured for mobile tables | ✅ Verified |
| 10 | Clean, consistent blue-and-white theme across all screens | ✅ Verified |
| 11 | Complete documentation with GitHub & GitHub Pages guides | ✅ Verified |
