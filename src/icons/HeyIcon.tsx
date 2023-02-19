import React from "react";
import { motion, SVGMotionProps } from "framer-motion";

const SvgComponent = (
	props: JSX.IntrinsicAttributes &
		SVGMotionProps<SVGSVGElement> &
		React.RefAttributes<SVGSVGElement>
) => (
	<motion.svg
		width="100%"
		height="100%"
		viewBox="0 0 48 48"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
		animate={{ rotate: 20 }}
		transition={{
			type: "tween",
			repeatType: "loop",
			repeat: Infinity,
			duration: 1,
			ease: "easeInOut",
		}}
	>
		<g
			style={{
				fill: "currentColor",
			}}
		>
			<path
				style={{
					fill: "none",
					stroke: "currentColor",
					strokeWidth: 2.7009,
					strokeLinecap: "round",
					strokeLinejoin: "round",
					strokeDasharray: "none",
					paintOrder: "markers stroke fill",
				}}
				d="M24.44 30.38s-2.53.112-2.402 2.99c.286 6.436 9.773 12.378 15.946 16.593 3.917 2.676 8.358 5.244 12.904 5.194 2.67-.03 5.535-1.138 7.46-3.216 2.725-2.937 4.617-7.443 4.548-11.737-.069-4.263-3.31-7.66-4.89-11.58-3.038-7.543-1.692-9.146-3.58-11.947-2.658-2.766-6.776-2.082-6.648.796.085 1.919 4.488 11.67 4.616 14.547 0 0-18.604-19.359-21.134-19.246-10.118.45 4.673 11.896 11.247 17.548L25.975 15.804c-1.503-1.32-7.363-2.468-4.577 3.176 1.245 2.524 17.804 16.138 17.804 16.138S26.712 24.51 24.055 21.746c-2.53.112-2.401 2.99-2.401 2.99 1.743 6.515 14.249 15.301 14.249 15.301z"
				transform="matrix(.78906 .03084 -.0351 .69355 -7.969 -.826)"
			/>
		</g>
	</motion.svg>
);

export default SvgComponent;
