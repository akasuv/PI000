import createLink from "../Link";
import "./index.css";

function createHead() {
  let wrapper = document.createElement("div");
  wrapper.className = "head";

  let leftCol = document.createElement("div");
  leftCol.className = "left-col";

  let leftColItems = ["About", "Store"].map((item) => {
    let colItem = document.createElement("div");
    colItem.className = "col-item";

    let link = createLink({ label: item, href: "", primary: true });
    colItem.append(link);

    return colItem;
  });
  leftCol.append(...leftColItems);

  let rightCol = document.createElement("div");
  rightCol.className = "right-col";

  let rightColItems = [
    "Images",
    '<svg class="gb_Xe" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>',
    `<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCe9UK-9OFhm3LBrGVN3I7VqDLKaB0PFAKvA&usqp=CAU' alt='avatar' />`,
  ].map((item) => {
    let colItem = document.createElement("div");
    colItem.className = "col-item";
    let link = createLink({ label: item, href: "" });
    colItem.append(link);

    return colItem;
  });

  rightCol.append(...rightColItems);

  wrapper.append(leftCol, rightCol);

  return wrapper;
}

export default createHead;
