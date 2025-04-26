const express = require('express');
const cors = require('cors');
const { createClient } = require('@sanity/client');
const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies
app.use(bodyParser.json());

// Create Sanity client with token
const sanityClient = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID,
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  apiVersion: process.env.VITE_SANITY_API_VERSION || '2023-05-03',
  token: process.env.VITE_SANITY_TOKEN, // Use token from environment variables
  useCdn: false, // Don't use CDN for real-time data
});

// Proxy endpoint for Sanity queries
app.post('/api/query', async (req, res) => {
  try {
    const { query, params } = req.body;
    const result = await sanityClient.fetch(query, params);
    res.json(result);
  } catch (error) {
    console.error('Sanity query error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Proxy endpoint for Sanity GROQ queries
app.get('/api/data/query/:dataset', async (req, res) => {
  try {
    const { query } = req.query;
    const { dataset } = req.params;
    
    // Decode the query from URL
    const decodedQuery = decodeURIComponent(query);
    
    // Execute the query
    const result = await sanityClient.fetch(decodedQuery);
    
    // Return the result
    res.json(result);
  } catch (error) {
    console.error('Sanity query error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
}); 