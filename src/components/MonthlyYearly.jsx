import './MonthlyYearly.css'
function MonthlyYearly ({monthOrYearly, actuallyPlan}) {
    return (
        <div className="options">
            <p className={`options__plan ${actuallyPlan == 'mo' ? "options__plan--selected" : ""}`}>Monthly</p>
            <div onClick={() => monthOrYearly((prev) => {
                if (prev == 'mo') return "yr"
                if (prev == 'yr') return 'mo' 
            })} className="switch">
                <div className={`circle ${actuallyPlan == 'yr' ? "circle--translate" : ""}`}></div>
            </div>
            <p className={`options__plan ${actuallyPlan == 'yr' ? "options__plan--selected" : ""}`}>Yearly</p>
        </div>
    )
}

export default MonthlyYearly;