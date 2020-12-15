import time
from  flask import Flask

app = Flask(__name__)


@app.route("/")
def home_page():
    return "🚀 iMessage Recon Server Up 🚀"

@app.route("/recon")
def recon_page():
    return {
        'time': time.time()
    }