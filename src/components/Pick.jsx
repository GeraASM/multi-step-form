import Sidebar from "./Sidebar.jsx"
import './Pick.css'
import Next from "./Next.jsx"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
function Pick({currentStep, saveStep, pick}) {
    const [data, setData] = useState({
        service: false,
        storage: false,
        profile: false
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        pick(data);
        saveStep(4);
    }
    useEffect(() => {
        if (data) {
            pick(data);
        }
    }, [data])
    return (
        <section className="pick">
            <Sidebar saveStep={saveStep} currentStep={currentStep}/>
            <form onSubmit={handleSubmit(onSubmit)} action="" className="pick-form">
                <section className="pick-content">
                    <h3 className="pick-form__title">Pick add-ons</h3>
                    <p className="pick-form__ad">
                        Add-ons help enhance your gaming experience.
                    </p>
                    <fieldset className="pick-form__inputs">
                        <div className={`pick-form__block-input ${data.service ? "pick-form__block-input--selected" : ""}`}>
                            <input {...register("service")} 
                            onChange={(e) => setData((prev) => (
                                {
                                    ...prev,
                                    service: e.target.checked
                                }
                            ))}
                            className="pick-form__checkbox" type="checkbox" name="service" id="service" />
                            <label htmlFor="service">
                                <div className="pick-form__point">
                                    <p className="pick-form__name">Online service</p>
                                    <p className="pick-form__description">Access to multiplayer games</p>
                                </div>
                                <p className="pick-form__extra">+$1/mo</p>
                            </label>
                        </div>
                        <div className={`pick-form__block-input ${data.storage ? "pick-form__block-input--selected" : ""}`}>
                            <input {...register("storage")}
                            onChange={(e) => setData((prev) => (
                                {
                                    ...prev,
                                    storage: e.target.checked
                                }
                            ))}
                             className="pick-form__checkbox" type="checkbox" name="storage" id="storage" />
                            <label htmlFor="storage">
                                <div className="pick-form__point">
                                    <p className="pick-form__name">Larger storage</p>
                                    <p className="pick-form__description">Extra 1 TB of cloud save</p>
                                </div>
                                <p className="pick-form__extra">+$2/mo</p>
                            </label>
                        </div>
                        <div className={`pick-form__block-input ${data.profile ? "pick-form__block-input--selected" : ""}`}>
                            <input {...register("profile")}
                            onChange={(e) => setData((prev) => (
                                {
                                    ...prev,
                                    profile: e.target.checked
                                }
                            ))}
                             className="pick-form__checkbox" type="checkbox" name="profile" id="profile" />
                            <label htmlFor="profile">
                                <div className="pick-form__point">
                                    <p className="pick-form__name">Customizable profile</p>
                                    <p className="pick-form__description">Custom theme on your profile</p>
                                </div>
                                <p className="pick-form__extra">+$2/mo</p>
                            </label>
                        </div>
                    </fieldset>
                </section>
                <section className="pick-form__btns" >
                    <button onClick={() => saveStep(2)} type="button" className="btn-back" >Go Back</button>
                    <Next />
                </section>
            </form>
        </section>
    )
}

export default Pick;