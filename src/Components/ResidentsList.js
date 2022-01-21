import React from "react";
import PropTypes from "prop-types"; // ES6

function ResidentsList({ residents }) {
  return (
    <div className="pa-10 mt-10 w-75">
      <div className="font-weight-bold text-center">Residents List</div>
      <ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
        {residents.map((resident) => (
          <li key={resident} className="slide-up-fade-in">
            {resident}
          </li>
        ))}
      </ul>
    </div>
  );
}
ResidentsList.prototype = {
  residents: PropTypes.array,
};

export default ResidentsList;
