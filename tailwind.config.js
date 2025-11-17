/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#3D5AF1",
                accent: "#F05F8D",
                highlight: "#F8AF3C",
                ink: "#0F172A",
                porcelain: "#F7F7FB",
                cloud: "#FFFFFF"
            },
            backgroundImage: {
                vibrant: "linear-gradient(135deg, #3D5AF1 0%, #F05F8D 100%)",
                aurora: "linear-gradient(140deg, #FFFFFF 0%, #F7F7FB 50%, #E4E9F7 100%)"
            }
        }
    },
    plugins: []
};