import React, { useState, useEffect } from 'react'
import { useSearch } from '../Componets/SearchContext'
import axios from 'axios';

export default function Business () {
  const { searchTerm } = useSearch();

  const [internships, setInternships] = useState([

    {
      company: 'Jahez',
      role: 'All Departments Internship',
      location: 'Saudia Arabia',
      imageUrl: '/Images/Jahez.png',
      applyLink: 'https://career.jahez.net',
      status: 'Closed',
      colorcode: 'bg-red-600'
    },

    {
      company: 'Nahdi',
      role: 'Accountant Internship',
      location: 'Riyadh, Saudia Arabia',
      imageUrl: '/Images/Nahdi.jpeg',
      applyLink: 'https://www.drjobpro.com/job/view/2855654?source=jooble',
      status: 'Apply',
      colorcode: 'bg-lime-500'
    },

    {
      company: 'Google',
      role: 'Business Analyst Intern',
      location: 'Dubai, United Arab Emirates',
      imageUrl: '/Images/google.jpeg',
      applyLink: 'https://www.karkidi.com/job-details/54352-business-intern-2024-sales-job?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
      status: 'Apply',
      colorcode: 'bg-lime-500'
    },

    {
      company: 'Emirates',
      role: 'All Departments Internship (Nationals only)',
      location: 'Dubai, United Arab Emirates',
      imageUrl: '/Images/Emirates.png',
      applyLink: 'https://www.emiratesgroupcareers.com/search-and-apply/379622',
      status: 'Apply',
      colorcode: 'bg-lime-500'
    },

    {
      company: 'Pepsico',
      role: ' Accountant Internship ',
      location: 'Riyadh, Saudia Arabia',
      imageUrl: '/Images/Pepsico.png',
      applyLink: 'https://grabjobs.co/saudi-arabia/job/full-time/media-communications/intern-accounting-with-great-benefits-50236629?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
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
      company: 'Nestle',
      role: 'Sales or Marketing Internship',
      location: 'Jeddah, Saudia Arabia',
      imageUrl: '/Images/Nestle.jpeg',
      applyLink: 'https://sa.bebee.com/job/de17efe9d84a82efb927821203dd5f1a?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
      status: 'Apply',
      colorcode: 'bg-lime-500'
    },

    {
      company: 'DHL',
      role: 'Sales Analyst Internship',
      location: ' Old Al Ghanim, Qatar',
      imageUrl: '/Images/DHLWW.jpeg',
      applyLink: 'https://www.mncjobsgulf.com/jobs/internship-sales-analyst-old-al-ghanim-1474179?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic#google_vignette',
      status: 'Apply',
      colorcode: 'bg-lime-500'
    },

    {
      company: 'P&G',
      role: 'Finance and Accounting Internship',
      location: 'Dubai, United Arab Emirates',
      imageUrl: '/Images/P&G.jpeg',
      applyLink: 'https://jobsitedirect.co.uk/job/232/finance-and-accounting-internship-dubai?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
      status: 'Apply',
      colorcode: 'bg-lime-500'
    },

    {
      company: 'Asterix Communications',
      role: 'Corporate Accounting Internship',
      location: 'Yanbu, Saudia Arabia',
      imageUrl: '/Images/Asterix.jpeg',
      applyLink: 'https://sa.talent.com/view?id=851252937f7a&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
      status: 'Apply',
      colorcode: 'bg-lime-500'
    },

    {
      company: 'Alpin limited',
      role: 'Business Development and Marketing Intern',
      location: 'Abu Dhabi, United Arab Emirates',
      imageUrl: '/Images/Alpin.jpeg',
      applyLink: 'https://grabjobs.co/uae/job/full-time/others/business-development-and-marketing-intern-50890782?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
      status: 'Apply',
      colorcode: 'bg-lime-500'
    },

    {
      company: 'Zid',
      role: 'Accountant/ Finance Internship',
      location: 'Riyadh, Saudia Arabia',
      imageUrl: '/Images/Zid.jpeg',
      applyLink: 'https://www.jisr.net/en/zid/careers/4d41c0d6-b5fc-426b-b2c6-5e1e02bbf50c?host=1',
      status: 'Apply',
      colorcode: 'bg-lime-500'
    },

    {
      company: 'i Talent',
      role: 'Accountant Internship',
      location: 'Al Kober, Saudia Arabia',
      imageUrl: '/Images/Italent.png',
      applyLink: 'https://www.bayt.com/ar/saudi-arabia/jobs/accounts-internship-saudi-nationals-only-5120777/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
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
      company: 'Tamara',
      role: 'Instore Operations Internship',
      location: 'Kuwait',
      imageUrl: '/Images/Tamara.png',
      applyLink: 'https://tamara.co/jobs',
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
                <span className='font-bold text-xl'> {item.company} </span>
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
