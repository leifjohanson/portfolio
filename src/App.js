import './App.css';
import Navigation from './components/Navigation/Navigation';
import PhotoName from './components/PhotoName/PhotoName';
import Education from './components/Education/Education';
import LanguageList from './components/LanguageList/LanguageList';
import MobileProjectList from './components/MobileProjectList/MobileProjectList';
import SWEProjectList from './components/SWEProjectList/SWEProjectList';

function App() {
  return (
    <>
      <Navigation />
      <PhotoName />   
      <LanguageList />
      <Education />
      <MobileProjectList />
      <SWEProjectList />
    </>
  );
}

export default App;
