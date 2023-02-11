import typescript from "rollup-plugin-typescript2";
import createStyledComponentsTransformer from "typescript-plugin-styled-components";
import dts from "rollup-plugin-dts";
import pkg from "./package.json";
import terser from "@rollup/plugin-terser";

const styledComponentsTransformer = createStyledComponentsTransformer({
	displayName: true,
	ssr: true,
});

export default [
	{
		input: "src/index.ts",
		output: [
			{ file: pkg.main, format: "cjs" },
			{ file: pkg.module, format: "esm" },
		],
		plugins: [
			typescript({
				tsconfig: "tsconfig.json",
				transformers: [() => ({ before: [styledComponentsTransformer] })],
			}),
			terser(),
		],
		external: [
			"react",
			"react-dom",
			"styled-components",
			"react/jsx-runtime",
			"framer-motion",
		],
	},
	{
		input: "dist/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "esm" }],
		plugins: [dts()],
	},
];
