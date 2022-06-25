import React, { useState, useEffect } from 'react';
import InputPlanStyled from './InputPlan.styled';
import InputRange from './InputRange';
import { InputAmount } from '../../../../../Components/Inputs';

const InputPlan = ({ chosenPlan, onChangePlan }) => {
    const [value, setValue] = useState(chosenPlan.min);

    const dailyProfit = (chosenPlan.percent * value).toFixed(2);
    const totalProfit = (dailyProfit * chosenPlan.numOfDays).toFixed(2);

    useEffect(() => {
        setValue(chosenPlan.min);
    }, [chosenPlan]);

    const changeInputHandlerByInput = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
    }
    const changeInputHandlerByRange = (value) => {
        setValue(value);
    }

    return (
        <InputPlanStyled>
            <div className="plan-input">
                <div className="input">
                    <h4>CHOOSE PLAN </h4>
                    <div className="plans">
                        <div onClick={() => {
                            onChangePlan(1);
                        }}
                            className={chosenPlan.type === 1 ? "chosen" : ""} >2% DAILY</div>
                        <div onClick={() => {
                            onChangePlan(2);
                        }}
                            className={chosenPlan.type === 2 ? "chosen" : ""} >2.5% DAILY</div>
                        <div onClick={() => {
                            onChangePlan(3);
                        }}
                            className={chosenPlan.type === 3 ? "chosen" : ""} >3% DAILY</div>
                    </div>
                </div>
                <div className="input ">
                    <h4>ENTER AMOUNT  </h4>
                    <InputAmount
                        onChange={changeInputHandlerByInput}
                        value={value} />
                </div>
                <div className="input-range">
                    <InputRange minValue={chosenPlan.min} maxValue={chosenPlan.max} value={value} onChange={changeInputHandlerByRange} />
                </div>

            </div>
            <div className="plan-values">
                <div className="plan-value">
                    <h4>DAILY PROFIT: </h4>
                    <div>{dailyProfit}
                        <span>USD</span>
                    </div>
                </div>
                <div className="plan-value">
                    <h4>TOTAL PROFIT: </h4>
                    <div>{totalProfit}
                        <span>USD</span>
                    </div>
                </div>
            </div>
        </InputPlanStyled>

    )
}

export default InputPlan;
