#!/bin/bash

# Build the project
echo "Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
  echo "Build successful! Starting preview server with proxy..."
  npm run preview:with-proxy
else
  echo "Build failed. Please check the errors above."
  exit 1
fi 