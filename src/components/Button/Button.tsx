import { Variant, MotionProps, Variants } from "framer-motion";
import React, { useCallback, useEffect } from "react";
import { br_circle } from "../../constants";
import {
	A,
	CenterAlignedColumnContainer,
	CenterAlignedRowContainer,
} from "../../styles";
import { StyledButton } from "../../styles/buttons";
import { ContainerProps } from "../../styles/container/container.types";
import { ToolTip } from "../Tooltip";

interface AcustomInterface {
	animationType?: "opacity" | "scale" | "rotate" | "x" | "y";
	animationDuration?: number[] | string[];
	animationConfig?: number[];
	animationEasing?: "easeIn" | "easeOut" | "easeInOut" | "linear";
	hoverAnimation?: Variant;
	clickAnimation?: Variant;
	animationDelay?: number;
}

interface ButtonProps extends ContainerProps, AcustomInterface, MotionProps {
	label?: string;
	onClick: () => void;
	rightIcon?: React.ReactNode;
	leftIcon?: React.ReactNode;
	tooltipText?: string;
	tooltipPosition?: string[];
	isLoading?: boolean;
}

interface GcustomInterface {
	animationType: "opacity" | "scale" | "rotate" | "x" | "y" | "none";
	animationDuration: number[] | string[];
	animationConfig: number[];
	animationEasing: "easeIn" | "easeOut" | "easeInOut" | "linear";
	hoverAnimation: Variant;
	clickAnimation: Variant;
	animationDelay: number;
}

const generateAnimationTypeVariants = ({
	animationType,
	animationDuration,
	animationConfig,
	animationEasing,
	hoverAnimation,
	clickAnimation,
	animationDelay,
}: GcustomInterface): Variants => {
	const initialvalue = animationConfig[0];
	const animatevalue = animationConfig[1];
	const exitvalue = animationConfig[2];
	return {
		initial: {
			[animationType]: initialvalue,
		},
		animate: {
			[animationType]: animatevalue,
			transition: {
				duration: animationDuration[0],
				ease: animationEasing,
				delay: animationDelay,
			},
		},
		exit: {
			[animationType]: exitvalue,
			transition: {
				duration: animationDuration[1],
			},
		},
		hover: hoverAnimation,
		clicked: { ...clickAnimation },
	};
};

const ButtonComponent = React.memo((props: ButtonProps) => {
	console.log("rendering button");
	const getAnimationVariants = () => {
		if (props.animationType || props.clickAnimation || props.hoverAnimation) {
			return generateAnimationTypeVariants({
				animationType: props.animationType ? props.animationType : "none",
				animationDuration: props.animationDuration
					? props.animationDuration
					: [0.5, 0.5],
				animationConfig: props.animationConfig
					? props.animationConfig
					: [1, 1, 1],
				animationEasing: props.animationEasing
					? props.animationEasing
					: "easeInOut",
				hoverAnimation: props.hoverAnimation
					? props.hoverAnimation
					: { scale: 1 },
				clickAnimation: props.clickAnimation
					? props.clickAnimation
					: { scale: 1 },
				animationDelay: props.animationDelay ? props.animationDelay : 0,
			});
		} else {
			return props.variants;
		}
	};

	const [isHovered, setIsHovered] = React.useState(false);

	const handleMouseEnter = useCallback(() => {
		setIsHovered(true);
	}, []);

	const handleMouseLeave = useCallback(() => {
		setIsHovered(false);
	}, []);

	const handleClick = useCallback(() => {
		props.onClick();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.onClick]);

	useEffect(() => {
		const handleMouseDown = () => {
			setIsHovered(false);
		};

		window.addEventListener("mousedown", handleMouseDown);

		return () => {
			window.removeEventListener("mousedown", handleMouseDown);
		};
	}, []);

	return (
		<CenterAlignedColumnContainer
			width="auto"
			height="auto"
			position="relative"
		>
			<StyledButton
				{...props}
				initial="initial"
				animate="animate"
				exit="exit"
				whileHover="hover"
				whileTap="clicked"
				onHoverStart={handleMouseEnter}
				onHoverEnd={handleMouseLeave}
				variants={getAnimationVariants()}
				textTransform="uppercase"
				onClick={handleClick}
			>
				{props.leftIcon && props.leftIcon}
				{props.label}
				{props.rightIcon && props.rightIcon}
			</StyledButton>
			{props.isLoading && (
				<CenterAlignedRowContainer
					width="100%"
					height="100%"
					position="absolute"
					background="rgba(0,0,0,0.6)"
				>
					<A.CenterAlignedColumnContainer
						width="1rem"
						aspectRatio="1"
						background="white"
						borderRadius={br_circle}
						animationType="opacity"
						animationDuration={[0.5, 0.5]}
						animationConfig={[0, 1, 0]}
						animationEasing="easeInOut"
						animationDelay={0}
						animationRepeat={Infinity}
						animationRepeatType="mirror"
					/>
					<A.CenterAlignedColumnContainer
						width="1rem"
						aspectRatio="1"
						background="white"
						borderRadius={br_circle}
						animationType="scale"
						animationDuration={[0.4, 0.5]}
						animationConfig={[0, 1, 0]}
						animationEasing="easeInOut"
						animationDelay={0.2}
						animationRepeat={Infinity}
						animationRepeatType="mirror"
					/>
					<A.CenterAlignedColumnContainer
						width="1rem"
						aspectRatio="1"
						background="white"
						borderRadius={br_circle}
						animationType="opacity"
						animationDuration={[0.5, 0.5]}
						animationConfig={[0, 1, 0]}
						animationEasing="easeInOut"
						animationDelay={0.3}
						animationRepeat={Infinity}
						animationRepeatType="mirror"
					/>
				</CenterAlignedRowContainer>
			)}
			{/* {props.isLoading && <LoadingAnimation />} */}
			<>
				{props.tooltipText && (
					<ToolTip
						displayTooltip={isHovered}
						tooltipText={props.tooltipText}
						position={
							props.tooltipPosition
								? props.tooltipPosition
								: ["bottom", "0.5rem"]
						}
					/>
				)}
			</>
		</CenterAlignedColumnContainer>
	);
});

export default ButtonComponent;
