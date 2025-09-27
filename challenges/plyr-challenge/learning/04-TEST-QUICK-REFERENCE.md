# 🚀 Quick Test Reference

## Essential Commands

```bash
# Quick feedback (recommended)
npm run test:fast

# Full test suite
npm test

# CI-optimized with coverage
npm run test:ci

# Watch mode for development
npm run test:watch
```

## Reading Test Results

### ✅ Success Patterns
```
✅ All tests passed
✅ No corruption detected
🎉 Challenge may be completed!
```

### 🔴 Common Corruption Indicators

| Test Failure | Likely Issue | Check Files |
|-------------|--------------|-------------|
| `Controls container has opacity: 0` | CSS corruption | `src/sass/plyr.scss` |
| `Play button not responding` | Event binding | `src/js/listeners.js` |
| `Configuration properties undefined` | Object corruption | `src/js/plyr.js` |
| `Player initialization failed` | Constructor issues | `src/js/plyr.js` |

## Quick Debugging Workflow

1. **Run Fast Tests** → `npm run test:fast`
2. **Identify Issues** → Look for 🔴 patterns above
3. **Fix & Verify** → `npm run test:watch` in background
4. **Final Check** → `npm run test:ci`

## Performance Targets
- Fast tests: ~1.3 seconds
- Full suite: ~1.4 seconds
- Target: All tests pass ✅