# Project Brief: AI Formation Program

**Date:** 2025-09-26
**Based on:** Brainstorming session results and BMad Method analysis

## Executive Summary

**AI Formation Program** is a progressive, hands-on learning system that bridges the critical gap between basic Anthropic Claude Code certification and complex real-world application mastery for streaming services teams. Using corrupted open-source media players as realistic practice environments, the program guides certified team members through increasingly complex GitHub project challenges while capturing and evolving their prompt engineering skills. The system addresses the fundamental "missing bridge problem" where teams have certification knowledge but lack structured pathways to apply Claude Code effectively on enterprise-level codebases, ultimately transforming certified individuals into confident practitioners who can leverage AI assistance for daily workflow optimization.

## Problem Statement

**Current State & Pain Points:**

Anthropic Claude Code certified team members possess theoretical knowledge of AI-assisted development but struggle to apply these skills effectively on complex, real-world projects. While they can successfully use Claude for simple, isolated tasks like "hello world" examples or basic code explanations, they hit significant barriers when attempting to leverage AI assistance for enterprise-level codebases with multiple interdependencies, legacy constraints, and domain-specific requirements.

**Impact of the Problem:**

- **Productivity Gap:** Teams invest in Claude Code certification but see minimal return on complex projects where AI assistance could provide the greatest value multiplier
- **Confidence Erosion:** Repeated failures with inadequate prompts on real projects create reluctance to use AI tools when they're needed most
- **Skill Stagnation:** Without structured progression, team members plateau at basic usage levels and never develop the sophisticated prompt engineering skills needed for complex scenarios
- **Resource Waste:** Organizations cannot realize the full potential of their Claude Code investment, particularly for streaming services teams working with intricate media processing pipelines

**Why Existing Solutions Fall Short:**

Current training approaches focus on feature demonstrations and simple examples that don't translate to real-world complexity. Certification programs teach "what Claude Code can do" but don't provide structured pathways for "how to apply it systematically on complex codebases." The massive gap between certification examples and actual project reality leaves teams without guidance for the most valuable use cases.

**Urgency & Importance:**

As streaming services face increasing pressure to deliver features rapidly while maintaining high quality, the ability to effectively leverage AI assistance on complex codebases becomes a competitive advantage. Teams that can bridge this skills gap will significantly outperform those stuck using AI tools only for trivial tasks.

## Proposed Solution

**Core Concept & Approach:**

The AI Formation Program creates the missing structured pathway between Claude Code certification and real-world mastery through progressive complexity challenges using corrupted open-source media players. Teams work through carefully designed GitHub project scenarios that mirror their daily streaming services work, while the system captures their prompt evolution and provides immediate feedback on both code outcomes and prompt quality.

**Key Differentiators:**

- **Real-World Familiarity:** Uses open-source media players (Video.js, Plyr, custom players) that streaming services teams already understand, allowing focus on AI skills rather than domain learning
- **Forced Prompt Evolution:** Progressive complexity designed to make inadequate prompts fail spectacularly, compelling learners to develop sophisticated context-rich prompting techniques
- **Evidence-Based Learning:** Captures all prompts in structured `/prompts/challenge-X/attempt-Y.md` format, enabling before/after comparisons that demonstrate dramatic quality improvements
- **Automated Progression Tracking:** Starts with simple email notifications for completions, scales to n8n workflow automation, ensuring sustainable delivery without manual overhead

**Why This Solution Will Succeed:**

Unlike generic coding tutorials or feature demonstrations, this approach leverages domain expertise streaming teams already possess while systematically building the missing bridge to complex AI-assisted development. The combination of realistic practice environments, forced skill progression, and automated tracking creates a sustainable learning system that scales with organizational needs.

**High-Level Product Vision:**

A progressive formation system where certified Claude Code users advance through increasingly complex challenges on familiar codebases, developing from basic AI assistance to sophisticated prompt engineering mastery, with their skill evolution automatically tracked and validated through real project outcomes.

## Target Users

### Primary User Segment: Certified Claude Code Streaming Services Engineers

**Demographic/Firmographic Profile:**
- Software engineers, senior developers, and technical leads at streaming services companies
- 3-8 years development experience with video/audio streaming technologies
- Recently completed Anthropic Claude Code certification (within 6 months)
- Work primarily with JavaScript/TypeScript, video processing pipelines, and media player implementations
- Team size: 5-25 engineers per organization

**Current Behaviors & Workflows:**
- Use Claude Code for simple tasks: code explanation, basic debugging, documentation generation
- Avoid using AI assistance on complex features due to previous poor outcomes with inadequate prompts
- Manually code complex media player integrations, buffering optimizations, and streaming protocol implementations
- Rely on trial-and-error for prompt writing without systematic approach to context provision

