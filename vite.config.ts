import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
    build: {
        outDir: 'build',
    },
    plugins: [
        htmlPlugin(loadEnv(mode, '.')),
        react({
            jsxImportSource: "@emotion/react",
            babel: {
                plugins: ["@emotion/babel-plugin"],
            },
        }),
    ],
}));

/**
 * Replace env variables in index.html
 * @see https://vitejs.dev/guide/api-plugin.html#transformindexhtml
 */
const htmlPlugin = (env: ReturnType<typeof loadEnv>) => ({
    name: 'html-transform',
    transformIndexHtml(html: string) {
        return html.replace(/%(.*?)%/g, (match, p1) => env[p1] ?? match);
    },
});
