"""Local read-only host for the saved public portfolio. No dependencies."""
import argparse
import json
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlsplit

ROOT = Path(__file__).resolve().parent

class Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Content-Security-Policy', "script-src 'self' 'unsafe-inline'; connect-src 'self'; frame-src 'none'; form-action 'none'")
        super().end_headers()

    def do_GET(self):
        request = urlsplit(self.path)
        route = request.path
        language = parse_qs(request.query).get('lang', ['ru'])[0]
        language_dir = ROOT / 'dist' / 'data' / 'en' if language == 'en' else ROOT / 'dist' / 'data' / 'ru'
        snapshots = {
            '/api/projects/save': 'initialProjects.json',
            '/api/content/save': 'initialContent.json',
        }
        if route in snapshots:
            self.reply((language_dir / snapshots[route]).read_bytes())
        elif route == '/api/cursors/auth':
            self.reply(b'{"error":"Online cursors are disabled in the local study copy"}', 503)
        elif route.startswith('/api/'):
            self.reply(b'{"error":"No live backend in this study copy"}', 404)
        else:
            super().do_GET()

    def do_POST(self):
        if urlsplit(self.path).path == '/api/visitors':
            # A fixed local value, not a counter or a request to the author's site.
            self.reply(b'{"count":1,"local":true}')
        else:
            self.reply(b'{"error":"Local study copy is read-only"}', 405)

    def reply(self, payload, status=200):
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(payload)))
        self.send_header('Cache-Control', 'no-store')
        self.end_headers()
        self.wfile.write(payload)

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--port', type=int, default=8000)
    args = parser.parse_args()
    host = ThreadingHTTPServer(('127.0.0.1', args.port), partial(Handler, directory=str(ROOT / 'dist')))
    print(f'Local study copy: http://127.0.0.1:{args.port}', flush=True)
    try:
        host.serve_forever()
    except KeyboardInterrupt:
        host.server_close()
