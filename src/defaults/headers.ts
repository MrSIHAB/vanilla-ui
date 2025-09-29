import { HTMLTagName, Tag, TagOptions } from "../core/tag.ts";

interface HeaderOptions extends TagOptions {}

const createHeader =
  (tag: HTMLTagName) =>
  (options: HeaderOptions): HTMLElement =>
    Tag(tag, options);

export const h1 = createHeader("h1");
export const h2 = createHeader("h2");
export const h3 = createHeader("h3");
export const h4 = createHeader("h4");
export const h5 = createHeader("h5");
export const h6 = createHeader("h6");
