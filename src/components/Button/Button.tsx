import {ButtonMain, IconButton, LabelButton } from './Button.styles';
import React, { CSSProperties } from 'react';

interface ButtonProps{

    //Icone que sera mostrado ao lado do Label
    icon?: string;

    //Texto que seja escrito dentro do componente.
    label?: string;

    //Fornecer permite que seja possível controlar a ação do botão.
    onClick?: () => void;

    //Indica uma estilização personalizada para o botão. 
    /*
    Exemplo de valor:

    const customStyle: React.CSSProperties = {
        background: 'blue',
        color: 'white'
    };
    */
    style?: CSSProperties;

    //Indica uma estilização personalizada para o label do botão. 
    styleLabel?: CSSProperties;

    //Indica uma estilização personalizada para o icone do botão.
    styleIcon?: CSSProperties; 
}

export const Button: React.FC<ButtonProps> = ({ label, icon, onClick, style, styleLabel, styleIcon }) => {

    return (
        <ButtonMain onClick={onClick} style={style}>
            <IconButton src={icon} alt="IconButton" style={styleIcon}/>
            <LabelButton variant='button' sx={styleLabel}>{label}</LabelButton>
        </ButtonMain>
    );
}

