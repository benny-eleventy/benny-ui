import styled from "styled-components";
import type { CSSProperties } from "react";

interface ImageProps extends React.CSSProperties {
	width?: string;
	height?: string;
	alt?: string;
	src?: string;
	borderRadius?: string;
	objectFit?: CSSProperties["objectFit"];
	objectPosition?: string;
}

const StyledImage = styled.img<ImageProps>`
	width: ${(props) => (props.width ? props.width : "100%")};
	height: ${(props) => (props.height ? props.height : "auto")};
	border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "0")};
`;

export default StyledImage;
