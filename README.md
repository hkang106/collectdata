# SI API RESPONSE

## JSON structure

- what matters in chatapp: body, and comment_id

```json
{
  (...),

  "bot_response": {
    author,
    <h3>comment_id</h3>,
    body,
    edits,
    parent,
    created,
    is_dangling,
    is_frozen,
    flaggers_typo,
    flaggers_context,
    tree,
    depth,
    character
  },
  "next_options": [
    {
      author,
      comment_id,
      body,
      edits,
      parent,
      created,
      is_dangling,
      is_frozen,
      flaggers_typo,
      flaggers_context,
      depth,
      character
    }
  ]
}
```
