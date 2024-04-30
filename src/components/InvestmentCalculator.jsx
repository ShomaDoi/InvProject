export default function InvestmentCalculator()  {
    return <div id="user-input" className="input-group">
        <div>
            <p className="label">INITIAL INVESTMENT</p>
            <input id="initial" className="input" placeholder="0"/>
            <p className="label">EXPECTED RETURNS</p>
            <input id="expected" className="input"/>
        </div>
       
        <div>
            <p  className="label">ANUAL INVESTMENT</p>
            <input id="anual" className="input"/>
            <p className="label">DURATION</p>
            <input id="duration" className="input"/>
        </div>
         
    </div>
}