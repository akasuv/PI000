import createTextInput from "../TextInput";
import createList from "../List";
import "./index.css";
import createSubmitInput from "../SubmitInput";

function createSearchInput() {
  let wrapper = document.createElement("div");
  wrapper.className = "search-input-wrapper";

  wrapper.addEventListener("click", function (e) {
    if (
      e.target instanceof HTMLInputElement &&
      !this.classList.contains(".input-focused")
    ) {
      this.classList.add("input-focused");
    }
  });

  let inputWrapper = document.createElement("div");
  inputWrapper.className = "input-wrapper";
  inputWrapper.appendChild(createTextInput("search"));

  inputWrapper.addEventListener("click", function (e) {
    if (e.target instanceof HTMLInputElement) {
      if (!this.firstChild.classList.contains("focused")) {
        this.firstChild.classList.add("focused");
      }
    }
  });

  let resultListWrapper = document.createElement("div");
  resultListWrapper.className = "result-list-wrapper";
  resultListWrapper.appendChild(
    createList([
      createSubmitInput("Google Search"),
      createSubmitInput(`I'm feeling Lucky`),
    ])
  );

  wrapper.append(inputWrapper, resultListWrapper);

  document.addEventListener(
    "click",
    function (e) {
      if (
        (e.target !== wrapper) & !e.path.includes(resultListWrapper) &&
        wrapper.classList.contains("input-focused")
      ) {
        inputWrapper.firstChild.classList.remove("focused");
        wrapper.classList.remove("input-focused");
      }
    },
    true
  );

  return wrapper;
}

export default createSearchInput;