**Specific Needs & Pain Points:**
- Need confidence to apply AI assistance on mission-critical streaming functionality
- Struggle with prompt engineering for codebases with complex interdependencies
- Want to reduce time spent on repetitive media player customizations and integrations
- Need structured progression path from basic to advanced AI-assisted development

**Goals They're Trying to Achieve:**
- Deliver streaming features faster without sacrificing quality
- Become confident using Claude Code on enterprise-level projects
- Develop systematic prompt engineering skills for complex scenarios
- Justify their organization's investment in Claude Code certification

### Secondary User Segment: Engineering Team Leads & Technical Managers

**Demographic/Firmographic Profile:**
- Engineering managers and technical leads overseeing streaming services development
- Responsible for team productivity and skill development initiatives
- Have budget authority for training and development programs
- Manage teams of 10-50 engineers across multiple streaming services projects

**Current Behaviors & Workflows:**
- Evaluate training ROI through team productivity metrics and delivery velocity
- Seek scalable skill development solutions that don't require extensive manager involvement
- Track team adoption of new tools and methodologies through measurable outcomes
- Balance individual skill development with project delivery pressures

**Specific Needs & Pain Points:**
- Need evidence that Claude Code investment is delivering measurable business value
- Want scalable training that doesn't require significant manager oversight
- Need to ensure consistent skill development across team members with varying experience levels
- Require clear progress tracking and competency validation mechanisms

**Goals They're Trying to Achieve:**
- Maximize ROI on Claude Code certification investments
- Improve team delivery velocity on complex streaming projects
- Develop systematic AI-assisted development capabilities across the organization
- Establish measurable competency standards for AI tool usage

## Goals & Success Metrics

### Business Objectives

- **Increase Claude Code Application Rate:** Achieve 80% of certified team members successfully applying AI assistance on complex projects within 90 days of program completion
- **Reduce Feature Delivery Time:** Decrease average time for streaming feature implementation by 25% through effective AI-assisted development
- **Improve Training ROI:** Demonstrate measurable productivity gains that justify Claude Code certification investment within 6 months
- **Scale Skill Development:** Deliver consistent competency development to 50+ engineers with minimal manual oversight

### User Success Metrics

- **Challenge Completion Rate:** 85% of participants complete all three complexity levels (basic bug fixes → feature implementation → performance optimization)
- **Prompt Quality Evolution:** Measurable improvement in prompt context richness and specificity from Level 1 to Level 3 challenges
- **Confidence Increase:** Post-program survey showing 90% of participants feel confident applying Claude Code to enterprise-level projects
- **Knowledge Transfer:** 75% of participants successfully mentor new team members using systematic prompt engineering techniques learned

### Key Performance Indicators (KPIs)

- **Program Engagement:** Completion rate within 30 days of enrollment (target: >80%)
- **Skill Application:** Number of complex projects where participants successfully use advanced AI assistance within 60 days post-completion (target: 2+ per participant)
- **Prompt Quality Score:** Automated assessment of prompt structure, context inclusion, and constraint specification (target: 80% improvement from baseline)
- **Team Velocity Impact:** Sprint velocity improvement for teams with program graduates vs. control groups (target: 15% increase)
- **Manager Satisfaction:** Manager-reported confidence in team's AI-assisted development capabilities (target: 90% positive)

## MVP Scope

### Core Features (Must Have)

- **Single Media Player Challenge Track:** One carefully selected and corrupted open-source media player (likely Video.js or Plyr) with 3 progressive complexity levels - basic bug fixes, feature implementation, and performance optimization
- **Prompt Capture System:** Structured `/prompts/challenge-X/attempt-Y.md` folder structure with CLAUDE.md configuration rules that automatically capture all AI interaction attempts for later analysis
- **GitHub Webhook Integration:** Basic automated detection when participants submit working solutions (tests pass) with simple email notification system for progression tracking
- **Challenge Progression Logic:** Participants must complete Level N successfully before accessing Level N+1, with clear success criteria (automated test suites pass)
- **Basic Evaluation Framework:** Simple pass/fail determination based on automated testing, with manual review capability for edge cases

### Out of Scope for MVP

- Advanced prompt quality scoring algorithms
- Multiple media player options or custom challenge generation
- n8n workflow automation (Phase 2 feature)
- Peer review integration
- Learning management system integration
- Real-time progress dashboards
- Personalized learning path adaptation
- Community features or discussion forums

### MVP Success Criteria

The MVP succeeds if 3-5 pilot participants can complete all three complexity levels within 4-6 weeks, with measurable improvement in their prompt sophistication from Level 1 to Level 3, and 100% of participants report increased confidence applying Claude Code to complex streaming projects. The system must operate with minimal manual intervention beyond initial setup and occasional manual review of edge cases.

## Post-MVP Vision

### Phase 2 Features

