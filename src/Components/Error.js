import React from "react";

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

export default Error;
