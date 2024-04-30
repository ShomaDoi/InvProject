import { useState } from "react"

export default function InvestmentCalculator()  {

    


    return <section id="user-input">
        <div  className="input-group">
            <p>
                <label>INITIAL INVESTMENT</label>
                <input 
                    id="initial" 
                    type="number"
                    required
                />
            </p>
            <p>
                <label>EXPECTED RETURNS</label>
                <input 
                    id="expected" 
                    type="number"
                    required
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
                />
            </p>
            <p>
                <label>DURATION</label>
                <input 
                    id="duration" 
                    type="number"
                    required
                />
            </p>    
        </div>
         
    </section>
}