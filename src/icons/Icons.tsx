import * as I from "./index";
import React, { MouseEventHandler } from "react";
import { AnimatedCenterAlignedColumnContainer } from "../styles/animations";

export const Icon = (props: { children: any }) => {
	return <>{props.children}</>;
};

function createIconComponent(iconName: string) {
	return function Icon(props: {
		onClick?: MouseEventHandler<HTMLDivElement> | undefined;
		isCursorPointer?: any;
		size?: string;
	}) {
		// const copyTextToClipboard = (text: string) => {
		// 	window.navigator.clipboard.writeText(text);
		// 	setDisplayTextCopied(true);
		// 	setTimeout(() => {
		// 		setDisplayTextCopied(false);
		// 	}, 800);
		// };
		// @ts-ignore
		const IconCmpnt = I[iconName];
		return (
			<AnimatedCenterAlignedColumnContainer
				width={props.size || "48px"}
				aspectRatio={"1"}
				// onClick={
				// 	iconName === "CopyIcon"
				// 		? () => copyTextToClipboard(props.textToBeCopied)
				// 		: props.onClick
				// }
				position="relative"
				cursor={props.onClick || props.isCursorPointer ? "pointer" : "default"}
				whileHover={{
					scale: 1.2,
					transition: {
						duration: 0.2,
					},
				}}
				whileTap={{
					scale: 0.9,
					transition: {
						duration: 0.2,
					},
				}}
				{...props}
			>
				<IconCmpnt />
				{/* {iconName === "CopyIcon" && displayTextCopied && (
					<MediumHueColorText
						position="absolute"
						top="-1.25rem"
						fontSize="0.8rem"
					>
						Copied!
					</MediumHueColorText>
				)}
				<ActiveIndicator isActive={props.isActive} /> */}
			</AnimatedCenterAlignedColumnContainer>
		);
	};
}

Icon.AuthorsIcon = createIconComponent("AuthorsIcon");
Icon.CancelIcon = createIconComponent("CancelIcon");
Icon.CheckboxIcon = createIconComponent("CheckboxIcon");
Icon.ChevronIcon = createIconComponent("ChevronIcon");
Icon.CloseIcon = createIconComponent("CloseIcon");
Icon.HeyIcon = createIconComponent("HeyIcon");
Icon.HomeIcon = createIconComponent("HomeIcon");
Icon.LogoIcon = createIconComponent("LogoIcon");
Icon.MenuIcon = createIconComponent("MenuIcon");
Icon.QuotesIcon = createIconComponent("QuotesIcon");
Icon.SearchIcon = createIconComponent("SearchIcon");
Icon.TagsIcon = createIconComponent("TagsIcon");
Icon.ThemeIcon = createIconComponent("ThemeIcon");
Icon.ColorSplashIcon = createIconComponent("ColorSplashIcon");
Icon.ShareIcon = createIconComponent("ShareIcon");
Icon.CopyIcon = createIconComponent("CopyIcon");
