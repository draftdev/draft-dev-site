# Analytics Reports Generator

A CLI tool that generates standalone HTML and PDF reports from analytics data with charts, metrics, and screenshots.

## Installation

```bash
npm install
```

Note: The first installation will download Chromium (~200MB) for PDF generation via Puppeteer.

## Quick Start

### 1. Create a New Client

```bash
npm run new-client "Client Name"
```

This creates a new client folder in `clients/` with the following structure:

```
clients/your-client-name/
├── config.json          # Client configuration
├── data/                # Data files go here
└── screenshots/         # Screenshot images
```

### 2. Prepare Your Data

You have two options for providing data:

#### Option A: CSV Files (Simple)

Create these files in `clients/your-client-name/data/`:

**`YYYY-MM-metrics.csv`** - Monthly metrics data
```csv
date,metric_name,value,previous_value,category
2025-01-31,Website Traffic,15000,12000,Traffic
2025-01-31,Conversion Rate,3.5,2.8,Engagement
2025-01-31,Revenue,50000,45000,Financial
```

**`notes.csv`** - Highlights, lowlights, and notes
```csv
date,screenshot_file,title,note,section
2025-01-15,screenshot1.png,Traffic Spike,Organic traffic increased 25%,highlights
2025-01-20,screenshot2.png,Bounce Rate,Mobile bounce rate needs attention,lowlights
2025-01-25,,Meeting Notes,Discussed Q1 strategy,notes
```

#### Option B: Excel File (Advanced)

Create `clients/your-client-name/data/analytics.xlsx` with:

**Sheet 1: "Key Metrics"** - Historical data in wide format
```
Date          | Website Traffic | Conversion Rate | Revenue
Dec 2024      | 12000          | 2.8            | 45000
Jan 2025      | 15000          | 3.5            | 50000
```

**Sheet 2: "YYYY-MM" or "Month YYYY"** - Period-specific notes
```
Highlights
- Traffic increased 25% due to new campaign
- Conversion rate improved across all channels

Lowlights
- Mobile bounce rate increased
- Email open rates declined

Notes & Questions
- Need to review mobile UX
- Consider A/B testing landing pages
```

You can also embed images directly in the Excel file.

### 3. Add Screenshots (Optional)

Place screenshot images in `clients/your-client-name/screenshots/`:

```
clients/your-client-name/screenshots/
├── screenshot1.png
├── screenshot2.png
└── traffic-chart.jpg
```

Supported formats: PNG, JPG, JPEG, WebP, SVG

### 4. Configure Client Settings

Edit `clients/your-client-name/config.json`:

```json
{
  "name": "Client Display Name",
  "brandColor": "#3B82F6",
  "sections": ["metrics", "charts", "screenshots"],
  "charts": [
    {
      "metric": "Website Traffic",
      "type": "line",
      "size": "large"
    },
    {
      "metric": "Conversion Rate",
      "type": "bar",
      "size": "small"
    }
  ]
}
```

## Generating Reports

### Generate HTML Report (Default)

```bash
# For specific client and month
npm run generate your-client-name -- --month 2025-01

# For current month (auto-detected)
npm run generate your-client-name
```

Or using the CLI directly:

```bash
node src/index.js generate your-client-name --month 2025-01
```

Output: `output/your-client-name/2025-01-report.html`

### Generate PDF Report

```bash
npm run generate your-client-name -- --month 2025-01 --format pdf
```

Or:

```bash
node src/index.js generate your-client-name --month 2025-01 --format pdf
```

Output: `output/your-client-name/2025-01-report.pdf`

### Generate Both HTML and PDF

```bash
npm run generate your-client-name -- --month 2025-01 --format both
```

Or:

```bash
node src/index.js generate your-client-name --month 2025-01 --format both
```

Output: Both `.html` and `.pdf` files in `output/your-client-name/`

### Generate for All Clients

```bash
npm run generate -- --all --month 2025-01 --format both
```

Or:

```bash
node src/index.js generate --all --month 2025-01 --format both
```

## CLI Commands

### List All Clients

```bash
npm run list-clients
```

Or:

```bash
node src/index.js list-clients
```

### Help

```bash
node src/index.js --help
node src/index.js generate --help
```

## Command Reference

```bash
node src/index.js generate [client] [options]

Options:
  -m, --month <month>    Report month in YYYY-MM format (default: current month)
  -a, --all              Generate reports for all clients
  -o, --output <dir>     Output directory (default: ./output)
  -f, --format <format>  Output format: html, pdf, or both (default: html)
```

## Output Files

Reports are saved to `output/client-name/`:

```
output/
└── your-client-name/
    ├── 2025-01-report.html    # Standalone HTML file
    └── 2025-01-report.pdf     # PDF version
```

The HTML files are fully self-contained with:
- All images embedded as base64
- All CSS inlined
- All JavaScript for charts included
- Can be opened in any browser without dependencies

## Chart Configuration

Available chart types:
- `line` - Line chart with trend lines
- `bar` - Bar chart
- `comparison` - Side-by-side comparison bars

Available sizes:
- `large` - Full width (400px height)
- `medium` - Half width (300px height)
- `small` - Quarter width in 2x2 grid (180px height)

## Metrics Categories

Metrics are automatically grouped by category:
- Traffic
- Engagement
- SEO
- Content
- Technical
- Financial
- Social

Add custom categories in your CSV/Excel data.

## Troubleshooting

### "Client not found" error
Make sure the client folder exists in `clients/` directory.

### "Metrics file not found" error
Ensure your data file is named correctly (e.g., `2025-01-metrics.csv`) and is in the `clients/your-client-name/data/` folder.

### PDF generation fails
- Make sure Puppeteer is installed: `npm install`
- Chromium download may take time on first install
- Try running with `--format html` first to verify the HTML generates correctly

### Charts not rendering
- Check that Chart.js CDN is accessible
- Verify chart configurations in `config.json`
- Ensure metric names match exactly between data and config

## Development

### Build Tailwind CSS

```bash
npm run build:css
```

This compiles `styles/input.css` to `styles/output.css` (embedded in reports).

## File Structure

```
analyticsreports/
├── clients/              # Client configurations and data
│   └── client-name/
│       ├── config.json
│       ├── data/
│       └── screenshots/
├── output/               # Generated reports
├── src/
│   ├── index.js         # CLI entry point
│   ├── generator.js     # Report generation logic
│   ├── pdf-generator.js # PDF generation
│   ├── charts/          # Chart rendering
│   ├── parsers/         # CSV/Excel parsers
│   ├── templates/       # EJS templates
│   └── utils/           # Helper utilities
├── styles/              # Tailwind CSS
└── package.json
```

## License

ISC
