from flask import Flask, render_template, jsonify
import json

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/threats')
def get_threats():
    with open('sentinel_data.json') as f:
        threats = json.load(f)
    return jsonify(threats)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)