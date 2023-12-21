import styled, { css } from "styled-components";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`
    flex: 1;

    min-height: 56px;
    max-height: 56px;

    ${({ theme }: any) => css`
        background-color: ${theme.COLORS.GRAY_700};

        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};

        color: ${theme.COLORS.WHITE};
    `};

    border-radius: 6px;
    padding: 16px;
`;