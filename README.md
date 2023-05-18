# React Native Starter

![Version](https://img.shields.io/github/package-json/v/rorazliev/react-native-starter) ![License](https://img.shields.io/github/license/rorazliev/react-native-starter) ![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen)

A starting point for React Native apps.

## Table of Contents

- [Requirements](#requirements)
- [Get Started](#get-started)
- [Features](#features)
  - [Architecture](#architecture)
  - [Redux](#redux)
  - [SQLite and AsyncStorage](#sqlite-and-asyncstorage)
  - Styled Components
  - TypeScript
- [License](#license)

### Get Started

Use the following command to create a new React Native app:

```sh
npx react-native init SomeApp --template https://github.com/rorazliev/react-native-starter.git
```

`cd` to the project folder and install all dependencies using the following command:

```sh
yarn install && npx pod-install
```

> **Important**: Using `npm` for managing dependencies may cause a module resolution error. Use `Yarn` instead.

### Features

#### Architecture

The template uses `babel-plugin-module-resolver` to simplify imports. The following table provides all import shortcuts, paths, and description, as well as a brief overview of the project structure:

| Shortcut | Path | Description |
|----------|------|-------------|
| `@assets/*` | `./src/assets/*` | contains custom assets like fonts and images |
| `@components/*` | `./src/components/*` | contains React components |
| `@identity/*` | `./src/identity/*` | contains identity related primitives and literals |
| `@mocks/*` | `./src/mocks/*` | contains JSON mock files |
| `@navigation/*` | `./src/navigation/*` | contains navigators and navigation stacks |
| `@redux/*` | `./src/redux/*` | contains redux-related files |
| `@screens/*` | `./src/screens/*` | contains app screens |
| `@utils/*` | `./src/utils/*` | contains helpers |

To add new paths, update the `babel.config.js` and `tsconfig.json` files.

#### Redux

The template comes with `Redux` integration, i.e., Redux Toolkit.

To learn more, read the [official docs](https://redux-toolkit.js.org/).

#### SQLite and AsyncStorage

The template comes with `SQLite` version 3 and `AsyncStorage` integration.

To learn more, read the official docs of:
- [SQLite](https://sqlite.org/docs.html)
- [SQLite module](https://github.com/andpor/react-native-sqlite-storage)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)

#### License

This is an open-source project licensed under the [MIT Lisense](LICENSE).