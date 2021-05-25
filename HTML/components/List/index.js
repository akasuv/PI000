import "./index.css";
import createLink from "../Link";

function createList(buttons) {
  let wrapper = document.createElement("div");
  wrapper.className = "list-wrapper";

  let divider = document.createElement("div");
  divider.className = "top-divider";
  wrapper.append(divider);

  let list = document.createElement("ul");
  list.className = "list";
  let listItems = [
    "This life has only been transformed by an evil space suit.",
    "This life has only been transformed by an evil space suit.",
    "This life has only been transformed by an evil space suit.",
    "This life has only been transformed by an evil space suit.",
    "This life has only been transformed by an evil space suit.",
    "This life has only been transformed by an evil space suit.",
    "This life has only been transformed by an evil space suit.",
    "This life has only been transformed by an evil space suit.",
  ].map((item) => {
    let li = document.createElement("li");
    li.classList.add("list-item", "history");

    let itemWrapper = document.createElement("div");
    itemWrapper.className = "item-wrapper";

    let iconWrapper = document.createElement("div");
    iconWrapper.className = "icon";

    let textWrapper = document.createElement("div");
    textWrapper.className = "text-wrapper";
    textWrapper.innerHTML = `<span>${item}</span>`;

    let rightBtnWrapper = document.createElement("div");
    rightBtnWrapper.className = "right-btn-wrapper";

    let removeBtn = createLink({ label: "Remove", className: "remove-btn" });
    rightBtnWrapper.append(removeBtn);

    itemWrapper.append(iconWrapper, textWrapper, rightBtnWrapper);
    li.append(itemWrapper);

    return li;
  });

  list.append(...listItems);
  wrapper.append(list);

  if (buttons) {
    let operationWrapper = document.createElement("div");
    operationWrapper.className = "operation-wrapper";

    let operations = buttons.map((b) => {
      let buttonWrapper = document.createElement("div");
      buttonWrapper.className = "button-wrapper";
      buttonWrapper.append(b);
      return buttonWrapper;
    });
    operationWrapper.append(...operations);
    wrapper.append(operationWrapper);
  }

  return wrapper;
}

export default createList;
