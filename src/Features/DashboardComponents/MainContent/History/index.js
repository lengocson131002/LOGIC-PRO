import styled from "styled-components";
import ContentHeader from "../ContentHeader";
import InputSelect from "../../../General/InputSelect";
import { Button } from "../../../../Components/Buttons";
import Pagination from "./Pagination";

const HistoryStyled = styled.div`
`;

const Filter = styled.div`
    background-color: rgba(0,0,0,0.5);
    border-radius: 15px;
    padding: 3rem;
    margin-bottom: 3rem;
    gap: 2rem;
    display: flex;

    @media (max-width: 767px) {
        flex-direction: column;
    }
   
`;
const FilterLeft = styled.div`
    display: grid;
    column-gap: 1rem;
    row-gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    flex: 1;
    min-width: calc(70% - 2rem);
`;

const FilterRight = styled.div`
    flex-basic: 30%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex: 1;

`;

const FilterItem = styled.div`
    & span {
        color: ${({ theme }) => theme.colors.primary};
        display: block;
        margin-bottom: 1rem; 
    }
`;

const options = [
    { name: '1', value: '1' },
    { name: '2', value: '2' },
    { name: '3', value: '3' },
    { name: '4', value: '4' },
];
const History = () => {
    return (
        <HistoryStyled>
            <ContentHeader>History</ContentHeader>
            <Filter>
                <FilterLeft>
                    <FilterItem>
                        <span>Date from</span>
                        <InputSelect options={options} />
                    </FilterItem>
                    <FilterItem>
                        <span>Month from</span>
                        <InputSelect options={options} />
                    </FilterItem>
                    <FilterItem>
                        <span>Year from</span>
                        <InputSelect options={options} />
                    </FilterItem>
                    <FilterItem>
                        <span>Date to</span>
                        <InputSelect options={options} />
                    </FilterItem>
                    <FilterItem>
                        <span>Month to</span>
                        <InputSelect options={options} />
                    </FilterItem>
                    <FilterItem>
                        <span>Year to</span>
                        <InputSelect options={options} />
                    </FilterItem>
                </FilterLeft>
                <FilterRight>
                    <FilterItem>
                        <span>Payment</span>
                        <InputSelect options={options} />
                    </FilterItem>
                    <FilterItem>
                        <span>Transaction</span>
                        <InputSelect options={options} />
                    </FilterItem>
                </FilterRight>
            </Filter>
            <Button
                href="#"
                className="btn-cta"
                background="#f1c069"
                clickbackground="#ffb83d"
                center
            >SEARCH &rarr; </Button>

            <div className="history-content">

            </div>

            <Pagination
                numOfPages={3}
            //previous={onPrevHandler}
            //next={onNextHandler}
            />
        </HistoryStyled>
    )
}

export default History;
