/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			primary: "#ffffff",
			secondary: "#004767",
			tertiary: "#03BFCB",
		},
		extend: {
			fontSize: {
				ms: "0.8125rem",
			},
		},
	},
	plugins: [],
}
