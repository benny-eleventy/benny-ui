import React from "react";
import styled from "styled-components";
import { constants } from "./constants";
import { CenterAlignedColumnContainer } from "./styles";

export interface ButtonProps {
	label: string;
	//make onclick required
	onClick: () => void;
}

const ButtonContainer = styled(CenterAlignedColumnContainer)`
	background-color: ${({ theme }) => theme.colors.primary};
`;

export const Button = (props: ButtonProps) => {
	return (
		<ButtonContainer padding={constants.spaces.small} onClick={props.onClick}>
			{props.label}
		</ButtonContainer>
	);
};
