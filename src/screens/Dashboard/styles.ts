import styled from "styled-components/native";
import { FlatList } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

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

export const TransactionsList = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 24,
  },
})``;
