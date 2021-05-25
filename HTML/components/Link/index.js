import "./index.css";

function createLink({
  label,
  href,
  primary = false,
  highlighted = false,
  className = null,
}) {
  let link = document.createElement("a");
  let classList = ["link"];
  link.innerHTML = label;
  link.href = href;

  if (link.firstChild instanceof SVGElement) {
    link.classList.add("icon");
  }

  if (link.firstChild instanceof HTMLImageElement) {
    link.classList.add("image");
  }

  const mode = primary ? "link--primary" : "link--secondary";
  classList.push(mode);

  if (highlighted) {
    classList.push("link--highlighted");
  }

  link.classList.add(...classList);

  if (className) {
    link.classList.add(...className.split(" "));
  }

  return link;
}

export const linkInterface = () => {
  let link = new HTMLAnchorElement();
    link.innerText = 'link created by interface';
  return link;
}

export default createLink;
