export const handleNavigation = (
  e: React.MouseEvent<HTMLAnchorElement>,
  hash: string,
  pathname: string,
  push: (url: string) => void,
) => {
  e.preventDefault();

  if (pathname === "/") {
    // Smooth scroll if on the homepage
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    // Navigate to the homepage with the hash
    push(`/#${hash.replace("#", "")}`);
  }
};
