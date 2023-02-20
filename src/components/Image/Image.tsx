import React from "react";
import StyledImage from "../../styles/image";

type ImageProps = {
	id?: string;
	src: string;
	srcSet?: string;
	alt?: string;
	placeHolderImage: string;
	width?: string;
	height?: string;
	aspectRatio?: string;
	objectFit?: React.CSSProperties["objectFit"];
	borderRadius?: string;
};

const Image = (props: ImageProps) => {
	const { src, placeHolderImage, srcSet, alt, id = "image" } = props;
	const [isError, setIsError] = React.useState(false);
	const handleImageError = () => {
		setIsError(true);
	};

	return (
		<StyledImage
			{...props}
			id={id}
			src={isError ? placeHolderImage : src}
			srcSet={isError ? placeHolderImage : srcSet}
			onError={handleImageError}
			maxWidth="100%"
			objectPosition="center"
			alt={alt}
		/>
	);
};

export default Image;
