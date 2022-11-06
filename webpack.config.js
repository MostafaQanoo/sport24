// module.exports = ({ mode } = { mode: "production" }) => {
//   console.log(`mode is: ${mode}`);

//   return {
//     module: {
//       rules: [
//         {
//           test: /\.css$/,
//           use: [
//             require.resolve("style-loader"),
//             require.resolve("css-loader"),
//             {
//               loader: require.resolve("postcss-loader"),
//               options: {
//                 postcssOptions: {
//                   plugins: {
//                     "postcss-prefix-selector": {
//                       prefix: ".sport24",
//                       transform(
//                         prefix,
//                         selector,
//                         prefixedSelector,
//                         filePath,
//                         rule
//                       ) {
//                         if (selector.match(/^(html|body)/)) {
//                           return selector.replace(/^([^\s]*)/, `$1 ${prefix}`);
//                         }

//                         if (filePath.match(/node_modules/)) {
//                           return selector; // Do not prefix styles imported from node_modules
//                         }

//                         const annotation = rule.prev();
//                         if (
//                           annotation?.type === "comment" &&
//                           annotation.text.trim() === "no-prefix"
//                         ) {
//                           return selector; // Do not prefix style rules that are preceded by: /* no-prefix */
//                         }

//                         return prefixedSelector;
//                       },
//                     },
//                     autoprefixer: {
//                       browsers: ["last 4 versions"],
//                     },
//                   },
//                 },
//               },
//             },
//           ],
//         },
//       ],
//     },
//   };
// };
