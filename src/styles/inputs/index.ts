import styled from "styled-components";
import { fs_regular, primaryFont } from "../../constants";
import { ContainerProps } from "../container/container.types";

export const InputText = styled.input<ContainerProps>`
	width: ${(props) => (props.width ? props.width : "auto")};
	height: ${(props) => (props.height ? props.height : "auto")};
	border: ${(props) => (props.border ? props.border : "none")};
	border-radius: ${(props) =>
		props.borderRadius ? props.borderRadius : "br_regular"};

	padding: ${(props) => (props.padding ? props.padding : "0.5rem")};
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
	input::placeholder {
		color: ${(props) => (props.color ? props.color : "black")};
	}
`;
