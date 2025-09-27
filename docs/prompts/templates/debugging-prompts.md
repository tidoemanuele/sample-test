# Debugging Prompt Templates

## Quick Reference Templates

### 🔍 Initial Investigation

**Architecture Overview**
```
I'm working with a [PROJECT_TYPE] that [PURPOSE].
The project structure includes: [KEY_DIRECTORIES]
Can you explain the architectural patterns and component relationships?
```

**Problem Identification**
```
I'm debugging a [PROJECT_TYPE] where [SYMPTOM_DESCRIPTION].
This happens when [TRIGGER_CONDITIONS].
The expected behavior is: [EXPECTED_BEHAVIOR]
What components should I investigate first?
```

**Error Analysis**
```
I'm getting this error: [ERROR_MESSAGE]
In this context: [RELEVANT_CODE_SECTION]
This component's purpose is: [COMPONENT_ROLE]
What's the most likely cause and debugging approach?
```

### 🔧 Code Analysis

**Function Behavior Analysis**
```
This [LANGUAGE] function:
[CODE_BLOCK]
Is part of [LARGER_SYSTEM_CONTEXT].
It should [EXPECTED_BEHAVIOR] but instead [ACTUAL_BEHAVIOR].
What could be wrong?
```

**Integration Issue**
```
These components need to interact:
- Component A: [DESCRIPTION/CODE]
- Component B: [DESCRIPTION/CODE]
Expected interaction: [BEHAVIOR]
Current result: [ACTUAL_BEHAVIOR]
What's breaking the integration?
```

**Configuration Problem**
```
This [CONFIG_TYPE] configuration:
[CONFIG_CODE]
Should handle [FUNCTIONALITY] but produces [ISSUE].
What might be misconfigured?
```

### 💡 Solution Development

**Solution Validation**
```
I'm considering this fix:
[PROPOSED_CODE_CHANGE]
For the problem: [PROBLEM_SUMMARY]
In this architecture: [SYSTEM_CONTEXT]
What are potential side effects or better alternatives?
```

**Implementation Strategy**
```
I need to implement [FEATURE_DESCRIPTION]
In this existing codebase: [ARCHITECTURE_OVERVIEW]
Following these patterns: [EXISTING_PATTERNS]
What's the best approach that maintains consistency?
```

**Testing Approach**
```
I've implemented [SOLUTION_DESCRIPTION]
In this [PROJECT_TYPE]: [CONTEXT]
How should I test this to ensure no regressions?
```

## Specialized Templates

### Build System Issues
```
This [BUILD_TOOL] setup:
[BUILD_CONFIG]
Uses [TECHNOLOGY_STACK] and should produce [EXPECTED_OUTPUT]
But I'm getting: [ACTUAL_RESULT]
Configuration issue analysis?
```

### Performance Problems
```
This [COMPONENT_TYPE] becomes slow when [CONDITIONS].
Architecture uses: [PERFORMANCE_RELEVANT_PATTERNS]
Suspected bottleneck: [AREA_OF_CONCERN]
Relevant code: [CODE_SECTION]
What optimizations fit this architecture?
```

### Dependency Conflicts
```
Getting dependency conflict: [ERROR_MESSAGE]
Project stack: [TECH_STACK]
Package.json relevant sections: [DEPENDENCIES]
How to resolve while maintaining compatibility?
```

### Cross-Browser Issues
```
Feature works in [WORKING_BROWSERS] but fails in [PROBLEMATIC_BROWSERS]
Functionality: [FEATURE_DESCRIPTION]
Error/behavior: [BROWSER_SPECIFIC_ISSUE]
Code section: [RELEVANT_CODE]
What's the compatibility issue?
```

## Context Enhancement Templates

### Technology Context
```
"This project uses [PRIMARY_FRAMEWORK] with [ADDITIONAL_TECH].
Build system: [BUILD_TOOL]
Target environment: [DEPLOYMENT_CONTEXT]
Key architectural patterns: [PATTERNS_IN_USE]"
```

### Problem Context
```
"The issue occurs when [TRIGGER_SCENARIO].
Frequency: [HOW_OFTEN]
User impact: [IMPACT_DESCRIPTION]
Recent changes: [WHAT_CHANGED_RECENTLY]
Error symptoms: [OBSERVABLE_PROBLEMS]"
```

### Solution Constraints
```
"The solution must:
- [CONSTRAINT_1]
- [CONSTRAINT_2]
- [CONSTRAINT_3]
Existing patterns to follow: [PATTERN_REQUIREMENTS]
Areas to avoid modifying: [RESTRICTED_AREAS]"
```

## Follow-Up Question Templates

### Clarification Requests
```
"Can you elaborate on [SPECIFIC_ASPECT] in the context of [MY_SITUATION]?"
```

### Deep Dive Questions
```
"Given that [PREVIOUS_INSIGHT], how would this affect [RELATED_COMPONENT] in this architecture?"
```

### Alternative Exploration
```
"Are there other approaches to [PROBLEM] that might work better with [SPECIFIC_CONSTRAINTS]?"
```

### Implementation Details
```
"For the solution you suggested, what would be the step-by-step implementation approach in this [FRAMEWORK/ARCHITECTURE]?"
```

## Quality Checklist for Prompts

### Essential Elements
- [ ] Clear problem statement
- [ ] Relevant code context
- [ ] System/architecture context
- [ ] Expected vs actual behavior
- [ ] Specific constraints or requirements

### Enhancement Opportunities
- [ ] Technology stack details
- [ ] Recent changes or triggers
- [ ] Error messages or symptoms
- [ ] Impact or urgency level
- [ ] Previous troubleshooting attempts

### Clarity Markers
- [ ] Specific rather than vague
- [ ] Complete context provided
- [ ] Clear question or objective
- [ ] Actionable scope defined

---

**Usage Tips:**
1. **Start Specific**: Use the most specific template that fits your situation
2. **Add Context**: Always customize with your actual project details
3. **Iterate**: Use follow-up templates to dive deeper based on responses
4. **Document Success**: Note which templates work well for your project types