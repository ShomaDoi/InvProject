import { useState } from "react"



export default function InvestmentCalculator({handleChange, userInput})  {

    


    return <section id="user-input">
        <div  className="input-group">
            <p>
                <label>INITIAL INVESTMENT</label>
                <input 
                    id="initial" 
                    type="number"
                    required
                    value={userInput.initialInvestment}
                    onChange={(event)=> handleChange('initialInvestment',event.target.value)}
                />
            </p>
            <p>
                <label>EXPECTED RETURNS</label>
                <input 
                    id="expected" 
                    type="number"
                    required
                    value={userInput.expectedReturn}
                    onChange={(event)=> handleChange('expectedReturn',event.target.value)}
                />
            </p>
        </div>
       
        <div className="input-group">
            <p>
                <label>ANUAL INVESTMENT</label>
                <input 
                    id="anual" 
                    type="number"
                    required
                    value={userInput.annualInvestment}
                    onChange={(event)=> handleChange('annualInvestment',event.target.value)}
                />
            </p>
            <p>
                <label>DURATION</label>
                <input 
                    id="duration" 
                    type="number"
                    required
                    value={userInput.duration}
                    onChange={(event)=> handleChange('duration',event.target.value)}
                />
            </p>    
        </div>
         
    </section>
}