from fastbook import *
from fastai.vision.all import *
import gradio as gr
import skimage

model = load_learner('./model.pkl')

title = 'Bird or Forest Classifier'
examples = ['./bird.jpeg', './forest.jpeg']
classes = model.dls.vocab

def predict(img):
    _, _, prob = model.predict(img)
    return dict(zip(classes, [float(i) for i in prob]))

gr.Interface(fn = predict, inputs = gr.components.Image(shape = (512, 512)), outputs = gr.components.Label(num_top_classes = 2), title = title, examples = examples, enable_queue = True, interpretation = 'default').launch()