const rule = require("../anchor-has-content");
const makeRuleTester = require("./makeRuleTester");

makeRuleTester("anchor-has-content", rule, {
  valid: [
    "<a>Anchor Content!</a>",
    "<a is='TextWrapper' />",
    "<a v-text='msg' />",
    "<a v-html='msg' />",
    "<a><slot /></a>",
    "<VAnchor  />",
    "<a aria-label='This is my label' />"
  ],
  invalid: [
    "<a />",
    {
      code: "<v-anchor  />",
      options: [{ components: ["VAnchor"] }],
      errors: [{ messageId: "default" }]
    }
  ]
});
