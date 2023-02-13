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
		<path
			style={{
				fill: "currentColor",
				strokeWidth: 2.09366,
				strokeOpacity: 0.870588,
			}}
			d="m6 44 20-20L6 4l17.984 9.98L42 24l-18.016 9.99Z"
		/>
	</svg>
);

export default SvgComponent;
