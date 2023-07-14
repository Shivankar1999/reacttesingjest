import React from 'react';

export const Applications = () => {
  return (
    <>
      <h1>Welcome Shubham</h1>
      <h2>Jest Testing...</h2>
      <p>I am Shubham</p>
      <img src="" alt="my img" />
      <span title="newTitle">X</span>
      {/* <div data-testid="custom-element">My Id</div> */}
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="MyName"
            value="Shubham"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job Location</label>
          <select id="job-location">
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
            <input type="checkbox" id="terms" />I agree to the term and
            conditins
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
