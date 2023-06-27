import json
import joblib
import numpy as np

__locations = None
__data_columns = None
__model = None

def get_estimated_price(total_sqft, bath, bhk, location):
    try:
      col_idx = __data_columns.index(location.lower())
    except:
        col_idx = -1
    val = np.zeros(len(__data_columns))
    val[0] = total_sqft
    val[1] = bath
    val[2] = bhk
    if(col_idx >= 0):
        val[col_idx] = 1
        
    return round(__model.predict([val])[0], 2)

def get_location_names():
    return __locations

def load_saved_artifacts():
    print('loading saved artifacts...start')
    global __data_columns
    global __locations
    global __model

    with open('./../model/columns.json', 'r') as f:
        __data_columns = json.load(f)['data_columns']
        __locations = __data_columns[3:]

    with open('./../model/model_joblib', 'rb') as f:
        __model = joblib.load(f)

    print('loading saved artifacts...done')

if __name__ == '__main__':
    load_saved_artifacts()
    print(get_location_names())
    # print(get_estimated_price(1500, 3, 3, '1st Block Jayanagar'))
    # print(get_estimated_price(1000, 2, 2, '1st Block Jayanagar'))
    # print(get_estimated_price(1000, 2, 2, '1st Phase JP Nagar'))
    # print(get_estimated_price(1500, 3, 3, '1st Phase JP Nagar'))
    # print(get_estimated_price(1000, 2, 2, 'Indira Nagar'))
    # print(get_estimated_price(1500, 3, 3, 'Indira Nagar'))