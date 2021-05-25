import "./index.css";

function createSubmitInput(value = "Default Text") {
  let input = document.createElement("input");
  input.type = "submit";
  input.value = value;
  input.className = "submit-btn";

  return input;
}

export default createSubmitInput;
