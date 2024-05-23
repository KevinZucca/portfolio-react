// function to scroll on main elements on page

export const scrollToComponent = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }
};
