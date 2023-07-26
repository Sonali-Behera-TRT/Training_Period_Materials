from simple_image_download import simple_image_download as sid

response = sid.simple_image_download
keywords = ['johny deep jack', 'jack sparrow']

for item in keywords:
    response().download(item, 100)