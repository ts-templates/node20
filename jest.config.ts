import type { Config } from 'jest'

/**
 * @see https://jestjs.io/docs/next/configuration/
 */
const config: Config = {
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts'
  ]
}

export default config
