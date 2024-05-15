import { coverageConfigDefaults, defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'jsdom',
    coverage: {
      reporter: ['lcov', 'html'],
      exclude: [
        ...coverageConfigDefaults.exclude,
        'docs/*',
        '**/page.tsx',
        '*config*',
        'middleware.ts',
        'auth.ts',
        'app/layout.tsx',
        'app/not-found.tsx',
        'app/api/**',
        'components/sessionWrapper.tsx',
        'app/lib/reservationDAOPrisma.ts',
        'app/lib/serviceDAOPrisma.ts'
      ]
    }
  },
})