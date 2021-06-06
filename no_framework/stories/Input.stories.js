import createTextInput from "../components/TextInput";
import createSubmitInput from "../components/SubmitInput";
import createScrollingLabels from "../components/ScrollingLabel";

export default {
  title: "HTML/Input",
};

export const TextInput = () => createTextInput();

export const SubmitInput = () => createSubmitInput();

export const ScrollingLabels = () => createScrollingLabels();
