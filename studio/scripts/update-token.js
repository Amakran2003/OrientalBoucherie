import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

// Get directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Path to .env file
const envPath = path.join(__dirname, '..', '.env');

// Check if .env file exists
if (!fs.existsSync(envPath)) {
  console.log('❌ .env file not found. Creating a new one...');
  fs.writeFileSync(envPath, '');
}

// Read current .env content
let envContent = fs.readFileSync(envPath, 'utf8');

// Function to update or add SANITY_AUTH_TOKEN
function updateToken(token) {
  const tokenRegex = /SANITY_AUTH_TOKEN=.*/;
  
  if (tokenRegex.test(envContent)) {
    // Update existing token
    envContent = envContent.replace(tokenRegex, `SANITY_AUTH_TOKEN=${token}`);
  } else {
    // Add new token
    envContent += `\nSANITY_AUTH_TOKEN=${token}`;
  }
  
  // Write updated content back to .env
  fs.writeFileSync(envPath, envContent);
  console.log('✅ Token updated in .env file');
}

// Prompt for token
rl.question('Enter your new Sanity token with Editor permissions: ', (token) => {
  if (token.trim()) {
    updateToken(token.trim());
  } else {
    console.log('❌ Token cannot be empty');
  }
  rl.close();
}); 