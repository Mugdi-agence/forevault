import LandingClient from "./LandingClient";
import { getHomeContent } from "../content/home";

export default function Page({ params }) {
  const content = getHomeContent(params.lang);

  return <LandingClient content={content} lang={params.lang} />;
}