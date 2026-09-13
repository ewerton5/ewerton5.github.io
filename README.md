# Ewerton Vieira — Portfolio

Personal website built with Next.js, showcasing my projects, experience, and contact information. Supports multiple languages (pt-BR and en-US) and light/dark theme.

## Installation

Before cloning the project, check your Node.js version using the `node -v` command in the terminal. Also make sure you have Yarn installed. If you don't, install it with:

```bash
npm install -g yarn
```

### Steps to Clone the Repository

1. In the top-right corner of the repository, select **Code** and click **SSH** or **HTTPS**.
2. Then, in the folder where you want to save the project, open a terminal and type:

- Via HTTPS:

```bash
git clone https://github.com/ewerton5/ewerton5.github.io.git
```

- Via SSH:

```bash
git clone git@github.com:ewerton5/ewerton5.github.io.git
```

3. After cloning, go into the project folder:

```bash
cd ewerton5.github.io
```

4. Install the project dependencies:

```bash
yarn
```

### Starting the Project

To start the development server, run:

```bash
yarn dev
```

The project will be available at `http://localhost:3000`.

## Project Structure

```
src/
├── app/              # Next.js routes (App Router), including i18n support via [lang]
├── Components/       # Reusable UI components
├── data/             # Site content (projects, experience, timeline, testimonials, etc.) by language
├── dictionaries/     # Translations (pt-BR and en-US)
├── hooks/            # Custom hooks
├── store/            # Global state (Zustand)
├── styles/           # Global styles (Tailwind CSS)
├── types/            # TypeScript types
└── utils/            # Utility functions
```

To add or edit a portfolio project, update the corresponding files in `src/data/pt-BR` and `src/data/en-US` (including the `details` folder), keeping the same structure between both languages.

## Best Practices Before Committing

1. **Husky**: Make sure Husky is set up to manage Git hooks. Run the command below to prepare Husky:

```bash
yarn prepare
```

2. **Lint-Staged**: To check whether your changes follow the project's standards, you can run the command below, which checks for ESLint and TypeScript errors simultaneously:

```bash
yarn lint-staged
```

3. **ESLint**: If you want to list and automatically fix ESLint errors, use the command:

```bash
yarn lint
```

4. **TypeScript**: If you want to list TypeScript errors, use the command:

```bash
yarn type-check
```

5. **Commitlint**: Use the standard Commitlint convention for commit messages. Examples of valid messages:

- `build: adds or updates files related to the project build`
- `chore: updates build tasks or auxiliary tools`
- `ci: adds or modifies continuous integration files`
- `docs: updates or creates documentation`
- `feat: adds new functionality`
- `fix: fixes a bug in component X`
- `perf: improves code performance`
- `refactor: refactors code without changing functionality`
- `revert: reverts previous changes`
- `style: adjusts code formatting or style (without changing logic)`
- `test: adds or updates tests`

## Available Scripts

| Command            | Description                                 |
|--------------------|---------------------------------------------|
| `yarn dev`         | Starts the development server with Next.js  |
| `yarn build`       | Generates the production build              |
| `yarn start`       | Starts the server with the production build |
| `yarn lint`        | Runs ESLint across the whole project        |
| `yarn type-check`  | Checks for typing errors with TypeScript    |
| `yarn lint-staged` | Runs lint and type checks on staged files   |
| `yarn prepare`     | Sets up Git hooks via Husky                 |

## Main Technologies

- [Next.js](https://nextjs.org/) + [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://github.com/pmndrs/zustand) for state management
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) for forms and validation

## Contact

If you have any questions, feel free to reach out to me, the engineer responsible for this project.
