import TotalItem from "./TotalItem"
const Total = () => {
    return (
        <div>
            <TotalItem
                totalName="Active deposits"
                amount="0.00"
            />
            <TotalItem
                totalName="Earned total"
                amount="0.00"
            />
            <TotalItem
                totalName="Total deposits"
                amount="0.00"
            />
            <TotalItem
                totalName="Total withdraw"
                amount="0.00"
            />
        </div>
    )
}

export default Total
