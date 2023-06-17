import styled from 'styled-components';
import { Typography } from "@mui/material";

export const Container = styled.button`
    cursor: pointer;
    background-color: #555555;
    color: #FFF;
    border: none;
    border-radius: 4px;
    width: 150px;
    height: 40px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    display: flex;

    &:hover{
        background: #338033;
    }
    &:active{
        transform: translateY(2px);
    }
`;


export const Icon = styled.img`
    width: 40px;
    height: 20px;
    margin-right: 10px;
`;

export const Label = styled(Typography)`
    display: flex;
`;




