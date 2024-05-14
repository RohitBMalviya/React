function customRender(reactElement, mainElement) {
  const dom = document.createElement(reactElement.type);
  dom.innerHTML = reactElement.children;
  dom.setAttribute("href", reactElement.props.href);
  dom.setAttribute("href", reactElement.props.target);

  mainElement.appendChild(dom);
}

const reactElement = {
  type: "a",
  props: { href: "https://www.google.com", target: "_blank" },
  children: "visit google baba",
};

const mainElement = document.getElementById("root");

customRender(reactElement, mainElement);
