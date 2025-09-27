# AI Formation Program Product Requirements Document (PRD)

## Goals and Background Context

### Goals
- Bridge the gap between Claude Code certification and complex real-world application mastery for streaming services teams
- Enable 80% of certified team members to successfully apply AI assistance on enterprise-level projects within 90 days
- Reduce streaming feature delivery time by 25% through systematic AI-assisted development skills
- Create a scalable, automated learning progression system that operates with minimal manual oversight
- Establish measurable competency standards demonstrating ROI on Claude Code certification investments

### Background Context

The AI Formation Program addresses a critical "missing bridge problem" in the streaming services industry. While teams invest in Anthropic Claude Code certification, they struggle to translate theoretical knowledge into practical application on complex, enterprise-level codebases with multiple interdependencies and legacy constraints. Current training approaches focus on simple examples that don't scale to real-world complexity, leaving certified professionals unable to leverage AI assistance where it would provide the greatest value multiplier.

This program uses corrupted open-source media players as realistic practice environments that streaming services teams already understand, enabling focus on AI skill development rather than domain learning. Through progressive complexity challenges and systematic prompt evolution tracking, the system transforms certified individuals from basic AI tool users into confident practitioners capable of sophisticated prompt engineering on mission-critical streaming functionality.

### Change Log
| Date | Version | Description | Author |
|------|---------|-------------|---------|
| 2025-09-26 | v1.0 | Initial PRD creation based on Project Brief v1.0 | John (PM Agent) |

## Requirements

### Functional Requirements

**FR1:** The system shall provide three progressive complexity levels of media player challenges (basic bug fixes, feature implementation, performance optimization) that must be completed sequentially

**FR2:** The system shall automatically capture all Claude Code interaction attempts in structured `/prompts/challenge-X/attempt-Y.md` format for prompt evolution analysis

**FR3:** The system shall prevent access to Level N+1 until Level N is successfully completed as determined by automated test suite passage

**FR4:** The system shall integrate with GitHub webhooks to automatically detect when participants submit working solutions (all tests pass)

**FR5:** The system shall send email notifications to track participant progression through challenge levels

**FR6:** The system shall provide clear success criteria for each challenge level with automated pass/fail determination

**FR7:** The system shall offer one carefully selected and corrupted open-source media player (Video.js or Plyr) as the primary learning environment

**FR8:** The system shall maintain participant progress tracking from enrollment through completion with minimal manual intervention

**FR9:** The system shall provide structured folder organization with CLAUDE.md configuration rules for consistent prompt capture

**FR10:** The system shall enable manual review capability for edge cases where automated testing may be insufficient

### Non-Functional Requirements

**NFR1:** Challenge loading response times must be under 3 seconds to maintain participant engagement

**NFR2:** The system must reliably process GitHub webhooks with 99.5% uptime for accurate progression tracking

**NFR3:** Email notifications must be delivered within 5 minutes of challenge completion events

**NFR4:** The system must support 50+ concurrent participants without performance degradation

**NFR5:** All participant data must comply with privacy regulations with no sensitive information storage requirements

**NFR6:** The system must operate on bootstrap-friendly budget using free/low-cost services initially

**NFR7:** Infrastructure must scale costs proportionally with participant volume growth

**NFR8:** The system must integrate seamlessly with existing GitHub workflows without disrupting participant development practices

## User Interface Design Goals

### Overall UX Vision
The system should feel like a natural extension of the developer's GitHub workflow rather than a separate learning management system. The experience emphasizes immediate feedback, clear progression indicators, and minimal friction between challenge access and coding work. Users should feel confident about their progress and next steps without overwhelming complexity or distracting gamification elements.

### Key Interaction Paradigms
- **GitHub-Native Experience:** Primary interactions happen within familiar Git repositories and pull request workflows
- **Progressive Disclosure:** Challenge details and instructions revealed incrementally to prevent cognitive overload
- **Immediate Feedback Loops:** Automated test results and progression status visible immediately after submissions
- **Documentation-Driven Interface:** Heavy reliance on markdown documentation and structured folder organization rather than custom UI elements

### Core Screens and Views
- **Challenge Hub Page:** Central landing page showing available challenges, current progress, and next available level
- **Challenge Detail View:** Individual challenge instructions, setup requirements, and submission guidelines
- **Progress Dashboard:** Simple visualization of completion status across all three complexity levels
- **Prompt History View:** Organized display of captured prompts with before/after comparison capabilities

### Accessibility: WCAG AA
The system will meet WCAG AA compliance standards to ensure broad accessibility across diverse engineering teams, with particular attention to keyboard navigation and screen reader compatibility for developers with accessibility needs.

