// Add any custom config to be passed to Jest
const customJestConfig = {
    rootDir: '.',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        // Handle CSS imports (without CSS modules)
        '^.+\\.(css|sass|scss)$': '<rootDir>/app/__mocks__/styleMock.js',

        // Handle image imports
        // https://jestjs.io/docs/webpack#handling-static-assets$1
        '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': `<rootDir>/app/__mocks__/fileMock.js`,

        /** Handle absolute paths */
        '^~/(.*)$': '<rootDir>/app/$1',
        '^~routes/(.*)$': '<rootDir>/app/routes/$1',
        '^~styles/(.*)$': '<rootDir>/app/styles/$1',
        '^~components': '<rootDir>/app/components/index.ts',
    },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = customJestConfig;
