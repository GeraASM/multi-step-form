import Sidebar from "./Sidebar.jsx"
import {NextPlan} from "./Next.jsx";
import Card from "./Card.jsx";
import MonthlyYearly from "./MonthlyYearly.jsx";
import './Plan.css';
import { useEffect, useState } from "react";

const planInfo = {
    Arcade: {
        mo:  9,
        yr: 90 
    },
    Advanced: {
        mo: 12,
        yr: 120
    },
    Pro: {
        mo: 15,
        yr: 150
    }

}
function Plan ({plan, saveStep, currentStep}) {
    const [monthlYearly, setMonthlyYearly] = useState("mo");
    const [savePlan, setSavePlan] = useState({
        name: "",
        monthlyyearly: "mo",
        price: 0
    });
    const cardChoose = (name, monthlyyearly, price) => {
        setSavePlan(
            {
                name,
                monthlyyearly,
                price
            }
        )
    }
    useEffect(() => {
        if (savePlan) {
           plan(savePlan);
        }
    }, [savePlan]);

    useEffect(() => {
    if (savePlan.name !== "" && savePlan.monthlyyearly !== monthlYearly) {
        // Obtener el nuevo precio según el plan y el tipo (mensual o anual)
        const newPrice = planInfo[savePlan.name][monthlYearly];

        // Actualizar el estado con el nuevo precio y tipo
        setSavePlan((prev) => ({
            ...prev,
            monthlyyearly: monthlYearly,
            price: newPrice
        }));
    }
}, [monthlYearly]);


    return (

        <section className="plan">
            <Sidebar saveStep={saveStep} currentStep={currentStep}/>
            <form action="" className="plan-form">
                <section className="plan-content">
                    <h2 className="plan-form__title">Select your plan</h2>
                    <p className="plan-form__ad">
                        You have the option of monthly or yearly billing.
                    </p>
                    <section className="plan-form__inputs">
                        <Card choose={cardChoose} urlImg="/assets/images/icon-arcade.svg" namePlan="Arcade" price={monthlYearly== 'mo' ? planInfo.Arcade.mo : planInfo.Arcade.yr} monthlyyearly={monthlYearly} isSelected={savePlan.name === "Arcade" && savePlan.monthlyyearly === monthlYearly}/>
                        <Card choose={cardChoose} urlImg="/assets/images/icon-advanced.svg" namePlan="Advanced" price={monthlYearly== 'mo' ? planInfo.Advanced.mo : planInfo.Advanced.yr} monthlyyearly={monthlYearly} isSelected={savePlan.name === "Advanced"} />
                        <Card choose={cardChoose} urlImg="/assets/images/icon-pro.svg" namePlan="Pro" price={monthlYearly== 'mo' ? planInfo.Pro.mo : planInfo.Pro.yr} monthlyyearly={monthlYearly} isSelected={savePlan.name === "Pro"} />
                        
                    </section>
                    <MonthlyYearly   monthOrYearly={setMonthlyYearly} actuallyPlan={monthlYearly}/>
                </section>
                <section className="plan-form__buttons">
                    <button onClick={() => saveStep(1)} type="button" className="btn-back" >Go Back</button>
                    <button onClick={() => {
                        if (savePlan.name != '') saveStep(3)} 
                    }
                        
                    className="btn-next" type="button">Next Step</button>
                </section>
            </form>
           
        </section>
    )
}
export default Plan;