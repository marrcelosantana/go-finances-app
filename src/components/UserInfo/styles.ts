import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  width: 50%;
`;

export const Avatar = styled.Image`
  width: 48px;
  height: 48px;
  margin-right: 15px;
  border-radius: 8px;
`;

export const Info = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;

export const Username = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;
