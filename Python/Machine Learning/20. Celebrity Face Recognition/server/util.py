import joblib
import cv2
from wavelet import w2d
import numpy as np
import json
import base64
import matplotlib.pyplot as plt

__class_name_to_number = {}
__class_number_to_name = {}

__model = None

def classify_image(image_base64_data, file_path = None):
  imgs = get_cropped_image_if_2_eyes(file_path, image_base64_data)
  result = []

  for img in imgs:
    img_scaled = cv2.resize(img, (32, 32))
    img_har = w2d(img, 'db1', 5)
    img_har_scaled = cv2.resize(img_har, (32, 32))
    combined_img = np.vstack((img_scaled.reshape(32 * 32 * 3, 1), img_har_scaled.reshape(32 * 32, 1)))
    final = combined_img.reshape(1, 4096).astype(float)
    result.append({
      'class': __class_number_to_name[__model.predict(final)[0]],
      'class_probability': np.round(__model.predict_proba(final) * 100, 2)[0].tolist(),
      'class_dictionary': __class_name_to_number
    })
  
  return result

def load_artifacts():
  print('loading saved artifacts...start')
  global __model
  global __class_name_to_number
  global __class_number_to_name

  with open('./../model/class_dictionary.json', 'r') as f:
    __class_name_to_number = json.load(f)
    __class_number_to_name = {v: k for k, v in __class_name_to_number.items()}

  with open('./../model/model.pkl', 'rb') as f:
    __model = joblib.load(f)
  
  print('loading saved artifacts...done')

def get_cropped_image_if_2_eyes(file_path, image_base64_data):
  face_cascade = cv2.CascadeClassifier('./../model/opencv/haarcascades/haarcascade_frontalface_default.xml')
  eye_cascade = cv2.CascadeClassifier('./../model/opencv/haarcascades/haarcascade_eye.xml')

  if file_path:
    img = cv2.imread(file_path)
  else:
    img = get_cv2_image_from_base64_string(image_base64_data)
  gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
  faces = face_cascade.detectMultiScale(gray, 1.3, 5)
  cropped_faces = []
  for (x, y, w, h) in faces:
      roi_color = img[y : y + h, x : x + w]
      roi_gray = gray[y : y + h, x : x + w]
      eyes = eye_cascade.detectMultiScale(roi_gray)
      if(len(eyes) >= 2):
          cropped_faces.append(roi_color)
  return cropped_faces

def get_cv2_image_from_base64_string(b64str):
  encoded_data = b64str.split(',')[1]
  nparr = np.frombuffer(base64.b64decode(encoded_data), np.uint8)
  img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
  return img

def get_b64_test_image_for_virat():
  with open('./b64.txt', 'r') as f:
    return f.read()

if __name__ == '__main__':
  load_artifacts()
  # print(classify_image(get_b64_test_image_for_virat()))
  # print(classify_image(None, './test_images/federer1.jpg'))
  # print(classify_image(None, './test_images/federer2.jpg'))
  # print(classify_image(None, './test_images/serena1.jpg'))
  # print(classify_image(None, './test_images/serena2.jpg'))
  # print(classify_image(None, './test_images/sharapova1.jpg'))
  # print(classify_image(None, './test_images/virat1.jpg'))
  # print(classify_image(None, './test_images/virat2.jpg'))
  # print(classify_image(None, './test_images/virat3.jpg'))