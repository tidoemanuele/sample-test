# Level 1 Challenge - Troubleshooting Guide

## 🚨 Common Issues & Solutions

### Setup and Installation Problems

#### Issue: npm install fails with peer dependency errors
```
ERESOLVE unable to resolve dependency tree
npm ERR! peer dep missing: rollup@"^1.4.1", required by gulp-better-rollup@4.0.1
```

**Root Cause**: Legacy project with older dependency versions
**Solution**: Use the legacy peer deps flag (already in instructions)
```bash
npm install --legacy-peer-deps
```

**Alternative Solutions**:
```bash
# If legacy flag fails, try force
npm install --force

# If Node version conflicts
nvm use 16  # or nvm use 18, or nvm use 20
```

#### Issue: Build completes but with many warnings
```
DEPRECATION WARNING [import]: Sass @import rules are deprecated
WARNING: Global built-in functions are deprecated
Circular dependency: src/js/captions.js -> src/js/controls.js
```

**Understanding**: These are normal for enterprise legacy projects
**Action Required**: **None** - Focus on build completion success
**What to Check**: Verify `dist/` folder contains all required files

#### Issue: Build fails completely
```
gulp build
[11:44:02] Error: Cannot find module 'gulp-sass'
```

**Diagnosis Steps**:
```bash
# Check if dependencies installed correctly
ls node_modules/ | grep gulp

# Clear and reinstall
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps

# Verify Node version compatibility
node --version  # Should be 16+
```

### Development Environment Issues

#### Issue: Demo doesn't work in browser
**Symptoms**:
- Player doesn't initialize
- Controls not visible
- Console shows JavaScript errors

**Debugging Steps**:
```bash
# 1. Verify build completed
ls -la dist/plyr.min.js dist/plyr.css

# 2. Check demo file exists
ls -la demo/index.html

# 3. Open browser console and look for errors
```

**Common Causes**:
- Build didn't complete successfully
- Cached browser files (clear cache)
- CORS issues (use local server if available)

#### Issue: IDE performance problems
**Symptoms**:
- Slow file navigation
- IntelliSense not working
- High memory usage

**Solutions**:
```bash
# Exclude large directories from indexing
# Add to .vscode/settings.json or IDE equivalent:
{
  "files.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/.git": true
  }
}
```

### Challenge-Specific Debugging Issues

#### Issue: Can't identify what's broken
**Systematic Approach**:
1. **Start with Build**: Ensure `npm run build` succeeds
2. **Open Demo**: Load `demo/index.html` in browser
3. **Check Console**: Look for JavaScript errors
4. **Test Basic Functions**: Try play/pause, volume controls
5. **Compare Expected vs Actual**: Use challenge guide descriptions

**AI-Assisted Discovery**:
```
Help me systematically test this Plyr video player to identify what functionality is broken. Guide me through a step-by-step testing approach.
```

#### Issue: Understanding the codebase architecture
**Symptoms**:
- Overwhelmed by file count
- Don't know where to start
- Can't trace functionality

**Strategic Approach**:
```
Read the main plyr.js file and explain the overall architecture and initialization flow
```

```
Search for all files containing 'addEventListener' to understand the event system
```

```
Show me how the controls.js file relates to the overall player functionality
```

#### Issue: AI responses not helpful enough
**Better Prompting Strategies**:

❌ **Ineffective**: "This code is broken, fix it"
✅ **Effective**: "This video player control in plyr.js should respond to clicks but doesn't. Here's the relevant code section: [paste code]. What could prevent the event handler from working?"

❌ **Too Broad**: "How does this whole system work?"
✅ **Strategic**: "In this Plyr architecture, how do user interactions flow from UI controls to media actions? Start with the event delegation system."

### Platform-Specific Issues

#### macOS Issues
**Permission Errors**:
```bash
# If npm permissions fail
sudo chown -R $(whoami) ~/.npm
```

**Path Issues**:
```bash
# Verify npm global path
npm config get prefix
```

#### Windows Issues
**Path Length Problems**:
- Use shorter directory names
- Consider WSL for Linux-like environment

**PowerShell vs Command Prompt**:
- Use PowerShell or Git Bash for better compatibility
- Avoid Command Prompt for npm commands

