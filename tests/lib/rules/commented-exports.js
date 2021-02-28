const RuleTester = require("eslint").RuleTester;

const rule = require("../../../lib/rules/commented-exports");

const ruleTester = new RuleTester();
ruleTester.run("commented-exports", rule, {
  valid: [
    {
      code: "export * from './brock';",
      parserOptions: { ecmaVersion: 2019, sourceType: "module" },
    },
    {
      code: "/** Comment */\n export default function(){};",
      parserOptions: { ecmaVersion: 2019, sourceType: "module" },
    },
    {
      code: "/** Comment */\n export function myFunc(){};",
      parserOptions: { ecmaVersion: 2019, sourceType: "module" },
    },
  ],

  invalid: [
    {
      code: "export default function(){};",
      parserOptions: { ecmaVersion: 2019, sourceType: "module" },
      errors: [{ messageId: "uncommentedExport" }],
    },
    {
      code: "/* Comment */\n export default function(){};",
      parserOptions: { ecmaVersion: 2019, sourceType: "module" },
      errors: [{ messageId: "jsdocComment" }],
    },
    {
      code: "// Comment\n export default function(){};",
      parserOptions: { ecmaVersion: 2019, sourceType: "module" },
      errors: [{ messageId: "jsdocComment" }],
    },
  ],
});
