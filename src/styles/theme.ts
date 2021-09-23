import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            "900": "#030303",
            "800": "#2c2c2c",
            "700": "#565656",
            "600": "#6a6a6a",
            "500": "#7f7f7f",
            "400": "#949494",
            "300": "#a8a8a8",
            "200": "#bdbdbd",
            "100": "#f5f5f5",
            "50": "#fefefe",
        },
        green: {
            "900": "#61ce70",
            "800": "#6ed27c",
            "700": "#7bd688",
            "600": "#88da94",
            "500": "#96dea0",
            "400": "#a3e2ac",
            "300": "#b0e7b7",
            "200": "#bdebc3",
            "100": "#caefcf",
            "50": "#f2fbf3",
        },
        purple: {
            "900": "#8176ff",
            "800": "#8b81ff",
            "700": "#968dff",
            "600": "#aba4ff",
            "500": "#b5afff",
            "400": "#c0baff",
            "300": "#cac6ff",
            "200": "#d5d1ff",
            "100": "#e0ddff",
            "50": "#f4f4ff",
        },
        dkpurple: {
            "900": "#534d9f",
            "800": "#615ca7",
            "700": "#7e7ab7",
            "600": "#8c88bf",
            "500": "#9b97c7",
            "400": "#a9a6cf",
            "300": "#b7b5d7",
            "200": "#c6c4df",
            "100": "#d4d3e7",
            "50": "#f1f0f7",
        },
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto',
    },
    styles: {
        global: {
            body: {
                bg: 'gray.900',
                color: 'gray.50',
                overflowX: 'hidden',
            }
        }
    }
})