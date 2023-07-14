import React from 'react';

export const Applications = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="job-location">Job Location</label>
        <select id="job-locatio">
          <option value="">Select Country</option>
          <option value="US">United States</option>
          <option value="UK">United Kingdom</option>
          <option value="CA">Cananda</option>
          <option value="IN">India</option>
          <option value="AU">Auestralia</option>
        </select>
      </div>
      <div>
        <label>
          <input type="checkbox" id="terms" />I agree to the term and conditins
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
};
