const createHead = require("../../components/Head")

let page = document.createElement('div');

let head = createHead();

page.append(head);

document.body.append(page)
