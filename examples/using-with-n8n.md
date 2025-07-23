# Using Utilities in n8n

To use these helper functions inside an n8n Function or FunctionItem node:

1. Copy the function you want from the `utils/` folder.
2. Paste it at the top of your Function node.
3. Call it inside your logic.

```javascript
// Example usage:
const input = { a: 1, b: null, c: "" };
const cleaned = cleanEmptyValues(input);
return cleaned;
```
