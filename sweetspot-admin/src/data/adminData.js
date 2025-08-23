const STORAGE_KEY = "admins";

// Initialize admins from localStorage or use sample data
let admins = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "555-1234",
    role: "Super Admin",
    location: "New York",
    gender: "Female",
    dob: "1985-06-15",
    joinedDate: "2024-01-10",
    bio: "Lead administrator with 10 years of experience.",
    profilePic: ""
  },
  {
    name: "Bob Smith",
    email: "bob.smith@example.com",
    phone: "555-5678",
    role: "Manager",
    location: "Los Angeles",
    gender: "Male",
    dob: "1990-09-22",
    joinedDate: "2024-03-05",
    bio: "Operations manager and logistics expert.",
    profilePic: ""
  },
  {
    name: "Carol Lee",
    email: "carol.lee@example.com",
    phone: "555-8765",
    role: "Support Admin",
    location: "Chicago",
    gender: "Female",
    dob: "1992-12-02",
    joinedDate: "2024-05-18",
    bio: "Customer support specialist.",
    profilePic: ""
  }
];

export function addAdmin(admin) {
  admins.push(admin);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(admins));
}

export function getAdmins() {
  return admins;
}

export function removeAdmin(index) {
  admins.splice(index, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(admins));
}