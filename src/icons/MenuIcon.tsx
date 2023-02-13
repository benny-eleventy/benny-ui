import React from "react";

const SvgComponent = (
	props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
	<svg
		width="100%"
		height="100%"
		viewBox="0 0 12.7 12.7"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g
			transform="matrix(.20877 .00816 -.00928 .1835 -1.05 -.748)"
			style={{
				fill: "currentcolor",
			}}
		>
			<rect
				style={{
					opacity: 1,
					fill: "currentcolor",
					fillOpacity: 1,
					strokeWidth: 3.43347,
					strokeOpacity: 0.870588,
				}}
				width={45.579}
				height={5.762}
				x={12.621}
				y={35.76}
				transform="rotate(-2.546)"
				ry={1.633}
				rx={0}
			/>
			<rect
				style={{
					opacity: 1,
					fill: "currentcolor",
					fillOpacity: 1,
					strokeWidth: 3.45339,
					strokeOpacity: 0.870588,
				}}
				width={45.579}
				height={5.829}
				x={12.621}
				y={55.859}
				transform="rotate(-2.546)"
				ry={1.652}
				rx={0}
			/>
			<g
				transform="matrix(.90478 .00154 .00154 .93936 3.634 3.318)"
				style={{
					fill: "currentcolor",
				}}
			>
				<rect
					style={{
						opacity: 1,
						fill: "currentcolor",
						fillOpacity: 1,
						strokeWidth: 2.96709,
						strokeOpacity: 0.870588,
					}}
					width={31.976}
					height={6.133}
					x={10.1}
					y={12.899}
					transform="rotate(-2.546)"
					ry={1.739}
					rx={0}
				/>
				<rect
					style={{
						opacity: 1,
						fill: "currentcolor",
						fillOpacity: 1,
						strokeWidth: 1.89928,
						strokeOpacity: 0.870588,
					}}
					width={13.124}
					height={6.123}
					x={47.355}
					y={12.899}
					transform="rotate(-2.546)"
					ry={1.736}
					rx={0}
				/>
			</g>
		</g>
	</svg>
);

export default SvgComponent;
