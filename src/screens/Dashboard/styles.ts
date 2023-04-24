import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(32.5)}px;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  padding: 78px 24px 0 24px;
  justify-content: space-between;
  flex-direction: row;
`;
