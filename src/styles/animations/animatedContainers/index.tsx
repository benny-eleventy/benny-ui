// export * from "./animatedContainers";

import {
	CenterAlignedRowContainer,
	CenterAlignedColumnContainer,
	OverflowFlexStartCenterAlignedColumnContainer,
	ColumnContainer,
	FlexContainer,
	FlexStartCenterAlignedColumnContainer,
	GridContainer,
	RowContainer,
	WrappedFlexStartCenterAlignedColumnContainer,
} from "../../container";
import type { ContainerProps } from "../../container/container.types";
import type {
	MotionProps,
	Variants,
	Variant,
	EasingDefinition,
} from "framer-motion";
import { motion } from "framer-motion";
import React from "react";
import type { ComponentType, ReactNode } from "react";
import { useMemo } from "react";

interface AcustomInterface {
	animationType?: "opacity" | "scale" | "rotate" | "x" | "y";
	animationDuration?: number[];
	animationConfig?: number[];
	animationEasing?: EasingDefinition;
	hoverAnimation?: Variant;
	clickAnimation?: Variant;
	animationDelay?: number;
	animationRepeat?: number;
	animationRepeatType?: "loop" | "reverse" | "none" | "mirror";
}

type unionProps = ContainerProps & MotionProps & AcustomInterface;

interface GcustomInterface {
	animationType: "opacity" | "scale" | "rotate" | "x" | "y" | "none";
	animationDuration: number[];
	animationConfig: number[];
	animationEasing: EasingDefinition;
	hoverAnimation: Variant;
	clickAnimation: Variant;
	animationRepeat: number;
	animationRepeatType: "loop" | "reverse" | "none" | "mirror";
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
	animationRepeat,
	animationRepeatType,
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
				//@ts-ignore
				duration: animationDuration[0],
				//@ts-ignore
				ease: animationEasing,
				delay: animationDelay,
				repeat: animationRepeat,
				//@ts-ignore
				repeatType: animationRepeatType,
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

export const A = ({ children }: unionProps) => {
	return <>{children}</>;
};

function createAnimatedComponent(componentName: string) {
	return function AnimatedComponent({ children, ...rest }: unionProps) {
		const StyledComponent = (
			Component: string | ComponentType<{ children?: ReactNode }>
		) => {
			return motion(Component);
		};

		const Component = useMemo(() => StyledComponent(componentName), []);

		const memoziedGenerateAnimationTypeVariants = useMemo(
			() =>
				generateAnimationTypeVariants({
					animationType: rest.animationType ? rest.animationType : "none",
					animationDuration: rest.animationDuration
						? rest.animationDuration
						: [0.5, 0.5],
					animationConfig: rest.animationConfig
						? rest.animationConfig
						: [1, 1, 1],
					animationEasing: rest.animationEasing
						? rest.animationEasing
						: "easeInOut",
					hoverAnimation: rest.hoverAnimation
						? rest.hoverAnimation
						: { scale: 1 },
					clickAnimation: rest.clickAnimation
						? rest.clickAnimation
						: { scale: 1 },
					animationDelay: rest.animationDelay ? rest.animationDelay : 0,
					animationRepeat: rest.animationRepeat ? rest.animationRepeat : 0,
					animationRepeatType: rest.animationRepeatType
						? rest.animationRepeatType
						: "none",
				}),
			// eslint-disable-next-line react-hooks/exhaustive-deps
			[
				rest.animationConfig,
				rest.animationDelay,
				rest.animationDuration,
				rest.animationEasing,
				rest.animationRepeat,
				rest.animationRepeatType,
				rest.animationType,
				rest.clickAnimation,
				rest.hoverAnimation,
			]
		);

		const getAnimationVariants = () => {
			if (rest.animationType || rest.clickAnimation || rest.hoverAnimation) {
				return memoziedGenerateAnimationTypeVariants;
			} else {
				return rest.variants;
			}
		};

		//memoize the getAnimationVariants function

		const memoizedGetAnimationVariants = useMemo(
			() => getAnimationVariants(),
			// eslint-disable-next-line react-hooks/exhaustive-deps
			[
				rest.animationConfig,
				rest.animationDelay,
				rest.animationDuration,
				rest.animationEasing,
				rest.animationRepeat,
				rest.animationRepeatType,
				rest.animationType,
				rest.clickAnimation,
				rest.hoverAnimation,
				rest.variants,
			]
		);

		return (
			<Component
				initial="initial"
				animate="animate"
				exit="exit"
				whileHover="hover"
				whileTap="clicked"
				variants={memoizedGetAnimationVariants}
				{...rest}
			>
				{children}
			</Component>
		);
	};
}

A.CenterAlignedColumnContainer = createAnimatedComponent(
	CenterAlignedColumnContainer
);

A.ColumnContainer = createAnimatedComponent(ColumnContainer);

A.RowContainer = createAnimatedComponent(RowContainer);

A.FlexContainer = createAnimatedComponent(FlexContainer);

A.GridContainer = createAnimatedComponent(GridContainer);

A.WrappedFlexStartCenterAlignedColumnContainer = createAnimatedComponent(
	WrappedFlexStartCenterAlignedColumnContainer
);

A.FlexStartCenterAlignedColumnContainer = createAnimatedComponent(
	FlexStartCenterAlignedColumnContainer
);

A.OverflowFlexStartCenterAlignedColumnContainer = createAnimatedComponent(
	OverflowFlexStartCenterAlignedColumnContainer
);
A.CenterAlignedRowContainer = createAnimatedComponent(
	CenterAlignedRowContainer
);