### Branding
Maintain clean, developer-focused aesthetic that aligns with GitHub's interface patterns. Avoid flashy design elements that might distract from the technical learning focus. Use consistent typography and color schemes that support extended reading and code review sessions.

### Target Device and Platforms: Web Responsive
Optimized primarily for desktop development environments where participants will be actively coding, with responsive design ensuring usability on tablets and mobile devices for reviewing progress and documentation while away from primary development machines.

## Technical Assumptions

### Repository Structure: Monorepo
Single repository containing all challenges, documentation, and automation scripts for simplified maintenance and deployment.

### Service Architecture
**Serverless Functions within Monorepo:** GitHub webhooks processed by Vercel/Netlify Functions, triggering email notifications via SendGrid. This approach provides automatic scaling, minimal infrastructure overhead, and aligns with bootstrap-friendly cost constraints.

### Testing Requirements
**Unit + Integration Testing:** Comprehensive Jest test suites for each challenge level that must pass for progression, with manual review capability for edge cases. This ensures reliable automated progression while maintaining quality gates.

### Additional Technical Assumptions and Requests
- **Primary Stack:** JavaScript/TypeScript with Node.js for consistency with streaming services teams
- **Database:** SQLite for local development, PostgreSQL for production participant tracking (minimal schema)
- **Email Service:** SendGrid for reliable notification delivery with usage-based pricing
- **Hosting:** Vercel for integrated static site + serverless functions deployment
- **Media Player Selection:** Video.js as primary corruption target due to widespread streaming industry adoption
- **GitHub Integration:** GitHub API for webhook processing and automated test result detection

## Epic List

**Epic 1: Foundation & Challenge Infrastructure**
Establish project foundation with first corrupted media player challenge, automated testing framework, and basic progression tracking to deliver immediate learning value while building core system capabilities.

**Epic 2: Automation & Notification System**
Implement GitHub webhook integration, email notification system, and participant progress tracking to enable hands-off operation and automated progression management.

**Epic 3: Prompt Capture & Analysis Framework**
Build systematic prompt capture system, folder structure automation, and basic analysis capabilities to enable evidence-based learning progression and skill measurement.

**Epic 4: Advanced Challenge Levels & Completion**
Add intermediate and advanced complexity media player challenges with full testing suites and completion certification to deliver the complete progressive learning experience.

## Epic 1: Foundation & Challenge Infrastructure

**Epic Goal:** Establish the foundational infrastructure for the AI Formation Program by setting up the first corrupted Video.js challenge with automated testing, basic documentation structure, and initial participant onboarding flow. This epic delivers immediate learning value through a working Level 1 challenge while building the core technical foundation required for all subsequent development.

### Story 1.1: Repository Setup and Project Structure

As a **program administrator**,
I want **a well-organized monorepo with clear folder structure**,
so that **developers can easily navigate challenges and maintainers can efficiently manage the system**.

#### Acceptance Criteria
1. Repository contains `/challenges/level-1-videoja/` folder with corrupted Video.js source code
2. Root-level README.md explains program purpose, setup instructions, and participation guidelines
3. `/docs/` folder contains challenge instructions and troubleshooting guides
4. `.github/workflows/` contains basic CI/CD setup for automated testing
5. `/prompts/` folder structure exists with template organization for challenge submissions
6. CLAUDE.md file configured with rules for prompt capture automation

### Story 1.2: Video.js Challenge Corruption and Setup

As a **streaming services engineer participant**,
I want **a realistically corrupted Video.js player that mirrors real-world debugging scenarios**,
so that **I can practice AI-assisted development on familiar technology with meaningful complexity**.

#### Acceptance Criteria
1. Original Video.js player functions correctly with basic video playback, controls, and responsive design
2. Corruption introduces 3-5 realistic bugs: broken play/pause functionality, incorrect volume control behavior, missing progress bar updates, responsive layout issues
3. Challenge documentation clearly explains expected functionality without revealing bug locations
4. Setup instructions allow participants to run the player locally within 10 minutes
5. Corrupted code maintains realistic complexity without introducing syntax errors or impossible-to-debug issues

### Story 1.3: Automated Testing Framework

As a **program administrator**,
I want **comprehensive automated tests that reliably detect when Level 1 challenges are completed successfully**,
so that **participants can receive immediate feedback and progression can happen without manual review**.

#### Acceptance Criteria
1. Jest test suite covers all corrupted functionality: play/pause, volume control, progress tracking, responsive behavior
2. Tests run automatically on every push to participant's challenge branch
3. All tests must pass for challenge completion (no partial credit)
4. Test results are clearly displayed in GitHub Actions with specific failure messages
5. Test suite execution completes within 2 minutes to provide rapid feedback
6. Documentation explains how to run tests locally for participants

