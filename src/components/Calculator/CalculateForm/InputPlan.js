import React from 'react';
import InputPlanStyled from './InputPlan.styled';
import InputRange from './InputRange';

const InputPlan = (props) => {
    return (
        <InputPlanStyled>
            <div className="plan-input">
                <div className="input">
                    <h4>CHOOSE PLAN : </h4>
                    <div className="plans">
                        <div>2% DAILY</div>
                        <div>2.5% DAILY</div>
                        <div>3% DAILY</div>
                    </div>
                </div>
                <div className="input">
                    <h4>ENTER AMOUNT : </h4>
                    <div className="input-amount">
                        <input type="number" min="10" />
                        <p>USD</p>
                    </div>
                </div>

                <InputRange minValue={10} maxValue={1000000} />

            </div>
            <div className="plan-values">
                <div className="plan-value">
                    <h4>DAILY PROFIT: </h4>
                    <div>{(3000).toFixed(2)}
                        <span>USD</span>
                    </div>
                </div>
                <div className="plan-value">
                    <h4>TOTAL PROFIT: </h4>
                    <div>{(3043434.988).toFixed(2)}
                        <span>USD</span>
                    </div>
                </div>
            </div>
        </InputPlanStyled>

    )
}


export default InputPlan;
