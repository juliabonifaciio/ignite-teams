import styled from "styled-components";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`
    flex: 1;

    min-height: 56px;
    max-height: 56px;

    color: ${({ theme }: any) => theme.COLORS.WHITE};
    background-color: ${({ theme }: any) => theme.COLORS.GRAY_700};

    font-family: ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }: any) => theme.FONT_SIZE.MD}px;

    border-radius: 6px;
    padding: 16px;
`;