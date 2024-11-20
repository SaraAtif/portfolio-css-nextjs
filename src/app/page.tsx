
import AboutPage from "./component/about";
import ContactPage from "./component/contact";
import Footer from "./component/footer";
import Header from "./component/header";
import HeroPage from "./component/hero";
import ProjectsPage from "./component/projects";
import SkillsPage from "./component/skills";


export default function Home() {
  return (
    <div>
      <Header/>
      <HeroPage/>
      <AboutPage/>
      <SkillsPage/>
      <ProjectsPage/>
      <ContactPage/>
      <Footer/>
    </div>
  );
}
