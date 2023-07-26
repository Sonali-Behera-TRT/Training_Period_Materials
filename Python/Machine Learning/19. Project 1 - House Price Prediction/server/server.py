from flask import Flask, request, jsonify
import util

app = Flask(__name__)

@app.route('/say_hello')
def say_hello():
    return 'Hello'

@app.route('/get_location_names')
def get_location_names():
    response = jsonify({
        'locations': util.get_location_names()
    })

    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/get_estimated_price', methods = ['POST'])
def get_estimataed_price():
    total_sqft = float(request.form['total_sqft'])
    location = request.form['location']
    bhk = int(request.form['bhk'])
    bath = int(request.form['bath'])

    response = jsonify({
        'estimated_price': util.get_estimated_price(total_sqft, bath, bhk, location)
    })

    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == "__main__":
    print('Starting python flask server for house price prediction')
    util.load_saved_artifacts()
    app.run()