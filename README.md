Astral Duality: Primal Zodiac Synthesis Engine

Astral Duality is a serverless, client-side React application that calculates, maps, and synthesizes individual personality archetypes. By bridging Western tropical astrology with Eastern lunar calendar systems and birth-hour ascendants, the application provides an integrated reading of an individual's psychological makeup and elemental compatibility.

The project is designed with a strong focus on clean architecture, modular software design, and absolute client-side calculation efficiency.

Technical Features

1. Accurate Lunar Calendar Calculations

Unlike standard Eastern zodiac calculators that rely on simple Gregorian year divisions, this application integrates a complete lookup table of shifting Lunar New Year dates from 1930 to 2035. This ensures that users born in January or February are assigned their correct lunar sign, eliminating the common "off-by-one" calculation errors found in less rigorous tools.

2. Algorithmic Synergy Engine

The built-in compatibility tool uses a deterministic rules-based matrix to evaluate connection dynamics between two individuals. It calculates affinity by analyzing:

Western Modalities and Elements: Assessing alignment across Cardinal, Fixed, and Mutable states, as well as elemental groups (Fire, Earth, Air, Water).

Eastern Elemental Cycles: Modeling the productive and destructive relationships between Eastern elements (Wood, Fire, Earth, Metal, Water).
The resulting synergy score is bounded between $45\%$ and $99\%$, reflecting realistic interpersonal chemistry through localized calculations without any external database dependencies or API overhead.

3. Fully Customized Vector Graphic (SVG) Interface

To maintain a modern, minimalist aesthetic, all standard emojis have been removed. Instead, the application features custom, lightweight vector line-art (SVG) glyphs for all 24 zodiac signs. This keeps the document size incredibly compact and ensures responsive rendering on any screen size.

Core System Architecture

astral-duality/
├── src/
│ ├── components/
│ │ ├── AstroInputForm.jsx # Inputs for birthday and birth-hour
│ │ ├── ZodiacDashboard.jsx # Modular layout presenting results
│ │ ├── CompatibilityTool.jsx # Pure client-side synergy calculator
│ │ └── ZodiacIcons.jsx # Inline vector SVG icons
│ ├── data/
│ │ └── zodiacData.js # Shifting LNY dates and 144-archetype lookup
│ ├── utils/
│ │ └── astrologyEngine.js # Core mathematical and lookup logic
│ ├── App.jsx # App-wide routing and coordinate state
│ ├── index.css # Tailwind CSS compiling and animations
│ └── main.jsx
├── package.json
└── tailwind.config.js

Computational Efficiency

All astrological sign lookups and textual synthesis runs in $O(1)$ constant time complexity. By localizing the calculations, the engine executes instantaneously on the client side, bypassing the need for a backend web server or asynchronous network requests.

Local Development Instructions

Prerequisites

Ensure you have Node.js installed on your computer.

Installation & Initialization

Clone or download the repository to your local drive.

Open your terminal in the root folder of the project.

Install the required modules and assets:

npm install

Start the local development server:

npm run dev

Open the local address generated in your terminal (typically http://localhost:5173) in your web browser.
