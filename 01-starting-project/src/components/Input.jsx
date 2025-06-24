export default function ({ userData, setUserData }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userData.initialInvestment}
            required
            onChange={(e) => setUserData("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userData.annualInvestment}
            required
            onChange={(e) => setUserData("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userData.expectedReturn}
            required
            onChange={(e) => setUserData("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userData.duration}
            required
            onChange={(e) => setUserData("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
