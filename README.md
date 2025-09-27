# AI Formation Program - Claude Code Mastery

**Master AI-assisted development through progressive challenges with enterprise-grade open-source projects**

## 🎯 Program Overview

The AI Formation Program is a hands-on learning system designed to bridge the gap between basic Claude usage and complex real-world application development. Through carefully crafted corruption scenarios in real open-source projects, participants develop systematic AI-assisted debugging and development skills.

### Why This Program?

- **Real Enterprise Codebases**: Work with actual production-quality projects like Plyr video player
- **Progressive Complexity**: Start simple, advance to complex architectural challenges
- **AI-First Approach**: Learn to leverage Claude Code effectively for navigating large codebases
- **Immediate Feedback**: Automated testing validates your solutions
- **Practical Skills**: Bridge the gap between tutorials and real-world development

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm
- Git
- Claude Code access
- VS Code or similar editor

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd aiformation
   ```

2. **Start the Challenge**
   ```bash
   cd challenges/plyr-challenge
   npm install --legacy-peer-deps
   npm run build
   ```

3. **Verify setup**
   - Build should complete successfully (warnings are normal)
   - Project structure should be intact
   - Demo files should be generated in `dist/`

### Time Investment
- **Setup**: ~20 minutes
- **Plyr Challenge**: 2-4 hours (depending on experience)
- **Future Challenges**: Incremental, self-paced

## 📚 Challenge Structure

### Plyr Video Player Challenge
**Focus**: Systematic AI-assisted debugging in enterprise codebases

**What You'll Learn**:
- Navigating enterprise-grade open-source projects
- Using Claude Code for codebase exploration
- Systematic debugging approaches
- Working with TypeScript + Sass build systems

**Challenge Location**: `challenges/plyr-challenge/`

### Future Challenges (Coming Soon)
- Advanced architectural debugging scenarios
- Performance optimization challenges
- Complex integration debugging

## 🎓 Participation Guidelines

### Learning Objectives

1. **AI-Assisted Navigation**: Master techniques for understanding large codebases with AI help
2. **Systematic Debugging**: Develop structured approaches to identifying and fixing issues
3. **Enterprise Workflow**: Learn to work within existing architectures and conventions
4. **Progressive Complexity**: Build confidence through incremental skill development

### Success Criteria

- **Understanding Over Speed**: Focus on learning the "why" behind each fix
- **Documentation**: Record your problem-solving approach and discoveries
- **AI Interaction**: Develop effective prompting strategies for complex codebases
- **Architecture Awareness**: Demonstrate understanding of project structure and relationships

### Best Practices

- Start with project exploration before jumping into fixes
- Use Claude Code to understand component relationships
- Document your debugging process for learning reinforcement
- Test solutions thoroughly before considering them complete

## 🛠️ Working with Enterprise Codebases

### Effective Claude Code Strategies

1. **Context Provision**
   ```
   "I'm working on a TypeScript video player project. Here's the component I'm debugging: [paste code].
   This connects to [describe relationships]. Help me understand why [specific issue]."
   ```

2. **Structured Exploration**
   - Ask for architecture overviews first
   - Request file relationship explanations
   - Get component responsibility breakdowns

3. **Debugging Approach**
   - Describe symptoms clearly
   - Provide relevant context files
   - Ask for systematic investigation steps

### Common Patterns in Enterprise Projects

- **Build Systems**: webpack/gulp configurations, multiple output targets
- **Dependency Management**: complex peer dependency trees, version conflicts
- **Architecture**: modular design, separation of concerns, plugin systems
- **Testing**: comprehensive test suites, integration testing, CI/CD pipelines

## 📁 Repository Structure

```
aiformation/
├── challenges/
│   └── plyr-challenge/        # Plyr video player debugging challenge
├── docs/
│   ├── stories/               # Story documentation
│   ├── prd/                   # Product requirements
│   └── prompts/               # Prompt templates
├── .bmad-core/               # BMad Method framework
└── README.md                 # This file
```

## ⚡ Troubleshooting

### Common Setup Issues

**Dependency Installation Fails**
```bash
# Use legacy peer deps flag
npm install --legacy-peer-deps
```

**Build Warnings**
- Sass deprecation warnings are expected and normal
- Circular dependency warnings are part of the original codebase
- Focus on whether build completes successfully

**Missing Dependencies**
- Ensure Node.js 16+ is installed
- Clear npm cache if issues persist: `npm cache clean --force`

### Development Environment

**File Watching Issues**
- Some builds don't include live-reload servers
- Use `npm run build` for one-time builds
- Check `package.json` scripts for available commands

**Git Issues**
- Repository includes proper .gitignore for node_modules
- Commit working solutions to track progress

## 🎯 Success Path

1. **Complete Level 1**: Master basic corruption scenarios
2. **Document Learning**: Record effective prompting strategies
3. **Progress Gradually**: Don't rush to advanced levels
4. **Share Insights**: Contribute improvements to the program
5. **Apply Skills**: Use techniques in real projects

## 🤝 Contributing

This program improves through participant feedback:

- Report setup issues
- Suggest additional corruption scenarios
- Share effective AI prompting patterns
- Contribute documentation improvements

## 📞 Support

**Getting Help**:
- Check troubleshooting section first
- Review challenge-specific documentation in `docs/`
- Use Claude Code to explore and understand codebase structure

**Program Questions**:
- Focus on learning process over quick answers
- Document challenges for program improvement
- Share successful debugging strategies

---

**Ready to start?** Navigate to `challenges/plyr-challenge/` and begin your AI-assisted development journey!