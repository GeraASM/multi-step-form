import './Next.css'
function Next() {
    return (
        <button className="btn-next" type="submit">Next Step</button>
    )
}
export default Next;

export function NextPlan(nextStep) {
    return (
        <button onClick={() => nextStep(3)} className="btn-next" type="button">Next Step</button>
    )

}

