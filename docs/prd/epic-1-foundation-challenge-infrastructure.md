# Epic 1: Foundation & Challenge Infrastructure

**Epic Goal:** Establish the foundational infrastructure for the AI Formation Program by setting up the first corrupted Plyr challenge with automated testing, basic documentation structure, and initial participant onboarding flow. This epic delivers immediate learning value through a working Level 1 challenge using a real enterprise-grade open-source media player project while building the core technical foundation required for all subsequent development.

## Story 1.1: Repository Setup and Project Structure

As a **program administrator**,
I want **a well-organized monorepo with clear folder structure**,
so that **developers can easily navigate challenges and maintainers can efficiently manage the system**.

### Acceptance Criteria
1. Repository contains `/challenges/level-1-plyr/` folder with complete Plyr open-source project (forked from https://github.com/shaka-project/shaka-player) including strategically corrupted files
2. Root-level README.md explains program purpose, setup instructions, and participation guidelines with emphasis on working with real enterprise-grade codebases
3. `/docs/` folder contains challenge instructions and troubleshooting guides for navigating large-scale open-source projects
4. `.github/workflows/` contains CI/CD setup compatible with Plyr's existing build system and automated testing
5. `/prompts/` folder structure exists with template organization for challenge submissions when working with complex codebases
6. CLAUDE.md file configured with rules for prompt capture automation in large project contexts

## Story 1.2: Plyr Challenge Corruption and Setup

As a **streaming services engineer participant**,
I want **a realistically corrupted Plyr instance within a full enterprise-grade open-source project that mirrors real-world debugging scenarios**,
so that **I can practice AI-assisted development on complex, production-quality codebases with meaningful architectural complexity**.

### Acceptance Criteria
1. Complete Plyr project (from https://github.com/shaka-project/shaka-player) functions correctly with original build system, comprehensive test suite, and full feature set
2. Strategic corruption introduces 3-5 realistic bugs within specific project files: broken adaptive bitrate logic, incorrect manifest parsing, missing error handling, UI component failures, or configuration issues
3. Challenge documentation explains expected Plyr functionality and provides project navigation guidance without revealing specific bug locations or affected files
4. Setup instructions allow participants to build and run the full project locally within 20 minutes using standard npm/Node.js workflow
5. Corrupted files maintain realistic complexity representative of enterprise codebases without introducing syntax errors or impossible-to-debug issues
6. Participants must navigate the full project structure, understand component relationships, and work within the existing architecture

## Story 1.3: Automated Testing Framework

As a **program administrator**,
I want **comprehensive automated tests that reliably detect when Level 1 challenges are completed successfully**,
so that **participants can receive immediate feedback and progression can happen without manual review**.

### Acceptance Criteria
1. Integration with Plyr's existing test framework (Karma/Jasmine) plus additional corruption-specific tests covering: adaptive streaming logic, manifest parsing, error handling, UI components, and configuration management
2. Tests run automatically on every push to participant's challenge branch using Plyr's build system
3. All corruption-related tests must pass for challenge completion (leveraging existing comprehensive test suite)
4. Test results clearly displayed in GitHub Actions with specific failure messages and guidance for navigating large test suites
5. Full test suite execution completes within 5 minutes given project complexity, with fast-feedback subset available in under 2 minutes
6. Documentation explains how to run full test suite and targeted test subsets locally for participants working with enterprise-scale codebases

## Story 1.4: Basic Challenge Instructions and Onboarding

As a **new program participant**,
I want **clear, structured instructions for starting and completing the Level 1 challenge**,
so that **I can focus on learning AI-assisted development rather than figuring out program logistics**.

### Acceptance Criteria
1. Challenge instructions document explains the Plyr corruption scenario, project architecture overview, and expected outcomes with guidance for navigating enterprise-scale codebases
2. Step-by-step setup guide enables participants to clone, build, and run the complete Plyr project within 25 minutes
3. Guidelines for using Claude Code effectively with large codebases including: structured prompts for complex projects, context provision strategies, and techniques for working with unfamiliar architectures
4. Submission process clearly documented with GitHub workflow requirements adapted for full project submissions
5. Troubleshooting section addresses common setup issues for enterprise open-source projects including build dependencies, environment configuration, and development server setup
6. Success criteria explicitly defined with emphasis on demonstrating understanding of project architecture and systematic debugging approaches within complex codebases
