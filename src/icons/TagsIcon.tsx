import React from "react";

const SvgComponent = (
	props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
	<svg
		width="100%"
		height="100%"
		viewBox="0 0 48 48"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g
			style={{
				fill: "currentColor",
			}}
		>
			<g
				style={{
					strokeWidth: 3.24108004,
					strokeDasharray: "none",
				}}
			>
				<path
					style={{
						fill: "none",
						stroke: "currentColor",
						strokeWidth: 3.24108004,
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeDasharray: "none",
					}}
					d="m38.47 11.015-10.6 46.61M58.707 10.115l-10.6 46.61M63.807 24.306l-42.405 1.886M64.703 44.453l-42.405 1.886"
					transform="matrix(.78906 .03084 -.0351 .69355 -7.969 -.826)"
				/>
			</g>
		</g>
	</svg>
);

export default SvgComponent;
