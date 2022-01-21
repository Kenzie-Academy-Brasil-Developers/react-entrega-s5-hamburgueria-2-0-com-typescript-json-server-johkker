import styled from "styled-components";
import { Box, Button, Card, CardMedia, Grid } from "@mui/material";

export const PageContainer = styled(Box)`
  display: flex;
  width: 95vw;
  height: 95vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2vh;
  min-width: 275px;
  overflow: hidden;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    gap: 4vw;
    justify-content: center;
  }
`;

export const LogoContainer = styled(Box)`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 3vh;
  padding-top: 3vh;
  border-radius: 3px;

  @media screen and (min-width: 600px) {
    width: 48%;
  }
`;

export const LogoInfoContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  padding: 2%;
  font-size: 14px;
  align-items: center;
  gap: 2vh;
  color: #828282;
  text-align: center;
  p {
    width: 70%;
    color: #828282;
    text-align: left;
  }
`;

export const FormContainer = styled(Grid)`
  width: 100%;
  max-width: 400px;
  padding: 3vh;
  transition: 1s;

  @media screen and (min-width: 600px) {
    width: 48%;
  }
`;

export const IconContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: darkgreen;
  background-color: hsla(145, 63%, 42%, 0.1);
  width: 7vh;
  height: 7vh;
  border-radius: 3px;
`;

export const LoginLinkContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  a {
    font-size: 0.7em;
    color: gray;
  }
`;

export const ShoppingContainer = styled(Box)`
  width: 95vw;
  height: auto;
  overflow: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 3vh;
  @media screen and (min-width: 780px) {
    padding-left: 115px;
  }
`;

export const ItemsList = styled(Box)`
  width: 90vw;
  padding-top: 10vh;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  gap: 3vh;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 780px) {
    flex-wrap: wrap;
  }
`;

export const CardContainer = styled(Card)`
  border: 2px solid #e0e0e0;
  border-radius: 5px;

  :active & :focus {
    border: 2px solid #27ae60;
  }
`;

export const CardButton = styled(Button)``;
