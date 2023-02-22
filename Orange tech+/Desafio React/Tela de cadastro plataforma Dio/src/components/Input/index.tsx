import React from 'react'
import { Controller } from "react-hook-form";

import { ErroText, IconContainer, InputContainer, InputText } from './styles';

import { IInput} from './types';

const Input = ({leftIcon, name, control, errorMessage, ...rest}: IInput) => {
    return (
        <>
        <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <Controller  
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field:  {value, onChange} }) => 
            <InputText value={value} onChange={onChange} {...rest}/>}/>
        </InputContainer>
        {errorMessage ? <ErroText>{errorMessage}</ErroText> : null}
        </>
    );
}
export { Input };