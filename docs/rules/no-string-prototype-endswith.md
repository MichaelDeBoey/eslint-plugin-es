# es/no-string-prototype-endswith
> disallow the `String.prototype.endsWith` method

- ✅ The following configurations enable this rule: `plugin:es/no-new-in-es2015`, `plugin:es/restrict-to-es3`, and `plugin:es/restrict-to-es5`

This rule reports ES2015 `String.prototype.endsWith` method as errors.

This rule is silent by default because it's hard to know types. You need to configure [the aggressive mode](../#the-aggressive-mode) or TypeScript in order to enable this rule.

## 💡 Examples

⛔ Examples of **incorrect** code for this rule:

<eslint-playground type="bad" code="/*eslint es/no-string-prototype-endswith: [error, { aggressive: true }] */
foo.endsWith(&quot;a&quot;)
" />

## 🔧 Options

This rule has an option.

```yml
rules:
  es/no-string-prototype-endswith: [error, { aggressive: false }]
```

### aggressive: boolean

Configure the aggressive mode for only this rule.
This is prior to the `settings.es.aggressive` setting.

## 📚 References

- [Rule source](https://github.com/mysticatea/eslint-plugin-es/blob/v4.1.0/lib/rules/no-string-prototype-endswith.js)
- [Test source](https://github.com/mysticatea/eslint-plugin-es/blob/v4.1.0/tests/lib/rules/no-string-prototype-endswith.js)
