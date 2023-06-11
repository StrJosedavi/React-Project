import styled from 'styled-components';
import { Typography } from "@mui/material";

export const ButtonMain = styled.button`
    cursor: pointer;
    background-color: #999999;
    color: #FFF;
    border: none;
    border-radius: 4px;
    width: 150px;
    height: 40px;
    display: flex;
    align-items: center;   
`;


export const IconButton = styled.img`
    width: 50px;
    height: 20px;
`;

export const LabelButton = styled(Typography)`
    position: relative;
    left: 10px;
    font-size: 1.2em;
`;




