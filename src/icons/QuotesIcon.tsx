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
				aria-label=";"
				style={{
					fontStyle: "italic",
					fontWeight: 700,
					fontSize: "47.5371px",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: 2.97107,
					strokeLinecap: "round",
					strokeLinejoin: "round",
				}}
			>
				<path
					d="M16.344 37.805c0-8.898 1.766-16.03 5.298-21.396S30.37 8.36 37.23 8.36v9.781c-6.86 0-10.29 6.555-10.29 19.664h10.29V58.69H16.344ZM49.025 37.805c0-8.898 1.766-16.03 5.298-21.396S63.051 8.36 69.912 8.36v9.781c-6.86 0-10.29 6.555-10.29 19.664h10.29V58.69H49.025Z"
					style={{
						fontStyle: "normal",
						fontWeight: 400,
						fontFamily: "'Microsoft Sans Serif'",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: 2.97107,
						strokeDasharray: "none",
						strokeOpacity: 1,
					}}
					transform="matrix(.67316 0 0 .67316 -5.062 1.432)"
				/>
			</g>
		</g>
	</svg>
);

export default SvgComponent;
