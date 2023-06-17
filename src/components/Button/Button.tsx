import {Container, Icon, Label } from './Button.styles';
import React, { CSSProperties } from 'react';

interface ButtonProps{

    //Icone que sera mostrado ao lado do Label
    icon?: string;

    //Texto que seja escrito dentro do componente.
    label: string;

    //Fornecer permite que seja possível controlar a ação do botão.
    onClick?: () => void;

    //Indica uma estilização personalizada para o botão. 
    style?: CSSProperties;

    //Indica uma estilização personalizada para o label do botão. 
    labelStyle?: CSSProperties;

    //Indica uma estilização personalizada para o icone do botão.
    iconStyle?: CSSProperties; 
}

export const Button: React.FC<ButtonProps> = ({ label, icon, onClick, style, labelStyle, iconStyle }) => {
 
    const additionalStyle: React.CSSProperties = {
        alignItems: icon ? 'center' : 'center',
        justifyContent: icon ? 'flex-start' : 'center',
        ...style
      };

    return (
        <Container onClick={onClick} style={additionalStyle} data-test-id='ButtonMainId'>
            {icon && <Icon data-test-id='IconId' src={icon} alt="IconButton" style={iconStyle}/>}          
            <Label data-test-id='LabelId' variant='button' sx={labelStyle}>{label}</Label> 
        </Container>
    );
}

