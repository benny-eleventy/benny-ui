import styled from "styled-components";
import { primaryFont, fs_regular } from "../../constants";

interface SpanProps extends React.CSSProperties {}

export const Span = styled.span<SpanProps>`
	font-family: ${(props) => props.fontFamily || primaryFont};
	font-size: ${(props) => (props.fontSize ? props.fontSize : fs_regular)};
	font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
	background-color: ${(props) =>
		props.backgroundColor ? props.backgroundColor : "transparent"};
	color: ${(props) => (props.color ? props.color : "inherit")};
	padding: ${(props) => (props.padding ? props.padding : "0")};
`;
