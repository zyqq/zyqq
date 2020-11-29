const plugins = [
  [
    "module-resolver",
    {
      root: ["./src"],
      extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      alias: {
        "@src": "./src",
        "@components": "./src/components",
        "@styles": "./src/styles",
      },
    },
  ],
  "@babel/plugin-syntax-jsx",
  "@babel/plugin-proposal-class-properties",
];

module.exports = {
  presets: ["@babel/preset-react"],
  plugins,
};
