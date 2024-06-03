import { useState, useEffect } from 'react';
import PartnerTile from './PartnerTile';
import { PartnerData } from '../types';

function Dashboard() {
  const [partners, setPartners] = useState<PartnerData[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/getPartners', {
      method: 'GET',
    })
    .then((res) => res.json())
    .then((data) => setPartners(data))
    .catch((error) => console.log("Error fetching partners:", error));
  }, []);

  return (
    <div id="main-content">
      <div id="main-partners-grid">
        {partners.map((partner, index) => (
          <PartnerTile key={index} partnerData={partner} />
        ))}
      </div>
    </div>
  );

}

export default Dashboard;