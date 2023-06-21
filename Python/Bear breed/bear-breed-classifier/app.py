import gradio as gr
from fastbook import *
from fastai.vision.all import *

learn_inf = load_learner('./export.pkl')
labels = learn_inf.dls.vocab
def predict(img):
    img = PILImage.create(img)
    pred, pred_idx, probs = learn_inf.predict(img)
    return {labels[i]: float(probs[i]) for i in range(len(labels))}

title = "Bear Breed Classifier"
description = "A bear breed classifier trained on the bear dataset with fastai. Created as a demo for Gradio and HuggingFace Spaces."
examples = ['black.jpg', 'teddy.jpg', 'grizzly.jpg']
interpretation = 'default'
enable_queue = True

gr.Interface(
    fn = predict, 
    inputs = gr.inputs.Image(shape = (512, 512)), 
    outputs = gr.outputs.Label(num_top_classes = 3), 
    title = title, description = description, 
    examples = examples, 
    interpretation = interpretation, 
    enable_queue = enable_queue
).launch()