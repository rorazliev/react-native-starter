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
          '@assets': './src/assets',
          '@components': './src/components',
          '@identity': './src/identity',
          '@mocks': './src/mocks',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
