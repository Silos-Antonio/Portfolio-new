const { HtmlValidate } = require("html-validate");
(async () => {
  const validator = new HtmlValidate({
    extends: ["html-validate:recommended"],
    rules: {
      "no-trailing-whitespace": "off",
      "void-style": ["error", { style: "omit" }],
    },
  });
  let errors = 0;
  for (const file of ["index.html", "projects/equilibrium.html"]) {
    const report = await validator.validateFile(file);
    for (const result of report.results) {
      for (const message of result.messages) {
        console.log(
          `${file}:${message.line}:${message.column} ${message.ruleId}: ${message.message}`,
        );
      }
    }
    errors += report.errorCount;
  }
  console.log(`HTML validation: ${errors} errors.`);
  process.exitCode = errors ? 1 : 0;
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
