# The Power Grid — An Illustrated Field Guide

An interactive, illustrated knowledge map of the electricity grid — from the public grid down to the wallbox.
Built as a single static page: open `index.html` and everything works, no server needed.

**Focus:** the low-voltage side (below 20 kV) — distribution, rooftop PV, home storage, EV charging.

## What's inside

| File | Purpose |
| --- | --- |
| `index.html` | Page shell, illustration, hotspots, knowledge panel, editor |
| `knowledge.js` | Topic definitions: titles, categories, summaries, parameter rows, page templates, hotspot coordinates |
| `assets/panorama.jpg` | The illustrated grid panorama (1671 × 941) |

## Using it

1. Double-click `index.html` (or open it in any browser).
2. Hover a device on the illustration, click it → a summary card opens.
3. **Open full knowledge page** → read or write your own content.
4. **✎ Edit page** — write the page body in Markdown (`## heading`, `**bold**`, `- list`, `| tables |`, `[[topic-id]]` cross links, `![](assets/image.png)`).
5. **✎** on the summary card — edit the overview text and the key-parameter rows.
6. Mastery marks (🔴 🟡 🟢) and personal notes are saved per topic.

## Where your writing is stored

Content you type in the browser is kept in **localStorage** of that browser — it does not live in these files.
To keep it safe / move it between machines:

- **Topic Index → ⭳ Export my data** → one JSON file (pages + cards + mastery + notes)
- **⭱ Import** on another machine to restore it
- Commit that JSON into this repository as a backup

`knowledge.js` only provides the *templates* used before you write your own text.

## Deploy (optional)

GitHub Pages: **Settings → Pages → Source: Deploy from a branch → main / (root)**.
Because the site lives in a subfolder, use <https://USERNAME.github.io/REPO/grid-map/>.

## Adding a new device

1. In `knowledge.js`, copy an existing topic block and give it a new `id`.
2. Set `hotspots` — percentage positions on the panorama: `{x, y, w, h}` (left, top, width, height).
3. Optionally add `[[new-id]]` links in other pages so it becomes reachable.
