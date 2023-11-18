import Hero from "./components/Hero";
import Popular from "./components/Popular";
import Offers from "./components/Offers";
import NewCollections from "./components/NewCollections";
import NewsLetter from "./components/NewsLetter";
export default function Home() {
  return (
    <>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </>
  );
}
