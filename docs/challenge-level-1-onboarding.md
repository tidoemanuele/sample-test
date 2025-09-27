# AI Formation Program - Level 1 Challenge Onboarding

## 🎯 Welcome to Level 1: Enterprise Codebase Mastery

**Challenge Goal**: Master AI-assisted debugging in complex, real-world codebases using the Plyr video player project.

**Time Commitment**: 2-4 hours of focused learning
**Learning Focus**: Systematic debugging approaches for enterprise-scale open source projects

---

## 📚 Quick Start Guide

### 1. Understand Your Challenge
➡️ **Read First**: [`challenges/plyr-challenge/CHALLENGE.md`](../challenges/plyr-challenge/CHALLENGE.md)

This comprehensive guide covers:
- **Project Architecture**: 38 JavaScript modules, complex event system, multi-provider support
- **Challenge Scenario**: Realistic corruption scenarios mirroring production debugging
- **Expected vs Actual Behavior**: Clear description of what's broken and what should work
- **AI-Assisted Debugging Strategy**: Structured 3-phase approach for systematic investigation

### 2. Set Up Your Environment
**Quick Setup (25 minutes max)**
```bash
cd challenges/plyr-challenge
npm install --legacy-peer-deps
npm run build
```

**Verification**: Build should complete successfully (warnings are normal)

### 3. Master AI-Assisted Development
➡️ **Study**: [`docs/prompts/complex-codebase/effective-prompting-guide.md`](prompts/complex-codebase/effective-prompting-guide.md)

**Essential Patterns:**
- **Architecture Understanding**: "Explain component relationships in this enterprise video player"
- **Problem Investigation**: "Given these symptoms in this system, what should I investigate first?"
- **Solution Development**: "Validate this fix approach within the existing architecture"

### 4. Navigate Enterprise Complexity
➡️ **Reference**: [`docs/troubleshooting-guide-large-scale-projects.md`](troubleshooting-guide-large-scale-projects.md)

**Common Scenarios Covered:**
- Build system complexity and dependency conflicts
- Systematic debugging with the CONTEXT method
- Performance considerations for large projects
- Effective documentation strategies

### 5. Document Your Journey
➡️ **Use Template**: [`docs/prompts/challenge-submissions/submission-template.md`](prompts/challenge-submissions/submission-template.md)

**Key Documentation Areas:**
- Most effective AI prompts and their results
- Technical insights about project architecture
- Systematic debugging approaches used
- Learning outcomes for future application

---

## 🏗️ Understanding the Plyr Challenge

### Project Complexity Overview
- **13,000+ lines** of production-quality TypeScript/JavaScript
- **Gulp-based build pipeline** with complex asset processing
- **Multi-component architecture** with intricate event systems
- **Real-world corruption scenarios** mirroring enterprise debugging challenges

### Architecture Highlights
```
plyr-challenge/
├── src/js/
│   ├── plyr.js           # Core initialization (main entry point)
│   ├── controls.js       # UI control management (53KB complexity!)
│   ├── listeners.js      # Event handling and user interactions
│   ├── media.js          # Video/audio source management
│   └── ui.js            # DOM element creation and styling
├── src/sass/            # Styling architecture
├── demo/                # Testing environment
└── dist/                # Compiled output
```

### What Makes This Challenging
1. **Scale**: Navigating thousands of lines across dozens of modules
2. **Integration**: Understanding how components communicate and coordinate
3. **Real Bugs**: Corruption scenarios mirror actual production issues
4. **Enterprise Patterns**: Learning to work within established architectural constraints

---

## 🤖 AI-Assisted Learning Strategy

### Phase 1: Architecture Understanding (30-45 minutes)
**Objective**: Build mental model of system structure and component relationships

**Key Questions to Explore:**
- How do the 38 JavaScript modules interact?
- What's the initialization and event flow?
- How does the build system process TypeScript and Sass?
- What are the integration points between UI and media components?

### Phase 2: Systematic Investigation (60-90 minutes)
**Objective**: Develop structured debugging approaches for complex systems

**Investigation Techniques:**
- Symptom-based analysis with architectural context
- Component responsibility mapping
- Integration point failure analysis
- Build system and dependency investigation

