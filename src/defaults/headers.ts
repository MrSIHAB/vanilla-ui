import { type HTMLTagName, Tag, type TagOptions } from "../core/tag.ts";

interface HeaderOptions extends TagOptions {}

// const createHeader =
//   (tag: HTMLTagName) =>
//   (options?: HeaderOptions): HTMLHeadingElement =>
//     Tag<HTMLHeadingElement>(tag, options);

type HeadingFunction = (params?: HeaderOptions) => HTMLHeadingElement;

function createHeader(tagName: HTMLTagName): HeadingFunction {
  return (options?: HeaderOptions) => Tag<HTMLHeadingElement>(tagName, options);
}

export const h1: HeadingFunction = createHeader("h1");
export const h2: HeadingFunction = createHeader("h2");
export const h3: HeadingFunction = createHeader("h3");
export const h4: HeadingFunction = createHeader("h4");
export const h5: HeadingFunction = createHeader("h5");
export const h6: HeadingFunction = createHeader("h6");
