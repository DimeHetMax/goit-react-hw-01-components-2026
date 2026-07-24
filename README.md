# React Components Homework

This project was created as the first React homework assignment for the GoIT
course. It demonstrates how to build reusable React components, pass data
through props, render collections, use conditional rendering, and describe
component data with TypeScript.

## Technologies Used

- React 19
- TypeScript
- Vite
- CSS Modules
- `clsx` for conditional class names
- ESLint
- Local JSON data

## Components

### Profile

Displays a user profile with:

- Avatar
- Username
- Tag
- Location
- Followers, views, and likes statistics

### Statistics

Renders a collection of statistical items. The title is optional and is
displayed using conditional rendering.

Each statistical item contains:

- Unique ID
- Label
- Percentage

### FriendList

Receives an array of friends and renders a `FriendListItem` for every friend.
Stable IDs from the data are used as React keys.

Each friend contains:

- Unique ID
- Avatar
- Name
- Online status

The online status is styled conditionally with the help of `clsx`.

### TransactionHistory

Displays transaction data in a responsive table.

Each transaction contains:

- Unique ID
- Transaction type
- Amount
- Currency

## TypeScript

Shared TypeScript interfaces and type aliases are stored in
`src/types/types.ts`. They describe component props and the structure of profile,
statistics, friend, and transaction data.

The project uses type-only imports where appropriate:

```ts
import type { ProfileProps } from "../../types/types";
```

## Styling

Every component has its own CSS Module. The interface uses:

- Responsive layouts for mobile, tablet, and desktop
- Modern card styling
- Shadows and gradients
- Hover effects
- Reduced-motion support
- A global browser reset
- A shared responsive container

Global styles and the responsive container are defined in `src/index.css`.

## Data

Component data is stored in separate JSON files:

```text
src/data/
├── friends.json
├── statistics.json
├── transactions.json
└── user.json
```

## Project Structure

```text
src/
├── components/
│   ├── App/
│   ├── FriendList/
│   ├── FriendListItem/
│   ├── Profile/
│   ├── Statistics/
│   └── TransactionHistory/
├── data/
├── types/
├── index.css
└── main.tsx
```

## Installation

Clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Runs the TypeScript compiler and creates a production build.

```bash
npm run lint
```

Checks the project with ESLint.

```bash
npm run preview
```

Starts a local server for previewing the production build.

## GitHub Pages

The project includes a GitHub Actions workflow that automatically builds and
deploys the application whenever changes are pushed to the `main` branch.

Before the first deployment, open the repository on GitHub and select:

```text
Settings → Pages → Build and deployment → Source → GitHub Actions
```

Then push the project to the `main` branch. The deployment progress will be
available in the **Actions** tab.

Live page:

```text
https://dimehetmax.github.io/goit-react-hw-01-components-2026/
```
