import { Tag, TagOptions } from "../core/tag.ts";

export interface TextOption extends TagOptions {
  children: undefined;
}
export const Text = (text: string, options?: TextOption): HTMLElement => {
  //? handling children section.
  if (options?.children) options.children = undefined;

  const element = Tag("span", options);
  element.textContent = text;
  return element;
};
export const span = (text: string, option?: TextOption) => Text(text, option);

export const mark = (options: TagOptions): HTMLElement => {
  const element = Tag("mark", options);
  return element;
};
