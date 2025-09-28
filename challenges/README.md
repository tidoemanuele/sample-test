# AI Formation Challenge System

## Challenge Intro Template Structure

Each level has a dedicated interactive introduction page following this naming pattern:

- `level-1-intro.html` - Level 1: Project Corruption Investigation
- `level-2-intro.html` - Level 2: [Future level description]
- `level-3-intro.html` - Level 3: [Future level description]

## Template Components

### Required Elements for Each Level:

1. **Level Badge** (top-left corner)

   ```html
   <div class="level-badge">LEVEL X</div>
   ```

2. **Level-Specific Title**

   ```html
   <title>AI Formation Challenge - Level X Guide</title>
   <h2>Level X: [Specific Challenge Name]</h2>
   ```

3. **Level-Specific Learning Objectives**

   - Clear bullet points of what participants will learn
   - Skills specific to that difficulty level
   - Prerequisites from previous levels

4. **Mission Context**

   - Specific to the level's complexity
   - References previous levels when appropriate
   - Clear progression indication

5. **Setup Instructions**
   - Level-specific directory paths
   - Any additional dependencies for that level
   - Expected starting state

## Consistent Design Elements

All levels share:

- Same visual design system (colors, fonts, animations)
- Navigation structure (7 slides standard)
- Interactive features (copy buttons, keyboard navigation)
- Responsive design
- Glass morphism UI style

## Level-Specific Customizations

Each level should customize:

- **Mission description** - complexity appropriate
- **Learning objectives** - skill level appropriate
- **Setup commands** - level-specific paths
- **Investigation strategies** - advanced techniques for higher levels
- **Success criteria** - appropriate for level complexity

## Template Creation Process

1. Copy `level-1-intro.html` as base template
2. Update level number in badge and title
3. Modify mission context and learning objectives
4. Adjust setup paths and commands
5. Customize investigation strategies for level complexity
6. Update success criteria and next steps

## File Organization

```
challenges/
├── level-1-intro.html          # Level 1 - Basic corruption investigation
├── level-2-intro.html          # Level 2 - [Future level]
├── level-3-intro.html          # Level 3 - [Future level]
├── level-1-plyr/              # Level 1 project files
├── level-2-[project]/         # Level 2 project files
└── README.md                   # This documentation
```

## Development Notes

- Maintain consistent styling across all levels
- Each level should feel like natural progression
- Include references to previous levels for context
- Progressive disclosure of advanced concepts
- Keep mobile responsiveness across all levels
