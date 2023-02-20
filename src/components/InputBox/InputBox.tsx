/* eslint-disable react-hooks/exhaustive-deps */

import React, { useCallback } from "react";
import styled from "styled-components";
import { s_xxsmall } from "../../constants";
import { Icon } from "../../icons/Icons";
import { A } from "../../styles";
import { ContainerProps } from "../../styles/container/container.types";
import { InputText } from "../../styles/inputs";

interface InputBoxProps extends ContainerProps {
	id: string;
	value: string | " ";
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: () => void;
	onClear?: (e: React.ChangeEvent<HTMLDivElement>) => void;
	onEnter?: () => void;
	placeholder?: string;
	borderWidth?: string;
	activeBorderColor?: string;
	borderColor?: string;
	hoverBorderColor?: string;
	focusOnMount?: boolean;
	focusInputBox?: boolean;
	rightIcon?: React.ReactNode;
	leftIcon?: React.ReactNode;
	hideClearIcon?: boolean;
	autoComplete?: string;
	displayClearText?: boolean;
	placeholderColor?: string;
}

const InputBox = ({
	id,
	value,
	onChange,
	onBlur,
	onClear,
	onEnter,
	placeholder,
	borderWidth = "2px",
	activeBorderColor = "#A685E2",
	borderColor = "rgba(255, 255, 255, 0.5)",
	hoverBorderColor = "#FFEB99",
	focusOnMount = false,
	focusInputBox = false,
	rightIcon,
	leftIcon,
	hideClearIcon,
	autoComplete,
	displayClearText = true,
	placeholderColor = "rgba(255, 255, 255, 0.5)",
	...rest
}: InputBoxProps) => {
	const inputBoxRef = React.useRef<HTMLInputElement>(null);

	React.useEffect(() => {
		if (focusOnMount || focusInputBox) {
			inputBoxRef.current?.focus();
			setIsFocused(true);
		}
	}, [focusOnMount, focusInputBox]);

	//if the input box is focused, then the border should be blue
	const [isFocused, setIsFocused] = React.useState(false);

	const handleBlur = useCallback(() => {
		setIsFocused(false);
		onBlur && onBlur();
	}, []);

	const handleFocus = useCallback(() => {
		setIsFocused(true);
	}, []);

	const handleClear = useCallback(
		(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			if (inputBoxRef.current) {
				inputBoxRef.current.value = "";
				inputBoxRef.current.focus();
				setIsFocused(true);
				//@ts-ignore
				onClear && onClear(event);
			}
		},
		[onClear]
	);

	const handleChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			return onChange(event);
		},
		[onChange]
	);

	const handleKeyDown = useCallback(
		(event: React.KeyboardEvent<HTMLInputElement>) => {
			if (event.key === "Enter") {
				event.preventDefault();
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				const target = event.target as HTMLInputElement;
				onEnter && onEnter();
			}
		},
		[]
	);

	React.useEffect(() => {
		if (inputBoxRef.current) {
			inputBoxRef.current.addEventListener("focus", handleFocus);
			inputBoxRef.current.addEventListener("blur", handleBlur);
		}
		//cleanup
		return () => {
			if (inputBoxRef.current) {
				inputBoxRef.current.removeEventListener("focus", handleFocus);
				inputBoxRef.current.removeEventListener("blur", handleBlur);
			}
		};
	}, []);

	const getBorderStyle = (variant: any) => {
		switch (variant) {
			case "active":
				return activeBorderColor
					? `${borderWidth} solid ${activeBorderColor}`
					: "2px solid #A685E2";
			case "inactive":
				return borderColor
					? `${borderWidth} solid ${borderColor}`
					: "2px solid rgba(255, 255, 255, 0.5)";
			case "hover":
				return hoverBorderColor
					? `${borderWidth} solid ${hoverBorderColor}`
					: "2px solid #FFEB99";
			default:
				return "none";
		}
	};

	return (
		<InputTextContainer
			{...rest}
			border={getBorderStyle(isFocused ? "active" : "inactive")}
			hoverBorder={getBorderStyle(isFocused ? "active" : "hover")}
			paddingInline={s_xxsmall}
			paddingBlock={"0.5rem"}
			color="white"
			gap="0.2rem"
		>
			{leftIcon && leftIcon}
			<InputText
				ref={inputBoxRef}
				id={id}
				onChange={handleChange}
				onBlur={handleBlur}
				onKeyDown={handleKeyDown}
				value={value}
				width="100%"
				height="100%"
				placeholder={placeholder}
				placeholderColor={placeholderColor}
				color="inherit"
				autoComplete={autoComplete ? autoComplete : "off"}
				enterKeyHint={autoComplete ? "search" : "go"}
			/>
			{displayClearText && value && value.length > 0 ? (
				<Icon.Close size="2em" onClick={handleClear} />
			) : (
				rightIcon && rightIcon
			)}
		</InputTextContainer>
	);
};

export default InputBox;

interface InputTextContainerProps {
	hoverBorder?: string;
}

const InputTextContainer = styled(
	A.CenterAlignedRowContainer
)<InputTextContainerProps>`
	width: 40%;
	height: 6vh;
	transition: all 0.8s easeInOut;
	&:hover {
		border: ${(props) => (props.hoverBorder ? props.hoverBorder : "none")};
	}
`;
