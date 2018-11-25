from flask import Flask, request
from flask import jsonify
import os
from openpose import nb_raised
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/hand-raised', methods=['POST'])
def hand_raised():
    file = request.files["file"]
    file.save(os.path.join("uploaded.jpg"))
    ret, people, points = nb_raised()
    hands = {"count":ret, "skeletonCount":people, "positions":points}
    response = jsonify(hands)
    return response





if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)