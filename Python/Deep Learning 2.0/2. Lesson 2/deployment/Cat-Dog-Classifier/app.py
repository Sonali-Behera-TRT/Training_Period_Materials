import gradio as gr
from fastbook import *
import skimage

def is_cat(path):
    return 'cat' if path[0].isupper() else 'dog'

model = load_learner('./model.pkl')
title = 'Cat v/s Dog Classifier'
description = 'A cat v/s dog classifier trained on the Oxford Pets dataset with fastai. Created as a demo for Gradio and HuggingFace Spaces.'
examples = ['./cat.jpg', './dog.jpg']
classes = model.dls.vocab

def predict(img):
    _, _, prob = model.predict(img)
    return dict(zip(classes, [float(i) for i in prob]))

gr.Interface(
    fn = predict,
    inputs = gr.inputs.Image(shape = (512, 512)),
    outputs = gr.outputs.Label(num_top_classes = 2),
    title = title,
    description = description,
    examples = examples,
    enable_queue = True,
    interpretation = 'default'
).launch()