#### Linux/Container Issues
**Memory Limits**:
```bash
# Increase Node heap size if build fails
node --max-old-space-size=4096 ./node_modules/.bin/gulp build
```

**Permission Issues**:
```bash
# Avoid running as root
npm config set unsafe-perm true  # Only if necessary
```

### Advanced Debugging Scenarios

#### Issue: Player initializes but controls don't work
**Investigation Steps**:
1. **Event Registration**: Check if event listeners are attached
2. **CSS Visibility**: Verify controls are visible (not hidden)
3. **JavaScript Errors**: Look for uncaught exceptions
4. **Selector Issues**: Ensure DOM queries find expected elements

**AI Debugging Approach**:
```
The Plyr player loads but clicking play/pause has no effect. Help me trace the event flow from button click to media action in this architecture.
```

#### Issue: Volume controls appear but don't affect audio
**Common Causes**:
- Event handler not connected to actual volume control
- CSS styling issues making controls appear broken
- Configuration object problems
- Integration between UI and media element broken

**Investigation Pattern**:
```
Search for all volume-related functions and show how they connect UI interactions to actual audio control
```

#### Issue: Build succeeds but demo shows styled incorrectly
**Check List**:
- CSS files generated in `dist/`
- CSS linked correctly in demo HTML
- No conflicting styles
- Sass compilation successful

### Getting Unstuck Strategies

#### When Completely Lost
1. **Reset Understanding**: Start with architecture overview
2. **Use Systematic Testing**: Follow the challenge guide testing steps
3. **Focus on Symptoms**: Describe exactly what's not working
4. **Reference Documentation**: Use the comprehensive guides available

#### When AI Assistance Isn't Working
1. **Provide More Context**: Include architectural understanding
2. **Be More Specific**: Focus on exact symptoms and code sections
3. **Build Context Incrementally**: Start broad, then narrow down
4. **Use File Operations**: Let Claude Code read relevant files first

#### When Debugging Takes Too Long
1. **Document Progress**: Note what you've tried and learned
2. **Take Breaks**: Complex debugging benefits from fresh perspective
3. **Review Approach**: Are you following the systematic 3-phase approach?
4. **Focus on Learning**: Remember the goal is skill development

### Emergency Resources

#### Quick Reference Commands
```bash
# Complete clean restart
rm -rf node_modules package-lock.json dist
npm install --legacy-peer-deps
npm run build

# Quick verification
ls dist/plyr.min.js && echo "Build successful" || echo "Build failed"

# Open demo for testing
open demo/index.html  # macOS
start demo/index.html  # Windows
```

#### External Resources
- **Plyr Documentation**: For understanding expected functionality
- **Browser DevTools**: Essential for debugging JavaScript and CSS
- **Node.js Documentation**: For environment issues
- **npm Troubleshooting**: For dependency problems

#### Community Support Patterns
When seeking help:
1. **Share Context**: Include error messages and environment details
2. **Show Progress**: Explain what you've tried
3. **Be Specific**: Focus on exact symptoms
4. **Reference Architecture**: Mention your understanding of the system

---

## 🎯 Success Indicators

### You're On Track When:
- Build completes successfully (warnings are OK)
- Demo loads without JavaScript errors
- You can identify specific broken functionality
- AI interactions are becoming more productive
- You're building architectural understanding incrementally

### Red Flags Requiring Help:
- Cannot complete build process
- No understanding of project structure after initial exploration
- AI responses consistently unhelpful
- Spending > 6 hours without significant progress

---

## 📚 Integration with Other Guides

**For Setup Issues**: Reference [`quick-setup-guide.md`](quick-setup-guide.md)
**For AI Strategies**: Use [`claude-code-usage-guide.md`](claude-code-usage-guide.md)
**For Complex Problems**: Consult [`troubleshooting-guide-large-scale-projects.md`](troubleshooting-guide-large-scale-projects.md)
**For Submission**: Follow [`submission-process-guide.md`](submission-process-guide.md)

---

**Remember**: Troubleshooting is part of the learning process. Each challenge overcome builds expertise for real-world enterprise debugging scenarios. Focus on systematic approaches and documenting effective strategies for future use.