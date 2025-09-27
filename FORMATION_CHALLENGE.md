# 🎯 AI Formation Challenge: Bigscreen Player Debugging

## Challenge Overview

This repository contains a **deliberately corrupted** version of the BBC's Bigscreen Player with 5 critical features intentionally broken. Your mission is to use AI prompting skills to identify, understand, and fix these issues.

## 🔥 What's Been Broken

### 1. **Strategy Picker Logic** (`src/playbackstrategy/strategypicker.js`)
- **Issue**: Condition logic inverted - selects MSE when it shouldn't
- **Symptom**: Wrong playback strategy selected for device capabilities
- **Logging**: `[STRATEGY_PICKER]` messages show the problem

### 2. **Media Sources Validation** (`src/mediasources.ts`)
- **Issue**: URL validation logic inverted - rejects valid URLs
- **Symptom**: Player fails to initialize with valid media sources
- **Logging**: `[MEDIA_SOURCES]` messages reveal validation errors

### 3. **Player State Callbacks** (`src/bigscreenplayer.js`)
- **Issue**: State change callbacks commented out
- **Symptom**: UI doesn't receive player state updates
- **Logging**: `[PLAYER_STATE]` shows state changes but callbacks don't fire

### 4. **Subtitle Availability** (`src/subtitles/subtitles.js`)
- **Issue**: Availability check logic inverted
- **Symptom**: Subtitles always appear unavailable even when present
- **Logging**: `[SUBTITLES]` messages show initialization but availability fails

### 5. **Seek Functionality** (`src/playercomponent.js`)
- **Issue**: Seek transition check inverted - blocks all seeks
- **Symptom**: User can't jump to different time positions
- **Logging**: `[SEEK]` shows blocked seeks even when they should be allowed

## 🔍 Debugging Strategy

### Phase 1: Understanding the Codebase
Use AI to help you understand the architecture:
```
"Explain the bigscreen player's strategy pattern and how it selects playback methods"
"What is the role of MediaSources in this player and how does initialization work?"
"How does the player manage state transitions and notify the UI?"
```

### Phase 2: Following the Logs
Each broken feature has comprehensive logging. Run the player and examine console output:
```bash
npm run start
# Open browser dev tools and watch console logs with prefixes:
# [STRATEGY_PICKER], [MEDIA_SOURCES], [PLAYER_STATE], [SUBTITLES], [SEEK]
```

### Phase 3: Systematic Investigation
Use AI to analyze specific issues:
```
"I see '[STRATEGY_PICKER] MSE strategy selected' but I configured BASIC. Analyze this condition logic in the code."
"Media sources validation is failing for valid URLs. What could cause this inverse behavior?"
"Player state changes are logged but my UI isn't updating. What could break the callback chain?"
```

### Phase 4: Fix and Test
- Make targeted fixes based on your analysis
- Run tests to verify: `npm test`
- Test in browser to confirm functionality

## 🧪 Testing Framework

### Baseline Tests (Should Pass)
```bash
npm test -- formation-challenge-simple.test.js
```
These verify the logging infrastructure is intact.

### Corruption Tests (Should Fail Initially)
```bash
npm test -- formation-challenge-corruption-test.test.js
```
These demonstrate the exact issues you need to fix.

## 💡 AI Prompting Tips

### Effective Debugging Prompts
1. **Architecture First**: "Explain how [component] works before I debug it"
2. **Context Specific**: "Given this error log [paste log], what could cause this?"
3. **Code Analysis**: "Review this function - what seems wrong with the logic?"
4. **Systematic**: "Walk me through debugging this step by step"

### Advanced Techniques
1. **Rubber Duck with AI**: Explain the problem to AI and ask for feedback
2. **Code Review**: Ask AI to review your fixes before implementing
3. **Test-Driven**: "Write a test that would catch this bug"
4. **Pattern Recognition**: "What common bugs cause this type of symptom?"

## 🏆 Success Criteria

You've completed the challenge when:
- [ ] All 5 corrupted features are identified and understood
- [ ] Root causes are found through systematic AI-assisted debugging
- [ ] Fixes are implemented that restore proper functionality
- [ ] Tests pass and browser functionality works
- [ ] You can explain each issue and your debugging process

## 🎓 Learning Objectives

By completing this challenge, you'll develop:
1. **AI Collaboration Skills**: Using AI effectively for complex debugging
2. **Code Architecture Understanding**: How large projects are structured
3. **Systematic Debugging**: Methodical approaches to finding issues
4. **Log Analysis**: Reading and interpreting debug output
5. **Problem Decomposition**: Breaking complex issues into manageable parts

## 🚀 Next Steps

After completing this challenge:
1. Document your debugging process and effective prompts
2. Share insights about AI-assisted debugging techniques
3. Progress to more complex challenges with larger codebases
4. Help others by reviewing their debugging approaches

## 📖 Additional Resources

- [BBC Bigscreen Player Documentation](https://github.com/bbc/bigscreen-player)
- [AI Debugging Best Practices](#) (link to be added)
- [Video Player Architecture Patterns](#) (link to be added)

---

**Remember**: The goal isn't just to fix the bugs, but to learn effective AI collaboration techniques for debugging complex systems. Focus on the process, not just the solution!