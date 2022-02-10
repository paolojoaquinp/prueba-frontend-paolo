import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { SearchContainer, Input } from './styles';

const SearchInput: React.FC = () => {
  const [color, setColor] = useState('#8993A4');
  const [valueInput, setValueInput] = useState('');
  const handleInput = (e:any) => {
    setValueInput(e.target.value);
    console.log(valueInput);
  }
  const handleIcon = (e:any) => {
    setColor('white');
  }
  return (
      <SearchContainer tabIndex={1}>
          <Input
            tabIndex={1}
            type="text"
            placeholder='¿Cúal es tu parada?'
            onClick={handleIcon}
            onChange={handleInput}/>
          <IoSearchOutline
           style={{ position: 'absolute', right: 0 }}
           color={color}
           size={'20px'} />
      </SearchContainer>
  );
};

export default SearchInput;
