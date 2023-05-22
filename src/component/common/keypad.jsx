import React from 'react';
import styled from 'styled-components';

const Keypad = ({ value, onChange }) => {
    const handleNumberButtonClick = (number) => {
        onChange(value + number);
    };

    const handleDeleteButtonClick = () => {
        onChange(value.slice(0, -1));
    };

    return (
        <KeypadWrapper>
            <KeypadContainer>
                <KeypadButton onClick={() => handleNumberButtonClick('1')}>1</KeypadButton>
                <KeypadButton onClick={() => handleNumberButtonClick('2')}>2</KeypadButton>
                <KeypadButton onClick={() => handleNumberButtonClick('3')}>3</KeypadButton>
            </KeypadContainer>
            <KeypadContainer>
                <KeypadButton onClick={() => handleNumberButtonClick('4')}>4</KeypadButton>
                <KeypadButton onClick={() => handleNumberButtonClick('5')}>5</KeypadButton>
                <KeypadButton onClick={() => handleNumberButtonClick('6')}>6</KeypadButton>
            </KeypadContainer>
            <KeypadContainer>
                <KeypadButton onClick={() => handleNumberButtonClick('7')}>7</KeypadButton>
                <KeypadButton onClick={() => handleNumberButtonClick('8')}>8</KeypadButton>
                <KeypadButton onClick={() => handleNumberButtonClick('9')}>9</KeypadButton>
            </KeypadContainer>
            <KeypadContainer>
                <KeypadButton>-</KeypadButton>
                <KeypadButton onClick={() => handleNumberButtonClick('0')}>0</KeypadButton>
                <KeypadButton onClick={handleDeleteButtonClick}>DEL</KeypadButton>
            </KeypadContainer>
        </KeypadWrapper>
    );
};

export default Keypad;

const KeypadWrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
  background-color: #262450;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 70px;
`;

const KeypadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const KeypadButton = styled.button`
  flex:1;
  padding: 10px 20px;
  font-size: 18px;
  background-color: #262450;
  color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
`;