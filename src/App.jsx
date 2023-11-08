import React from 'react';
import MyNavbar from './components/MyNavbar';
import AboutUs from './components/AboutUs';
import TopBanquet from './components/TopBanquet';
import TrendingHalls from './components/TrendingHalls';
import ContactUs from './components/Footer';

const sectionIds = ['about', 'topBanquet', 'trendingHalls', 'contactUs'];

function App() {
 

  return (
    <div className="app-container">
      <MyNavbar sectionIds={sectionIds} />
      <AboutUs id={sectionIds[0]} />
      <TopBanquet id={sectionIds[1]} />
      <TrendingHalls id={sectionIds[2]} />
      <ContactUs id={sectionIds[3]} />
    </div>
  );
}

export default App;
