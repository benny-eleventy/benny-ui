//@ts-check
import GlobalStyle from "../globalStyles/globalStyles";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../themes";

export const BennyThemeProvider = (props: { children: React.ReactNode }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{props.children}
		</ThemeProvider>
	);
};
