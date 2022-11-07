module.exports = {
  plugins: [
    require("postcss-prefixer")({ prefix: "sport24-", ignore: [/splide/] }),
  ],
};
