import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Button = styled(RectButton)`
  width: 100%;
  height: ${RFValue(56)}px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  margin-bottom: 24px;
  border-radius: 5px;
`;

export const ImageContainer = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(16)}px;
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-size: ${RFValue(14)}px;
`;
