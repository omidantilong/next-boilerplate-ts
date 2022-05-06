module.exports = {
  extends: "next/core-web-vitals",
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  plugins: ["jest"],
};
