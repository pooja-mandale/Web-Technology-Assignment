# Web Technology Assignment 01

A comprehensive front-end web development practical project developed as part of the college **Web Technology Assignment 01** curriculum. 

The project strictly utilizes **HTML5**, **CSS3**, and **Vanilla JavaScript** (ES6+) without any third-party frameworks, external CSS libraries, or backend databases. It bridges academic practical criteria with real-world software design patterns—featuring interactive form validation, animated on-screen toast popups, session-based route protection, multi-column table sorting, live search filtering, and client-side pagination.

---

## 📋 Table of Contents

1. [Project Overview](#-project-overview)
2. [Technologies Used](#-technologies-used)
3. [Project Architecture & User Flow](#-project-architecture--user-flow)
4. [Detailed Project Structure](#-detailed-project-structure)
5. [In-Depth Project Logic](#-in-depth-project-logic)
   - [1. Authentication & Route Guard Logic](#1-authentication--route-guard-logic)
   - [2. Form Validation & Auto-Redirection Logic](#2-form-validation--auto-redirection-logic)
   - [3. Interactive On-Screen Popup (Toast) System](#3-interactive-on-screen-popup-toast-system)
   - [4. Multi-Field Live Search Logic](#4-multi-field-live-search-logic)
   - [5. Column Sorting (Ascending / Descending) Logic](#5-column-sorting-ascending--descending-logic)
   - [6. Client-Side Pagination Logic](#6-client-side-pagination-logic)
   - [7. Session Cleanup & Logout Logic](#7-session-cleanup--logout-logic)
6. [Dataset Specification (10 Student Records)](#-dataset-specification-10-student-records)
7. [How to Open and Run Locally](#-how-to-open-and-run-locally)
8. [GitHub Upload Instructions](#-github-upload-instructions)
9. [GitHub Pages Deployment Instructions](#-github-pages-deployment-instructions)
10. [Academic Practical Verification Checklist](#-academic-practical-verification-checklist)

---

## 🚀 Project Overview

The project is structured around two core curriculum questions unified through a centralized portal:

- **Root Landing Portal (`index.html`):** The primary hub presenting assignment metadata, responsive module cards, and automated authentication verification before routing.
- **Module 01 – Login Page (`01-Login-Page/`):** A responsive credential verification module. Features clear demo credentials, client-side validation against empty/whitespace inputs, dual-layer feedback (inline state messages + floating animated toast popups), and session issuance via `sessionStorage`.
- **Module 02 – Student Marks Table (`02-Student-Marks/`):** A protected academic record dashboard displaying the 10 syllabus-mandated student records. Enhanced with real-time search, interactive multi-column sorting, 5-per-page pagination, a personalized greeting header, and an explicit logout handler.

---

## 🛠️ Technologies Used

- **HTML5:** Semantic document architecture (`<header>`, `<main>`, `<footer>`, `<nav>`, `<table>`, `<thead>`, `<tbody>`, `<th>`, `<tr>`, `<td>`, `<form>`, `<input>`, `<button>`).
- **CSS3:** Custom responsive design system, CSS Grid, Flexbox layout, CSS Custom Properties (variables), mobile-first media queries, and CSS `@keyframes` slide animations.
- **Vanilla JavaScript (ES6+):** DOM manipulation, event listeners (`input`, `click`, `DOMContentLoaded`), `sessionStorage` Web Storage API, and asynchronous timers (`setTimeout`).
- **Zero Dependencies:** No React, Vue, Angular, Bootstrap, Tailwind, jQuery, or backend server.

---

## 🔄 Project Architecture & User Flow

```text
               +-----------------------------+
               |      Root Home Page         |
               |       (index.html)          |
               +--------------+--------------+
                              |
             +----------------+----------------+
             |                                 |
      [Card 1 Clicked]                  [Card 2 Clicked]
             |                                 |
             v                                 v
+------------------------+           +-----------------------+
|  01-Login-Page/        |           | Check sessionStorage: |
|  (index.html)          |           | isLoggedIn === "true"?|
+-----------+------------+           +-----------+-----------+
            |                                    |
     [Form Submitted]                   No       |       Yes
            |                      +-------------+--------+
    +-------+-------+              |                      |
    |               |              v                      v
[Empty]         [Valid]     [Show Error Toast]   +----------------------+
    |               |       [Redirect to Login]  | 02-Student-Marks/    |
    v               v                            | (students.html)      |
[Error Toast]  [Success Toast]                   +----------+-----------+
               [Set Session]                                |
               [1s Redirection]                             v
                    +--------------------------------> [Protected Table]
                                                       - Live Search
                                                       - Column Sorting
                                                       - 5-per-page Pagination
                                                       - Logout -> Clears Session
```

---

## 📁 Detailed Project Structure

```text
web-tech/
│
├── index.html                   # Central Assignment Landing Portal
├── home.css                     # Stylesheet for Landing Portal & Global Toast System
├── README.md                    # Complete Architecture, Logic, and Deployment Guide
│
├── 01-Login-Page/               # MODULE 01: Client-Side Login & Validation
│   ├── index.html               # Semantic login form markup with demo credentials box
│   ├── style.css                # Card layout, input focus rings, and popup animations
│   └── main.js                  # Form validation, session creation, and toast notifications
│
└── 02-Student-Marks/            # MODULE 02: Protected Student Records Table
    ├── students.html            # Table markup, search toolbar, and pagination controls
    ├── students.css             # Responsive table, interest badges, and horizontal scroll
    └── students.js              # Auth Guard, dataset, search, sort, pagination & logout
```

### File-by-File Responsibility Breakdown

| File Path | Primary Responsibility |
| :--- | :--- |
| `index.html` | Serves as the college practical submission home page. Displays Assignment 01 title, module overview cards, and guards access to Module 02 via `checkAuth()`. |
| `home.css` | Implements the primary blue-and-white theme (`#1e40af`, `#f0f4f8`), responsive card grid, and the floating toast notification styling. |
| `01-Login-Page/index.html` | Defines the login card layout, includes a demo credentials notice, hidden input labels for accessibility, and dynamic `#msg` placeholder. |
| `01-Login-Page/style.css` | Controls centered card elevation (`max-width: 360px`), input focus glow, positive/negative message styling, and button hover states. |
| `01-Login-Page/main.js` | Validates username/password inputs, displays inline feedback, triggers green/red toast popups, persists `sessionStorage`, and schedules automatic redirection. |
| `02-Student-Marks/students.html` | Houses the student data table, search bar with icon, sortable column headers, pagination bar, and logout button. |
| `02-Student-Marks/students.css` | Handles tabular aesthetics (dark blue headers, alternating row striping, colored interest pills), and enforces horizontal scrolling on viewports under 640px. |
| `02-Student-Marks/students.js` | Executes the Auth Guard before page render, stores the 10 student records array, computes search filters, executes dynamic sorts, and handles page slicing. |

---

## 🧠 In-Depth Project Logic

### 1. Authentication & Route Guard Logic
Because this is a pure front-end client practical, session state is securely managed using the browser's native **`sessionStorage`** Web API:
- When a user logs in, `sessionStorage.setItem("isLoggedIn", "true")` and `sessionStorage.setItem("currentUser", u)` are set.
- On `02-Student-Marks/students.js`, before rendering any student data, an **Auth Guard** runs at the very top:
  ```javascript
  if (sessionStorage.getItem("isLoggedIn") !== "true") {
    sessionStorage.setItem("authError", "Access restricted: Please log in first to view student marks.");
    window.location.href = "../01-Login-Page/index.html";
  }
  ```
- If an unauthenticated user enters the table URL directly or clicks Card 2 on the Home page, they are blocked, redirected to `01-Login-Page/index.html`, and shown an on-screen error popup.

---

### 2. Form Validation & Auto-Redirection Logic
In `01-Login-Page/main.js`, form submission is intercepted using `event.preventDefault()`:
1. Both inputs are stripped of leading/trailing whitespace via `.trim()`.
2. **Success Case (`u && p`):**
   - Updates `#msg.innerText = "Login details entered! Redirecting..."` with class `.msg-success`.
   - Fires a green success toast popup (`toast-success`).
   - Persists session credentials to `sessionStorage`.
   - Executes `setTimeout(() => window.location.href = "../02-Student-Marks/students.html", 1000)` to redirect after 1 second.
3. **Failure Case (`!u || !p`):**
   - Updates `#msg.innerText = "Enter username and password."` with class `.msg-error`.
   - Fires a red error toast popup (`toast-error`).

---

### 3. Interactive On-Screen Popup (Toast) System
To avoid disruptive, blocking native browser `alert()` dialogs, a non-blocking toast engine (`showPopup`) is implemented in Vanilla JavaScript:
```javascript
function showPopup(message, type = "info", duration = 3000) {
  let container = document.getElementById("popupContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "popupContainer";
    container.className = "popup-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `popup-toast toast-${type}`;
  toast.innerHTML = `
    <span>${message}</span>
    <button class="popup-close" onclick="this.parentElement.remove()" aria-label="Close">&times;</button>
  `;
  container.appendChild(toast);

  if (duration > 0) {
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(-10px)";
      setTimeout(() => {
        if (toast.parentElement) toast.parentElement.removeChild(toast);
      }, 300);
    }, duration);
  }
}
```
- **Animations:** Slides downward smoothly via `@keyframes popupSlideIn`.
- **Dismissal:** Automatically fades and unmounts after the specified `duration`, or immediately upon clicking the `×` button.

---

### 4. Multi-Field Live Search Logic
In `02-Student-Marks/students.js`, the search input is connected via `oninput="handleSearch(this.value)"`:
- The query is converted to lowercase: `query = val.trim().toLowerCase()`.
- The dataset is filtered across **5 properties simultaneously**:
  ```javascript
  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(query) ||
    s.interest.toLowerCase().includes(query) ||
    String(s.roll).includes(query) ||
    String(s.score).includes(query) ||
    s.phone.includes(query)
  );
  ```
- Resets current page to 1 on every keystroke (`page = 1`) and re-renders the table in real time.
- Displays an empty state (`No students found matching "<query>"`) if no matches exist.

---

### 5. Column Sorting (Ascending / Descending) Logic
Table headers for **Roll No**, **Student Name**, **CET Score**, and **Area of Interest** are clickable:
- Clicking a header calls `handleSort(key)`:
  - If clicking the active column: toggles `sortAsc = !sortAsc`.
  - If clicking a new column: sets `sortKey = key` and defaults `sortAsc = true`.
- The comparator dynamically detects string vs. number types:
  ```javascript
  filtered.sort((a, b) => {
    const v1 = a[sortKey], v2 = b[sortKey];
    if (typeof v1 === "string") {
      return sortAsc ? v1.localeCompare(v2) : v2.localeCompare(v1);
    }
    return sortAsc ? v1 - v2 : v2 - v1;
  });
  ```
- Visual indicators update immediately: `▲` (Ascending), `▼` (Descending), or `↕` (Inactive).

---

### 6. Client-Side Pagination Logic
To maintain clean presentation, records are divided into pages (default `pageSize = 5`):
- Calculates total pages: `const totalPages = Math.ceil(filtered.length / pageSize) || 1;`
- Restricts current page index within bounds: `page = Math.min(Math.max(1, page), totalPages);`
- Slices the sorted and filtered dataset:
  ```javascript
  const start = (page - 1) * pageSize;
  const paged = filtered.slice(start, start + pageSize);
  ```
- Updates UI indicators:
  - Header badge: `"${filtered.length} Students"`
  - Range text: `"Showing 1–5 of 10"`
  - Page indicator: `"Page 1 of 2"`
- Disables **Previous** when `page === 1` and disables **Next** when `page >= totalPages`.

---

### 7. Session Cleanup & Logout Logic
When the user clicks the **Logout** button on the Student Marks screen:
1. `sessionStorage.removeItem("isLoggedIn")` deletes the authorization token.
2. `sessionStorage.removeItem("currentUser")` clears the active username.
3. Sets a transient notification: `sessionStorage.setItem("logoutMessage", "You have been logged out successfully.")`.
4. Redirects to `01-Login-Page/index.html`.
5. Upon landing on the Login Page, `DOMContentLoaded` retrieves the message, displays a blue info toast popup, and removes the transient key.

---

## 📊 Dataset Specification (10 Student Records)

The table strictly uses the 10 student records defined in the college assignment syllabus:

| Roll No | Student Name | Mobile Number | CET Score | Area of Interest |
| :---: | :--- | :---: | :---: | :--- |
| **1** | Amit | 9876543210 | 85 | Web Design |
| **2** | Priya | 9876543211 | 90 | AI |
| **3** | Rahul | 9876543212 | 78 | Java |
| **4** | Neha | 9876543213 | 88 | Python |
| **5** | Rohan | 9876543214 | 82 | Web Design |
| **6** | Sneha | 9876543215 | 91 | AI |
| **7** | Akash | 9876543216 | 75 | Cloud |
| **8** | Pooja | 9876543217 | 87 | Java |
| **9** | Om | 9876543218 | 80 | Python |
| **10** | Kiran | 9876543219 | 92 | AI |

---

## 💻 How to Open and Run Locally

### Option 1: Direct File Execution (Zero Setup)
No build steps, package managers, or compilers are needed:
1. Navigate to the project root folder:
   ```bash
   cd /Users/rugved/Desktop/Somesh/web-tech
   ```
2. Double-click `index.html` (or right-click &rarr; **Open With** &rarr; **Google Chrome** / **Safari** / **Firefox** / **Edge**).
3. The application will launch with full functionality.

### Option 2: Using VS Code Live Server
1. Open the `web-tech` directory in Visual Studio Code.
2. Right-click `index.html` and select **Open with Live Server** (or click **Go Live** on the bottom status bar).
3. The browser will open at `http://127.0.0.1:5500/index.html`.

### Option 3: Using Python Built-in Server
Run the standard Python HTTP server in your terminal:
```bash
python3 -m http.server 8000
```
Open `http://localhost:8000` in your web browser.

---

## 📤 GitHub Upload Instructions

The repository is linked to GitHub. To commit and push updates, run:

```bash
# 1. Navigate to repository root
cd /Users/rugved/Desktop/Somesh/web-tech

# 2. Stage all modifications
git add .

# 3. Commit with a meaningful message
git commit -m "docs: update README with detailed project structure and logic"

# 4. Push directly to main branch
git push origin main
```

---

## 🌐 GitHub Pages Deployment Instructions

Host the assignment live on the web free through GitHub Pages:

1. Open your repository at [github.com/pooja-mandale/Web-Technology-Assignment](https://github.com/pooja-mandale/Web-Technology-Assignment).
2. Click on **Settings** in the top navigation bar.
3. In the left menu under **Code and automation**, click **Pages**.
4. Under **Build and deployment**:
   - **Source:** Select `Deploy from a branch`.
   - **Branch:** Select `main` & `/(root)`.
   - Click **Save**.
5. After 1 to 2 minutes, GitHub will generate your live URL:
   > `https://pooja-mandale.github.io/Web-Technology-Assignment/`

---

## ✅ Academic Practical Verification Checklist

| Criterion | Specification | Status |
| :--- | :--- | :---: |
| **Technology Constraint** | Pure HTML5, CSS3, Vanilla JS (No frameworks/libraries) | ✅ Verified |
| **Directory Organization** | `01-Login-Page/`, `02-Student-Marks/`, and root files | ✅ Verified |
| **Login Validation** | Displays `"Login details entered!"` when both fields filled | ✅ Verified |
| **Empty Input Handling** | Displays `"Enter username and password."` on empty input | ✅ Verified |
| **On-Screen Notifications** | Styled animated toast popups for error, success, and info | ✅ Verified |
| **Authentication Guard** | Blocks unauthenticated direct visits to Student Marks | ✅ Verified |
| **10 Student Records** | Exactly 10 student rows matching assignment syllabus | ✅ Verified |
| **Table Interactivity** | Live multi-field search + multi-column sorting (▲/▼) | ✅ Verified |
| **Table Pagination** | 5 records per page with working Prev/Next buttons | ✅ Verified |
| **Mobile Responsiveness** | Viewport meta tags + horizontal table scroll (`overflow-x`) | ✅ Verified |
| **Design Consistency** | Professional blue and white visual system across all pages | ✅ Verified |
