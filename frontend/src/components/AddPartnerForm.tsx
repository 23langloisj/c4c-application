// AddPartnerForm.tsx
import { useState, FormEvent } from 'react';
import { PartnerData } from '../types';

interface AddPartnerFormProps {
  onPartnerAdded: () => void;
}

function AddPartnerForm({ onPartnerAdded }: AddPartnerFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [active, setActive] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newPartner: PartnerData = {
      name,
      description,
      thumbnailUrl,
      active,
    };

    fetch('http://localhost:4000/addPartner', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...newPartner, key: name }), // Assuming name is unique and can be used as key
    })
    .then((res) => res.json())
    .then((data) => {
      console.log('Partner added:', data);
      setName('');
      setDescription('');
      setThumbnailUrl('');
      setActive(false);
      onPartnerAdded(); // Call the callback to refresh the partners list
    })
    .catch((error) => console.log("Error adding partner:", error));
  };

  return (
    <form onSubmit={handleSubmit} className="add-partner-form">
      <div>
        <h1>Add a Partner</h1>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Thumbnail URL:</label>
        <input
          type="text"
          value={thumbnailUrl}
          onChange={(e) => setThumbnailUrl(e.target.value)}
        />
      </div>
      <div>
        <label>Active:</label>
        <input
          type="checkbox"
          checked={active}
          onChange={(e) => setActive(e.target.checked)}
        />
      </div>
      <button type="submit">Add Partner</button>
    </form>
  );
}

export default AddPartnerForm;
