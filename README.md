# TrustMRR n8n community node

Access verified startup revenue, MRR, growth metrics, and acquisition listings from TrustMRR

Generated from OpenAPI 1.0.0 with template 1.1.0. Generated files are platform-managed and will be overwritten during regeneration.

## Authentication

Configure the generated bearer token credential in n8n before using the node.

## Supported operations

- `GET /startups/{slug}` - Get Startup
  - Retry Contract: none
  - Pagination Contract: none
- `GET /startups` - Get Many Startups
  - Retry Contract: none
  - Pagination Contract: none

## Usage

1. Install this community-node package in n8n.
2. Add the **TrustMRR** node to a workflow.
3. Select a resource and operation, configure its parameters, and execute the workflow.

## Example workflow

Connect **Manual Trigger** -> **TrustMRR** -> a destination node, select an operation, then run the workflow and inspect the returned items.

## Development

```sh
npm install
npm run build
npm run lint
npm run dev
```

`npm run dev` starts a local n8n development instance. Find the integration by its **TrustMRR** display name.
