import styled from "styled-components/native";

interface ColorProps {
  color: string;
}

export const Container = styled.View<ColorProps>`
  width: 100%;
  padding: 13px 24px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 5px;
  border-left-width: 5px;
  border-left-color: ${({ color }) => color};
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-size: 15px;
`;

export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-size: 15px;
`;
