import "./index.css";
function createScrollingLabels() {
  let wrapper = document.createElement("div");
  wrapper.className = "scrolling-labels-wrapper";
  wrapper.addEventListener("mouseenter", function (e) {
    const BASE_LENGTH = "I'm feeling lucky".length;
    let targetIndex = 0;
    while (targetIndex === 0) {
      targetIndex = Math.floor(Math.random() * 10);
    }

    let targetChildLength = this.firstChild.childNodes[targetIndex].innerText
      .length;

    this.firstChild.style.top = `${targetIndex * -36}px`;
    this.style.width = `${(targetChildLength / BASE_LENGTH) * 110}px`;
  });

  let scrollingLabels = document.createElement("div");
  scrollingLabels.className = "scrolling-labels";

  let labelItems = [
    "I'm Feeling Curious",
    "I'm Feeling Hungry",
    "I'm Feeling Adventurous",
    "I'm Feeling Puzzled",
    "I'm Feeling Playful",
    "I'm Feeling Stellar",
    "I'm Feeling Generous",
    "I'm Feeling Doodley",
    "I'm Feeling Trendy",
    "I'm Feeling Artistic",
    "I'm Feeling Funny",
  ].map(createLabel);

  function createLabel(text) {
    let label = document.createElement("span");
    label.className = "label-item";
    label.innerText = text;

    return label;
  }

  scrollingLabels.append(...labelItems);
  wrapper.append(scrollingLabels);
  return wrapper;
}

export default createScrollingLabels;
