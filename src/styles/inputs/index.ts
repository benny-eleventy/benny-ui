import styled from "styled-components";
import { fs_regular, primaryFont } from "../../constants";
import { ContainerProps } from "../container/container.types";

export const InputText = styled.input<
	ContainerProps & {
		placeholderColor?: string;
	}
>`
	width: ${(props) => (props.width ? props.width : "auto")};
	height: ${(props) => (props.height ? props.height : "auto")};
	border: ${(props) => (props.border ? props.border : "none")};
	border-radius: ${(props) =>
		props.borderRadius ? props.borderRadius : "br_regular"};

	padding: ${(props) => (props.padding ? props.padding : "0")};
	font-size: ${(props) => (props.fontSize ? props.fontSize : fs_regular)};
	font-family: ${primaryFont || "inherit"};
	font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
	letter-spacing: ${(props) =>
		props.letterSpacing ? props.letterSpacing : "1"};
	background-color: ${(props) =>
		props.backgroundColor ? props.backgroundColor : "none"};
	background: ${(props) => (props.background ? props.background : "none")};
	color: ${(props) => (props.color ? props.color : "black")};
	box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : "none")};
	outline: none;
	cursor: ${(props) => (props.cursor ? props.cursor : "text")};
	outline: 0px;
	text-indent: ${(props) => (props.textIndent ? props.textIndent : "0")};
	&::-webkit-input-placeholder {
		/* Webkit-based browsers (e.g., Chrome, Safari) */
		color: ${(props) => props.placeholderColor || "white"};
	}

	&::-moz-placeholder {
		/* Firefox 19+ */
		color: ${(props) => props.placeholderColor || "white"};
	}

	&:-ms-input-placeholder {
		/* IE 10+ */
		color: ${(props) => props.placeholderColor || "white"};
	}

	&::placeholder {
		/* Standard */
		color: ${(props) => props.placeholderColor || "white"};
	}
`;

export const StyledTextArea = styled.textarea<
	ContainerProps & {
		height?: number | string;
		borderWidth?: string;
		borderColor?: string;
		borderHoverColor?: string;
		activeBorderColor?: string;
		errorBorderColor?: string;
		placeholderColor?: string;
	}
>`
	width: ${(props) => props.width || "100%"};
	border: none;
	background: ${(props) => props.background || "none"};
	color: ${(props) => props.color || "white"};
	padding-inline: ${(props) => props.paddingInline};
	padding-block: ${(props) => props.paddingBlock};
	font-size: ${(props) => props.fontSize || fs_regular};
	font-family: ${(props) => props.fontFamily || primaryFont};
	box-sizing: border-box;
	resize: none;
	overflow: auto;

	&:focus {
		outline: none;
	}

	//hide the scrollbar
	&::-webkit-scrollbar {
		display: none;
	}
	//hide on mozilla firefox
	-ms-overflow-style: none;

	&::-webkit-input-placeholder {
		/* Webkit-based browsers (e.g., Chrome, Safari) */
		color: ${(props) => props.placeholderColor || "white"};
	}

	&::-moz-placeholder {
		/* Firefox 19+ */
		color: ${(props) => props.placeholderColor || "white"};
	}

	&:-ms-input-placeholder {
		/* IE 10+ */
		color: ${(props) => props.placeholderColor || "white"};
	}

	&::placeholder {
		/* Standard */
		color: ${(props) => props.placeholderColor || "white"};
	}
`;
