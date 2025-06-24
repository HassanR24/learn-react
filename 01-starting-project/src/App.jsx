import { useState } from "react";

import Header from "./components/Header";
import Input from "./components/Input";
import Results from "./components/Results";

function App() {
  const [userData, setUserData] = useState({
    initialInvestment: 1000,
    annualInvestment: 100,
    expectedReturn: 10,
    duration: 5,
  });

  const isValidData = userData.duration >= 1 && userData.expectedReturn >= 0;

  function handleInputChange(inputIdentifier, newValue) {
    setUserData((prevData) => {
      return {
        ...prevData,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <Input userData={userData} setUserData={handleInputChange} />
      {isValidData ? (
        <Results data={userData} />
      ) : (
        <p className="center">
          Please enter a return/duration greater than Zero
        </p>
      )}
    </>
  );
}

export default App;
