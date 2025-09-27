# Plyr Challenge: Video Player Debugging

## 🎯 Learning Objectives
- Master AI-assisted debugging in complex enterprise codebases
- Develop systematic investigation approaches for multi-component systems
- Practice architectural understanding through hands-on corruption fixing
- Build effective prompting patterns for large-scale open-source projects

## 📋 Prerequisites
- Node.js 16+ and npm installed
- Basic JavaScript/TypeScript knowledge
- Git familiarity
- Claude Code access
- 2-4 hours available for systematic debugging

## 🏗️ Project Overview: Plyr Video Player

Plyr is a professional HTML5 video player used by thousands of websites. This enterprise-grade project demonstrates real-world complexity:

### Architecture Highlights
- **38 JavaScript modules** with intricate dependencies
- **Complex event system** connecting UI controls to media playback
- **Multi-provider support** (HTML5, YouTube, Vimeo)
- **Gulp-based build pipeline** compiling TypeScript and Sass
- **13,000+ lines** of production-quality code

### Key Components You'll Work With
- **Main Player** (`src/js/plyr.js`): Core initialization and configuration
- **Controls System** (`src/js/controls.js`): UI control management (53KB file!)
- **Event Handling** (`src/js/listeners.js`): User interaction processing
- **Media Layer** (`src/js/media.js`): Video/audio source management
- **UI Components** (`src/js/ui.js`): DOM element creation and styling
- **Build System** (`gulpfile.js`): Asset compilation and optimization

## 🔧 Setup Instructions

### 1. Navigate to Challenge
```bash
cd challenges/plyr-challenge
```

### 2. Install Dependencies
```bash
npm install --legacy-peer-deps
```
*Note: Legacy flag needed for older dependency compatibility*

### 3. Build the Project
```bash
npm run build
```

### 4. Verify Build Success
- Check that `dist/` folder contains compiled files
- Look for `plyr.js`, `plyr.css`, and related assets
- Build warnings are normal - focus on completion success

## 🐛 The Challenge: Something's Broken!

### What Should Happen
The Plyr video player should:
- Initialize properly with visible controls
- Respond to play/pause button clicks
- Allow volume adjustment via slider
- Display video content with working interface
- Handle user interactions smoothly

### What's Actually Happening
Multiple issues have been introduced that mirror real production bugs:
- Some controls may not respond to user interaction
- Player initialization might fail in certain conditions
- Volume controls could appear to work but not affect audio
- Styling issues might make controls invisible or unusable
- Configuration errors might prevent proper startup

### Your Mission
Use AI-assisted debugging to identify and fix **all the issues** systematically. The goal is not just to get it working, but to **understand the architectural patterns** and develop **effective debugging strategies**.

## 🤖 AI-Assisted Debugging Strategy

### Phase 1: Architecture Understanding (30-45 minutes)

**Start with System Overview**
```
"I'm debugging a TypeScript video player called Plyr with this architecture:
- 38 JS modules including plyr.js (main), controls.js (UI), listeners.js (events)
- Gulp build system compiling TypeScript + Sass
- Complex event delegation between components

Help me understand how these components interact and what the typical initialization flow would be."
```

**Component Responsibility Mapping**
```
"In this Plyr architecture, what would be the typical responsibilities of:
- plyr.js (main file)
- controls.js (53KB file)
- listeners.js (event handling)
- media.js (source management)

How do they coordinate for basic play/pause functionality?"
```

### Phase 2: Issue Investigation (60-90 minutes)

**Symptom-Based Analysis**
```
"I'm debugging a video player where [describe specific symptom].
Given this architecture: [brief component overview]
What components should I investigate first and what would be the systematic debugging approach?"
```

**Code Section Analysis**
```
"This code section from [file]:
[paste relevant code]
Is part of [larger system context].
It should [expected behavior] but instead [actual behavior].
What could be wrong with this implementation?"
```

**Integration Point Investigation**
```
"In this event flow: user clicks button → event handler → media action
The button click is detected but [specific failure point].
Looking at this code: [paste]
What's breaking the event chain?"
```

### Phase 3: Solution Implementation (60-90 minutes)

**Solution Validation**
```
"I'm considering this fix:
[paste proposed code change]
For this problem: [brief issue description]
In this system: [context]
Are there potential side effects? Does this fit the existing patterns?"
```

**Architecture-Compliant Implementation**
```
"I need to fix [specific issue] while maintaining:
- Existing event delegation patterns
- Component separation of concerns
- Configuration object structure
How should I implement this to fit the established architecture?"
```

## ✅ Success Criteria

### Technical Requirements
- [ ] Build completes successfully (`npm run build`)
- [ ] Player initializes without console errors
- [ ] Play/pause controls respond to clicks
- [ ] Volume slider affects actual audio level
- [ ] All UI controls are visible and functional
- [ ] No new JavaScript errors introduced

### Learning Objectives
- [ ] **Architecture Understanding**: Can explain component relationships
- [ ] **Systematic Investigation**: Used structured debugging approach
- [ ] **AI Interaction Mastery**: Developed effective prompting strategies
- [ ] **Problem-Solution Mapping**: Connected symptoms to root causes
- [ ] **Pattern Recognition**: Identified and followed existing code patterns

## 📝 Documentation Requirements

As you work, document your process using the submission template:

### Record Key AI Interactions
- Prompts that led to breakthrough insights
- Architectural discoveries made through AI assistance
- Most effective debugging strategies

### Document Your Methodology
- How did you approach investigating the codebase?
- What patterns helped you understand component relationships?
- Which AI prompting techniques were most valuable?

### Reflect on Learning
- What surprised you about the project architecture?
- How did working with AI change your debugging approach?
- What strategies will you apply to similar complex projects?

## 🔍 Testing Your Solution

### Build Verification
```bash
npm run build
```
Should complete without errors (warnings are OK)

### Manual Testing
1. Open `demo/index.html` in a browser
2. Verify video player initializes with visible controls
3. Test play/pause button functionality
4. Verify volume slider adjusts audio
5. Check that all controls respond appropriately

### Expected Results
- Player loads with visible, functional controls
- Video plays/pauses on button click
- Volume control affects actual audio output
- No console errors during normal operation
- Smooth user interaction throughout

## 🚨 When You Get Stuck

### Effective Strategies
1. **Start Broader**: Ask AI to explain general component behavior before diving into specifics
2. **Provide Context**: Share architectural understanding when asking for help
3. **Focus Symptoms**: Describe exactly what's not working vs. what should happen
4. **Check Integration Points**: Look where components connect and pass data

### Common Investigation Patterns
- **Event Flow Tracing**: Follow user action → event handler → system response
- **Configuration Analysis**: Check object properties and their expected structure
- **Selector Validation**: Ensure DOM queries match actual element structure
- **Build System Review**: Verify assets compile and load correctly

## 📈 After Completion

### Document Success
- Note the root causes you identified
- Record your most effective AI interaction patterns
- Capture architectural insights for future reference

### Prepare for Advanced Challenges
This challenge builds systematic debugging skills you'll need for:
- More complex architectural corruption scenarios
- Performance optimization challenges
- Advanced integration debugging

---

**Remember**: The goal is learning effective AI-assisted development patterns for complex codebases. Focus on understanding the "why" behind each fix, not just getting it working!

**Time Investment**: Plan for 2-4 hours of focused debugging work. Quality learning takes time!