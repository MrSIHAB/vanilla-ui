import { createTag, type TagOptions } from "../core/tag.ts";

export const div: (options?: TagOptions) => HTMLDivElement =
  createTag<HTMLDivElement>("div");
export const container: (options?: TagOptions) => HTMLDivElement =
  createTag<HTMLDivElement>("div");
