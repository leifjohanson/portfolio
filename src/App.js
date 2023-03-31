import './App.css';
import { BrowserRouter as Routes, Route, Outlet } from 'react-router-dom';
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

      {/* <main>
          <Route path="/" component={PhotoName} />
          <Route path="/skills" component={LanguageList} />
      </main> */}
    </>
  );
}

export default App;
