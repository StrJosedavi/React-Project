import styled from 'styled-components';
import { Typography } from "@mui/material";

export const ButtonMain = styled.button`
    cursor: pointer;
    background-color: #555555;
    color: #FFF;
    border: none;
    border-radius: 4px;
    width: 150px;
    height: 40px;
    display: flex;
    align-items: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

    &:hover{
        background: #338033;
    }
    &:active{
        transform: translateY(2px);
    }
`;


export const IconButton = styled.img`
    width: 50px;
    height: 20px;
`;

export const LabelButton = styled(Typography)`
    position: relative;
    left: 10px;
`;




