---
"@eduportdesign/tokens": minor
"@eduportdesign/web-components": patch
"@eduportdesign/react": patch
---

Add an opt-in base stylesheet, `@eduportdesign/tokens/css/base`, that styles `body`, headings, text, links, code and the focus ring with the semantic tokens, so the parts of an app that aren't components match the components. It lives in `@layer ep-base` with zero specificity, resets heading, paragraph and list margins to 0, and adds `.ep-prose` and `.ep-visually-hidden`. Package READMEs now import it and point to the AI and app guide.
