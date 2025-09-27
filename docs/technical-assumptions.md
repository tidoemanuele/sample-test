# Technical Assumptions

## Repository Structure: Monorepo
Single repository containing all challenges, documentation, and automation scripts for simplified maintenance and deployment.

## Service Architecture
**Serverless Functions within Monorepo:** GitHub webhooks processed by Vercel/Netlify Functions, triggering email notifications via SendGrid. This approach provides automatic scaling, minimal infrastructure overhead, and aligns with bootstrap-friendly cost constraints.

## Testing Requirements
**Unit + Integration Testing:** Comprehensive Jest test suites for each challenge level that must pass for progression, with manual review capability for edge cases. This ensures reliable automated progression while maintaining quality gates.

## Additional Technical Assumptions and Requests
- **Primary Stack:** JavaScript/TypeScript with Node.js for consistency with streaming services teams
- **Database:** SQLite for local development, PostgreSQL for production participant tracking (minimal schema)
- **Email Service:** SendGrid for reliable notification delivery with usage-based pricing
- **Hosting:** Vercel for integrated static site + serverless functions deployment
- **Media Player Selection:** Video.js as primary corruption target due to widespread streaming industry adoption
- **GitHub Integration:** GitHub API for webhook processing and automated test result detection
