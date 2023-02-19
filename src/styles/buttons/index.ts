import { motion } from "framer-motion";
import styled from "styled-components";
import { s_xxsmall, br_small, fs_regular, primaryFont } from "../../constants";
import { ContainerProps } from "../container/container.types";

export const StyledButton = styled(motion.button)<ContainerProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${(props) => (props.width ? props.width : "fit-content")};
	height: ${(props) => (props.height ? props.height : "auto")};
	padding-inline: ${(props) =>
		props.paddingInline ? props.paddingInline : s_xxsmall};
	padding-block: ${(props) =>
		props.paddingBlock ? props.paddingBlock : s_xxsmall};
	gap: ${(props) => (props.gap ? props.gap : "0.5rem")};
	cursor: pointer;
	-webkit-appearance: none;
	-moz-appearance: none;
	outline: none;
	border-radius: ${(props) =>
		props.borderRadius ? props.borderRadius : br_small};
	color: ${(props) => (props.color ? props.color : "white")};
	background-color: ${(props) =>
		props.backgroundColor ? props.backgroundColor : "black"};
	background: ${(props) => (props.background ? props.background : "none")};
	font-size: ${(props) => (props.fontSize ? props.fontSize : fs_regular)};
	font-family: ${primaryFont || "inherit"};
	font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
	letter-spacing: ${(props) =>
		props.letterSpacing ? props.letterSpacing : "1"};
	box-shadow: ${(props) =>
		props.boxShadow ? props.boxShadow : "0 0 0.5rem rgba(0, 0, 0, 0.5)"};
	border-bottom: ${(props) =>
		props.borderBottom ? props.borderBottom : "none"};
	border: ${(props) => (props.border ? props.border : "none")};
`;