### Phase 3: Solution Implementation (60-90 minutes)
**Objective**: Apply fixes that maintain architectural integrity

**Implementation Focus:**
- Solution validation against existing patterns
- Architectural compliance checking
- Integration impact assessment
- Testing within enterprise complexity

---

## ✅ Success Criteria & Evaluation

### Technical Completion Requirements
- [ ] **Build Success**: `npm run build` completes without errors
- [ ] **Functional Restoration**: All player controls respond correctly
- [ ] **Integration Integrity**: Volume controls affect actual audio output
- [ ] **UI Completeness**: All controls visible and appropriately styled
- [ ] **Error-Free Operation**: No new JavaScript errors introduced

### Learning Objective Achievement
- [ ] **Architecture Mastery**: Can explain component relationships and data flow
- [ ] **Systematic Debugging**: Applied structured investigation approaches
- [ ] **AI Collaboration Excellence**: Developed effective prompting strategies
- [ ] **Pattern Recognition**: Identified and followed established code patterns
- [ ] **Enterprise Mindset**: Considered architectural constraints in solutions

### Documentation Excellence
- [ ] **Process Documentation**: Recorded systematic debugging methodology
- [ ] **AI Interaction Capture**: Documented effective prompts and insights
- [ ] **Technical Understanding**: Explained architectural discoveries
- [ ] **Knowledge Transfer**: Created resources for future similar challenges

---

## 🔧 Getting Started Checklist

### Before You Begin
- [ ] Read the complete [`CHALLENGE.md`](../challenges/plyr-challenge/CHALLENGE.md) guide
- [ ] Study [`effective-prompting-guide.md`](prompts/complex-codebase/effective-prompting-guide.md) patterns
- [ ] Set up development environment and verify build success
- [ ] Bookmark the [`troubleshooting-guide-large-scale-projects.md`](troubleshooting-guide-large-scale-projects.md)
- [ ] Prepare your documentation using the [`submission-template.md`](prompts/challenge-submissions/submission-template.md)

### During Development
- [ ] Apply the 3-phase AI-assisted debugging strategy
- [ ] Document breakthrough insights and effective prompts
- [ ] Focus on understanding "why" behind each issue and fix
- [ ] Test solutions incrementally to avoid compound problems
- [ ] Maintain architectural integrity in all modifications

### Before Submission
- [ ] Complete all technical verification steps
- [ ] Ensure learning objectives are documented
- [ ] Review AI interaction patterns for future reference
- [ ] Validate that solutions fit established project patterns
- [ ] Confirm readiness for more complex Level 2 challenges

---

## 📈 What Comes Next

### Progression Indicators
**You're ready for Level 2 when you can:**
- Navigate complex codebases systematically
- Develop effective AI prompting strategies for enterprise projects
- Debug integration issues across multiple components
- Maintain architectural consistency while implementing fixes
- Document learning for knowledge transfer

### Advanced Challenge Preparation
Level 1 builds foundational skills for:
- **Performance Optimization Challenges** (Level 2)
- **Advanced Integration Debugging** (Level 3)
- **Architecture Refactoring Scenarios** (Level 4)
- **Real-World Production Issue Simulation** (Level 5)

---

## 🤝 Support Resources

### When You Need Help
1. **First**: Check the [`troubleshooting-guide-large-scale-projects.md`](troubleshooting-guide-large-scale-projects.md)
2. **AI Strategy**: Review [`effective-prompting-guide.md`](prompts/complex-codebase/effective-prompting-guide.md) patterns
3. **Technical Issues**: Reference the detailed [`CHALLENGE.md`](../challenges/plyr-challenge/CHALLENGE.md) guide

### Documentation Templates
- **Process Recording**: Use the [`submission-template.md`](prompts/challenge-submissions/submission-template.md)
- **AI Interaction Tracking**: Follow effective prompting patterns
- **Learning Reflection**: Focus on transferable skills and insights

---

**Remember**: This challenge prioritizes learning over speed. Take time to understand the architecture, develop systematic approaches, and build AI collaboration skills that will serve you throughout your development career.

**Expected Outcome**: By completion, you'll have proven strategies for navigating enterprise-scale codebases with AI assistance, setting the foundation for increasingly complex real-world scenarios.