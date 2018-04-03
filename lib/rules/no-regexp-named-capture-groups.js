/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { definePatternMatcher } = require("../utils")
const hasNamedCaptureGroup = definePatternMatcher(/\(\?<[_$\w]/g)

module.exports = {
    meta: {
        docs: {
            description: "disallow RegExp named capture groups.",
            category: "ES2018",
            recommended: false,
            url:
                "https://github.com/mysticatea/eslint-plugin-es/blob/v1.0.0/docs/rules/no-regexp-named-capture-groups.md",
        },
        fixable: null,
        schema: [],
        messages: {
            forbidden: "ES2018 RegExp named capture groups are forbidden.",
        },
    },
    create(context) {
        return {
            "Literal[regex]"(node) {
                if (hasNamedCaptureGroup(node.regex.pattern)) {
                    context.report({ node, messageId: "forbidden" })
                }
            },
        }
    },
}