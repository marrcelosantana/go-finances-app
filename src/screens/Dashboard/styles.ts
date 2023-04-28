import { RFPercentage } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

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

export const LogoutButton = styled(BorderlessButton)``;

export const Icon = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.ORANGE};
`;

export const CardsList = styled.ScrollView`
  position: absolute;
  margin-top: 150px;
`;

export const Transactions = styled.View`
  flex: 1;
  margin-top: ${RFPercentage(13)}px;
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.TITLE};
  margin-bottom: 24px;
`;

export const EmptyList = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 30%;
`;

export const EmptyText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: 16px;
`;
