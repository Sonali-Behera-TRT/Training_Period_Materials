from fastbook import *
import gradio as gr
import skimage

model = load_learner('./model.pkl')
examples = ['./test1.jpeg', './test2.jpeg', './test3.jpeg', './test4.jpeg', './test5.jpeg', './test6.jpeg', './test7.jpeg', './test8.jpeg']
title = 'Pet Breed Classifier'
description = "A dog and cat classifier developed with the accuracy rate of 95%, utilizing the fastai framework and the convnext_tiny pre-trained model from the PyTorch timm library. Trained on the extensive Oxford Pets dataset, which consists of 37 distinct categories of cat and dog breeds. The breeds used in the dataset are Abyssinian, Bengal, Birman, Bombay, British Shorthair, Egyptian Mau, Maine Coon, Persian, Ragdoll, Russian Blue, Siamese, Sphynx, American Bulldog, American Pit Bull Terrier, Basset Hound, Beagle, Boxer, Chihuahua, English Cocker Spaniel, English Setter, German Shorthaired, Great Pyrenees, Havanese, Japanese Chin, Keeshond, Leonberger, Miniature Pinscher, Newfoundland, Pomeranian, Pug, Saint Bernard, Samoyed, Scottish Terrier, Shiba Inu, Staffordshire Bull Terrier, Wheaten Terrier, Yorkshire Terrier"

classes = model.dls.vocab
def predict(path):
    _, _, prob = model.predict(path)
    return dict(zip(classes, [float(i) for i in prob]))

gr.Interface(
    inputs = gr.components.Image(shape = (512, 512)),
    outputs = gr.components.Label(num_top_classes = 5),
    fn = predict,
    examples = examples,
    title = title,
    description = description,
    interpretation = 'default',
    enable_queue = True
).launch()