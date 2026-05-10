# AgentProof Action Consumer Demo

[![AgentProof](https://github.com/dicnunz/agentproof-demo-action-consumer/actions/workflows/agentproof.yml/badge.svg?branch=main)](https://github.com/dicnunz/agentproof-demo-action-consumer/actions/workflows/agentproof.yml)

This is a tiny public repo that proves AgentProof can run from outside the AgentProof source repository.

It uses:

- `dicnunz/agentproof@v0.1.0`
- Node 24 through the action runtime
- local build, test, lint, and typecheck commands
- a generated `agentproof-report` artifact
- GitHub Step Summary outputs with the score, blockers, report path, checkout handoff, and intake handoff

The app is intentionally small. The point is the integration proof, not the UI.

## Local Check

```sh
npm run build
npm test
npm run lint
npm run typecheck
```

## AgentProof

The workflow is in `.github/workflows/agentproof.yml`.

Manual local run after installing AgentProof:

```sh
agentproof audit . --no-browser
```

Fixed-price async outside proof:

- Checkout: https://dicnunz.github.io/agentproof/checkout/?repo=dicnunz/agentproof-demo-action-consumer
- Intake builder: https://dicnunz.github.io/agentproof/intake/?repo=dicnunz/agentproof-demo-action-consumer
