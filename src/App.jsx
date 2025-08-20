import { useRef, useState, useEffect } from 'react';
import { 
  useMultiSectionObserver, 
  useCounterAnimation, 
  useParticles, 
  useChat, 
  useKeyboard 
} from './hooks';
import {
  Header,
  HomeSection,
  DashboardSection,
  ProjectsSection,
  ProjectModal,
  AboutSection,
  ContactSection,
  Footer
} from './components';
import './index.css';

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
  const particles = useParticles(50);
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
    console.log('Scrolling to section:', section);
    console.log('Available refs:', Object.keys(sectionRefs.current));
    console.log('Section ref:', sectionRefs.current[section]);
    
    if (sectionRefs.current[section] && sectionRefs.current[section].current) {
      sectionRefs.current[section].current.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(section);
    } else {
      console.error('Section ref not found:', section);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const skills = [
    { name: 'ReactJS', level: '90%' },
    { name: 'Tailwind CSS', level: '85%' },
    { name: 'JavaScript', level: '80%' },
    { name: 'Node.js', level: '70%' },
    { name: 'Flask', level: '70%' },
  ];

  // eslint-disable-next-line no-unused-vars
  const projects = [
    {
      id: 1,
      title: 'Crypto Prices',
      desc: 'A dynamic cryptocurrency tracker providing real-time prices, trends, and coin details.',
      liveLink: 'https://cryptocurrency-45880.web.app/',
      repoLink: 'https://github.com/abdullah2302/CryptoApp',
      image: '/images/image1.png',
      tech: ['React', 'Tailwind', 'Firebase', 'API'],
    },
    {
      id: 2,
      title: 'Mechanic Service App',
      desc: 'A responsive web interface for a vehicle repair and maintenance platform.',
      liveLink: 'https://mechanic-4d27f.web.app',
      repoLink: 'https://github.com/yourusername/project2',
      image: '/images/image2.png',
      tech: ['HTML', 'CSS', 'JS'],
    },
    {
      id: 3,
      title: 'Gym Project (Frontend Only)',
      desc: 'A user interface for a fitness management platform with a seamless design.',
      liveLink: 'https://gymproject-77dbd.web.app',
      repoLink: 'https://github.com/yourusername/project3',
      image: '/images/image3.png',
      tech: ['React', 'CSS', 'Firebase'],
    },
    {
      id: 4,
      title: 'DataTrain Visualization',
      desc: 'An interactive platform transforming raw data into meaningful visual insights.',
      liveLink: 'https://data-visualization-90433.web.app',
      repoLink: 'https://github.com/yourusername/project3',
      image: '/images/image4.png',
      tech: ['React', 'Chart.js', 'Flask'],
    },
  ];

  return (
    <div className="min-h-screen text-white bg-[#1F2A44]">
      <Header 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <main className="pt-10 sm:pt-14 md:pt-18 lg:pt-20 relative z-10">
        <HomeSection 
          homeRef={homeRef}
          particles={particles}
          scrollToSection={scrollToSection}
        />

        <DashboardSection 
          dashboardRef={dashboardRef}
          projectsCount={projectsCount}
          skillsCount={skillsCount}
        />

        <ProjectsSection 
          projectsRef={projectsRef}
          projects={projects}
          setSelectedProject={setSelectedProject}
          onProjectsVisibleChange={(visible) => {
            if (visible) setActiveSection('projects');
          }}
        />

        <ProjectModal 
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />

        <AboutSection 
          aboutRef={aboutRef}
          skills={skills}
        />

        <ContactSection 
          contactRef={contactRef}
          userInput={userInput}
          setUserInput={setUserInput}
          messages={messages}
          handleChatSubmit={handleChatSubmit}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;