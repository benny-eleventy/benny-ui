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
			<path
				style={{
					opacity: 1,
					fill: "none",
					stroke: "currentColor",
					strokeWidth: 2.7009,
					strokeLinejoin: "round",
					strokeOpacity: 1,
				}}
				d="M40.808 6.585 21.594 30.509l1.408 31.659 12.649-.563-1.024-23.024 15.178-.675 1.024 23.024 12.648-.562-1.408-31.659Z"
				transform="matrix(.78906 .03084 -.0351 .69355 -7.969 -.826)"
			/>
		</g>
	</svg>
);

export default SvgComponent;
