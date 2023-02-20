import React from "react";
import { primaryFont, fs_regular } from "../../../constants";
import { Span } from "../../../styles/span";

interface HighlightTextProps {
	text: string;
	highlight: string;
	highlightColor?: string;
	highlightedTextColor?: string;
	fontFamily?: string;
	fontWeight?: number | string;
	color?: string;
}

const HighlightText: React.FC<HighlightTextProps> = ({
	text,
	highlight,
	highlightColor = "lightpink",
	fontFamily,
	fontWeight,
	color,
	highlightedTextColor,
}) => {
	const parts = text.split(new RegExp(`(${highlight})`, "gi"));
	return (
		<Span style={{ fontFamily, fontWeight, color }}>
			{parts.map((part, i) =>
				part.toLowerCase() === highlight.toLowerCase() ? (
					<Span
						key={i}
						fontFamily={primaryFont}
						fontSize={fs_regular}
						backgroundColor={highlightColor}
						color={highlightedTextColor || "black"}
						padding="0.2rem"
					>
						{part}
					</Span>
				) : (
					<Span
						fontFamily={primaryFont}
						fontSize={fs_regular}
						backgroundColor={"transparent"}
						color="white"
						padding="0.2rem"
						key={i}
					>
						{part}
					</Span>
				)
			)}
		</Span>
	);
};

export default HighlightText;
