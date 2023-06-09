import './App.css';
import Navigation from './components/Navigation/Navigation';
import PhotoName from './components/PhotoName/PhotoName';
import Education from './components/Education/Education';
import LanguageList from './components/LanguageList/LanguageList';
import MobileProjectList from './components/MobileProjectList/MobileProjectList';
import SWEProjectList from './components/SWEProjectList/SWEProjectList';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Navigation />
      <PhotoName />   
      <LanguageList />
      <Education />
      <MobileProjectList />
      <SWEProjectList />
      <Contact />
    </>
  );
}

export default App;
