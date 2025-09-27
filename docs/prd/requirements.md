# Requirements

## Functional Requirements

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

## Non-Functional Requirements

**NFR1:** Challenge loading response times must be under 3 seconds to maintain participant engagement

**NFR2:** The system must reliably process GitHub webhooks with 99.5% uptime for accurate progression tracking

**NFR3:** Email notifications must be delivered within 5 minutes of challenge completion events

**NFR4:** The system must support 50+ concurrent participants without performance degradation

**NFR5:** All participant data must comply with privacy regulations with no sensitive information storage requirements

**NFR6:** The system must operate on bootstrap-friendly budget using free/low-cost services initially

**NFR7:** Infrastructure must scale costs proportionally with participant volume growth

**NFR8:** The system must integrate seamlessly with existing GitHub workflows without disrupting participant development practices
