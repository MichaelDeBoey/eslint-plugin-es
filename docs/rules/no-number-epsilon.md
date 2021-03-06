# es/no-number-epsilon
> disallow the `Number.EPSILON` property

- ✅ The following configurations enable this rule: `plugin:es/no-new-in-es2015`, `plugin:es/restrict-to-es3`, and `plugin:es/restrict-to-es5`

This rule reports ES2015 `Number.EPSILON` property as errors.

## Examples

⛔ Examples of **incorrect** code for this rule:

<eslint-playground type="bad" code="/*eslint es/no-number-epsilon: error */
const b = Number.EPSILON
" />

## 📚 References

- [Rule source](https://github.com/mysticatea/eslint-plugin-es/blob/v4.1.0/lib/rules/no-number-epsilon.js)
- [Test source](https://github.com/mysticatea/eslint-plugin-es/blob/v4.1.0/tests/lib/rules/no-number-epsilon.js)
