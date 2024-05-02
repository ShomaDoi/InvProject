import Header from "./components/Header"
import InvestmentCalculator from "./components/InvestmentCalculator"
import ResultTabel from "./components/ResultTabel"
import { useState } from "react";


function App() {

  const[investment, setInvestment] = useState(
    {
      initialInvestment: 10000,
      annualInvestment: 1000,
      expectedReturn: 5,
      duration: 10,
    }
);
  function handleOnInvest(inputType, newValue) {
    setInvestment(previousUserInput => {
      return {
        ...previousUserInput,
        [inputType]: +newValue
      }
    });

    
  }

  const validData = (investment.initialInvestment > 0 && investment.annualInvestment >= 0 && investment.expectedReturn >= 0 && investment.duration > 0)

  return (
    <div>
      <Header/>
      <InvestmentCalculator 
        handleChange={handleOnInvest} 
        userInput={investment}
      />
      {!validData && <p className="center">Duration cant be less then 1, and other values must be positive numbers!</p>}
      {validData &&
      <ResultTabel userInput={investment}/>}
    </div>
  )
}

export default App
