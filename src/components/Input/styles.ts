import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 18px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.TITLE};
  border-radius: 5px;
  margin-bottom: 8px;
`;
