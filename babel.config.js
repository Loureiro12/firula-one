module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      'react-native-reanimated/plugin',
      [
        "module-resolver",
        {
          root: ".",
          extensions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".android.js",
            ".android.tsx",
            ".ios.js",
            ".ios.tsx",
          ],
          alias: {
            "@components": "./src/components",
            "@styles": "./src/styles",
            "@navigation": "./src/navigation",
            "@screens": "./src/screens",
            "@assets": "./src/assets",
          },
        },
      ],
    ],
  };
};
