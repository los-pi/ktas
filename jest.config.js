// Ejemplo Kent Dodds
module.exports = {
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react/cleanup-after-each',
  ],
  reporters: ['jest-junit'],
}