### Story 1.4: Basic Challenge Instructions and Onboarding

As a **new program participant**,
I want **clear, structured instructions for starting and completing the Level 1 challenge**,
so that **I can focus on learning AI-assisted development rather than figuring out program logistics**.

#### Acceptance Criteria
1. Challenge instructions document explains the corruption scenario and expected outcomes
2. Step-by-step setup guide enables participants to get running environment within 15 minutes
3. Guidelines for using Claude Code effectively with structured prompts and context provision
4. Submission process clearly documented with GitHub workflow requirements
5. Troubleshooting section addresses common setup issues for streaming services development environments
6. Success criteria explicitly defined so participants understand when they've completed the challenge

## Epic 2: Automation & Notification System

**Epic Goal:** Implement automated progression tracking through GitHub webhook integration and email notification system, enabling the program to operate with minimal manual oversight while providing participants with immediate feedback on their progress through the challenge levels.

### Story 2.1: GitHub Webhook Integration

As a **program administrator**,
I want **automatic detection when participants complete challenges successfully**,
so that **progression can happen immediately without manual monitoring of participant repositories**.

#### Acceptance Criteria
1. Webhook endpoint receives GitHub push events from participant repositories
2. Webhook validates that all tests pass before marking challenge complete
3. System identifies participant identity and current challenge level from repository structure
4. Failed test runs do not trigger progression events
5. Webhook endpoint handles authentication and validates requests are from authorized repositories
6. Error handling prevents webhook failures from blocking participant progress

### Story 2.2: Email Notification System

As a **program participant**,
I want **immediate email confirmation when I complete challenge levels**,
so that **I know my progress is tracked and can celebrate achievements while staying motivated**.

#### Acceptance Criteria
1. Email sent within 5 minutes of successful challenge completion
2. Email contains congratulations message, achievement summary, and next steps
3. Email template includes challenge completion time, number of attempts, and progression to next level
4. SendGrid integration handles email delivery reliably with delivery confirmation
5. Email addresses collected during program enrollment and stored securely
6. Unsubscribe functionality included in all emails per compliance requirements

### Story 2.3: Participant Progress Tracking

As a **program administrator**,
I want **automated tracking of participant progress across all challenge levels**,
so that **I can monitor program effectiveness and identify participants who need additional support**.

#### Acceptance Criteria
1. Database records participant enrollment, challenge attempts, completion timestamps
2. Progress dashboard shows current status for all enrolled participants
3. Completion rates and average time per challenge level tracked for program effectiveness analysis
4. Stuck participant identification (no progress for 7+ days) with automated support outreach
5. Export functionality for progress data analysis and reporting
6. Privacy compliance with participant data handling and storage requirements

### Story 2.4: Challenge Level Progression Logic

As a **program participant**,
I want **automatic access to the next challenge level immediately after completing the current one**,
so that **I can maintain learning momentum without waiting for manual approval**.

#### Acceptance Criteria
1. Level 2 challenge becomes accessible only after Level 1 completion confirmation
2. Progression email includes access instructions and credentials for next challenge level
3. Repository permissions updated automatically to provide access to next challenge folder
4. Previous challenge completion status clearly indicated in participant dashboard
5. Cannot skip levels or access challenges out of sequence
6. Completion certificates generated automatically for final level completion

## Epic 3: Prompt Capture & Analysis Framework

**Epic Goal:** Build comprehensive prompt capture system with automated folder organization and basic analysis capabilities, enabling evidence-based learning progression by systematically tracking how participants' AI interaction skills evolve through the challenges.

### Story 3.1: Automated Prompt Capture System

As a **program participant**,
I want **all my Claude Code interactions automatically captured in organized folders**,
so that **I can review my prompt evolution and program administrators can analyze learning progression**.

#### Acceptance Criteria
1. CLAUDE.md configuration automatically saves all AI interactions to `/prompts/challenge-X/attempt-Y.md`
2. Captured prompts include full context, responses, and timestamps
3. Folder structure creation happens automatically on first AI interaction per challenge
4. Prompt files formatted consistently with metadata headers for analysis
5. System works seamlessly without interrupting normal Claude Code workflow
6. Privacy controls allow participants to exclude sensitive prompts from capture

### Story 3.2: Prompt Quality Analysis Tools

As a **program administrator**,
I want **basic analysis of prompt quality and evolution patterns across participants**,
so that **I can measure program effectiveness and identify areas for curriculum improvement**.

