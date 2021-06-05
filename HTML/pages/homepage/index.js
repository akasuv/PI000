// import createHead from "../../components/Head";
// import createSearchInput from "../../components/SearchInput";
// import createSubmitInput from "../../components/SubmitInput";
// import createScrollingLabels from "../../components/ScrollingLabel";
// import createFoot from "../../components/Foot";
// import createLink from "../../components/Link";

/** create page container */
let page = document.createElement('div');
page.className = 'page';

/** create head section */
let head = createHead();

/** create logo section */
let logoContainer = document.createElement('div');
let logo = document.createElement('div');
let img = document.createElement('img');

logoContainer.className = 'logo-container';

logo.className = 'logo';
img.src = "../../../assets/google.png";
img.alt = 'google-logo';
img.height = 92;
logo.appendChild(img)
logoContainer.appendChild(logo);

/** create search input section */
let searchContainer = document.createElement('div');
searchContainer.className = 'search-container';

let searchInput = createSearchInput();

let buttonContainer = document.createElement('div');
buttonContainer.className = 'button-container';

let submitBtn = createSubmitInput('Google Search');
let labelScrollingBtn = createScrollingLabels();
buttonContainer.append(submitBtn, labelScrollingBtn);

searchContainer.append(searchInput, buttonContainer);

/** create extra information section */
let extraInfoSection = document.createElement('div');
extraInfoSection.className = 'extra-info-section';

let infoContainer = document.createElement('div');
let language = document.createElement('span');
language.className = 'language-info'
language.innerText = 'Google offered in: ';

let link = createLink({label: '中文(简体)', highlighted: true})

infoContainer.append(language, link)
extraInfoSection.append(infoContainer);

/** create footer section */

let footContainer = document.createElement('div');
footContainer.className = 'foot-container';

let foot = createFoot();

footContainer.append(foot);


/** append document */
page.append(head, logoContainer, searchContainer, extraInfoSection, footContainer);
document.body.append(page)
