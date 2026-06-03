import { setEventHandlers } from "./eventHandlers.ts";

export type HTMLTagName = keyof HTMLElementTagNameMap;
export interface TagOptions extends GlobalEventHandlers {
  id?: string;
  class?: string | string[];
  children?: HTMLElement | HTMLElement[];
  attributes?: Record<string, string | string[] | null>;
  title?: string;
  style?: Partial<CSSStyleDeclaration>;
  disabled?: boolean;
  controller?: (element: HTMLElement) => void;
}

export const Tag = <T extends HTMLElement = HTMLElement>(
  name: HTMLTagName,
  o?: TagOptions,
): T => {
  // Destructure options with defaults
  const {
    id,
    class: className,
    children,
    attributes,
    title,
    style,
    disabled,
    controller,
  } = o ?? {};

  const classAttr = Array.isArray(className) ? className.join(" ") : className; // Align classNames
  let tag: T = document.createElement(name) as T; // create tag

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
  tag = setEventHandlers(tag, o ?? ({} as GlobalEventHandlers));

  // Let user control the tag
  if (controller) controller(tag);

  return tag;
};

export const createTag =
  <T extends HTMLElement = HTMLElement>(tag: HTMLTagName) =>
  (options?: TagOptions): T =>
    Tag<T>(tag, options);
