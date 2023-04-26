import { Feather } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  padding: 18px 16px;
`;

export const Icon = styled(Feather)`
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.TITLE};
`;
