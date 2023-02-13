import * as React from "react";

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
			transform="matrix(.7173 .02804 -.0319 .63048 -5.062 1.432)"
			style={{
				fill: "#000",
			}}
		>
			<rect
				style={{
					fill: "#000",
					strokeWidth: 4.27091,
					strokeLinecap: "round",
					strokeLinejoin: "round",
					paintOrder: "markers stroke fill",
					stroke: "none",
					strokeOpacity: 1,
				}}
				width={61.28}
				height={69.719}
				x={9.835}
				y={0.9}
				transform="rotate(-2.546)"
				ry={6.338}
				rx={5.571}
			/>
			<path
				style={{
					fill: "none",
					stroke: "currentColor",
					strokeWidth: 5.94213138,
					strokeLinecap: "round",
					strokeLinejoin: "round",
					strokeDasharray: "none",
					strokeOpacity: 1,
					paintOrder: "markers stroke fill",
				}}
				d="m22.67 37.586 13.145 19.008C44.27 25.43 63.291 10.59 63.291 10.59"
			/>
		</g>
	</svg>
);

export default SvgComponent;
