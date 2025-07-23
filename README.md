# n8n-transform-utils

A collection of clean, reusable JavaScript functions designed to be pasted into [n8n](https://n8n.io) workflows. These can be used inside Function or FunctionItem nodes to simplify and optimise data transformation.

Included Utilities

| Function           | Description |
|--------------------|-------------|
| `cleanEmptyValues` | Removes null/undefined/empty string fields from an object |
| `flattenArray`     | Flattens a one-level nested array |
| `groupByKey`       | Groups an array of objects by a specific object key |

How to Use

1. In n8n, open a `Function Item` node
2. Paste one of the helper functions at the top
3. Use it inside your custom logic

See [`examples/using-with-n8n.md`](examples/using-with-n8n.md) for real-world use.

Why This Exists

Most n8n workflows involve some form of repetitive data cleanup or formatting. These utilities help:
- Speed up Function node scripting
- Reduce repetitive coding
- Improve collaboration for non-dev users

> Pull requests welcome!
