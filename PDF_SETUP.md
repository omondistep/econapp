# PDF Resources Setup

## Issue: PDF files cannot be loaded directly from file system

PDF.js requires files to be served through a web server due to browser security restrictions (CORS policy).

## Quick Fix:

### Option 1: Start Local Server
```bash
./start-server.sh
```
Then open: http://localhost:8000

### Option 2: Manual Python Server
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### Option 3: Node.js Server
```bash
npx http-server -p 8000
```

### Option 4: PHP Server
```bash
php -S localhost:8000
```

## Alternative: Use Online PDFs

If you prefer not to run a local server, you can replace the PDF filenames in `pdf-resources.js` with online PDF URLs:

```javascript
filename: "https://example.com/path/to/your/pdf.pdf"
```

## Production Deployment

For production, deploy to any web hosting service:
- GitHub Pages
- Netlify
- Vercel
- Apache/Nginx server

The PDF viewer will work automatically once served through HTTP/HTTPS.
