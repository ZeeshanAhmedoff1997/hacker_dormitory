import React from "react";
import PropTypes from "prop-types"; // ES6

function Error({ error }) {
  return (
    <>
      {error && (
        <div
          data-testid="errorMsg"
          className="alert error mt-20 slide-up-fade-in"
        >
          {error}
        </div>
      )}
    </>
  );
}
Error.prototype = {
  error: PropTypes.string,
};
export default Error;
