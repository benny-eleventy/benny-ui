import React from "react";
import { SVGProps } from "react";

const SvgComponent = (
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
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
			transform="matrix(.78906 .03084 -.0351 .69355 -7.969 -.826)"
			style={{
				fill: "currentColor",
			}}
		>
			<path
				style={{
					fill: "none",
					stroke: "currentColor",
					strokeWidth: 2.7009,
					strokeLinecap: "round",
					strokeLinejoin: "round",
					strokeDasharray: "none",
					strokeOpacity: 1,
					paintOrder: "markers stroke fill",
				}}
				d="m56.664 49.139 3.125-.112c1.021-.037 1.81-.839 1.768-1.778L59.77 7.097c-.042-.94-.898-1.66-1.919-1.614L33.688 6.557c-1.022.046-1.81.84-1.769 1.778l.039.866.137 2.22"
			/>
			<rect
				style={{
					fill: "none",
					stroke: "currentColor",
					strokeWidth: 2.7009,
					strokeLinecap: "round",
					strokeLinejoin: "round",
					strokeDasharray: "none",
					paintOrder: "markers stroke fill",
				}}
				width={27.767}
				height={43.475}
				x={21.431}
				y={16.974}
				transform="rotate(-2.546)"
				ry={1.598}
			/>
		</g>
	</svg>
);

export default SvgComponent;
