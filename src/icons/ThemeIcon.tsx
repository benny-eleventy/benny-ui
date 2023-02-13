import * as React from "react";

const SvgComponent = (
	props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
	<svg
		width="100%"
		height="100%"
		viewBox="0 0 12.7 12.7"
		xmlSpace="preserve"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g
			style={{
				fill: "currentcolor",
			}}
		>
			<g
				style={{
					fill: "currentcolor",
				}}
			>
				<path
					style={{
						fill: "currentcolor",
						strokeWidth: 0.451121,
						strokeOpacity: 0.870588,
					}}
					d="m10.198 7.7-.776.71c-.064.057-1.118-.314-1.17-.383L2.901.843c-.052-.069-.055-.161.008-.22l.109-.1c.063-.059.154-.049.218.009l6.67 5.957c.065.057.355 1.154.292 1.211z"
					transform="rotate(84.917 6.584 5.474)"
				/>
			</g>
			<path
				d="M8.673 52.349c-1.497-.191-4.438-.867-5.688-1.307-.81-.285-.81-.285.311-.918 2.686-1.517 5.347-2.493 7.489-7.42.998-5.912 2.836-6.796 5.308-7.944 1.148-.533 3.848-.61 3.848-.61s4.601 4.813 4.558 4.8c.42.82.42.859.058 2.27-1.472 5.73-4.89 9.587-9.553 10.783-1.578.405-4.581.569-6.331.346z"
				fillOpacity={0.85}
				color="currentcolor"
				transform="matrix(.13527 .00924 .0157 .1326 .329 4.293)"
			/>
		</g>
	</svg>
);

export default SvgComponent;
