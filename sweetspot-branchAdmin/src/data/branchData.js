const STORAGE_KEY = "branches";

let branches = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
  { name: "Hyderabad Main", location: "Hyderabad", manager: "Ravi Kumar", contact: "9876543210" },
  { name: "Vijayawada Central", location: "Vijayawada", manager: "Sita Rao", contact: "8765432109" },
  { name: "Bangalore East", location: "Bangalore", manager: "Arjun Singh", contact: "7654321098" }
];

export function addBranch(branch) {
  branches.push(branch);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(branches));
}

export function getBranches() {
  return branches;
}

export function removeBranch(index) {
  branches.splice(index, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(branches));
}