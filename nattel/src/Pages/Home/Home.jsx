import React from 'react';
import './Home.css'; // Import the CSS file
import nattelImg from '../../Assets/Nattel-sub.png';
import HomeCarousel from '../../Components/HomeCarousel';
import canadaImg from '../../Assets/Places/canada.png';
// import euImg from '../../Assets/Places/EuropeanUnion.png';
import ukImg from '../../Assets/Places/uk.png';
import australiaImg from '../../Assets/Places/australia.png';
import lithuaniaImg from '../../Assets/Places/lithuania.png';
import polandImg from '../../Assets/Places/poland.png';
import germanyImg from '../../Assets/Places/germany.png';
import newZealandImg from '../../Assets/Places/newZealand.png';
import czechImg from '../../Assets/Places/czech.png';
import Footer from '../../Components/Footer/Footer';

function Home() {
  return (
    <div className="home-container">
      <div className="frontlogo">
      <img src={nattelImg} alt="Nattel" />
      </div>
      <section className="intro-section text-3">
        <h1 className='text-1'>NATTEL ASSOCIATES</h1>
        <p>
        NATTEL ASSOCIATES is a leading Overseas Education Consultant, guiding students to study in India and abroad at top institutions in Kerala, Karnataka, Tamil Nadu, the USA, UK, Australia, New Zealand, Canada, Germany, Singapore, and more. With extensive experience, we assist students in exam preparation for PROMETRIC, IELTS, OET, and UKVI-IELTS. As a solution-focused company, NATTEL ASSOCIATES offers tailored career pathways, making us a trusted choice for students pursuing education both locally and internationally.
        </p>
        </section>
        <HomeCarousel/>

      <section className="services-section">
        <h2>NATTEL ASSOCIATES OFFERS</h2>
        <ul className="services-list text-2">
          <li>Cutting Edge Counseling for Studies Abroad</li>
          <li>Selection of Universities & Programs</li>
          <li>Pre - Application Process & Admission Formalities</li>
          <li>Preparation of Documents</li>
          <li>Coaching for highly competitive Tests such as PROMETRIC/OET/IELTS/UKVI-IELTS</li>
          <li>Availing Scholarships</li>
          <li>Acquiring Financial Aid</li>
          <li>Visa Counseling</li>
          <li>Pre - Departure Counseling</li>
          <li>Travel Arrangements</li>
          <li>College Admission Guidance</li>
          <li>Career Guidance Free Counseling</li>
          <li>Work Permits Assistance</li>
          <li>Student Visas Assistance</li>
          <li>Citizenship Applications Assistance</li>
          <li>Family Sponsorship Guidance</li>
        </ul>
      </section>
      <h2 className="section-heading">Global Opportunities Await</h2>
      <div className="country-grid">
        <div className="country-card"><img src={canadaImg} alt="Canada" /><p>Canada</p></div>
        <div className="country-card"><img src={ukImg} alt="UK" /><p>U.K</p></div>
        <div className="country-card"><img src={australiaImg} alt="Australia" /><p>Australia</p></div>
        <div className="country-card"><img src={lithuaniaImg} alt="Lithuania" /><p>Lithuania</p></div>
        <div className="country-card"><img src={polandImg} alt="Poland" /><p>Poland</p></div>
        <div className="country-card"><img src={germanyImg} alt="Germany" /><p>Germany</p></div>
        <div className="country-card"><img src={newZealandImg} alt="New Zealand" /><p>New Zealand</p></div>
        <div className="country-card"><img src={czechImg} alt="Czech Republic" /><p>Czech Republic</p></div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
