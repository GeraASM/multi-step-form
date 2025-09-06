import Sidebar from "./Sidebar.jsx";
import Next from "./Next.jsx";
import "./Personal.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
function PersonalInfo ({personal, saveStep, currentStep}) {
    const [phone, setPhone] = useState("");
      const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()

    const dataPhone = (number) => {
        if (/[a-zA-Z]+/.test(number)) {
            setPhone(number.slice(0, -1))
            return
        }

        if (/^\+\d{1}\s\d{3}\s\d{3}\s\d{3}$/.test(number)) {
            setPhone(number);
            return
        }
        if (/^\+\d{1}\s\d{3}\s\d{3}\s\d{3}(\s|\d)+$/.test(number)) {
            setPhone(number.slice(0, -1));
            return
        }
        let modifyNumber = number;
        if (!modifyNumber.startsWith("+")) {
            modifyNumber = "+" + number
            modifyNumber.trim();
        }
        
        if (modifyNumber.length < 11) {
            console.log("Se replaza");
            modifyNumber = modifyNumber.replace(/\s+/, "");
        }
        
        if (/^\+\d{10}/.test(modifyNumber)){
            // +1 234 
            let union = "";
            let partOne = modifyNumber.slice(0, 2);
            union += partOne + " ";
            let partTwo = modifyNumber.slice(2, 5);
            union += partTwo + " ";
            let partThree = modifyNumber.slice(5, 8);
            union += partThree + " ";
            let partFour = modifyNumber.slice(8, 11);
            union += partFour;
            console.log(union);
            setPhone(union.trim());
            return
        }
        console.log("Adentro de la funcion modify number", modifyNumber);
        setPhone(modifyNumber);
        
    }

    const onSubmit = (data) => {
        console.log(data);
        // Save the form
        personal(data);
        saveStep(2);
    }

    console.log(errors);
    return (
        <section className="personal">
            <Sidebar saveStep={saveStep} currentStep={currentStep}/>
            <form onSubmit={handleSubmit(onSubmit)} className="personal-form"  action="">

                <section className="personal-content">
                    <h2 className="personal-form__title">Personal info</h2>
                    <p className="personal-form__ad">
                        Please provide your name, email address, and phone number.
                    </p>
                    <section className="personal-form__inputs">

                        <div className="personal-form__block">
                            <div className="persona-form__top">
                                <label htmlFor="name">Name</label>
                                {errors.name && 
                                    <p className="text-error">{errors.name.message}</p>
                                
                                }

                            </div>
                            <input 
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "This field is required"
                                    }
                                })}
                                className={`${errors.name ? 'input--error' : ''}`}
                            type="text" id="name" placeholder="e.g. Stephen King"/>
                        </div>
                        <div className="personal-form__block">
                            <div className="persona-form__top">
                                <label htmlFor="email">Email Address</label>
                                {errors.email &&
                                    <p className="text-error">{errors.email.message}</p>
                                }
                            </div>
                            <input 
                                className={`${errors.email ? "input--error" : ""}`}
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "This field is required"
                                    },
                                    pattern: {
                                        value: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/,
                                        message: "Email is incorrect!"
                                    } 
                                })}
                            type="email" id="email" placeholder="e.g. stephenking@lorem.com"/>
                        </div>
                        <div className="personal-form__block">
                            <div className="persona-form__top">
                                <label htmlFor="phone">Phone Number</label>
                                {errors.phone &&
                                    <p className="text-error">{errors.phone.message}</p>
                                }
                            </div>
                            <input 
                                className={`${errors.phone ? "input--error" : ""}`}
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: "This field is required"
                                    },
                                    pattern: {
                                        value: /^\+\d{1}\s\d{3}\s\d{3}\s\d{3}$/,
                                        message: "Write a phone number 10 characteres"
                                    }
                                })}
                                onChange={(e) => dataPhone(e.target.value) }
                                value={phone}
                            type="tel" id="phone" placeholder="e.g. +1 234 567 890" />
                        </div>
                    </section>

                </section>
                <div className="personal__btns">
                    <Next />
                </div>
            </form>
        </section>
    )
}

export default PersonalInfo;