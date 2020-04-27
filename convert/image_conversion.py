from PIL import Image

def image_conversion(file, output_format, new_name):
    print(file)
    new_location='frontend/public/converted_images/'
    image = Image.open(file)
    if output_format=='JPG' or 'BMP' or 'GIF' or 'PNG':
        rgb_image=image.convert('RGB')
        rgb_image.save(new_location+new_name+"."+output_format)

