import { useEffect, useState } from 'react';
import './Sidebar.css';
import Step from './Step.jsx';

function Sidebar ({saveStep, currentStep}) {
    const stepSelected = (n) => {
        saveStep(n);
    }
    return (
        <figure className="sidebar__background" >
            <Step press={stepSelected} number={1} step="STEP 1" title="YOUR INFO" isSelected={currentStep == 1} />
            <Step press={stepSelected} number={2} step="STEP 2" title="SELECT PLAN" isSelected={currentStep == 2} />
            <Step press={stepSelected} number={3} step="STEP 3" title="ADD-ONS" isSelected={currentStep == 3} />
            <Step press={stepSelected} number={4} step="STEP 4" title="SUMMARY" isSelected={currentStep == 4} />
        </figure>
    )
}

export default Sidebar;