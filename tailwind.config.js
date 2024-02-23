/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { nextui } = require("@nextui-org/react")

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			first: "#ffffff",
			second: "#004767",
			third: "#03BFCB",
		},
		extend: {
			fontSize: {
				ms: "0.8125rem",
			},
		},
	},
	darkMode: "class",
	plugins: [nextui()],
}
