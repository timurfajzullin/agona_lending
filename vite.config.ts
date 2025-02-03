import {defineConfig} from "vite";

export default defineConfig({
    css: {
        modules: {
            localsConvention: "camelCase", // Ensures consistent property names
        },
    },
})