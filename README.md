# SI API RESPONSE

## JSON structure

- what matters in chatapp: `body`, and `comment_id`.

```json
{
  "bot_response": {
    "author": "",
    "comment_id": "",
    "body": "",
    "edits": [],
    "parent": [],
    "created": "",
    "is_dangling": false,
    "is_frozen": false,
    "flaggers_typo": [],
    "flaggers_context": [],
    "tree": {},
    "depth": 0,
    "character": {}
  },
  "next_options": [
    {
      "author": "",
      "comment_id": "",
      "body": "",
      "edits": [],
      "parent": [],
      "created": "",
      "is_dangling": false,
      "is_frozen": false,
      "flaggers_typo": [],
      "flaggers_context": [],
      "tree": {},
      "depth": 1,
      "character": {}
    }
  ]
}
```

- Initial Request

  - `{"prev_bot_cid": null, "user_utt": "hello"}`

- Response
  - bot_response

```
comment_id: "406826c0-c80c-439f-9947-5f16d13b4d2c"
body: "よく一人でご飯食べるの？"
```

- next_options

```
{
  comment_id: "b00c6e69-efc1-4a2a-99a7-f579eda15b33"
  body:  "よく一人で食べるよ。"
},
{
  comment_id: "e6ca0411-6894-4dd0-9207-1ec250664f51"
  body: "一人では食べないな。"
}
```
