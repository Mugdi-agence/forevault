import en from "./home";
import fr from "./fr";
import es from "./es";
import de from "./de";
import ja from "./ja";
import ko from "./ko";
import pt from "./pt";

export const homeContent = { en, fr, es, de, ja, ko, pt };

export function getHomeContent(lang) {
  return homeContent[lang] || homeContent.en;
}