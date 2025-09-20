import { HTMLTagName, Tag, TagOptions } from "../core/tag.ts";

interface HeaderOptions extends TagOptions {}

const createHeader =
  (tag: HTMLTagName) =>
  (options: HeaderOptions): HTMLElement =>
    Tag(tag, options);

export const H1 = createHeader("h1");
export const H2 = createHeader("h2");
export const H3 = createHeader("h3");
export const H4 = createHeader("h4");
export const H5 = createHeader("h5");
export const H6 = createHeader("h6");
