import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import createStyledComponentsTransformer from "typescript-plugin-styled-components";

const styledComponentsTransformer = createStyledComponentsTransformer({
	displayName: true,
});

// To handle css files

import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

export default [
	{
		input: "src/index.ts",
		output: [
			{
				file: packageJson.main,
				format: "cjs",
				sourcemap: true,
			},
			{
				file: packageJson.module,
				format: "esm",
				sourcemap: true,
			},
		],
		plugins: [
			peerDepsExternal(),
			resolve(),
			commonjs(),
			typescript({
				tsconfig: "./tsconfig.json",
				transformers: [
					() => {
						before: [styledComponentsTransformer];
					},
				],
			}),

			terser(),
		],
	},
	{
		input: "dist/esm/src/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "esm" }],
		plugins: [dts()],

		external: [/\.css$/], // telling rollup anything that is .css aren't part of type exports
	},
];
