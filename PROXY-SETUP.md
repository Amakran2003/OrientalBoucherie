# Sanity API Proxy Setup

This document explains how to set up and use the proxy server to avoid CORS issues when working with the Sanity API in a local development environment.

## Problem

When developing locally, you may encounter CORS (Cross-Origin Resource Sharing) errors when trying to access the Sanity API directly from your browser. This happens because the Sanity API doesn't allow requests from localhost by default.

## Solution

We've implemented a proxy server that sits between your application and the Sanity API. This server:

1. Forwards requests to the Sanity API
2. Adds the necessary CORS headers to the response
3. Handles authentication with your Sanity token securely

## Setup Instructions

1. Create a `.env` file in the root of your project with the following content:

```
# Sanity credentials
VITE_SANITY_PROJECT_ID=rrwhrsep
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2023-05-03
VITE_SANITY_TOKEN=your_sanity_token_here

# Server configuration
PORT=3001
```

2. Replace `your_sanity_token_here` with your actual Sanity token. You can find this in your Sanity project settings.

## Running the Application

### Development Mode

To run the application in development mode with the proxy server:

```bash
npm run dev:with-proxy
```

This will start both the Vite development server and the proxy server.

### Preview Production Build

To preview the production build with the proxy server:

```bash
./preview-dist.sh
```

Or manually:

```bash
npm run preview:with-proxy
```

## How It Works

1. The proxy server runs on port 3001 by default
2. Your application is configured to use this proxy server in development mode
3. The proxy server forwards requests to the Sanity API with your token
4. The Sanity API responds to the proxy server
5. The proxy server adds CORS headers and sends the response back to your application

## Troubleshooting

If you're still experiencing CORS issues:

1. Make sure the proxy server is running
2. Check that your Sanity token is correct
3. Verify that your application is configured to use the proxy server (see `src/lib/sanity.ts`)
4. Try clearing your browser cache 