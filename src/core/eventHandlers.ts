import type { EventHandler } from "./type.ts";

/**
 * Sets event listeners on a given HTMLElement based on the provided EventHandler object.
 * @param e - The HTMLElement to which the event listeners will be attached.
 * @param listeners - An object containing event handler functions corresponding to various events.
 * @returns The same HTMLElement with the event listeners attached.
 */
export function setEventHandlers<T extends HTMLElement>(
  e: T,
  listeners: EventHandler,
): T {
  //  Safe destructuring of event handlers from the listeners object, providing defaults to avoid undefined values.
  // This allows us to check for the presence of each handler before attaching it to the element.
  const {
    onclick,
    onchange,
    onHover,
    onblur,
    onload,
    onabort,
    onanimationcancel,
    onanimationend,
    onanimationiteration,
    onanimationstart,
    onauxclick,
    onbeforeinput,
    onbeforematch,
    onbeforetoggle,
    oncancel,
    oncanplay,
    oncanplaythrough,
    onclose,
    oncommand,
    oncontextlost,
    oncontextmenu,
    oncontextrestored,
    oncopy,
    oncuechange,
    oncut,
    ondblclick,
    ondrag,
    ondragend,
    ondragenter,
    ondragleave,
    ondragover,
    ondragstart,
    ondrop,
    ondurationchange,
    onemptied,
    onended,
    onerror,
    onfocus,
    onformdata,
    ongotpointercapture,
    oninput,
    oninvalid,
    onkeydown,
    onkeypress,
    onkeyup,
    onloadeddata,
    onloadedmetadata,
    onloadstart,
    onlostpointercapture,
    onmousedown,
    onmouseenter,
    onmouseleave,
    onmousemove,
    onmouseout,
    onmouseover,
    onmouseup,
    onpaste,
    onpause,
    onplay,
    onplaying,
    onpointercancel,
    onpointerdown,
    onpointerenter,
    onpointerleave,
    onpointermove,
    onpointerout,
    onpointerover,
    onpointerrawupdate,
    onpointerup,
    onprogress,
    onratechange,
    onreset,
    onresize,
    onscroll,
    onscrollend,
    onseeking,
    onselect,
    onselectionchange,
    onselectstart,
    onsecuritypolicyviolation,
    onseeked,
    onslotchange,
    onstalled,
    onsubmit,
    onsuspend,
    ontimeupdate,
    ontoggle,
    ontouchcancel,
    ontouchend,
    ontouchmove,
    ontouchstart,
    ontransitioncancel,
    ontransitionend,
    ontransitionrun,
    ontransitionstart,
    onvolumechange,
    onwaiting,
    onwheel,
    eventListeners,
  } = listeners;

  // set event listeners
  if (onclick) e.onclick = onclick;
  if (onchange) e.onchange = onchange;
  if (onblur) e.onblur = onblur;
  if (onload) e.onload = onload;
  if (onabort) e.onabort = onabort;
  if (onanimationcancel) e.onanimationcancel = onanimationcancel;
  if (onanimationend) e.onanimationend = onanimationend;
  if (onanimationiteration) e.onanimationiteration = onanimationiteration;
  if (onanimationstart) e.onanimationstart = onanimationstart;
  if (onauxclick) e.onauxclick = onauxclick;
  if (onbeforeinput) e.onbeforeinput = onbeforeinput;
  if (onbeforematch) e.onbeforematch = onbeforematch;
  if (onbeforetoggle) e.onbeforetoggle = onbeforetoggle;
  if (oncancel) e.oncancel = oncancel;
  if (oncanplay) e.oncanplay = oncanplay;
  if (oncanplaythrough) e.oncanplaythrough = oncanplaythrough;
  if (onclose) e.onclose = onclose;
  if (oncommand) e.oncommand = oncommand;
  if (oncontextlost) e.oncontextlost = oncontextlost;
  if (oncontextmenu) e.oncontextmenu = oncontextmenu;
  if (oncontextrestored) e.oncontextrestored = oncontextrestored;
  if (oncopy) e.oncopy = oncopy;
  if (oncuechange) e.oncuechange = oncuechange;
  if (oncut) e.oncut = oncut;
  if (ondblclick) e.ondblclick = ondblclick;
  if (ondrag) e.ondrag = ondrag;
  if (ondragend) e.ondragend = ondragend;
  if (ondragenter) e.ondragenter = ondragenter;
  if (ondragleave) e.ondragleave = ondragleave;
  if (ondragover) e.ondragover = ondragover;
  if (ondragstart) e.ondragstart = ondragstart;
  if (ondrop) e.ondrop = ondrop;
  if (ondurationchange) e.ondurationchange = ondurationchange;
  if (onemptied) e.onemptied = onemptied;
  if (onended) e.onended = onended;
  if (onerror) e.onerror = onerror;
  if (onfocus) e.onfocus = onfocus;
  if (onformdata) e.onformdata = onformdata;
  if (ongotpointercapture) e.ongotpointercapture = ongotpointercapture;
  if (oninput) e.oninput = oninput;
  if (oninvalid) e.oninvalid = oninvalid;
  if (onkeydown) e.onkeydown = onkeydown;
  if (onkeypress) e.onkeypress = onkeypress;
  if (onkeyup) e.onkeyup = onkeyup;
  if (onloadeddata) e.onloadeddata = onloadeddata;
  if (onloadedmetadata) e.onloadedmetadata = onloadedmetadata;
  if (onloadstart) e.onloadstart = onloadstart;
  if (onlostpointercapture) e.onlostpointercapture = onlostpointercapture;
  if (onmousedown) e.onmousedown = onmousedown;
  if (onmouseenter) e.onmouseenter = onmouseenter;
  if (onmouseleave) e.onmouseleave = onmouseleave;
  if (onmousemove) e.onmousemove = onmousemove;
  if (onmouseout) e.onmouseout = onmouseout;
  if (onmouseover) e.onmouseover = onmouseover;
  if (onmouseup) e.onmouseup = onmouseup;
  if (onpaste) e.onpaste = onpaste;
  if (onpause) e.onpause = onpause;
  if (onplay) e.onplay = onplay;
  if (onplaying) e.onplaying = onplaying;
  if (onpointercancel) e.onpointercancel = onpointercancel;
  if (onpointerdown) e.onpointerdown = onpointerdown;
  if (onpointerenter) e.onpointerenter = onpointerenter;
  if (onpointerleave) e.onpointerleave = onpointerleave;
  if (onpointermove) e.onpointermove = onpointermove;
  if (onpointerout) e.onpointerout = onpointerout;
  if (onpointerover) e.onpointerover = onpointerover;
  if (onpointerrawupdate) e.onpointerrawupdate = onpointerrawupdate;
  if (onpointerup) e.onpointerup = onpointerup;
  if (onprogress) e.onprogress = onprogress;
  if (onratechange) e.onratechange = onratechange;
  if (onreset) e.onreset = onreset;
  if (onresize) e.onresize = onresize;
  if (onscroll) e.onscroll = onscroll;
  if (onscrollend) e.onscrollend = onscrollend;
  if (onsecuritypolicyviolation)
    e.onsecuritypolicyviolation = onsecuritypolicyviolation;
  if (onseeked) e.onseeked = onseeked;
  if (onseeking) e.onseeking = onseeking;
  if (onselect) e.onselect = onselect;
  if (onselectionchange) e.onselectionchange = onselectionchange;
  if (onselectstart) e.onselectstart = onselectstart;
  if (onslotchange) e.onslotchange = onslotchange;
  if (onstalled) e.onstalled = onstalled;
  if (onsubmit) e.onsubmit = onsubmit;
  if (onsuspend) e.onsuspend = onsuspend;
  if (ontimeupdate) e.ontimeupdate = ontimeupdate;
  if (ontoggle) e.ontoggle = ontoggle;
  if (ontouchcancel) e.ontouchcancel = ontouchcancel;
  if (ontouchend) e.ontouchend = ontouchend;
  if (ontouchmove) e.ontouchmove = ontouchmove;
  if (ontouchstart) e.ontouchstart = ontouchstart;
  if (ontransitioncancel) e.ontransitioncancel = ontransitioncancel;
  if (ontransitionend) e.ontransitionend = ontransitionend;
  if (ontransitionrun) e.ontransitionrun = ontransitionrun;
  if (ontransitionstart) e.ontransitionstart = ontransitionstart;
  if (onvolumechange) e.onvolumechange = onvolumechange;
  if (onwaiting) e.onwaiting = onwaiting;
  if (onwheel) e.onwheel = onwheel;
  if (onHover) e.addEventListener("mouseover", onHover);

  if (eventListeners) {
    for (const [event, handler] of Object.entries(eventListeners)) {
      e.addEventListener(event, handler);
    }
  }

  return e; // return the element
}