- **n8n Workflow Automation:** Replace simple email notifications with sophisticated workflow automation for seamless progression tracking and participant management
- **Multiple Media Player Tracks:** Expand from single player to 3-4 different open-source media players, allowing participants to choose challenges that best match their current project needs
- **Advanced Prompt Quality Analysis:** Implement automated scoring of prompt structure, context richness, and best practice adherence to provide detailed feedback beyond pass/fail

### Long-term Vision

Transform the AI Formation Program into the industry standard for practical AI tool education, expanding beyond streaming services to other technical domains while maintaining the core methodology of progressive complexity using familiar, real-world codebases. Establish a community-driven platform where organizations contribute corrupted projects for shared learning.

### Expansion Opportunities

- **Industry-Specific Tracks:** Create formation programs tailored to e-commerce, fintech, healthcare, and other domains using their respective familiar codebases
- **Advanced Specialization Paths:** Develop tracks for specific roles (DevOps, QA automation, architecture) with domain-appropriate challenge types
- **Enterprise Integration:** Build APIs for learning management systems, HR platforms, and performance tracking tools

## Technical Considerations

### Platform Requirements

- **Target Platforms:** Web-based system accessible via modern browsers, with GitHub integration as primary interface
- **Browser/OS Support:** Chrome, Firefox, Safari, Edge (latest 2 versions), cross-platform compatibility
- **Performance Requirements:** Sub-3-second response times for challenge loading, reliable webhook processing for progression tracking

### Technology Preferences

- **Frontend:** Static site generator (Jekyll, Gatsby, or Next.js) for challenge presentation and documentation
- **Backend:** Node.js with Express for webhook handling and email automation, or serverless functions (Vercel, Netlify)
- **Database:** JSON files or lightweight database (SQLite, PostgreSQL) for participant progress tracking
- **Hosting/Infrastructure:** GitHub Pages for static content, cloud functions for dynamic processing (AWS Lambda, Vercel Functions)

### Architecture Considerations

- **Repository Structure:** Monorepo containing corrupted media player challenges, documentation, and automation scripts
- **Service Architecture:** Lightweight microservices for webhook processing, email notifications, and progress tracking
- **Integration Requirements:** GitHub API integration for automated testing detection, email service integration (SendGrid, Mailgun)
- **Security/Compliance:** Participant data privacy compliance, secure webhook endpoints, no sensitive data storage

## Constraints & Assumptions

### Constraints

- **Budget:** Bootstrap-friendly approach using free/low-cost services initially, scaling costs with participant volume
- **Timeline:** MVP delivery within 2-3 weeks for pilot program, full Phase 1 within 6-8 weeks
- **Resources:** Single developer initially, expanding to 2-3 person team based on pilot success
- **Technical:** Must integrate with existing GitHub workflows, minimal infrastructure overhead

### Key Assumptions

- Streaming services teams have sufficient media player domain knowledge to focus on AI skill development
- Progressive complexity will effectively force prompt evolution without causing excessive frustration
- Automated testing can reliably determine challenge completion without extensive manual review
- Simple email notifications provide adequate motivation and tracking for pilot participants
- 4-6 week program duration balances skill development depth with participant attention span

## Risks & Open Questions

### Key Risks

- **Participant Engagement:** Risk that participants lose motivation during complex challenges without sophisticated gamification or social elements
- **Challenge Calibration:** Risk that complexity progression is poorly calibrated, causing participants to get stuck or advance too quickly
- **Technical Reliability:** Risk that automated testing produces false positives/negatives, undermining progression system credibility

### Open Questions

- How do we prevent participants from looking up solutions online before attempting their own approach?
- What's the optimal challenge spacing to maintain engagement without overwhelming participants?
- How do we handle participants with vastly different baseline Claude Code experience levels?
- Should the program be self-paced or cohort-based for better learning outcomes?

### Areas Needing Further Research

- Specific media player selection criteria and suitability analysis
- Challenge difficulty calibration methodology and testing approaches
- Participant motivation and engagement strategies for multi-week programs
- Success metrics definition and measurement implementation

## Next Steps

### Immediate Actions

1. **Select and corrupt first media player repository** (Week 1)
2. **Define prompt capture folder structure and CLAUDE.md rules** (Week 1)
3. **Create basic evaluation criteria and automated test suites** (Week 2)
4. **Set up GitHub webhook and email notification system** (Week 2)
5. **Identify and recruit 3-5 pilot participants** (Week 3)

### PM Handoff

This Project Brief provides the full context for the AI Formation Program. Please start in 'PRD Generation Mode', review the brief thoroughly to work with the user to create the PRD section by section as the template indicates, asking for any necessary clarification or suggesting improvements.

---

*This brief was created using the BMad Method framework and incorporates insights from comprehensive brainstorming session analysis.*