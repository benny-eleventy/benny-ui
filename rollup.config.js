import typescript from "rollup-plugin-typescript2";
import createStyledComponentsTransformer from "typescript-plugin-styled-components";
import dts from "rollup-plugin-dts";
import pkg from "./package.json";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import alias from "@rollup/plugin-alias";

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
		external: [
			"react",
			"react-dom",
			"styled-components",
			"react/jsx-runtime",
			"framer-motion",
		],
		plugins: [
			resolve(),
			commonjs(),
			typescript({
				tsconfig: "tsconfig.json",
				transformers: [() => ({ before: [styledComponentsTransformer] })],
				useTsconfigDeclarationDir: true,
			}),
			terser(),
		],
	},
	{
		input: "dist/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "esm" }],
		plugins: [dts()],
	},
	{
		input: "src/constants/index.ts",
		output: [{ dir: "dist/constants", format: "esm" }],
	},
	{
		input: "src/components/index.ts",
		output: [{ dir: "dist/components", format: "esm" }],
		plugins: [
			resolve(),
			commonjs(),
			typescript({
				tsconfig: "tsconfig.json",
				transformers: [() => ({ before: [styledComponentsTransformer] })],
				useTsconfigDeclarationDir: true,
			}),
			terser(),
		],
	},
	{
		input: "src/icons/index.ts",
		output: [{ dir: "dist/icons", format: "esm" }],
		plugins: [
			resolve(),
			commonjs(),
			typescript({
				tsconfig: "tsconfig.json",
				transformers: [() => ({ before: [styledComponentsTransformer] })],
				useTsconfigDeclarationDir: true,
			}),
			terser(),
		],
	},
];
