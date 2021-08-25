import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), tsconfigPaths()],
  // resolve: {
  //   alias: {
  //     '@pages': path.resolve(__dirname, '/src'),
  //     '@components': path.resolve(__dirname, '/src'),
  //     '@hooks': path.resolve(__dirname, '/src'),
  //     '@utils': path.resolve(__dirname, '/src'),
  //     '@styles': path.resolve(__dirname, '/src'),
  //   },
  // },
})
