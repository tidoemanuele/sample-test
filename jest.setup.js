// Jest setup for formation challenge branches
// This file conditionally skips tests that are broken due to intentional corruptions

const { execSync } = require('child_process')

// Check if we're on a challenge branch
let isChallengeBranch = false
try {
  const currentBranch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim()
  isChallengeBranch = currentBranch.startsWith('challenge-level-')
} catch (error) {
  // If git command fails, assume we're not on a challenge branch
  console.warn('Could not determine git branch, assuming not a challenge branch')
}

if (isChallengeBranch) {
  console.log('🎯 Running tests on formation challenge branch - some tests may be skipped due to intentional corruptions')

  // Global setup for challenge branches
  beforeEach(() => {
    // Suppress corruption-related console messages during tests
    jest.spyOn(console, 'warn').mockImplementation(() => {})
    jest.spyOn(console, 'log').mockImplementation(() => {})
  })

  afterEach(() => {
    // Restore console methods
    if (console.warn.mockRestore) console.warn.mockRestore()
    if (console.log.mockRestore) console.log.mockRestore()
  })
}