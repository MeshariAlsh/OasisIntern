import React, { useState, useEffect } from 'react'
import { useSearch } from '../Componets/SearchContext'
import axios from 'axios';

export default function Engineering () {
  const { searchTerm } = useSearch();

  const [internships, setInternships] = useState([

    {
      company: 'Salla',
      role: 'Product Development Internship',
      location: 'Makkah Al mukarramah, Saudia Arabia',
      imageUrl: '/Images/Salla.png',
      applyLink: 'https://apply.workable.com/salla/j/4066711BF0/',
      status: 'Apply',
      colorcode: 'bg-lime-500'
    },

    {
      company: 'HungerStation',
      role: 'All Department COOP',
      location: 'Riyadh, Saudia Arabia',
      imageUrl: '/Images/HungerStation.png',
      applyLink: 'https://apply.workable.com/hungerstation/j/72A4F52BD6/',
      status: 'Apply',
      colorcode: 'bg-lime-500'
    },

    {
      company: 'Arabic Computer Systems',
      role: 'Software Development Internship',
      location: 'Riyadh, Saudia Arabia',
      imageUrl: '/Images/ACS.jpeg',
      applyLink: 'https://jobs.workable.com/view/p2hS7tq68SnwnZZZjsqZ5U/internship-software-development-in-riyadh-at-arabic-computer-systems',
      status: 'Apply',
      colorcode: 'bg-lime-500'
    },

    {
      company: 'Oasis Intern',
      role: 'Software Development Internship',
      location: 'Remote, Saudia Arabia',
      imageUrl: '/Images/Goat4.jpeg',
      applyLink: '/oasis',
      status: 'Apply',
      colorcode: 'bg-lime-500'
    },

    {
      company: 'Honeywell',
      role: 'Chemical Engineering Internship',
      location: 'Al Dharan, Saudia Arabia',
      imageUrl: '/Images/Honeywell.png',
      applyLink: 'https://sa.jooble.org/jdp/-7841710399913912855?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
      status: 'Apply',
      colorcode: 'bg-lime-500'
    },

    {
      company: 'Elm',
      role: 'Software Engineer COOP',
      location: 'Riyadh, Saudia Arabia',
      imageUrl: '/Images/Elm.jpeg',
      applyLink: 'https://career.elm.sa/elm/job/Riyadh-Coop-Training-Software-Engineering%28JuneJulyAugust-2024-Intake%29-Job/1130979200/',
      status: 'Apply',
      colorcode: 'bg-lime-500'
    },

    {
      company: 'Field Core',
      role: 'Field Engineer Internship',
      location: 'Remote, Saudia Arabia',
      imageUrl: '/Images/FieldCore.jpeg',
      applyLink: 'https://www.fieldcore.com/careers/jobs/?p=job/ol60tfwE&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic&nl=1',
      status: 'Apply',
      colorcode: 'bg-lime-500'
    },


    {
      company: 'Hitchi',
      role: 'Engineer Internship',
      location: 'Riyadh, Saudia Arabia',
      imageUrl: '/Images/Hitachi.jpeg',
      applyLink: 'https://sa.joblum.com/job/engineering-intern/146176?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
      status: 'Apply',
      colorcode: 'bg-lime-500'
    },

    {
      company: 'Baker Hughes',
      role: 'Mechanical, Electrical, Computer or Petroleum Engineering Internship',
      location: 'Dhahran, Saudia Arabia',
      imageUrl: '/Images/BakerHughes.jpeg',
      applyLink: 'https://careers.bakerhughes.com/global/en/job/BAHUGLOBALR104069/University-Internships-Summer-CO-OP-Saudi-Arabia-2024?utm_source=linkedin&utm_medium=phenom-feeds',
      status: 'Apply',
      colorcode: 'bg-lime-500'
    },

    {
      company: 'P&G',
      role: 'Process Engineers Internship',
      location: 'Dammam, Saudia Arabia',
      imageUrl: '/Images/P&G.jpeg',
      applyLink: 'https://www.pgcareers.com/global/en/job/R000098659/P-G-Dammam-Internship-Program-2024-Process-Engineer?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
      status: 'Apply',
      colorcode: 'bg-lime-500'
    },

    {
      company: 'Aramco',
      role: 'All departments Internship',
      location: 'Saudia Arabia',
      imageUrl: '/Images/Aramco.jpeg',
      applyLink: 'https://www.aramco.com/en/careers/for-saudi-applicants/student-opportunities/university-and-vocational-college-internship-programs/university-internship-program',
      status: 'Closed',
      colorcode: 'bg-red-600'
    },

    {
      company: 'Saudia ',
      role: 'All Departments COOP',
      location: 'Saudia Arabia',
      imageUrl: '/Images/SaudiaAir.jpeg',
      applyLink: 'https://www.saudia.com/help/careers/cooperative-training',
      status: 'Closed',
      colorcode: 'bg-red-600'
    },

    {
      company: 'Qatar Airways ',
      role: 'All Departments Internship',
      location: 'Qatar',
      imageUrl: '/Images/QatarAirways.jpeg',
      applyLink: 'https://www.qatarairways.com/en/nationalisation/internship-programme.html',
      status: 'Closed',
      colorcode: 'bg-red-600'
    },
    
    {
      company: 'Jahez',
      role: 'All Departments Internship',
      location: 'Saudia Arabia',
      imageUrl: '/Images/Jahez.png',
      applyLink: 'https://career.jahez.net',
      status: 'Closed',
      colorcode: 'bg-red-600'
    },
]);

useEffect(() => {
  async function fetchStatus() {
    try {
      const response = await axios.get('https://puppeteer-scraping-api.onrender.com/scrape-all');
      const { results } = response.data;

      // Update internships with the fetched status
      const updatedInternships = internships.map(internship => {
        const result = results.find(r => r.company === internship.company);
        if (result) {
          return { ...internship, status: result.status, colorcode: result.status === 'Apply' ? 'bg-lime-500' : 'bg-red-600' };
        }
        return internship;
      });

      setInternships(updatedInternships);
    } catch (error) {
      console.error('Error fetching status:', error);
    }
  }

  fetchStatus();
}, []);

const filteredInternships = internships.filter(
  item =>
    item.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (a.status === 'Closed' && b.status !== 'Closed') {
        return 1; // Place 'Closed' status items later
      } else if (a.status !== 'Closed' && b.status === 'Closed') {
        return -1; // Place non-'Closed' status items earlier
      }
      return 0; // Keep the existing order if both have the same status
});

  return (
    <div>
      <div className="mb-8 mt-11 ml-10 mr-10 grid lg:grid-cols-3 gap-10">
        {filteredInternships.map((item, index) => (
          <a key={index} href={item.applyLink} className="bg-slate-300 rounded-lg overflow-hidden shadow-md relative transition duration-300 hover:scale-105 cursor-pointer">
            <img src={item.imageUrl} alt={`${item.company} Internship`} className="w-full h-32 sm:h-48 object-cover"></img>
            <div className='m-4'>
                <span className='font-bold'> {item.company} </span>
                <div>
                  <i className="fa-solid fa-circle-info" />
                  <span> {item.role}</span>
                </div>
                <i className="fas fa-map-marker-alt mr-2"></i><span> {item.location || item.locationTWO } </span>
            </div>
            <div className={`${item.colorcode} text-secondary-200 text-xs uppercase font-bold rounded p-2 absolute top-0 ml-2 mt-2`}>
                <span>{item.status}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
