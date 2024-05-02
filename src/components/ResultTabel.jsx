import { calculateInvestmentResults, formatter } from "../util/investment"

export default function ResultTabel({userInput})   {
    const resultData = calculateInvestmentResults(userInput);
    const initialInvestment = resultData[0].valueEndOfYear-resultData[0].interest-resultData[0].annualInvestment;

    console.log(initialInvestment);
    return <table id="result">
        <thead className="thead" >
            <tr>
                <th scope="col">Year</th>
                <th scope="col">Investment Value</th>
                <th scope="col">Interest (year)</th>
                <th scope="col">Total Interest</th>
                <th scope="col">Invested Capital</th>
            </tr>
        </thead>
        <tbody className="tbody">
            {resultData.map((yearData) => {
                const totalInterest =  
                yearData.valueEndOfYear 
                - yearData.annualInvestment*yearData.year 
                - initialInvestment;
               const totalAmountInvested= yearData.valueEndOfYear - totalInterest;

                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            })}
        </tbody>
        
    </table>
}