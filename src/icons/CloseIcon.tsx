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
				fill: "currentcolor",
			}}
		>
			<rect
				style={{
					opacity: 1,
					fill: "currentcolor",
					strokeWidth: 2.71493,
					strokeOpacity: 0.870588,
				}}
				width={2.962}
				height={44.791}
				x={52.961}
				y={-28.675}
				transform="matrix(.70045 .7137 -.61945 .78503 0 0)"
				ry={0.869}
			/>
			<ellipse
				style={{
					fill: "none",
					strokeWidth: 2.97106569,
					strokeOpacity: 1,
					stroke: "currentcolor",
					strokeDasharray: "none",
				}}
				cx={40.475}
				cy={35.76}
				transform="rotate(-2.546)"
				rx={27.854}
				ry={31.691}
			/>
			<rect
				style={{
					opacity: 1,
					fill: "currentcolor",
					strokeWidth: 2.71493,
					strokeOpacity: 0.870588,
				}}
				width={2.962}
				height={44.791}
				x={5.829}
				y={-76.839}
				transform="matrix(.63432 -.77307 -.6867 -.72695 0 0)"
				ry={0.869}
			/>
		</g>
	</svg>
);

export default SvgComponent;
