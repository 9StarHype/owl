# Owlbear Rodeo Token Reference Image Extension

This Owlbear Rodeo extension adds a right-click context menu item "Show Reference" on tokens that have a metadata key `refimage.url`. Clicking it opens a popover showing the reference image URL stored in that metadata.

## How to Use

1. Set the metadata on a token in Owlbear Rodeo:

```
Key: refimage.url
Value: https://your-site.com/path/to/image.jpg
```

2. Host this extension folder (including manifest.json, /src/main.js, /public/viewer.html) on GitHub Pages or any static file host.

3. Update `manifest.json` URLs if needed (they are relative paths).

4. In Owlbear Rodeo, go to Extensions → Add Extension, and paste the full URL to `manifest.json`.

5. Right-click a token with the metadata and click "Show Reference" to open the image.

## Development

- The extension uses Owlbear Rodeo SDK.
- `main.js` handles context menu logic.
- `viewer.html` shows the image in a popover.

## License

MIT License
