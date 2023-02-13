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
				fill: "currentcolor",
			}}
		>
			<path
				style={{
					color: "currentcolor",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					paintOrder: "markers stroke fill",
				}}
				d="M86.537 21.404c-7.646 8.984-7.255 23.131.418 31.582 7.418 8.17 19.292 8.426 26.982.317.661.87 1.375 1.864 1.685 2.468.572 1.114.323 1.813.784 2.327l12.276 13.667c.922 1.03 1.65-.123 2.742-1.387s2.123-2.149 1.201-3.178L120.35 53.53c-.729-.771-.974-.225-1.969-.849-.5-.314-1.649-1.253-2.387-1.897 6.296-8.992 5.522-21.977-1.695-29.926-7.673-8.45-20.115-8.439-27.762.546zm2.817 3.102c5.76-6.768 15.542-7.02 21.877-.043 6.334 6.977 6.43 18.107.67 24.875-5.761 6.768-15.543 7.02-21.877.042-6.335-6.977-6.43-18.106-.67-24.874z"
				transform="matrix(.7173 .02804 -.0319 .63048 -51.062 -6.568)"
			/>
		</g>
	</svg>
);

export default SvgComponent;
