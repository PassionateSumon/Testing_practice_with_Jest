export const Application = () => {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <h3 hidden>Hidden details</h3>
      <p>This form is mandatory</p>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />

          <label htmlFor="bio">Bio</label>
          <input type="text" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> Agree to terms and conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
