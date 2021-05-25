import createHead from "../components/Head";
import createSearchInput from "../components/SearchInput";
import createSubmitInput from "../components/SubmitInput";
import createScrollingLabels from "../components/ScrollingLabel";
import logoSrc from "../../assets/google.png";

export default {
    title: 'HTML/Assembled'
}

export const Page = () => {
    const page = document.createElement('div');

    const header = createHead();
    const search = createSearchInput();

    const buttonWrapper = document.createElement('div');
    buttonWrapper.style.display = 'flex';

    buttonWrapper.append(createSubmitInput(), createScrollingLabels());

    const logo = document.createElement('img');

    logo.alt = 'google-logo';
    logo.src = logoSrc;


    page.append(header, logo, search, buttonWrapper)

    return page;
};
