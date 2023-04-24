import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View`
  height: ${RFPercentage(32.5)}px;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  padding: 78px 24px 0 24px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardsList = styled.ScrollView`
  position: absolute;
  margin-top: ${RFPercentage(18)}px;
`;
