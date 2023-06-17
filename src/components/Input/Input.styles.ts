import styled from 'styled-components';
import { Typography } from "@mui/material";

export const InputMain = styled.input`
    background-color: #555555;
    color: #FFF;
    border: none;
    border-radius: 4px;
    width: 250px;
    height: 40px;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);

    ::placeholder {
        color: red;
        font-style: italic;
    }
`;

export const LabelInput = styled(Typography)`
    position: relative;
    left: 10px;
`;




