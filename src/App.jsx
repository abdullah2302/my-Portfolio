import { useRef, useState, useEffect, Suspense, lazy } from 'react';
import { 
  useMultiSectionObserver, 
  useCounterAnimation, 
  useChat, 
  useKeyboard 
} from './hooks';
import { projects as projectsData } from './data/projects';
import { skills as skillsData } from './data/skills';
import './index.css';
const Header = lazy(() => import('./components/Header'));
const HomeSection = lazy(() => import('./components/HomeSection'));
const DashboardSection = lazy(() => import('./components/DashboardSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const ProjectModal = lazy(() => import('./components/ProjectModal'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const dashboardRef = useRef(null);
  const contactRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectsCount, setProjectsCount] = useState(0);
  const [skillsCount, setSkillsCount] = useState(0);

  // Custom hooks
  const sectionRefs = useMultiSectionObserver(setActiveSection, { threshold: 0.1, rootMargin: '-10% 0px -35% 0px' });
  useCounterAnimation(setProjectsCount, 4, 1000);
  useCounterAnimation(setSkillsCount, 5, 1000);
  const { userInput, setUserInput, messages, handleChatSubmit } = useChat();
  useKeyboard('Escape', () => setSelectedProject(null), selectedProject !== null);

  // Assign refs to the sectionRefs object after component mounts
  useEffect(() => {
    sectionRefs.current = {
      home: homeRef,
      projects: projectsRef,
      about: aboutRef,
      dashboard: dashboardRef,
      contact: contactRef,
    };
  }, []);

  const scrollToSection = (section) => {
    if (sectionRefs.current[section] && sectionRefs.current[section].current) {
      sectionRefs.current[section].current.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(section);
    } else {
      // no-op: ref not found
    }
  };

  const skills = skillsData;
  const projects = projectsData;

  return (
    <div className="min-h-screen text-white bg-[#1F2A44]">
      <Suspense fallback={null}>
        <Header 
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
      </Suspense>

      <main className="pt-10 sm:pt-14 md:pt-18 lg:pt-20 relative z-10">
        <Suspense fallback={<div className="min-h-[60vh]" />}> 
          <HomeSection 
            homeRef={homeRef}
            scrollToSection={scrollToSection}
          />
        </Suspense>

        <Suspense fallback={<div className="min-h-[40vh]" />}> 
          <DashboardSection 
            dashboardRef={dashboardRef}
            projectsCount={projectsCount}
            skillsCount={skillsCount}
          />
        </Suspense>

        <Suspense fallback={<div className="min-h-[60vh]" />}> 
          <ProjectsSection 
            projectsRef={projectsRef}
            projects={projects}
            setSelectedProject={setSelectedProject}
            onProjectsVisibleChange={(visible) => {
              if (visible) setActiveSection('projects');
            }}
          />
        </Suspense>

        <Suspense fallback={null}> 
          <ProjectModal 
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        </Suspense>

        <Suspense fallback={<div className="min-h-[40vh]" />}> 
          <AboutSection 
            aboutRef={aboutRef}
            skills={skills}
          />
        </Suspense>

        <Suspense fallback={<div className="min-h-[40vh]" />}> 
          <ContactSection 
            contactRef={contactRef}
            userInput={userInput}
            setUserInput={setUserInput}
            messages={messages}
            handleChatSubmit={handleChatSubmit}
          />
        </Suspense>
      </main>

      <Suspense fallback={null}> 
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;