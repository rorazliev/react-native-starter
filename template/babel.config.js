module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        minify: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        extentions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@app': './src',
        },
      },
    ],
    [
      'react-native-reanimated/plugin',
      {
        relativeSourceLocation: true,
      },
    ],
  ],
};
