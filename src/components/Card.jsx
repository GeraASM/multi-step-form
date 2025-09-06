import './Card.css'
function Card({choose, urlImg, namePlan, price, monthlyyearly, isSelected}) {
    return (
        <div onClick={() => choose(namePlan, monthlyyearly, price)} className={`card ${isSelected ? "card--selected": ""}`}>
            <img src={urlImg} alt={namePlan} />
            <div className="card__option">
                <h3 className="card__name">{namePlan}</h3>
                <p className="card__price">${price}/{monthlyyearly}</p>
            </div>
        </div>

    )
}

export default Card;