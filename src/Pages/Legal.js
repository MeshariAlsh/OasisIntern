import React, { useState, useEffect } from 'react';
import { useSearch } from '../Components/SearchContext';
import axios from 'axios';
import ReactGA from 'react-ga4';

const applicationsDataLegal = process.env.REACT_APP_LEGAL_API_ENDPOINT;
const scrappingAPI = process.env.REACT_APP_SCRAPING_API_ENDPOINT;

export default function Business() {
  const { searchTerm } = useSearch();

  const [internships, setInternships] = useState([]);

  useEffect(() => {
    async function fetchInternships() {
      try {
        const response = await axios.get(`${applicationsDataLegal}`);
        setInternships(response.data);
      } catch (error) {
        console.error('Error fetching internships:', error);
      }
    }

    fetchInternships();
  }, []);

  useEffect(() => {
    async function fetchStatus() {
      try {
        const response = await axios.get(`${scrappingAPI}`);
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
  }, [internships]);

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
          <a key={index} href={item.applyLink} className="bg-slate-300 rounded-lg overflow-hidden shadow-md relative transition duration-300 hover:scale-105 cursor-pointer" onClick={() => handleLinkClick(item.company)}>
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
