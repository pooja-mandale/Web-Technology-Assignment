/**
 * Module 02 - Student Marks Table
 * Web Technology Assignment 01
 * Searching, Sorting, and Pagination using Vanilla JavaScript
 */

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

function render() {
  // 1. Search filter: search by Name, Roll No, or Mobile No
  const filtered = students.filter(s => {
    if (!query) return true;
    const matchName = s.name.toLowerCase().includes(query);
    const matchRoll = String(s.roll) === query;
    const matchPhone = query.length >= 3 ? s.phone.includes(query) : false;
    return matchName || matchRoll || matchPhone;
  });

  // 2. Sorting: Roll No, Student Name, or CET Score (Ascending & Descending)
  filtered.sort((a, b) => {
    const valA = a[sortKey], valB = b[sortKey];
    if (typeof valA === "string") {
      return sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
    }
    return sortAsc ? valA - valB : valB - valA;
  });

  // 3. Pagination: 5 records per page
  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  if (page > totalPages) page = totalPages;
  if (page < 1) page = 1;

  const start = (page - 1) * pageSize;
  const paged = filtered.slice(start, start + pageSize);

  // Render Table Body
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
        <td><span class="interest-badge interest-${s.interest.toLowerCase().replace(/\\s+/g, '')}">${s.interest}</span></td>
      </tr>
    `).join("");
  }

  // Update Status & Pagination Controls
  document.getElementById("recordCount").innerText = `Total: ${filtered.length} Records`;
  document.getElementById("pageInfo").innerText = `Page ${page} of ${totalPages}`;
  document.getElementById("prevBtn").disabled = (page === 1);
  document.getElementById("nextBtn").disabled = (page >= totalPages);

  // Update Sort Indicators
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

document.addEventListener("DOMContentLoaded", render);
