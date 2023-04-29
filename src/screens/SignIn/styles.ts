import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const TitleContainer = styled.View`
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  padding: 0 32px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
  margin-top: ${RFValue(32)}px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 16px;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 67px;
`;

export const Footer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  padding: 0 32px;
`;

export const Social = styled.View`
  margin-top: ${RFPercentage(-4)}px;
`;
