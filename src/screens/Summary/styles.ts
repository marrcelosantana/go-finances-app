import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { BorderlessButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  align-items: center;
  justify-content: center;
  padding-top: 48px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
  flex: 1;
  padding: 42px 24px 0 24px;
`;

export const MonthContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const ArrowButton = styled(BorderlessButton)``;

export const Icon = styled(Feather)`
  font-size: 24px;
`;

export const Month = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const ChartContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const EmptyContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 40%;
`;

export const EmptyText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: 18px;
`;
