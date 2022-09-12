/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],

	theme: {
		extend: {
			boxShadow: {
				xl: "0 0 50px 2px rgba(0, 0, 0, 0.1)",
			},
			keyframes: {
				"flip-up": {
					"100%": { transform: "rotateX(90deg)" },
				},
				"flip-down": {
					"0%": { transform: "rotateX(90deg)" },
				},
			},
			animation: {
				"flip-up": "flip-up 250ms ease-in",
				"flip-down": "flip-down 250ms ease-out 250ms",
			},
		},
	},
};
