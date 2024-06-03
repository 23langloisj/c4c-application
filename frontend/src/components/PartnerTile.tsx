import { PartnerData } from "../types";

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

interface PartnerTileProps {
  partnerData: PartnerData
}

function PartnerTile({ partnerData }: PartnerTileProps) {

  return (
    <div className="partner-tile">
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