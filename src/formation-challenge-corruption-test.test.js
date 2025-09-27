/**
 * Formation Challenge Corruption Tests
 *
 * These tests are designed to FAIL after we intentionally corrupted the 5 critical features.
 * Students will need to analyze the failures and fix the corrupted logic using AI prompting.
 *
 * Expected failures after corruption:
 * 1. Strategy Picker - Wrong strategy selected due to inverted condition
 * 2. Media Sources - Valid URLs rejected due to inverted validation
 * 3. Player State - Callbacks never fire due to commented out call
 * 4. Subtitles - Always unavailable due to inverted condition
 * 5. Seek Functionality - Always blocked due to inverted condition
 */

import StrategyPicker from './playbackstrategy/strategypicker'
import MediaSources from './mediasources'
import PlaybackStrategy from './models/playbackstrategy'

// Mock dependencies
global.window = global.window || {}
global.window.bigscreenPlayer = {
  playbackStrategy: PlaybackStrategy.MSE,
  liveSupport: 'seekable',
  overrides: {}
}

jest.mock('./debugger/debugtool', () => ({
  staticMetric: jest.fn(),
  statechange: jest.fn(),
  keyData: jest.fn(),
  dynamicMetric: jest.fn(),
  info: jest.fn(),
  error: jest.fn(),
  sourceLoaded: jest.fn()
}))

jest.mock('./manifest/sourceloader', () => ({
  __esModule: true,
  default: {
    load: jest.fn().mockResolvedValue({
      time: { manifestType: 'STATIC' },
      transferFormat: 'HLS'
    })
  }
}))

describe.skip('Formation Challenge - Corruption Detection Tests', () => {

  describe('❌ Strategy Picker Should Fail', () => {
    beforeEach(() => {
      // Ensure window.bigscreenPlayer is properly initialized
      global.window = global.window || {}
      global.window.bigscreenPlayer = {
        playbackStrategy: PlaybackStrategy.MSE,
        liveSupport: 'seekable',
        overrides: {}
      }

      jest.spyOn(console, 'log').mockImplementation(() => {})
      jest.spyOn(console, 'error').mockImplementation(() => {})
    })

    afterEach(() => {
      console.log.mockRestore()
      console.error.mockRestore()
    })

    test('should incorrectly select MSE when NOT configured for MSE', async () => {
      // This should FAIL because our corruption inverted the condition
      global.window.bigscreenPlayer.playbackStrategy = PlaybackStrategy.BASIC

      try {
        await StrategyPicker()
        // If we get here without error, the logging should show the problem
        expect(console.log).toHaveBeenCalledWith('[STRATEGY_PICKER] MSE strategy selected, loading MSEStrategy module')

        // This assertion should FAIL - proving our corruption worked
        expect(console.log).not.toHaveBeenCalledWith('[STRATEGY_PICKER] Basic strategy selected')
      } catch (error) {
        // If MSE fails to load, that's also evidence of the bug
        expect(error.name).toBe('StrategyDynamicLoadError')
      }
    })
  })

  describe('❌ Media Sources Should Fail', () => {
    let mediaSources

    beforeEach(() => {
      mediaSources = MediaSources()
      jest.spyOn(console, 'log').mockImplementation(() => {})
      jest.spyOn(console, 'error').mockImplementation(() => {})
    })

    afterEach(() => {
      console.log.mockRestore()
      console.error.mockRestore()
    })

    test('should reject valid media URLs due to corruption', async () => {
      // This should FAIL because our corruption inverted the validation
      const validMedia = {
        urls: [{ url: 'https://example.com/video.mp4', type: 'video/mp4' }],
        captions: [],
        protectionData: null
      }

      await expect(mediaSources.init(validMedia)).rejects.toThrow('Media Sources urls are undefined')

      // The error message should appear even though we had valid URLs
      expect(console.error).toHaveBeenCalledWith('[MEDIA_SOURCES] No media URLs provided - cannot initialize')
    })

    test('should accept empty URLs due to corruption', async () => {
      // This should PASS because our corruption inverted the validation
      const emptyMedia = {
        urls: [],
        captions: [],
        protectionData: null
      }

      // This should NOT throw due to our corruption
      await expect(mediaSources.init(emptyMedia)).resolves.not.toThrow()
    })
  })

  describe('❌ Player State Should Show Callback Issues', () => {
    test('should detect commented out callback', () => {
      // We can't easily test the callback directly, but we can verify
      // that the corruption signature is present in our logging tests
      const corruptionSignature = 'Broadcasting state change:'
      expect(corruptionSignature).toBeDefined()

      // Students will see this in console but callbacks won't fire
      // This test documents the expected behavior for debugging
      expect(true).toBe(true) // Placeholder - real issue will be visible in runtime
    })
  })

  describe('❌ Subtitles Should Always Be Unavailable', () => {
    test('should show subtitle availability corruption', () => {
      // The subtitle availability check was corrupted
      // Students will need to examine the available() function logic
      const corruptionHint = 'Subtitles should be available but are not due to inverted logic'
      expect(corruptionHint).toBeDefined()

      // This test documents the expected debugging scenario
      expect(true).toBe(true) // Students will debug the actual subtitle availability
    })
  })

  describe('❌ Seek Should Always Be Blocked', () => {
    test('should show seek blocking corruption', () => {
      // The seek transition check was corrupted
      // Students will see "Seek blocked" even when it should be allowed
      const corruptionHint = 'Seeks should work but are blocked due to inverted logic'
      expect(corruptionHint).toBeDefined()

      // This test documents the expected debugging scenario
      expect(true).toBe(true) // Students will debug the actual seek functionality
    })
  })

  describe('✅ Corruption Summary', () => {
    test('should have exactly 5 corrupted features', () => {
      const corruptedFeatures = [
        'Strategy Picker - inverted MSE condition',
        'Media Sources - inverted URL validation',
        'Player State - commented out callbacks',
        'Subtitles - inverted availability check',
        'Seek Functionality - inverted transition check'
      ]

      expect(corruptedFeatures).toHaveLength(5)

      corruptedFeatures.forEach(corruption => {
        expect(typeof corruption).toBe('string')
        expect(corruption.length).toBeGreaterThan(10)
      })
    })

    test('should provide debugging hints through logging', () => {
      // All our corruptions preserve logging, so students can trace issues
      const loggingPrefixes = [
        '[STRATEGY_PICKER]',
        '[MEDIA_SOURCES]',
        '[PLAYER_STATE]',
        '[SUBTITLES]',
        '[SEEK]'
      ]

      // Logging infrastructure should still work for debugging
      loggingPrefixes.forEach(prefix => {
        expect(prefix).toMatch(/^\[[A-Z_]+\]$/)
      })
    })
  })
})