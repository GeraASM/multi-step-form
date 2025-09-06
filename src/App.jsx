
import { useEffect, useState } from 'react';
import Plan from './components/Plan.jsx';
import PersonalInfo from './components/Personal.jsx';
import Pick from './components/Pick.jsx';
import Finish from './components/Finish.jsx';
import ThankYou from './components/Thankyou.jsx';

import './App.css';

function App() {
  const [step, setStep] = useState(1);

  const [information, setInformation] = useState(null);
  const [plan, setPlan] = useState(null);
  const [pick, setPick] = useState(null);
  const [total, setTotal] = useState(null);
  const [confirm, setConfirm] = useState(false);
  let currentStep = 0;

  useEffect(() => {
      console.log("current Step", step);
      if (information) console.log("information form", information);
      if (plan) console.log("plan", plan);
      if (pick) console.log("pick", pick);
      if (total) console.log("total", total);
  }, [step, information, plan, pick, total])
  return (
    <>
    {
      step == 1 &&

      <PersonalInfo currentStep={step}  saveStep={setStep} personal={setInformation} />
    }
    {
      step == 2 &&
      <Plan currentStep={step}  saveStep={setStep} plan={setPlan} />
    }
    {
      step === 3 &&
      <Pick currentStep={step}  saveStep={setStep} pick={setPick} />
    }
    {
      step === 4 && !confirm &&
      <Finish getTotal={setTotal} plan={plan} pick={pick} finish={setConfirm} currentStep={step}  saveStep={setStep} />
    }

    {
      confirm && 
      <ThankYou currenStep={step}  saveStep={setStep} />
    }

    </>
  )
}

export default App
