import React from "react";

const AddContact = () => {
  const [openAddContact, setOpenAddContact] = React.useState(false);
  return (
    <div className="invites">
      <div className="invites--form">
        <input className="invites--form-input" type="text" />
        <button className="invites--form-submit">Invite</button>
      </div>
      <div className="invites--delimiter" />
      <ul className="invites--items">
        <li className="invites--item">gfdgd</li>
      </ul>
    </div>
  );
};

export default AddContact;
