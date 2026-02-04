#!/bin/bash
# Simple HTTP server for PDF viewing
echo "Starting local server for PDF viewing..."
echo "Open your browser to: http://localhost:8000"
echo "Press Ctrl+C to stop the server"

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer 8000
else
    echo "Python not found. Please install Python to run the server."
    echo "Alternative: Use any other local web server in this directory."
fi
