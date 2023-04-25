import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  padding: 18px;
  border-radius: 5px;
  margin-bottom: 140px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 16px;
`;
