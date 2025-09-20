import { Tag, TagOptions } from "../core/tag.ts";

export interface ButtonOptions extends TagOptions {
  type?: "button" | "submit" | "reset";
  for?: string;
  autofocus?: boolean;
  form?: string;
}

export const Button = (options: ButtonOptions): HTMLButtonElement => {
  const tag = Tag<HTMLButtonElement>("button", options);

  // add properties
  tag.type = options.type || "button";
  if (options.for) tag.setAttribute("for", options.for);
  if (options.autofocus) tag.autofocus = options.autofocus;
  if (options.form) tag.setAttribute("form", options.form);

  return tag;
};
