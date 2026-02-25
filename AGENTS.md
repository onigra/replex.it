# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

replex.it is a single-page React/TypeScript app (Create React App) that displays REPL exit commands with search and copy-to-clipboard functionality. No backend, no database, no external APIs.

### Node version

The project requires **Node.js 14.15.1** (specified in `.nvmrc`). Use `nvm use` to activate it. Yarn is the package manager (`yarn.lock`).

### Common commands

See `package.json` `scripts` for standard commands:

- **Dev server**: `yarn start` (port 3000)
- **Tests**: `CI=true yarn test --watchAll=false`
- **Lint**: `npx eslint src/ --ext .ts,.tsx`
- **Build**: `yarn build`

### Gotchas

- `react-scripts test` runs in watch mode by default; use `CI=true` or `--watchAll=false` for non-interactive CI runs.
- The `Popover` component triggers a React strict-mode deprecation warning (`componentWillReceiveProps`); this is from the `react-popover` library and can be safely ignored.
- `browserslist` data may be outdated (build warning); this does not affect functionality.