#### Acceptance Criteria
1. Automated analysis identifies prompt length, context inclusion, and specificity improvements from Level 1 to Level 3
2. Comparison reports show before/after prompt quality for individual participants
3. Aggregate analysis across all participants identifies common improvement patterns
4. Analysis dashboard highlights participants with exceptional prompt evolution for case study development
5. Export functionality for detailed prompt analysis and research purposes
6. Analysis respects participant privacy settings and consent preferences

### Story 3.3: Prompt Template and Guidelines System

As a **program participant**,
I want **structured guidance on effective prompt engineering for complex codebases**,
so that **I can systematically improve my AI interaction skills rather than relying on trial and error**.

#### Acceptance Criteria
1. Template prompts provided for common debugging, feature implementation, and optimization scenarios
2. Guidelines document explains context provision, constraint specification, and iteration strategies
3. Interactive examples show progression from basic to sophisticated prompts for media player challenges
4. Prompt quality checklist helps participants self-assess their AI interactions
5. Community sharing mechanism for participants to learn from each other's successful prompts
6. Integration with challenge instructions provides context-specific prompting guidance

### Story 3.4: Evidence-Based Learning Reports

As a **program participant**,
I want **personalized reports showing my prompt evolution and skill development**,
so that **I can understand my learning progress and identify areas for continued improvement**.

#### Acceptance Criteria
1. Individual progress report generated after each challenge completion
2. Report includes prompt quality metrics, improvement areas, and achievement highlights
3. Before/after prompt comparison demonstrates specific skill development
4. Recommendations for continued learning based on analysis of prompt patterns
5. Shareable completion certificates with evidence of skill progression
6. Integration with professional development portfolios and LinkedIn skill verification

## Epic 4: Advanced Challenge Levels & Completion

**Epic Goal:** Complete the progressive learning experience by implementing Level 2 (feature implementation) and Level 3 (performance optimization) challenges with full testing suites, completion certification, and program graduation process to deliver the complete skill development pathway from basic debugging to advanced AI-assisted development mastery.

### Story 4.1: Level 2 Challenge - Feature Implementation

As a **program participant**,
I want **a realistic feature implementation challenge that requires sophisticated AI prompting**,
so that **I can develop skills for using Claude Code on complex development tasks beyond basic debugging**.

#### Acceptance Criteria
1. Feature challenge adds playlist functionality, custom control skin, or video quality selector to Video.js player
2. Implementation requires understanding existing codebase architecture and integration patterns
3. Challenge complexity forces evolution from simple debugging prompts to architectural reasoning prompts
4. Comprehensive test suite validates both functional correctness and code quality
5. Documentation provides feature specification without implementation guidance
6. Success requires demonstrating working feature with clean, maintainable code

### Story 4.2: Level 3 Challenge - Performance Optimization

As a **streaming services engineer participant**,
I want **advanced performance optimization challenges that mirror real-world streaming concerns**,
so that **I can master AI-assisted optimization techniques for mission-critical media player performance**.

#### Acceptance Criteria
1. Performance challenge addresses video buffering optimization, memory leak prevention, or rendering efficiency
2. Baseline performance benchmarks established with measurable improvement targets
3. Challenge requires sophisticated prompting about performance profiling and optimization strategies
4. Automated performance testing validates improvements meet specified criteria
5. Solutions must maintain existing functionality while achieving performance gains
6. Challenge complexity represents realistic senior-level streaming services optimization work

### Story 4.3: Completion Certification and Portfolio Integration

As a **program graduate**,
I want **verified completion certification with evidence of skill progression**,
so that **I can demonstrate AI-assisted development mastery to employers and advance my career**.

#### Acceptance Criteria
1. Digital certificate generated with participant name, completion date, and skill progression summary
2. Certificate includes verified prompt quality improvement metrics from Level 1 to Level 3
3. LinkedIn integration allows adding verified skill certification to professional profile
4. Portfolio export includes selected prompts demonstrating sophisticated AI interaction skills
5. Certificate verification system allows employers to confirm authentic completion
6. Continuing education recommendations based on participant's demonstrated strengths and interests

### Story 4.4: Program Analytics and Continuous Improvement

As a **program administrator**,
I want **comprehensive analytics on program effectiveness and participant outcomes**,
so that **I can continuously improve the curriculum and demonstrate ROI to stakeholders**.

#### Acceptance Criteria
1. Analytics dashboard tracks completion rates, average time per level, and dropout points
2. Prompt quality analysis identifies most effective learning progression patterns
3. Participant feedback collection system captures program improvement suggestions
4. A/B testing framework for curriculum modifications and challenge refinements
5. ROI calculation tools measure participant productivity improvements and business impact
6. Automated reporting for stakeholders on program success metrics and continuous improvement efforts