export const mainAdmin = {
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
  profilePic: ""
};

export function checkAdminLogin(email, password) {
  return email === mainAdmin.email && password === mainAdmin.password;
}