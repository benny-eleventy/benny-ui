import styled from "styled-components";
import { motion } from "framer-motion";
import { ContainerProps } from "../../container/container.types";
import { br_small, s_small } from "../../../constants";

export const AnimatedContainer = styled(motion.div)<ContainerProps>`
	width: ${(props) => props.width};
	height: ${(props) => props.height};

	position: ${(props) => props.position};
	top: ${(props) => props.top};
	right: ${(props) => props.right};
	bottom: ${(props) => props.bottom};
	left: ${(props) => props.left};
	z-index: ${(props) => props.zIndex};

	margin: ${(props) => props.margin};
	margin-top: ${(props) => props.marginTop};
	margin-right: ${(props) => props.marginRight};
	margin-bottom: ${(props) => props.marginBottom};
	margin-left: ${(props) => props.marginLeft};
	margin-inline: ${(props) => props.marginInline};
	margin-block: ${(props) => props.marginBlock};

	padding: ${(props) => props.padding};
	padding-top: ${(props) => props.paddingTop};
	padding-right: ${(props) => props.paddingRight};
	padding-bottom: ${(props) => props.paddingBottom};
	padding-left: ${(props) => props.paddingLeft};
	padding-inline: ${(props) => props.paddingInline};
	padding-block: ${(props) => props.paddingBlock};

	display: ${(props) => props.display};
	flex-direction: ${(props) => props.flexDirection};
	align-items: ${(props) => props.alignItems};
	justify-content: ${(props) => props.justifyContent};
	flex-wrap: ${(props) => props.flexWrap};
	flex: ${(props) => props.flex};
	flex-grow: ${(props) => props.flexGrow};
	flex-shrink: ${(props) => props.flexShrink};
	flex-basis: ${(props) => props.flexBasis};
	justify-self: ${(props) => props.justifySelf};
	align-self: ${(props) => props.alignSelf};
	order: ${(props) => props.order};
	gap: ${(props) => props.gap || `${s_small}`}
	overflow: ${(props) => props.overflow};
	overflow-x: ${(props) => props.overflowX};
	overflow-y: ${(props) => props.overflowY};



	background: ${(props) => props.background};
	background-color: ${(props) => props.backgroundColor};
	background-image: ${(props) => props.backgroundImage};
	background-size: ${(props) => props.backgroundSize};
	background-position: ${(props) => props.backgroundPosition};
	background-repeat: ${(props) => props.backgroundRepeat};

	border: ${(props) => props.border};
	border-radius: ${(props) => props.borderRadius || `${br_small}`};
	border-image: ${(props) => props.borderImage};
	border-image-source: ${(props) => props.borderImageSource};
	border-image-slice: ${(props) => props.borderImageSlice};
	border-image-width: ${(props) => props.borderImageWidth};
	border-image-outset: ${(props) => props.borderImageOutset};
	border-image-repeat: ${(props) => props.borderImageRepeat};
	border-top: ${(props) => props.borderTop};
	border-right: ${(props) => props.borderRight};
	border-bottom: ${(props) => props.borderBottom};
	border-left: ${(props) => props.borderLeft};
	border-top-color: ${(props) => props.borderTopColor};
	border-right-color: ${(props) => props.borderRightColor};
	border-bottom-color: ${(props) => props.borderBottomColor};
	border-left-color: ${(props) => props.borderLeftColor};

	box-shadow: ${(props) => props.boxShadow};
	drop-shadow: ${(props) => props.dropShadow};
	text-shadow: ${(props) => props.textShadow};

	color: ${(props) => props.color};
	font: ${(props) => props.font};
	font-family: ${(props) => props.fontFamily};
	font-size: ${(props) => props.fontSize};
	font-style: ${(props) => props.fontStyle};
	font-variant: ${(props) => props.fontVariant};
	font-weight: ${(props) => props.fontWeight};
	font-stretch: ${(props) => props.fontStretch};
	line-height: ${(props) => props.lineHeight};
	letter-spacing: ${(props) => props.letterSpacing};
	text-align: ${(props) => props.textAlign};
	text-decoration: ${(props) => props.textDecoration};
	text-transform: ${(props) => props.textTransform};
	text-indent: ${(props) => props.textIndent};
	text-shadow: ${(props) => props.textShadow};
	word-spacing: ${(props) => props.wordSpacing};
	writing-mode: ${(props) => props.writingMode};
	vertical-align: ${(props) => props.verticalAlign};

	cursor: ${(props) => props.cursor};
	opacity: ${(props) => props.opacity};
	aspect-ratio: ${(props) => props.aspectRatio};
	white-space: ${(props) => props.whiteSpace};
	word-break: ${(props) => props.wordBreak};

	transition: ${(props) => props.cssTransition};
	animation: ${(props) => props.cssAnimation};
	animation-name: ${(props) => props.cssAnimationName};
	animation-duration: ${(props) => props.cssAnimationDuration};
	animation-timing-function: ${(props) => props.cssAnimationTimingFunction};
	animation-delay: ${(props) => props.cssAnimationDelay};
	animation-iteration-count: ${(props) => props.cssAnimationIterationCount};
	animation-direction: ${(props) => props.cssAnimationDirection};
	animation-fill-mode: ${(props) => props.cssAnimationFillMode};

	filter: ${(props) => props.filter};
	backdrop-filter: ${(props) => props.backdropFilter};
	clip-path: ${(props) => props.clipPath};
	mask: ${(props) => props.mask};

	scroll-snap-type: ${(props) => props.scrollSnapType};
	scroll-snap-align: ${(props) => props.scrollSnapAlign};
	scroll-snap-stop: ${(props) => props.scrollSnapStop};
	scroll-behavior: ${(props) => props.scrollBehavior};

	scrollbar-width: ${(props) => props.scrollBarWidth};
	scrollbar-color: ${(props) => props.scrollBarColor};
	scrollbar-track-color: ${(props) => props.scrollBarTrackColor};
	scrollbar-thumb-color: ${(props) => props.scrollBarThumbColor};
`;

