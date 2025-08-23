export const mainAdmins = [
  {
    name: "Admin Name",
    email: "admin@sweetspot.com",
    password: "sweetspot123",
    phone: "9999999999",
    role: "Branch Admin",
    location: "Hyderabad",
    gender: "Male",
    dob: "1990-01-01",
    joinedDate: "2025-07-01",
    bio: "Main admin for SweetSpot.",
    profilePic: "" ,
  },
  {
    name: "Priya Sharma",
    email: "priya@sweetspot.com",
    password: "priya2025",
    phone: "8888888888",
    role: "Branch Admin",
    location: "Vijayawada",
    gender: "Female",
    dob: "1992-03-15",
    joinedDate: "2025-06-15",
    bio: "Branch admin for Vijayawada.",
    profilePic: ""
  },
  {
    name: "Rahul Verma",
    email: "rahul@sweetspot.com",
    password: "rahul2025",
    phone: "7777777777",
    role: "Branch Admin",
    location: "Bangalore",
    gender: "Male",
    dob: "1988-11-20",
    joinedDate: "2025-05-10",
    bio: "Branch admin for Bangalore.",
    profilePic: ""
  }
];

export function checkAdminLogin(email, password) {
  return mainAdmins.find(
    (admin) => admin.email === email && admin.password === password
  );
}