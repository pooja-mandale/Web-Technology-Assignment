/**
 * Module 02 - Student Marks Table Interactivity & Protection
 * Features: Auth Guard, On-Screen Popups, Search filtering, Sorting, and Pagination
 * Concise, beginner-friendly Vanilla JavaScript
 */

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

// Auth Guard: Restrict access if not logged in
if (sessionStorage.getItem("isLoggedIn") !== "true") {
  sessionStorage.setItem("authError", "Access restricted: Please log in first to view student marks.");
  window.location.href = "../01-Login-Page/index.html";
}

function logout() {
  sessionStorage.removeItem("isLoggedIn");
  sessionStorage.removeItem("currentUser");
  sessionStorage.setItem("logoutMessage", "You have been logged out successfully.");
  window.location.href = "../01-Login-Page/index.html";
}

const students = [
  { roll: 1, name: "Amit", phone: "9876543210", score: 85, interest: "Web Design" },
  { roll: 2, name: "Priya", phone: "9876543211", score: 90, interest: "AI" },
  { roll: 3, name: "Rahul", phone: "9876543212", score: 78, interest: "Java" },
  { roll: 4, name: "Neha", phone: "9876543213", score: 88, interest: "Python" },
  { roll: 5, name: "Rohan", phone: "9876543214", score: 82, interest: "Web Design" },
  { roll: 6, name: "Sneha", phone: "9876543215", score: 91, interest: "AI" },
  { roll: 7, name: "Akash", phone: "9876543216", score: 75, interest: "Cloud" },
  { roll: 8, name: "Pooja", phone: "9876543217", score: 87, interest: "Java" },
  { roll: 9, name: "Om", phone: "9876543218", score: 80, interest: "Python" },
  { roll: 10, name: "Kiran", phone: "9876543219", score: 92, interest: "AI" }
];

let query = "", sortKey = "roll", sortAsc = true, page = 1, pageSize = 5;

function getBadgeClass(interest) {
  const map = {
    "web design": "interest-web",
    "ai": "interest-ai",
    "java": "interest-java",
    "python": "interest-python",
    "cloud": "interest-cloud"
  };
  return map[interest.toLowerCase()] || "interest-web";
}

function render() {
  // 1. Filter
  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(query) ||
    s.interest.toLowerCase().includes(query) ||
    String(s.roll).includes(query) ||
    String(s.score).includes(query) ||
    s.phone.includes(query)
  );

  // 2. Sort
  filtered.sort((a, b) => {
    const v1 = a[sortKey], v2 = b[sortKey];
    if (typeof v1 === "string") return sortAsc ? v1.localeCompare(v2) : v2.localeCompare(v1);
    return sortAsc ? v1 - v2 : v2 - v1;
  });

  // 3. Paginate
  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  page = Math.min(Math.max(1, page), totalPages);
  const start = (page - 1) * pageSize;
  const paged = filtered.slice(start, start + pageSize);

  // 4. Render Table Body
  const tbody = document.getElementById("tableBody");
  if (paged.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="no-records">No students found matching "${query}"</td></tr>`;
  } else {
    tbody.innerHTML = paged.map(s => `
      <tr>
        <td class="text-center roll-col">${s.roll}</td>
        <td class="name-col">${s.name}</td>
        <td class="phone-col">${s.phone}</td>
        <td class="text-center score-col">${s.score}</td>
        <td><span class="interest-badge ${getBadgeClass(s.interest)}">${s.interest}</span></td>
      </tr>
    `).join("");
  }

  // 5. Update UI Controls & Count
  document.getElementById("recordCount").innerText = `${filtered.length} Students`;
  document.getElementById("pageInfo").innerText = `Showing ${filtered.length ? start + 1 : 0}–${Math.min(start + pageSize, filtered.length)} of ${filtered.length}`;
  document.getElementById("pageNumber").innerText = `Page ${page} of ${totalPages}`;
  document.getElementById("prevBtn").disabled = (page === 1);
  document.getElementById("nextBtn").disabled = (page >= totalPages);

  // 6. Update Sort Indicators
  document.querySelectorAll("th[data-sort]").forEach(th => {
    const key = th.getAttribute("data-sort");
    th.classList.toggle("sort-active", key === sortKey);
    const arrow = th.querySelector(".sort-arrow");
    if (arrow) arrow.innerText = (key === sortKey) ? (sortAsc ? "▲" : "▼") : "↕";
  });
}

function handleSearch(val) {
  query = val.trim().toLowerCase();
  page = 1;
  render();
}

function handleSort(key) {
  if (sortKey === key) {
    sortAsc = !sortAsc;
  } else {
    sortKey = key;
    sortAsc = true;
  }
  render();
}

function changePage(delta) {
  page += delta;
  render();
}

document.addEventListener("DOMContentLoaded", () => {
  const user = sessionStorage.getItem("currentUser") || "Student";
  const badge = document.getElementById("userBadge");
  if (badge) {
    badge.innerText = `Logged in: ${user} • Module 02`;
  }
  showPopup(`🎉 Welcome, ${user}! Student marks loaded.`, "success", 2500);
  render();
});
