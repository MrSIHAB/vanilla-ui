import { createTag } from "../core/tag.ts";
import type { Func } from "../core/type.ts";

export const header: Func<HTMLElement> = createTag("header");
export const aside: Func<HTMLElement> = createTag("aside");
export const nav: Func<HTMLElement> = createTag("nav");
export const article: Func<HTMLElement> = createTag("article");
export const footer: Func<HTMLElement> = createTag("footer");
export const section: Func<HTMLElement> = createTag("section");
export const main: Func<HTMLElement> = createTag("main");
