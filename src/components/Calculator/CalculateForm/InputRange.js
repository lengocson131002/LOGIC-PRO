import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { useTheme, } from 'styled-components';
import InputRangeStyled from './InputRange.styled';

const InputRange = (props) => {
    const [state, setState] = useState({ values: [10] });
    const theme = useTheme();
    const { minValue, maxValue } = props;
    console.log(state.values[0]);

    return (
        <InputRangeStyled>
            <Range
                values={state.values}
                step={1}
                min={minValue}
                max={maxValue}
                onChange={(values) => setState({ values })}
                renderTrack={({ props, children }) => (
                    <div
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        style={{
                            ...props.style,
                            height: "36px",
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div
                            ref={props.ref}
                            style={{
                                height: "8px",
                                width: "100%",
                                borderRadius: "4px",
                                background: getTrackBackground({
                                    values: state.values,
                                    colors: [`${theme.colors.tertiary}`, `${theme.colors.secondaryLight}`],
                                    min: +minValue,
                                    max: +maxValue,
                                }),
                                alignSelf: "center"
                            }}
                        >
                            {children}
                        </div>
                    </div>
                )}
                renderThumb={({ props, isDragged }) => (
                    <div
                        {...props}
                        className="thumb"
                        style={{
                            ...props.style,
                        }}
                    >
                        <p className="current-value">{props["aria-valuenow"]}</p>
                    </div>
                )}
            />
        </InputRangeStyled >
    )
}

export default InputRange
