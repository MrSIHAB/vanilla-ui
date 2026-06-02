import type { EventHandler } from "./type.ts";

export type HTMLTagName = keyof HTMLElementTagNameMap;
export interface TagOptions extends EventHandler {
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
  options?: TagOptions,
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
    onclick,
    onchange,
    onHover,
    onblur,
    onload,
    eventListeners,
    controller,
  } = options ?? {};

  const classAttr = Array.isArray(className) ? className.join(" ") : className; // Align classNames
  const tag: T = document.createElement(name) as T; // create tag

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
  if (onclick) tag.onclick = onclick;
  if (onchange) tag.onchange = onchange;
  if (onblur) tag.onblur = onblur;
  if (onload) tag.onload = onload;
  // if (onabort) tag.onabort = onabort;
  // if (onanimationcancel) tag.onanimationcancel = onanimationcancel;
  // if (onanimationend) tag.onanimationend = onanimationend;
  // if (onanimationiteration) tag.onanimationiteration = onanimationiteration;
  // if (onanimationstart) tag.onanimationstart = onanimationstart;
  // if (onauxclick) tag.onauxclick = onauxclick;
  // if (onbeforeinput) tag.onbeforeinput = onbeforeinput;
  // if (onbeforematch) tag.onbeforematch = onbeforematch;
  // if (onbeforetoggle) tag.onbeforetoggle = onbeforetoggle;
  // if (oncancel) tag.oncancel = oncancel;
  // if (oncanplay) tag.oncanplay = oncanplay;
  // if (oncanplaythrough) tag.oncanplaythrough = oncanplaythrough;
  // if (onclose) tag.onclose = onclose;
  // if (oncommand) tag.oncommand = oncommand;
  // if (oncontextlost) tag.oncontextlost = oncontextlost;
  // if (oncontextmenu) tag.oncontextmenu = oncontextmenu;
  // if (oncontextrestored) tag.oncontextrestored = oncontextrestored;
  // if (oncopy) tag.oncopy = oncopy;
  // if (oncuechange) tag.oncuechange = oncuechange;
  // if (oncut) tag.oncut = oncut;
  // if (ondblclick) tag.ondblclick = ondblclick;
  // if (ondrag) tag.ondrag = ondrag;
  // if (ondragend) tag.ondragend = ondragend;
  // if (ondragenter) tag.ondragenter = ondragenter;
  // if (ondragleave) tag.ondragleave = ondragleave;
  // if (ondragover) tag.ondragover = ondragover;
  // if (ondragstart) tag.ondragstart = ondragstart;
  // if (ondrop) tag.ondrop = ondrop;
  // if (ondurationchange) tag.ondurationchange = ondurationchange;
  // if (onemptied) tag.onemptied = onemptied;
  // if (onended) tag.onended = onended;
  // if (onerror) tag.onerror = onerror;
  // if (onfocus) tag.onfocus = onfocus;
  // if (onformdata) tag.onformdata = onformdata;
  // if (ongotpointercapture) tag.ongotpointercapture = ongotpointercapture;
  // if (oninput) tag.oninput = oninput;
  // if (oninvalid) tag.oninvalid = oninvalid;
  // if (onkeydown) tag.onkeydown = onkeydown;
  // if (onkeypress) tag.onkeypress = onkeypress;
  // if (onkeyup) tag.onkeyup = onkeyup;
  // if (onloadeddata) tag.onloadeddata = onloadeddata;
  // if (onloadedmetadata) tag.onloadedmetadata = onloadedmetadata;
  // if (onloadstart) tag.onloadstart = onloadstart;
  // if (onlostpointercapture) tag.onlostpointercapture = onlostpointercapture;
  // if (onmousedown) tag.onmousedown = onmousedown;
  // if (onmouseenter) tag.onmouseenter = onmouseenter;
  // if (onmouseleave) tag.onmouseleave = onmouseleave;
  // if (onmousemove) tag.onmousemove = onmousemove;
  // if (onmouseout) tag.onmouseout = onmouseout;
  // if (onmouseover) tag.onmouseover = onmouseover;
  // if (onmouseup) tag.onmouseup = onmouseup;
  // if (onpaste) tag.onpaste = onpaste;
  // if (onpause) tag.onpause = onpause;
  // if (onplay) tag.onplay = onplay;
  // if (onplaying) tag.onplaying = onplaying;
  // if (onpointercancel) tag.onpointercancel = onpointercancel;
  // if (onpointerdown) tag.onpointerdown = onpointerdown;
  // if (onpointerenter) tag.onpointerenter = onpointerenter;
  // if (onpointerleave) tag.onpointerleave = onpointerleave;
  // if (onpointermove) tag.onpointermove = onpointermove;
  // if (onpointerout) tag.onpointerout = onpointerout;
  // if (onpointerover) tag.onpointerover = onpointerover;
  // if (onpointerrawupdate) tag.onpointerrawupdate = onpointerrawupdate;
  // if (onpointerup) tag.onpointerup = onpointerup;
  // if (onprogress) tag.onprogress = onprogress;
  // if (onratechange) tag.onratechange = onratechange;
  // if (onreset) tag.onreset = onreset;
  // if (onresize) tag.onresize = onresize;
  // if (onscroll) tag.onscroll = onscroll;
  // if (onscrollend) tag.onscrollend = onscrollend;
  // if (onsecuritypolicyviolation)
  //   tag.onsecuritypolicyviolation = onsecuritypolicyviolation;
  // if (onseeked) tag.onseeked = onseeked;
  // if (onseeking) tag.onseeking = onseeking;
  // if (onselect) tag.onselect = onselect;
  // if (onselectionchange) tag.onselectionchange = onselectionchange;
  // if (onselectstart) tag.onselectstart = onselectstart;
  // if (onslotchange) tag.onslotchange = onslotchange;
  // if (onstalled) tag.onstalled = onstalled;
  // if (onsubmit) tag.onsubmit = onsubmit;
  // if (onsuspend) tag.onsuspend = onsuspend;
  // if (ontimeupdate) tag.ontimeupdate = ontimeupdate;
  // if (ontoggle) tag.ontoggle = ontoggle;
  // if (ontouchcancel) tag.ontouchcancel = ontouchcancel;
  // if (ontouchend) tag.ontouchend = ontouchend;
  // if (ontouchmove) tag.ontouchmove = ontouchmove;
  // if (ontouchstart) tag.ontouchstart = ontouchstart;
  // if (ontransitioncancel) tag.ontransitioncancel = ontransitioncancel;
  // if (ontransitionend) tag.ontransitionend = ontransitionend;
  // if (ontransitionrun) tag.ontransitionrun = ontransitionrun;
  // if (ontransitionstart) tag.ontransitionstart = ontransitionstart;
  // if (onvolumechange) tag.onvolumechange = onvolumechange;
  // if (onwaiting) tag.onwaiting = onwaiting;
  // if (onwheel) tag.onwheel = onwheel;
  if (onHover) tag.addEventListener("mouseover", onHover);

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
