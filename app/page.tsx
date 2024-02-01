import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { SectionCaract } from "./components/SectionCaract/SectionCaract";
import { SectionClients } from "./components/SectionClients/SectionClients";
import { SectionModel } from "./components/SectionModel/SectionModel";
import { SectionThemes } from "./components/SectionThemes/SectionThemes";

export default function Home() {
  return (
    <>
      <Header/>
      <SectionModel/>
      <SectionCaract/>
      <SectionThemes/>
      {/* <SectionClients/> */}
      <Footer/>
    </>
  );
}