export const AnimatedFlexContainer = styled(AnimatedContainer)<ContainerProps>`
	display: flex;
`;

export const AnimatedColumnContainer = styled(
	AnimatedFlexContainer
)<ContainerProps>`
	flex-direction: column;
`;

export const AnimatedRowContainer = styled(
	AnimatedFlexContainer
)<ContainerProps>`
	flex-direction: row;
`;

export const AnimatedGridContainer = styled(AnimatedContainer)<ContainerProps>`
	display: grid;
	grid-template-columns: ${(props) => props.gridTemplateColumns};
	grid-template-rows: ${(props) => props.gridTemplateRows};
	grid-template-areas: ${(props) => props.gridTemplateAreas};
	grid-auto-columns: ${(props) => props.gridAutoColumns};
	grid-auto-rows: ${(props) => props.gridAutoRows};
	grid-auto-flow: ${(props) => props.gridAutoFlow};
	grid: ${(props) => props.grid};
	grid-row: ${(props) => props.gridRow};
	grid-column: ${(props) => props.gridColumn};
	grid-area: ${(props) => props.gridArea};
	grid-row-start: ${(props) => props.gridRowStart};
	grid-row-end: ${(props) => props.gridRowEnd};
	grid-column-start: ${(props) => props.gridColumnStart};
	grid-column-end: ${(props) => props.gridColumnEnd};
	grid-row-gap: ${(props) => props.gridRowGap};
	grid-column-gap: ${(props) => props.gridColumnGap};
	grid-gap: ${(props) => props.gridGap || "0px 0px"};
	gap: ${(props) => props.gap || "0px"};
`;

export const AnimatedCenterAlignedColumnContainer = styled(
	AnimatedColumnContainer
)<ContainerProps>`
	align-items: center;
	justify-content: center;
`;

export const AnimatedFlexStartCenterAlignedColumnContainer = styled(
	AnimatedColumnContainer
)<ContainerProps>`
	align-items: center;
	justify-content: flex-start;
`;

export const AnimatedFlexStartColumnContainer = styled(
	AnimatedColumnContainer
)<ContainerProps>`
	justify-content: flex-start;
	align-items: flex-start;
`;

export const AnimatedOverflowFlexStartCenterAlignedColumnContainer = styled(
	AnimatedFlexStartCenterAlignedColumnContainer
)<ContainerProps>`
	overflow: scroll;
`;

export const AnimatedCenterAlignedRowContainer = styled(
	AnimatedRowContainer
)<ContainerProps>`
	align-items: center;
	justify-content: center;
`;

export const AnimatedFlexStartCenterAlignedRowContainer = styled(
	AnimatedRowContainer
)<ContainerProps>`
	align-items: center;
	justify-content: flex-start;
`;

export const AnimatedFlexEndCenterAlignedRowContainer = styled(
	AnimatedRowContainer
)<ContainerProps>`
	align-items: center;
	justify-content: flex-end;
`;

export const AnimatedWrappedFlexStartCenterAlignedColumnContainer = styled(
	AnimatedRowContainer
)<ContainerProps>`
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;
`;

export const AnimatedOverflowFlexStartCenterAlignedRowContainer = styled(
	AnimatedRowContainer
)<ContainerProps>`
	align-items: center;
	justify-content: flex-start;
	overflow: scroll;
`;

export const AnimatedSpaceBetweenRowContainer = styled(
	AnimatedRowContainer
)<ContainerProps>`
	align-items: center;
	justify-content: space-between;
`;
