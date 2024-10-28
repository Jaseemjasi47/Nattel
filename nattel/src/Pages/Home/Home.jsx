import React from 'react';
import './Home.css'; // Import the CSS file
import HomeCarousel from '../../Components/HomeCarousel';

function Home() {
  return (
    <div className="home-container">
        <HomeCarousel/>
      <section className="intro-section">
        <h1>NATTEL ASSOCIATES</h1>
        <p>
          NATTEL ASSOCIATES is a leading Overseas Education Consultant that has assisted students in studying in India & abroad at reputed Institutions in Kerala, Karnataka, Tamilnadu & USA, UK, Australia, New Zealand, Canada, Germany, Singapore, and more. With decades of experience and expertise under its belt, NATTEL ASSOCIATES has also assisted students with their coaching for PROMETRIC, IELTS, OET, UKVI-IELTS. 
        </p>
        <p>
          A solution-oriented company that specializes in tailoring career pathways to suit individual profiles within any constraints that may prevail, NATTEL ASSOCIATES has time and again proven to be the best choice for students wanting to pursue studies in India & abroad.
        </p>
      </section>

      <section className="services-section">
        <h2>NATTEL ASSOCIATES OFFERS</h2>
        <ul className="services-list">
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
    </div>
  );
}

export default Home;
