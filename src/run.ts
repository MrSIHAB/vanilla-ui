/**
 * First parameter(`element`) is your entire website built with the library. It accepts an HTML Element or a list of HTML Elements. 
 * The second parameter is optional and is the id of the root element where you want to mount your website. If you don't provide a 
 * root element.
 * 
 * In case you have a dedicated root element in your HTML file, you can pass its id as the second parameter. 
 * For example, if your HTML file has a div with id **root**, you can call `Run(App, "root")` to mount your website inside that div. 
 * If you don't provide a root element, the library will default to mounting your website directly on the body of the document.
 * 
 * @param element HTMLElement
 * @param root string
 * 
 _* Example usage:_
 * ```typescript
 * import { Run } from "vanilla-ui";
 * import App from "./src/app.ts";
 * 
 * Run(App, "root");
 * ```
 */
export const Run = (
  element: HTMLElement | HTMLElement[],
  root?: string,
): void => {
  const rootElement = root ? document.getElementById(root) : document.body;
  if (!rootElement) throw new Error(`Root element "#${root}" not found.`); // Undefined root check

  if (Array.isArray(element)) {
    element.forEach((elem) => {
      rootElement.appendChild(elem);
    });
  } else {
    rootElement.appendChild(element);
  }
};
