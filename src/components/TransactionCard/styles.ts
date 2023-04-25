import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface TypeProps {
  type: "income" | "outcome";
}

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(102)}px;
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  margin-bottom: 16px;
  justify-content: space-between;
`;

export const Header = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const Amount = styled.Text<TypeProps>`
  margin-top: 4px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme, type }) =>
    type === "income" ? theme.COLORS.GREEN : theme.COLORS.RED};
  font-size: 20px;
`;

export const Footer = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Feather)`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-right: 8px;
`;

export const Info = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
