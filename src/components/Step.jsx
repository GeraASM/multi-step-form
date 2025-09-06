import './Step.css';
function Step ({number, step, title, press, isSelected}) {
    return (
        <div className='sidebar__step'>
            <div onClick={() => press(number)} className={`sidebar__step-btn ${isSelected ? "sidebar__step-btn--selected" : ""}`}>
                <p className="sidebar__step-number">{number}</p>
            </div>
            <div className="sidebar__step-option">
                <p className="sidebar__step-text">{step}</p>
                <p className="sidebar__step-title">{title}</p>
            </div>
        </div>
    )
}

export default Step;