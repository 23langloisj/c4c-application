import { PartnerData } from "../types";

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

interface PartnerTileProps {
  partnerData: PartnerData
  onPartnerDeleted: () => void;
}

function PartnerTile({ partnerData, onPartnerDeleted }: PartnerTileProps) {

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fetch(`http://localhost:4000/removePartner/${partnerData.name}`, {
      method: 'DELETE',
    })
    .then((res) => res.json())
    .then((data) => {
      console.log("Partner deleted: " + data);
      onPartnerDeleted();
    })
    .catch((error) => console.log("Error deleting partner, " + error));
  };

  return (
    <div className="partner-tile">
      <form className="delete-form">
        <button className="delete-partner" onClick={handleDelete}>Delete</button>
      </form>
      <img className="partner-thumbnail" src='' />
      <hr />
      <div className="partner-info">
        <h1>{partnerData.name}</h1>
        {partnerData.active ? (
          <p id="active">Active!</p>
        ) : (
          <p id="inactive">Inactive</p>
        )}
        <p>{partnerData.active}</p>
        <img className="partner-thumbnail" src={partnerData.thumbnailUrl} alt={partnerData.name} />
        <p>{partnerData.description}</p>
      </div>
    </div>
  )
}

export default PartnerTile;