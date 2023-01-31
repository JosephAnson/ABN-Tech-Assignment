# ABN technical assignment

## Architectural Decisions
- Vue 3
- Typescript
- ESlint add for code quality and formatting
- Used Tailwind via [unocss](https://github.com/unocss/unocss) for UI design and styling
- Icons via [unocss icons](https://github.com/unocss/unocss/tree/main/packages/preset-icons/) for custom icons
- Vitest / Testing Library for unit tests and snapshots
  - Testing Library tests components closer to how they are used

## Requirements
- [x] Use an open TV shows API to create an application.
- [x] Allow users to view TV shows based on different genres (drama, comedy, sports, etc.).
- [x] Display popular TV shows based on their rating and genre on a dashboard.
- [x] Show TV show details on another screen when a user clicks on a TV show.
- [x] Provide the ability for users to search for a TV show to get its details.
- [x] Design a simple yet eye-catching UI.
- [x] Include unit tests.
- [x] Use a frontend technology framework of the candidate's choice.
- [x] Keep scaffolding tools/boilerplate templates/plugins to a minimum.
- [x] Make the application responsive and mobile friendly.
- [x] Explain architectural decisions in a readme file.
- [x] Include instructions on how to run the solution.
- [x] Focus on clean code and reusability.

## Live demo
https://abn-tech-assignment.vercel.app/

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm run dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm run build
```

### Run Unit Tests

```sh
pnpm run test
```

### Lint

```sh
pnpm run lint
```
