# Uni Clipboard API

- Create own clipboard API service
- Simple GET/POST API
- Delete data automatically. Default: 60 seconds

## Setup

1. Create `UNI_CLIPBOARD` KV namespaces

```shell
wrangler kv:namespace create "UNI_CLIPBOARD" --preview
wrangler kv:namespace create "UNI_CLIPBOARD"
```

1. Put `UNI_TOKEN` for security

```shell
$ wrangler secret put UNI_TOKEN
XXX
```

## Usage

Get clipboard

```js
await fetch('https://uni-clipboard.{your}.workers.dev/?token=XXX')
```

Update clipboard

```js
await fetch("https://uni-clipboard.{your}.workers.dev/?token=XXX", { method: "post", body: "New Content"})
```

## Development

    wranger dev

## Deploy

    wranger publish

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT
