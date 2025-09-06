import Sidebar from "./Sidebar"
import './Finish.css'
import { useEffect, useState } from "react";
function Finish({currentStep, saveStep, finish, plan, pick, getTotal}) {
    const [total, setTotal] = useState(0);
    const sum = () => {
        let price;
        const type = plan.monthlyyearly;
        price = plan.price;
        console.log("Price before", price);
        if (type == 'mo') {
            Object.entries(pick).map(([add, active]) => {
                    if (add == "service" && active) price++ ;
                    if (add == "storage" && active) price += 2;
                    if (add == "profile" && active) price +=2;
                })
        } else if (type == 'yr') {
            Object.entries(pick).map(([add, active]) => {
                    if (add == "service" && active) price += 12 ;
                    if (add == "storage" && active) price += 12 * 2;
                    if (add == "profile" && active) price += 12 * 2;
                })
        }
        console.log("After", price)
        setTotal(price);
    }
    useEffect(() => {
        if (plan.name) {
            sum();
        }
    }, [plan])
    
    return (
        <section className="finish">
            <Sidebar saveStep={saveStep} currentStep={currentStep}/>
            <section className="finish-information">
                <section className="finish-information__description">
                    <h2 className="finish__title">Finishing up</h2>
                    <p className="finish__ad">
                        Double-check everything looks OK before confirming.
                    </p>
                    <div className="finish__details">
                        <div className="finish__block">
                            <div className="finish__card">
                                <h4 className="finish__card-title">{plan.name} ({`${plan.monthlyyearly == 'mo' ? "Monthly" : "Yearly"}`})</h4>
                                <p className="finish__change">Change</p>
                            </div>
                            <p className="finish__price">${plan.price}/{plan.monthlyyearly}</p>
                        </div>
                        <div className="finish__line"></div>
                        <div className="finish__tools">
                            {Object.entries(pick).map(([type, active]) => {
                                if (active) {
                                    return (
                                        <div key={type} className="finish__type">
                                            <p className="finish__type-name">{`${type == 'service' ? "Online service": `${type === 'storage' ? "Larger storage" : `${type === 'profile'? "Customizable profile" : ""}`}`}`}</p>
                                            <p className="finish__type-price">{`${type == 'service' ? `+$${plan.monthlyyearly == 'yr' ? "12" : "1"}/${plan.monthlyyearly}`: `${type === 'storage' ? `+$${plan.monthlyyearly == 'yr' ? "24" : "2"}/${plan.monthlyyearly}` : `${type === 'profile'? `+$${plan.monthlyyearly == 'yr' ? "24" : "2"}/${plan.monthlyyearly}` : ""}`}`}`}</p>
                                        </div>
                                    )

                                }
                            })}

                        </div>
                    </div>
                    <div className="finish__total">
                        <p className="finish__total-text">{`Total (per ${plan.monthlyyearly == 'mo' ? "month" : `${plan.monthlyyearly == 'yr' ? "year" : ""}`})`}</p>
                        <p className="finish__total-final">+${total}</p>
                    </div>
                </section>
                <div className="finish__btns">
                    <button onClick={() => saveStep(3)} type="button" className="btn-back" >Go Back</button>
                    <button onClick={() => {
                        if (total && total !== 0 && plan.name !== '') {
                            finish(true);
                            getTotal(total);
                        }
                    }} 
                        className="btn-confirm" >Confirm</button>
                </div>
            </section>
        </section>
    )
}
export default Finish;