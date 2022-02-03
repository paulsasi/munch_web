"""Given a path and two dimensions, this script resizes all images in the directory"""

import argparse
import os
from PIL import Image

IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.JPG', '.png']

def parse_arguments() -> str:

    parser = argparse.ArgumentParser(formatter_class=argparse.ArgumentDefaultsHelpFormatter)

    parser.add_argument('--p', required=True, help='Path to the json inventory file')
    parser.add_argument('--w', required=True, help='Width of the resized image')
    parser.add_argument('--h', required=True, help='Heigth of the resized image')

    args = parser.parse_args()

    path = args.p
    width = args.w
    height = args.h

    if not os.path.isdir(path):
        raise Exception('Path is not a directory')

    try:
        width = int(width)
    except ValueError:
        raise Exception("Width must be an integer")

    try:
        height = int(height)
    except ValueError:
        raise Exception("Height must be an integer")

    return path, width, height


def obtain_images(p: str):
    return [p + filename for filename in os.listdir(p) if os.path.splitext(filename)[1] in IMAGE_EXTENSIONS]

def resize_image(image_path: str, width: int, height: int):
    image = Image.open(image_path)
    new_image = image.resize((width, height))
    new_image.save(image_path)


if __name__ == '__main__':

    print("#### Image resizer ####")

    data_dir, width, height = parse_arguments()

    image_paths = obtain_images(data_dir)

    for p in image_paths:
        resize_image(p, width, height)

    print('Done.')


