from datetime import datetime
from flask import Flask, request
import json

app = Flask(__name__)


@app.route("/time")
def home_page():
    return {
        "status": "🚀 iMessage Recon Server Up 🚀",
        "time": datetime.now()
    }

@app.route("/recon", methods=["POST"])
def recon_page():
    if(request.method == "POST"):
        res = json.loads(request.data)
        response = {
            "message": "Recon was successful!",
            "target": {
                "name": res["name"],
                "phone": res["phone"],
                "email": res["email"]
            }
        }
    return response
