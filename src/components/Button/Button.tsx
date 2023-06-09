
import { ContainerButton, IconButton, TypographyButton } from './styles';
import React from "react";


interface ButtonProps{
    text: String
    Icon: string
}

export const Button: React.FC<ButtonProps> = ({ text, Icon }) => {

    return (
       <ContainerButton>
            
                <IconButton>
                    <img src={Icon} alt="IconButton" />
                </IconButton>
            
                <TypographyButton>{text}</TypographyButton> 
           
       </ContainerButton>
    );
}

export default Button;