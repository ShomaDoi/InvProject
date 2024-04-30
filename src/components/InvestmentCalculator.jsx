export default function InvestmentCalculator()  {
    return <section id="user-input">
        <div  className="input-group">
            <p>
                <label>INITIAL INVESTMENT</label>
                <input 
                    id="initial" 
                    className="input" 
                    placeholder="0"
                    type="number"
                />
            </p>
            <p>
                <label>EXPECTED RETURNS</label>
                <input 
                    id="expected" 
                    className="input"
                    type="number"
                />
            </p>
        </div>
       
        <div className="input-group">
            <p>
                <label>ANUAL INVESTMENT</label>
                <input 
                    id="anual" 
                    className="input"
                    type="number"
                />
            </p>
            <p>
                <label>DURATION</label>
                <input 
                    id="duration" 
                    className="input"
                    type="number"
                />
            </p>    
        </div>
         
    </section>
}