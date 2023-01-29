import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  return {
    title: "Custom title from +page.server.ts"
  }
}