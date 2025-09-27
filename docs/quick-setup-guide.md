# Quick Setup Guide - Level 1 Challenge

## ⚡ Fast Track Setup (Under 5 minutes)

### Prerequisites Check
- **Node.js**: Version 16+ (tested with v24.8.0) ✅
- **npm**: Any recent version (tested with v11.6.0) ✅
- **Git**: For cloning if needed ✅
- **2-4 hours available** for systematic learning ⏱️

### Setup Commands
```bash
# Navigate to challenge
cd challenges/plyr-challenge

# Install dependencies (~1 minute)
npm install --legacy-peer-deps

# Build project (~8 seconds)
npm run build

# Verify success
ls dist/
```

### Expected Output
After successful setup, you should see:
- ✅ `dist/` folder with `plyr.js`, `plyr.css`, `plyr.svg` files
- ✅ Build completes with only deprecation warnings (normal for enterprise projects)
- ✅ No blocking errors preventing functionality

### Quick Verification
```bash
# Check main files exist
ls -la dist/plyr.min.js dist/plyr.css

# Optional: Start dev server (if implemented)
npm start
```

---

## 🔧 Detailed Setup Process

### Step 1: Environment Verification (2 minutes)
```bash
# Check versions
node --version    # Should be 16+
npm --version     # Any recent version
git --version     # For repository access
```

### Step 2: Project Setup (3 minutes)
```bash
# Navigate to project
cd challenges/plyr-challenge

# Install with legacy flag (handles peer dependency conflicts)
npm install --legacy-peer-deps

# Expected: ~2053 packages installed, some deprecation warnings
# Time: ~60 seconds on typical connection
```

### Step 3: Build Verification (1 minute)
```bash
# Build all assets
npm run build

# Expected output:
# - CSS compilation with Sass deprecation warnings
# - JavaScript bundling with circular dependency warnings
# - SVG sprite generation
# - Total time: ~8 seconds
```

### Step 4: Success Verification (1 minute)
```bash
# Check dist folder contents
ls -la dist/

# Should contain:
# - plyr.min.js (~113KB)
# - plyr.min.mjs (~122KB)
# - plyr.css (~33KB)
# - plyr.svg sprite file
# - Source maps and development files
```

---

## 🚨 Troubleshooting Common Issues

### Issue: npm install fails
**Symptoms**: ERESOLVE dependency conflicts
**Solution**: Use `--legacy-peer-deps` flag (already in instructions)
**Alternative**: Try `--force` if legacy flag fails

### Issue: Build warnings
**Expected**: Many deprecation warnings for Sass @import and color functions
**Action**: These are normal for enterprise legacy projects - focus on build completion

### Issue: Missing dist files
**Check**: Build completed without errors
**Solution**: Re-run `npm run build` and verify no blocking errors

### Issue: Node.js version conflicts
**Symptoms**: Incompatible engine warnings
**Solution**: Ensure Node.js 16+ (project works with v16-v24)

---

## 📋 Platform-Specific Notes

### macOS / Linux
- Standard setup works as documented
- May need `sudo` for global npm packages (not required here)

### Windows
- Use PowerShell or Git Bash for best compatibility
- Path separators handled automatically by npm/node

### Docker/Containers
- Ensure Node.js 16+ base image
- May need `--unsafe-perm` flag for npm install in some containers

---

## ⏱️ Performance Expectations

| Task | Expected Time | Notes |
|------|---------------|-------|
| Prerequisites Check | 30 seconds | Version verification |
| npm install | 60-90 seconds | Network dependent |
| npm run build | 5-10 seconds | Local processing only |
| Verification | 30 seconds | File system checks |
| **Total Setup** | **3-4 minutes** | Well under 25-minute target |

---

## 🎯 Ready to Start?

After successful setup:
1. **Read**: [`challenges/plyr-challenge/CHALLENGE.md`](../challenges/plyr-challenge/CHALLENGE.md) for full challenge details
2. **Study**: [`docs/prompts/complex-codebase/effective-prompting-guide.md`](prompts/complex-codebase/effective-prompting-guide.md) for AI strategies
3. **Prepare**: [`docs/prompts/challenge-submissions/submission-template.md`](prompts/challenge-submissions/submission-template.md) for documentation

---

**✅ Setup Complete**: Your development environment is ready for enterprise-scale AI-assisted debugging!

**Next Step**: Begin the structured 3-phase debugging approach outlined in the main challenge guide.