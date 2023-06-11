# React Native Starter

![Version](https://img.shields.io/github/package-json/v/rorazliev/react-native-starter) ![License](https://img.shields.io/github/license/rorazliev/react-native-starter) ![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen)

A starting point for React Native apps.

## Requirements

Make sure you have the Android and iOS development environment set up; double check the [following guide](https://reactnative.dev/docs/next/environment-setup).

Also make sure that you have Node 16 or newer installed on your machine.

>> **Important**: the template was designed on MacBook with M1 chip. I hope everything will work fine on Intel machines. Let me know, please.

## Get Started

Run the following command to create a new React Native app based on this template:

> Don't forget to replace `ProjectName` with a desired name.

```sh
npx react-native init ProjectName --template https://github.com/rorazliev/react-native-starter.git
```

> **Important**: If you have `yarn` installed globally, you won't be able to use this or any other custom template as `yarn` now requires names to be used instead of URL paths. Use `npm` instead.

## Features

The template comes with some cool packages installed and integrated. Some of them are `SQLite` storage, `AsyncStorage`, `reduxjs/toolkit`, `styled-components`, `react-native-gesture-handler`, `react-native-reanimated`, and much more.

See `package.json` for more infomrmation.

## Structure

The template uses `babel-plugin-module-resolver`. Use `@app/` instead of `./src/` to to simplify and "beautify" imports.

The following table provides a brief overview of the structure:

| File or Folder | Description |
|----------------|-------------|
| `@app/assets/*` | contains various assets like fonts, images, json files |
| `@app/components/*` | contains your custom React components |
| `@app/redux/*` | contains redux-related files |
| `@app/api.ts` | contains Axios instance and API calls |
| `@app/constants.ts` | contains global constrants |
| `@app/database.ts` | contains a database configuration and calls |
| `@app/navigation.tsx` | contains app navigation |
| `@app/themes.ts` | contains themes |
| `@app/types.ts` | contains type definitions |

## Useful Commands

Run `npx pod-install` to install CocoaPods

Run `npx react-native-asset` to link custom fonts to your project.

## Useful Links

If you want to replace an icon set, follow [the official guide](https://www.npmjs.com/package/react-native-vector-icons) of `react-native-vector-icons`.

#### License

This is an open-source project licensed under the [MIT Lisense](LICENSE).
