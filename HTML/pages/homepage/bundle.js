(() => {
  // HTML/components/Link/index.js
  function createLink({
    label,
    href,
    primary = false,
    highlighted = false,
    className = null
  }) {
    let link2 = document.createElement("a");
    let classList = ["link"];
    link2.innerHTML = label;
    link2.href = href;
    if (link2.firstChild instanceof SVGElement) {
      link2.classList.add("icon");
    }
    if (link2.firstChild instanceof HTMLImageElement) {
      link2.classList.add("image");
    }
    const mode = primary ? "link--primary" : "link--secondary";
    classList.push(mode);
    if (highlighted) {
      classList.push("link--highlighted");
    }
    link2.classList.add(...classList);
    if (className) {
      link2.classList.add(...className.split(" "));
    }
    return link2;
  }
  var Link_default = createLink;

  // HTML/components/Head/index.js
  function createHead() {
    let wrapper = document.createElement("div");
    wrapper.className = "head";
    let leftCol = document.createElement("div");
    leftCol.className = "left-col";
    let leftColItems = ["About", "Store"].map((item) => {
      let colItem = document.createElement("div");
      colItem.className = "col-item";
      let link2 = Link_default({ label: item, href: "", primary: true });
      colItem.append(link2);
      return colItem;
    });
    leftCol.append(...leftColItems);
    let rightCol = document.createElement("div");
    rightCol.className = "right-col";
    let rightColItems = [
      "Gmail",
      "Images",
      '<svg class="gb_Xe" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>',
      `<img src='../../../assets/clancy.png' alt='avatar' />`
    ].map((item) => {
      let colItem = document.createElement("div");
      colItem.className = "col-item";
      let link2 = Link_default({ label: item, href: "" });
      colItem.append(link2);
      return colItem;
    });
    rightCol.append(...rightColItems);
    wrapper.append(leftCol, rightCol);
    return wrapper;
  }
  var Head_default = createHead;

  // HTML/components/TextInput/index.js
  function createTextInput(classes) {
    let inputWrapper = document.createElement("div");
    inputWrapper.className = "text-input-wrapper";
    if (classes) {
      inputWrapper.classList.add(...classes.split(" "));
    }
    let innerInput = document.createElement("input");
    innerInput.addEventListener("input", handleInput);
    innerInput.classList.add("text-input");
    let searchIconWrapper = document.createElement("span");
    searchIconWrapper.classList.add("icon-wrapper", "search");
    searchIconWrapper.innerHTML = `<svg
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
        >
        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
    </svg>`;
    let voiceMicIconWrapper = document.createElement("span");
    voiceMicIconWrapper.classList.add("icon-wrapper", "voice-mic");
    voiceMicIconWrapper.innerHTML = `
     <svg class="HPVvwb" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z" fill="#4285f4"></path><path d="m11 18.08h2v3.92h-2z" fill="#34a853"></path><path d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z" fill="#f4b400"></path><path d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z" fill="#ea4335"></path></svg>
  `;
    let clearButton = document.createElement("div");
    clearButton.className = "clear-button";
    clearButton.addEventListener("click", handleClear);
    let clearIconWrapper = document.createElement("span");
    clearIconWrapper.classList.add("icon-wrapper", "clear");
    clearIconWrapper.innerHTML = `
     <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
  `;
    let divider = document.createElement("span");
    divider.className = "divider";
    clearButton.append(clearIconWrapper, divider);
    inputWrapper.append(searchIconWrapper, innerInput, clearButton, voiceMicIconWrapper);
    return inputWrapper;
  }
  function handleInput() {
    if (this.parentNode.classList.contains("not-empty")) {
      if (this.value === "") {
        this.parentNode.classList.remove("not-empty");
      }
    } else {
      this.parentNode.classList.add("not-empty");
    }
  }
  function handleClear() {
    let textInput = document.querySelector(".text-input");
    textInput.value = "";
    textInput.focus();
    this.parentNode.classList.remove("not-empty");
  }
  var TextInput_default = createTextInput;

  // HTML/components/List/index.js
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
      "This life has only been transformed by an evil space suit."
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
      let removeBtn = Link_default({ label: "Remove", className: "remove-btn" });
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
  var List_default = createList;

  // HTML/components/SubmitInput/index.js
  function createSubmitInput(value = "Default Text") {
    let input = document.createElement("input");
    input.type = "submit";
    input.value = value;
    input.className = "submit-btn";
    return input;
  }
  var SubmitInput_default = createSubmitInput;

  // HTML/components/ScrollingLabel/index.js
  function createScrollingLabels() {
    let wrapper = document.createElement("div");
    wrapper.className = "scrolling-labels-wrapper submit-btn";
    wrapper.addEventListener("mouseenter", function(e) {
      const BASE_LENGTH = "I'm feeling lucky".length;
      let targetIndex = 0;
      while (targetIndex === 0) {
        targetIndex = Math.floor(Math.random() * 10);
      }
      let targetChildLength = this.firstChild.childNodes[targetIndex].innerText.length;
      this.firstChild.style.top = `${targetIndex * -36}px`;
      this.style.width = `${targetChildLength / BASE_LENGTH * 110}px`;
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
      "I'm Feeling Funny"
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
  var ScrollingLabel_default = createScrollingLabels;

  // HTML/components/SearchInput/index.js
  function createSearchInput() {
    let wrapper = document.createElement("div");
    wrapper.className = "search-input-wrapper";
    wrapper.addEventListener("click", function(e) {
      if (e.target instanceof HTMLInputElement && !this.classList.contains(".input-focused")) {
        this.classList.add("input-focused");
      }
    });
    let inputWrapper = document.createElement("div");
    inputWrapper.className = "input-wrapper";
    inputWrapper.appendChild(TextInput_default("search"));
    inputWrapper.addEventListener("click", function(e) {
      if (e.target instanceof HTMLInputElement) {
        if (!this.firstChild.classList.contains("focused")) {
          this.firstChild.classList.add("focused");
        }
      }
    });
    let resultListWrapper = document.createElement("div");
    resultListWrapper.className = "result-list-wrapper";
    resultListWrapper.appendChild(List_default([
      SubmitInput_default("Google Search"),
      ScrollingLabel_default()
    ]));
    wrapper.append(inputWrapper, resultListWrapper);
    document.addEventListener("click", function(e) {
      if (e.target !== wrapper & !e.path.includes(resultListWrapper) && wrapper.classList.contains("input-focused")) {
        inputWrapper.firstChild.classList.remove("focused");
        wrapper.classList.remove("input-focused");
      }
    }, true);
    return wrapper;
  }
  var SearchInput_default = createSearchInput;

  // HTML/components/Foot/index.js
  function createFoot() {
    let footer = document.createElement("div");
    footer.className = "footer";
    let leftSection = document.createElement("div");
    leftSection.className = "left-section";
    let linkItems = [
      "Advertising",
      "Business",
      "How Search Works",
      "Carbon neutral since 2007",
      "Privacy",
      "Terms",
      "Settings"
    ].map((item) => Link_default({ label: item, className: "footer-link" }));
    leftSection.append(...linkItems.slice(0, 3));
    let centerSection = document.createElement("div");
    centerSection.className = "center-section";
    let icon = document.createElement("img");
    icon.className = "neutral-icon";
    icon.alt = "neutral-icon";
    icon.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAPFBMVEVLoEN0wU6CzFKCzFKCzFKCzFKCzFJSo0MSczNDmkCCzFJPoUMTczNdr0gmgziCzFITczMTczMTczMTczPh00jOAAAAFHRSTlPF/+bIsms8Ad///hX+//5/tXw7aMEAx10AAACaSURBVHgBbc4HDoRQCATQ33tbvf9dF9QxaCT9UQaltLHOh/golXKhMs5Xqa0xU1lyoa2fXFyQOsDG38qsLy4TaV+sFislovyhPzLJJrBu6eQOtpW0LjbJkzTuTDLRVNKa3uxJI+VdiRqXSeu6GW+Qxi29eLIi8H7EsYrT42BD+mQtNO5JMjRuC4lSY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC";
    centerSection.append(icon, linkItems[3]);
    let rightSection = document.createElement("div");
    rightSection.className = "right-section";
    rightSection.append(...linkItems.slice(4));
    footer.append(leftSection, centerSection, rightSection);
    return footer;
  }
  var Foot_default = createFoot;

  // HTML/pages/homepage/index.js
  var page = document.createElement("div");
  page.className = "page";
  var head = Head_default();
  var logoContainer = document.createElement("div");
  var logo = document.createElement("div");
  var img = document.createElement("img");
  logoContainer.className = "logo-container";
  logo.className = "logo";
  img.src = "../../../assets/google.png";
  img.alt = "google-logo";
  img.height = 92;
  logo.appendChild(img);
  logoContainer.appendChild(logo);
  var searchContainer = document.createElement("div");
  searchContainer.className = "search-container";
  var searchInput = SearchInput_default();
  var buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";
  var submitBtn = SubmitInput_default("Google Search");
  var labelScrollingBtn = ScrollingLabel_default();
  buttonContainer.append(submitBtn, labelScrollingBtn);
  searchContainer.append(searchInput, buttonContainer);
  var extraInfoSection = document.createElement("div");
  extraInfoSection.className = "extra-info-section";
  var infoContainer = document.createElement("div");
  var language = document.createElement("span");
  language.className = "language-info";
  language.innerText = "Google offered in: ";
  var link = Link_default({ label: "\u4E2D\u6587(\u7B80\u4F53)", highlighted: true });
  infoContainer.append(language, link);
  extraInfoSection.append(infoContainer);
  var footContainer = document.createElement("div");
  footContainer.className = "foot-container";
  var foot = Foot_default();
  footContainer.append(foot);
  page.append(head, logoContainer, searchContainer, extraInfoSection, footContainer);
  document.body.append(page);
})();
