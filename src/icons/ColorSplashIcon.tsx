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
			d="M8.673 52.349c-1.497-.191-4.438-.867-5.688-1.307-.81-.285-.81-.285.311-.918 2.686-1.517 5.347-2.493 7.489-7.42.998-5.912 2.836-6.796 5.308-7.944 1.148-.533 3.848-.61 3.848-.61s4.601 4.813 4.558 4.8c.42.82.42.859.058 2.27-1.472 5.73-4.89 9.587-9.553 10.783-1.578.405-4.581.569-6.331.346z"
			fill="currentColor"
			fillOpacity={0.85}
			transform="matrix(-1.22438 .95182 -1.14424 -1.01173 93.5 56.324)"
		/>
	</svg>
);

export default SvgComponent;
