import { Tag, TagOptions } from "../core/tag.js";

export interface TextOption extends TagOptions {
    childs: undefined;
}
export const Text = (text: string, options?: TextOption): HTMLElement => {
    //? handling childs section.
    if (options?.childs) options.childs = undefined;

    const element = Tag("span", options);
    element.textContent = text;
    return element;
};
export const Span = (text: string, option?: TextOption) => Text(text, option);

export const Mark = (options: TagOptions): HTMLElement => {
    const element = Tag("mark", options);
    return element;
};
