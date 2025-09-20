export const Run = (
  element: HTMLElement | HTMLElement[],
  root?: string
): void => {
  // Reset default body styles
  const body = document.body;
  body.style.margin = "0";
  body.style.padding = "0";
  body.style.boxSizing = "border-box";

  const rootElement = root ? document.getElementById(root) : body;
  if (!rootElement)
    throw new Error(`Root element with id "#${root}" not found.`);

  if (Array.isArray(element)) {
    element.forEach((elem) => {
      rootElement.appendChild(elem);
    });
  } else {
    rootElement.appendChild(element);
  }
};
