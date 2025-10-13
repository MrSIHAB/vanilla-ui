export type HTMLTagName = keyof HTMLElementTagNameMap;
export interface TagOptions {
  id?: string;
  class?: string | string[];
  children?: HTMLElement | HTMLElement[];
  attributes?: Record<string, string | string[] | null>;
  title?: string;
  style?: Partial<CSSStyleDeclaration>;
  disabled?: boolean;
  onClick?: EventListenerOrEventListenerObject;
  onChange?: EventListenerOrEventListenerObject;
  onHover?: EventListenerOrEventListenerObject;
  onBlur?: EventListenerOrEventListenerObject;
  onLoad?: EventListenerOrEventListenerObject;
  eventListeners?: Record<string, EventListenerOrEventListenerObject>;
  controller?: (element: HTMLElement) => void;
}

// export class Tag {
//     constructor(
//         private name: string,
//         private options: TagOptions,
//     ) {
//         this.name = name;
//         this.options = options;
//     }

//     private createElement(): HTMLElement {
//         const { id, class: className, children, attributes, title, style } =
//             this.options;
//         const classAttr = Array.isArray(className)
//             ? className.join(" ")
//             : className;

//         // create tag
//         const tag = document.createElement(this.name);
//         // set all attributes
//         if (id) tag.id = id;
//         if (classAttr) tag.className = classAttr;
//         if (title) tag.title = title;
//         if (attributes) {
//             for (const [key, value] of Object.entries(attributes)) {
//                 if (value) {
//                     if (Array.isArray(value)) {
//                         tag.setAttribute(key, value.join(" "));
//                     } else {
//                         tag.setAttribute(key, value);
//                     }
//                 }
//             }
//         }
//         // set all children
//         if (children) {
//             if (Array.isArray(children)) {
//                 children.forEach((child) => tag.appendChild(child));
//             } else {
//                 tag.appendChild(children);
//             }
//         }
//         // set style
//         if (style) {
//             for (const [key, value] of Object.entries(style)) {
//                 tag.style[key as any] = value as string;
//             }
//         }
//         // set onclick event
//         if (this.options.onClick) {
//             tag.addEventListener("click", this.options.onClick);
//         }
//         return tag;
//     }

//     get getElement() {
//         return this.createElement();
//     }
// }

export const Tag = <T extends HTMLElement = HTMLElement>(
  name: HTMLTagName,
  options?: TagOptions
): T => {
  const {
    id,
    class: className,
    children,
    attributes,
    title,
    style,
    disabled,
    onClick,
    onChange,
    onHover,
    onBlur,
    onLoad,
    eventListeners,
    controller,
  } = options ?? {};
  const classAttr = Array.isArray(className) ? className.join(" ") : className;

  // create tag
  const tag: T = document.createElement(name) as T;

  // set all attributes
  if (id) tag.id = id;
  if (classAttr) tag.className = classAttr;
  if (title) tag.title = title;
  if (attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      if (value !== null && value !== undefined) {
        if (Array.isArray(value)) {
          tag.setAttribute(key, value.join(" "));
        } else {
          tag.setAttribute(key, value);
        }
      }
    }
  }

  // set all children
  if (children) {
    if (Array.isArray(children)) {
      children.forEach((child) => tag.appendChild(child));
    } else {
      tag.appendChild(children);
    }
  }

  // set style
  if (style) {
    Object.assign(tag.style, style);
  }

  // set disabled (use property if available)
  if (disabled) {
    if ("disabled" in tag) {
      tag.disabled = true;
    } else {
      tag.setAttribute("disabled", "true");
    }
  }

  // set event listeners
  if (onClick) tag.addEventListener("click", onClick);
  if (onChange) tag.addEventListener("change", onChange);
  if (onHover) tag.addEventListener("mouseover", onHover);
  if (onBlur) tag.addEventListener("blur", onBlur);
  if (onLoad) tag.addEventListener("load", onLoad);

  if (eventListeners) {
    for (const [event, handler] of Object.entries(eventListeners)) {
      tag.addEventListener(event, handler);
    }
  }

  // Let user control the tag
  if (controller) controller(tag);

  return tag;
};

export const createTag =
  <T extends HTMLElement = HTMLElement>(tag: HTMLTagName) =>
  (options?: TagOptions): T =>
    Tag<T>(tag, options);
