/*
 * knowledge.js — Grid Knowledge Map data file
 * ============================================
 * 这个文件定义：图上有哪些知识点、热区位置、摘要卡信息。
 *
 * ★ 知识页正文（detail）现在只是"章节骨架 + 写作提示"。
 *   你可以直接在网页里点 "Edit page" 自己写——
 *   写的内容保存在浏览器里（localStorage），优先级高于这里的 detail。
 *   想改回模板：编辑器里的 "Restore template"。
 *
 * 字段说明：
 *   title:     标题（热区提示、面板、内链都显示它）
 *   category:  分区（索引页按它分组）
 *   voltage:   电压徽章文字（"" 或 "—" 表示不显示）
 *   depth:     "key" | "medium" | "basic"
 *   summary:   摘要卡里的一句话概述（也可自己改）
 *   params:    [["参数名", "值"], ...] 摘要卡的关键参数
 *   detail:    Markdown 正文模板（当你在网页里写过内容后，这段会被忽略）
 *   hotspots:  [{x,y,w,h}] 图片上的百分比位置
 */

const KNOWLEDGE = {

  "public-grid": {
    title: "Public Grid",
    category: "Grid Side",
    voltage: "110 / 30 / 20 kV",
    depth: "basic",
    summary: "The interconnected high- and medium-voltage network that transports electrical energy from large power plants to the local distribution transformer.",
    params: [
      ["Frequency", "50 Hz (ENTSO-E)"],
      ["Extra-high voltage", "380 / 220 kV"],
      ["High voltage (HV)", "110 kV"],
      ["Medium voltage (MV)", "10 – 30 kV (20 kV typical)"]
    ],
    detail: `# Public Grid

> Empty page — click **Edit page** (top right) to write your own content.
> This is a scaffold; keep the sections you like, delete the rest.

## Overview
*What is this, in one or two sentences of your own words?*

## Voltage levels
| Level | Voltage | Where it appears |
| --- | --- | --- |
|  |  |  |

## Key concepts
- 

## Things I got wrong
- 

## Related
[[distribution-transformer]] · [[low-voltage-grid]]`,
    hotspots: [{x: 0, y: 13, w: 11, h: 44}]
  },

  "distribution-transformer": {
    title: "Distribution Transformer",
    category: "Grid Side",
    voltage: "10/0.4 kV",
    depth: "key",
    summary: "The local network station (Ortsnetzstation) that steps medium voltage down to 400/230 V — the interface between the MV grid and every household.",
    params: [
      ["Typical ratings", "250 / 400 / 630 kVA"],
      ["Vector group", "Dyn5 (standard)"],
      ["Cooling", "Oil-immersed / dry-type"],
      ["LV earthing", "Solidly earthed star point"]
    ],
    detail: `# Distribution Transformer

> Empty page — click **Edit page** to start writing.

## Overview
*Where does it sit in the chain, and why does it exist?*

## Vector group / connection
| Item | Meaning |
| --- | --- |
|  |  |

## Losses
- No-load (iron) loss:
- Load (copper) loss:

## Protection
- 

## Things I got wrong
- 

## Related
[[public-grid]] · [[low-voltage-grid]]`,
    hotspots: [{x: 10.5, y: 46, w: 12.5, h: 29}]
  },

  "low-voltage-grid": {
    title: "Low-Voltage Grid",
    category: "Grid Side",
    voltage: "400 / 230 V",
    depth: "key",
    summary: "The final and densest part of the network: 400 V three-phase lines distributing power from the local network station to every house connection.",
    params: [
      ["Phase–phase", "400 V"],
      ["Phase–neutral", "230 V"],
      ["Voltage tolerance", "±10 % (EN 50160)"],
      ["Typical cable", "NAYY / NYY underground"]
    ],
    detail: `# Low-Voltage Grid

> Empty page — click **Edit page** to start writing.

## Overview
*Why 400 V and 230 V at the same time?*

## Structure
- 

## Voltage quality limits
| Quantity | Limit |
| --- | --- |
|  |  |

## Voltage drop / rise
*What limits the length of a feeder? What happens when PV feeds in?*

## Things I got wrong
- 

## Related
[[distribution-transformer]] · [[grid-connection]] · [[rooftop-pv]]`,
    hotspots: [{x: 27.2, y: 37.5, w: 5.5, h: 35.5}]
  },

  "grid-connection": {
    title: "Grid Connection / Hausanschluss",
    category: "House Connection",
    voltage: "400 / 230 V",
    depth: "key",
    summary: "The service point where the network operator's cable ends and the house installation begins — governed by VDE-AR-N 4100 and limited by the connection power.",
    params: [
      ["Governing rule", "VDE-AR-N 4100"],
      ["Typical main fuse", "3 × 63 A"],
      ["Connection power", "30 – 50 kW (household)"],
      ["Ownership boundary", "Grid operator up to this point"]
    ],
    detail: `# Grid Connection (Hausanschluss)

> Empty page — click **Edit page** to start writing.

## Overview
*What exactly is handed over here, and by whom?*

## What's inside
1. 
2. 
3. 

## Connection power
*Which loads have to be declared, and what happens when they add up?*

## Things I got wrong
- 

## Related
[[smart-meter]] · [[low-voltage-grid]] · [[household-loads]]`,
    hotspots: [{x: 40, y: 43, w: 6.5, h: 15}]
  },

  "smart-meter": {
    title: "Smart Meter",
    category: "House Connection",
    voltage: "—",
    depth: "medium",
    summary: "Bidirectional metering point: measures consumption and feed-in separately and, in the smart variant, communicates with the grid operator and controls flexible loads.",
    params: [
      ["Measures", "Import & export separately"],
      ["Communication", "Smart Meter Gateway (BSI)"],
      ["Load control", "§14a EnWG (Steuerbox)"]
    ],
    detail: `# Smart Meter

> Empty page — click **Edit page** to start writing.

## Overview
*Why does the meter need two directions?*

## Conventional vs smart
| | Conventional | Smart |
| --- | --- | --- |
|  |  |  |

## What it enables
- 

## Things I got wrong
- 

## Related
[[grid-connection]] · [[household-loads]]`,
    hotspots: [{x: 40, y: 58, w: 6.5, h: 17}]
  },

  "hybrid-inverter": {
    title: "Hybrid Inverter",
    category: "PV System",
    voltage: "DC 100–600 V / AC 230 V",
    depth: "key",
    summary: "The heart of the rooftop PV system: converts DC to AC, runs MPPT on the strings, integrates battery storage and satisfies the grid code VDE-AR-N 4105.",
    params: [
      ["Peak efficiency", "97 – 98 %"],
      ["MPP trackers", "usually 2"],
      ["Grid code", "VDE-AR-N 4105"],
      ["DC/AC ratio", "≈ 1.1 – 1.3"]
    ],
    detail: `# Hybrid Inverter

> Empty page — click **Edit page** to start writing.

## Overview
*What three jobs does it combine?*

## How it works
1. MPPT:
2. DC → AC:
3. Battery port:

## Grid-code requirements
| Requirement | Meaning |
| --- | --- |
|  |  |

## Things I got wrong
- 

## Related
[[rooftop-pv]] · [[battery-storage]] · [[grid-connection]]`,
    hotspots: [{x: 65.5, y: 34, w: 7.5, h: 15}]
  },

  "rooftop-pv": {
    title: "Photovoltaic (Rooftop)",
    category: "PV System",
    voltage: "DC 100–600 V",
    depth: "key",
    summary: "The energy source on the roof: crystalline silicon modules wired in series (strings), producing DC power proportional to irradiance.",
    params: [
      ["Module power", "400 – 460 Wp"],
      ["Efficiency", "20 – 22 %"],
      ["Specific yield (DE)", "950 – 1,100 kWh/kWp·a"],
      ["Temp. coefficient", "≈ −0.35 %/K"]
    ],
    detail: `# Rooftop Photovoltaic

> Empty page — click **Edit page** to start writing.

## Overview
*How does a cell produce current?*

## Series and parallel
- Serial connection:
- Parallel connection:

## Yield: orientation & tilt
| Orientation / tilt | Relative yield |
| --- | --- |
|  |  |

## Temperature and shading
- 

## Things I got wrong
- 

## Related
[[hybrid-inverter]] · [[battery-storage]] · [[low-voltage-grid]]`,
    hotspots: [{x: 49, y: 8, w: 34, h: 30}]
  },

  "battery-storage": {
    title: "Battery Storage (BESS)",
    category: "Storage",
    voltage: "DC 48 V / HV 100–500 V",
    depth: "key",
    summary: "Home battery storage: shifts PV surplus from midday to evening. Today almost exclusively LiFePO₄ cells with an integrated BMS.",
    params: [
      ["Typical capacity", "5 – 15 kWh"],
      ["Round-trip efficiency", "85 – 90 %"],
      ["Cycle life (LFP)", "6,000 – 10,000"],
      ["Sizing rule of thumb", "≈ 1 kWh per 1,000 kWh/a"]
    ],
    detail: `# Battery Storage (BESS)

> Empty page — click **Edit page** to start writing.

## Overview
*Why store energy at home at all?*

## SOC / SOH / DOD
| Term | Meaning |
| --- | --- |
|  |  |

## Chemistries
| | LFP | NMC |
| --- | --- | --- |
|  |  |  |

## AC-coupled vs DC-coupled
- 

## Things I got wrong
- 

## Related
[[hybrid-inverter]] · [[household-loads]] · [[ev-charger-wallbox]]`,
    hotspots: [{x: 54.5, y: 53, w: 8.5, h: 23}]
  },

  "distribution-board": {
    title: "Distribution Board",
    category: "Household",
    voltage: "230 / 400 V",
    depth: "medium",
    summary: "The fuse box (Sicherungskasten): splits the installation into circuits and protects people (RCD/FI) and cables (MCB/LS).",
    params: [
      ["RCD (FI)", "30 mA, person protection"],
      ["MCB example", "B16 → 16 A"],
      ["Surge protection", "Type 1 + 2"],
      ["Standard", "DIN VDE 0100-530/-540"]
    ],
    detail: `# Distribution Board

> Empty page — click **Edit page** to start writing.

## Overview
*What sits inside, top to bottom?*

## Devices and what they protect
| Device | Protects | Trip value |
| --- | --- | --- |
|  |  |  |

## Circuits for big loads
- Wallbox:
- Heat pump:

## Things I got wrong
- 

## Related
[[ev-charger-wallbox]] · [[grid-connection]] · [[household-loads]]`,
    hotspots: [{x: 70, y: 50.5, w: 8.5, h: 12}]
  },

  "household-loads": {
    title: "Household Loads",
    category: "Household",
    voltage: "230 / 400 V AC",
    depth: "key",
    summary: "Everything that consumes in the house: base load, appliances, and the new big flexible loads (EV, heat pump) that reshape the load curve.",
    params: [
      ["German average (3 pers.)", "≈ 4,000 kWh/a"],
      ["Base load", "100 – 300 W"],
      ["Standard circuit", "B16 → ~3 kW"],
      ["Load profile", "H0"]
    ],
    detail: `# Household Loads

> Empty page — click **Edit page** to start writing.

## Overview
*What does a typical daily load curve look like, and how does PV fit it?*

## Typical powers
| Appliance | Power | Notes |
| --- | --- | --- |
|  |  |  |

## Peak arithmetic
*Which loads can run at the same time before the main fuse trips?*

## Tariffs and flexibility
- 

## Things I got wrong
- 

## Related
[[battery-storage]] · [[ev-charger-wallbox]] · [[smart-meter]]`,
    hotspots: [{x: 76, y: 34, w: 18, h: 13}]
  },

  "ev-charger-wallbox": {
    title: "EV Charger (Wallbox)",
    category: "Mobility",
    voltage: "230 / 400 V AC",
    depth: "key",
    summary: "AC charging point (Mode 3): the wallbox is an intelligent, secured contactor — the actual charger sits inside the car.",
    params: [
      ["1-phase max", "7.4 kW (32 A)"],
      ["3-phase standard", "11 kW (16 A)"],
      ["3-phase max", "22 kW (32 A)"],
      ["Communication", "IEC 61851 / ISO 15118"]
    ],
    detail: `# EV Charger (Wallbox)

> Empty page — click **Edit page** to start writing.

## Overview
*Why is the wallbox not the charger?*

## Power matrix
| | 1-phase | 3-phase |
| --- | --- | --- |
| 16 A |  |  |
| 32 A |  |  |

## Communication
- IEC 61851:
- ISO 15118:

## Installation requirements
- 

## Things I got wrong
- 

## Related
[[distribution-board]] · [[household-loads]] · [[battery-storage]]`,
    hotspots: [{x: 83, y: 55.5, w: 6, h: 22}, {x: 80.5, y: 66, w: 19, h: 19}]
  }

};

/* Grouped order for the topic index overlay */
const TOPIC_ORDER = [
  "public-grid",
  "distribution-transformer",
  "low-voltage-grid",
  "grid-connection",
  "smart-meter",
  "rooftop-pv",
  "hybrid-inverter",
  "battery-storage",
  "distribution-board",
  "household-loads",
  "ev-charger-wallbox"
];
