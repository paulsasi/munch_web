# TODO: COmentar el esquema del jso

# TODO : Hacer unique la columna reference

import argparse
import os
from os.path import abspath, dirname
from typing import Dict
import json

from matplotlib.pyplot import connect

"""This scripts imports an inventory in json format into the database. The json format must be the following:
    { "inventory": [
        {
            "name": "Nea",
            "reference": "A0000000001",
            "brand": "Eres",
            "type": "Beach",
            "subtype": "Thin panties",
            "color": [
                ["Noir", 11, 11, 11],
                ["Cosmetic H16", 237, 188, 144],
                ["Pierre Bleue", 58, 63, 141],
                ["Smoke", 80, 81, 91]
            ],
            "size": ["Eres - 38", "Eres - 40", "Eres - 42"],
            "price": "105",
            "material": ["Polyamide", "Elastane"],
            "form": "",
            "release_date": "",
            "images": ["A0000000001.png", "A0000000001_1.png", "A0000000001_2.png"]
        }, ...
    ]}
"""

DB_PATH = dirname(dirname(abspath(__file__))) + '/db.sqlite3'

class ItemFormatError(Exception):
    """Raised when an item in the invetory has the wrong format"""
    pass

def parse_arguments() -> str:

    parser = argparse.ArgumentParser(formatter_class=argparse.ArgumentDefaultsHelpFormatter)

    parser.add_argument('--p', required=True, help='Path to the json inventory file')

    args = parser.parse_args()

    path = args.p

    if not os.path.isfile(path):
        raise Exception('Path is not a file') 

    if os.path.splitext(path)[1] != '.json' :
        raise Exception('File must be a JSON file')

    return path

def validate_format(data: Dict):
    
    assert list(data.keys()) == ['inventory']

    data_items = data.get('inventory')

    for index, item in enumerate(data_items):

        try:
            assert list(item.keys()) == ['name', 'reference', 'brand', 'type', 'subtype', 'color',
                'size', 'price', 'material', 'form', 'release_date', 'images']

            assert isinstance(item.get('name'), str)
            assert isinstance(item.get('reference'), str)
            assert isinstance(item.get('brand'), str)
            assert isinstance(item.get('type'), str)
            assert isinstance(item.get('subtype'), str)
            assert isinstance(item.get('price'), str)
            assert isinstance(item.get('form'), str)
            assert isinstance(item.get('release_date'), str)

            assert isinstance(item.get('color'), list)
            assert isinstance(item.get('size'), list)
            assert isinstance(item.get('material'), list)
            assert isinstance(item.get('images'), list)
        
        except AssertionError:
            raise ItemFormatError(f'Item number {index} has incorrect format.')

def format_list_field(name: str, content: list):
    content_str = '[' + ','.join('"' + str(e) + '"' for e in content) +']'
    return f'{{"{name}": {content_str}}}'


def import_to_db(data: Dict):

    items = [item for item in data.get('inventory')]

    for item in items:
    
        images_field = format_list_field('images', item.get('images'))


if __name__ == '__main__':
    print("#### Inventory exporter ####")

    data_path = parse_arguments()

    with open(data_path, 'r') as f:
        inventory = json.load(f)

    validate_format(inventory)

    n_items  = len(inventory.get('inventory'))
    print(f'Number of items to import: {n_items}')

    import_to_db(inventory)




