# The Power Grid — An Illustrated Field Guide

An interactive, illustrated knowledge map of the electricity grid — from the public grid down to the wallbox.
Built as a single static page: open `index.html` and everything works, no server needed.

**Live:** <https://tqxgermany-sketch.github.io/grid-field-guide/>

**Focus:** the low-voltage side (below 20 kV) — distribution, rooftop PV, home storage, EV charging.

## What's inside

| File | Purpose |
| --- | --- |
| `index.html` | Page shell, illustration, hotspots, knowledge panel, editor |
| `knowledge.js` | Topic definitions: titles, categories, summaries, parameter rows, page templates, hotspot coordinates |
| `content.json` | **Published** pages + summary cards — loaded by every visitor |
| `assets/panorama.jpg` | The illustrated grid panorama (1671 × 941) |

## Using it

1. Double-click `index.html` (or open it in any browser).
2. Hover a device on the illustration, click it → a summary card opens.
3. **Open full knowledge page** → read or write your own content.
4. **✎ Edit page** — write the page body in Markdown (`## heading`, `**bold**`, `- list`, `| tables |`, `[[topic-id]]` cross links, `![](assets/image.png)`).
5. **✎** on the summary card — edit the overview text and the key-parameter rows.
6. Mastery marks (🔴 🟡 🟢) and personal notes are saved per topic.

## Linking pages

Inside any page write a wiki link:

```
[[mppt]]                          → jumps to the page with id "mppt"
[[mppt|maximum power point]]      → same, but shows your own label
```

- A link to an **existing** page renders as a blue chip; click it and the target opens.
  The **← Back** button returns to the page you came from (multi-level).
- A link to an **unknown** page renders as a dashed `+ ...` chip — clicking it creates that
  page and opens the editor straight away. So you can write first, fill in later.
- **+ New page** (top right of any knowledge page, or Topic Index) creates a page that is not
  attached to the illustration — for deep dives like MPPT, VDE-AR-N 4105, charge curves, etc.
- The page id is shown in small grey text under the title, so you always know what to link to.
- Your own pages are grouped under **My pages** in the Topic Index; 🗑 deletes one.

Editor tip: **🔗 Insert link** drops a `[[id]]` at the cursor for you.

## Pictures

Two ways to get an image onto a page.

**1. Upload — easiest.** In the editor click **🖼 Image**, or drag a file onto the text box,
or paste one from the clipboard. The picture is downscaled to max 1200 px, compressed,
and stored with the page as `![](img:xxxx)`. It travels with **Publish**, nothing to copy around.

**2. From the assets folder.** Put the file in `grid-map/assets/` and write:

```
![](assets/mppt-curve.png)
```

Best for large diagrams or pictures reused across pages — these stay real files in git and keep
`content.json` small.

Note: uploaded pictures live in browser storage (a few MB total). If it fills up the page says so
and refuses to save; switch to way 2 for heavy material.

## Where your writing is stored

Content you type in the browser is kept in **localStorage** of that browser — it does not live in these files.
To keep it safe / move it between machines:

- **Topic Index → ⭳ Export my data** → one JSON file (pages + cards + mastery + notes)
- **⭱ Import** on another machine to restore it
- Commit that JSON into this repository as a backup

`knowledge.js` only provides the *templates* used before you write your own text.

## Publishing your content

Content you write in the browser is private to that browser. To make it part of the site:

1. **Topic Index → 🌐 Publish to site** — downloads `content.json` (pages + summary cards only; mastery marks and notes are never published)
2. Move it into this folder, replacing the existing `content.json`
3. Commit & push
4. Wait ~1 minute, then Ctrl+F5 on the live site

Load order in the page: **your local edits → `content.json` → `knowledge.js` template**.
So your own browser always shows your newest work, while anyone else sees the published version.

`content.json` cannot be read when the page is opened via `file://` (browser security) — publishing
therefore only makes sense from the live site.

## Deploy

Live site: <https://tqxgermany-sketch.github.io/grid-field-guide/>

GitHub Pages is enabled from **main / (root)**. The repository root *is* the site root
(this repo was initialised inside the project folder), so `index.html` sits at `/` — no extra path segment.

Pushing to `main` triggers a rebuild; allow 1–2 minutes, then hard-refresh (Ctrl+F5).

## Adding a new device

1. In `knowledge.js`, copy an existing topic block and give it a new `id`.
2. Set `hotspots` — percentage positions on the panorama: `{x, y, w, h}` (left, top, width, height).
3. Optionally add `[[new-id]]` links in other pages so it becomes reachable.
