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
					strokeWidth: 4,
					strokeOpacity: 1,
				}}
				width={4}
				height={53.691}
				x={5.274}
				y={27.613}
				transform="matrix(.62496 -.78065 .69401 .71997 0 0)"
				ry={1.042}
			/>
			<rect
				style={{
					opacity: 1,
					fill: "currentcolor",
					strokeWidth: 4,
					strokeOpacity: 1,
				}}
				width={4}
				height={53.712}
				x={52.967}
				y={-33.623}
				transform="matrix(.694 .71997 -.62496 .78065 0 0)"
				ry={1.043}
			/>
		</g>
	</svg>
);

export default SvgComponent;
