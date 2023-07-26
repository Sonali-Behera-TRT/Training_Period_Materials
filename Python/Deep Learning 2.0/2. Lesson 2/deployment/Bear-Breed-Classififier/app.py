import gradio as gr
from fastbook import *
from fastai.vision.all import *
import skimage

title = "Bear Breed Classifier"
description = "A bear breed classifier trained on downloaded image dataset from ddg. Created as a demo for Gradio and HuggingFace Spaces."
examples = ['./grizzly.jpeg', './black.jpeg', './teddy.jpeg']


model = load_learner('./model.pkl')

classes = model.dls.vocab
def predict(img):
    _, _, prob = model.predict(img)
    return dict(zip(classes, [float(i) for i in prob]))

gr.Interface(fn = predict, inputs = gr.components.Image(shape = (512, 512)), outputs = gr.components.Label(num_top_classes = 3), title = title, description = description, examples = examples, interpretation = 'default', enable_queue = True).launch()