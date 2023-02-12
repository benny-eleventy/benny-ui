import {
	fs_regular,
	fw_regular,
	lh_regular,
	primaryFont,
} from "./../../constants/typography";
import styled from "styled-components";
import { TextProps } from "./text.types";

export const Text = styled.h1<TextProps>`
	color: ${(props) => props.color};
	font-size: ${(props) => props.fontSize || fs_regular};
	font-weight: ${(props) => props.fontWeight || fw_regular};
	font-family: ${(props) => props.fontFamily || primaryFont};
	font-style: ${(props) => props.fontStyle || "normal"};

	line-height: ${(props) => props.lineHeight || lh_regular};
	letter-spacing: ${(props) => props.letterSpacing || "normal"};

	text-align: ${(props) => props.textAlign || "left"};
	text-decoration: ${(props) => props.textDecoration || "none"};
	text-transform: ${(props) => props.textTransform || "none"};
	text-indent: ${(props) => props.textIndent};
	word-spacing: ${(props) => props.wordSpacing || "normal"};
	vertical-align: ${(props) => props.verticalAlign || "middle"};
	white-space: ${(props) => props.whiteSpace || "normal"};
	word-break: ${(props) => props.wordBreak || "normal"};

	writing-mode: ${(props) => props.writingMode};
	opacity: ${(props) => props.opacity};
	aspect-ratio: ${(props) => props.aspectRatio};

	webkit-line-clamp: ${(props) => props.webkitLineClamp || "2"};
	webkit-box-orient: ${(props) => props.webkitBoxOrient || "vertical"};
	webkit-box-direction: ${(props) => props.webkitBoxDirection || "normal"};

	margin: ${(props) => props.margin || "0"};
	margin-top: ${(props) => props.marginTop};
	margin-right: ${(props) => props.marginRight};
	margin-bottom: ${(props) => props.marginBottom};
	margin-left: ${(props) => props.marginLeft};
	margin-inline: ${(props) => props.marginInline};
	margin-inline-start: ${(props) => props.marginInlineStart};

	padding: ${(props) => props.padding || "0"};
	padding-top: ${(props) => props.paddingTop};
	padding-right: ${(props) => props.paddingRight};
	padding-bottom: ${(props) => props.paddingBottom};
	padding-left: ${(props) => props.paddingLeft};
	padding-inline: ${(props) => props.paddingInline};
	padding-inline-start: ${(props) => props.paddingInlineStart};

	align-self: ${(props) => props.alignSelf};
	justify-self: ${(props) => props.justifySelf};
`;
