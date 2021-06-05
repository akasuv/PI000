import createLink from "../components/Link/index.js";

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
    "Settings",
  ].map((item) => createLink({ label: item, className: "footer-link" }));

  leftSection.append(...linkItems.slice(0, 3));

  let centerSection = document.createElement("div");
  centerSection.className = "center-section";

  let icon = document.createElement("img");
  icon.className = "neutral-icon";
  icon.alt = "neutral-icon";
  icon.src =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAPFBMVEVLoEN0wU6CzFKCzFKCzFKCzFKCzFJSo0MSczNDmkCCzFJPoUMTczNdr0gmgziCzFITczMTczMTczMTczPh00jOAAAAFHRSTlPF/+bIsms8Ad///hX+//5/tXw7aMEAx10AAACaSURBVHgBbc4HDoRQCATQ33tbvf9dF9QxaCT9UQaltLHOh/golXKhMs5Xqa0xU1lyoa2fXFyQOsDG38qsLy4TaV+sFislovyhPzLJJrBu6eQOtpW0LjbJkzTuTDLRVNKa3uxJI+VdiRqXSeu6GW+Qxi29eLIi8H7EsYrT42BD+mQtNO5JMjRuC4lSY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC";
  centerSection.append(icon,linkItems[3]);

  let rightSection = document.createElement("div");

  rightSection.className = "right-section";
  rightSection.append(...linkItems.slice(4));

  footer.append(leftSection, centerSection, rightSection);

  return footer;
}

export default createFoot;
