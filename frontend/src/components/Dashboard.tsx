// Dashboard.tsx
import { useState, useEffect } from 'react';
import PartnerTile from './PartnerTile';
import AddPartnerForm from './AddPartnerForm';
import { PartnerData } from '../types';

function Dashboard() {
  const [partners, setPartners] = useState<PartnerData[]>([]);

  const fetchPartners = () => {
    fetch('http://localhost:4000/getPartners', {
      method: 'GET',
    })
    .then((res) => res.json())
    .then((data) => setPartners(data))
    .catch((error) => console.log("Error fetching partners:", error));
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  return (
    <div id="main-content">
      <AddPartnerForm onPartnerAdded={fetchPartners} />
      <div id="main-partners-grid">
        {partners.map((partner, index) => (
          <PartnerTile key={index} partnerData={partner} onPartnerDeleted={fetchPartners} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
