import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = (input) => {
  return {
    title: input.url.pathname
  }
}