export const navLinks = [
  { label: "Home", href: "/" },
  // { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Practice", href: "/quiz" },
  { label: "Jamb cbt", href: "/jamb" },
];

export const loggedInLinks = [
  ...navLinks,
  {
    label: "Dashboard",
    href: "/dashboard",
  },
];
