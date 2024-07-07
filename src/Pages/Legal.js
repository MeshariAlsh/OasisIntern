import React from 'react'
import { useSearch } from '../Componets/SearchContext'
import ReactGA from 'react-ga4';

export default function Legal () {

  const { searchTerm } = useSearch();

  const internships = [

    {
      company: 'White & Case',
      role: 'Law COOP - Intern',
      location: 'Riyadh, Saudia Arabia',
      imageUrl: '/Images/WhiteandCase.png',
      applyLink: 'https://www.themuse.com/jobs/whitecase/coop-intern-2024?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
      status: 'Apply',
      colorcode: 'bg-lime-500'
    },

    {
      company: 'Aramco',
      role: 'All departments Internship',
      location: 'Saudia Arabia',
      imageUrl: '/Images/Aramco.png',
      applyLink: 'https://www.aramco.com/en/careers/for-saudi-applicants/student-opportunities/university-and-vocational-college-internship-programs/university-internship-program',
      status: 'Closed',
      colorcode: 'bg-red-600'
    },

    {
      company: 'Saudia ',
      role: 'All Departments COOP',
      location: 'Saudia Arabia',
      imageUrl: '/Images/SaudiaAir.png',
      applyLink: 'https://www.saudia.com/help/careers/cooperative-training',
      status: 'Closed',
      colorcode: 'bg-red-600'
    },

    {
      company: 'Qatar Airways ',
      role: 'All Departments Internship',
      location: 'Qatar',
      imageUrl: '/Images/QatarAirways.png',
      applyLink: 'https://www.qatarairways.com/en/nationalisation/internship-programme.html',
      status: 'Closed',
      colorcode: 'bg-red-600'
    },

  ];

  const handleLinkClick = (company) => {
    ReactGA.event({
      category: 'Internship',
      action: 'Click',
      label: company
    });
  };

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
  
    
  );
}
