/** @type {import("tailwindcss").Config} */
export default {
	content:[
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme:{
		//color settings
		colors:{
			red:{
				100:"",
				200:"",
				300:"",
				400:"",
				500:"#FE0000",
			},
			white:{
				100:"",
				200:"",
				300:"",
				400:"",
				500:"#FFFFFF",
			},
			black:{
				100:"#26282E",
				200:"",
				300:"",
				400:"",
				500:"#000000",
			},
		},
		//  font settings
		// fontFamily:{
		// 	"bricolage":[ "Bricolage Grotesque", "sans-serif" ],
		// 	"barlow-semi-condensed":[ "Barlow Semi Condensed", "sans-serif" ],
		// },
		//breakpoints
		screenSize:{
			sm:"480px",
			md:"768px",
			lg:"976px",
			xl:"1440px",
		}
		,
		extend:{},
	},
	plugins:[],
}
