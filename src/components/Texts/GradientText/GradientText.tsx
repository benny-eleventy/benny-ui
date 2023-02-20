import { Text } from "../../../styles/text";
import React from "react";
import styled from "styled-components";
import { TextProps } from "../../../styles/text/text.types";

interface GradientTextProps extends TextProps {
	text: string;
	gradient: string;
}

const GradientText = (props: GradientTextProps) => {
	return <GText {...props}>{props.text}</GText>;
};

export default GradientText;

const GText = styled(Text)<GradientTextProps>`
	background: ${(props) => props.gradient};
	color: transparent;
	-webkit-text-fill-color: transparent;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	mask-image: linear-gradient(to right, #000, #000);
`;
