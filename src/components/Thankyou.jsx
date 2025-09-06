import Sidebar from "./Sidebar";
import './ThankYou.css';
function ThankYou({saveStep, currentStep}) {
    return (
        <section className="thankyou">
            <Sidebar saveStep={saveStep} currentStep={currentStep}/>
            <section className="thanyou__texts">
                    <img className="thankyou__img"  src="/assets/images/icon-thank-you.svg" alt="Thank you" />
                <h2 className="thankyou__title">Thank you!</h2>
                <p className="thankyou__text">
                    Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
                </p>    
            </section>
        </section>
    )
}

export default ThankYou;