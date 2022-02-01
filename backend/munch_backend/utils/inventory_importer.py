# TODO: COmentar el esquema del jso

# TODO : Hacer unique la columna reference

import argparse
import os
from os.path import abspath, dirname
from typing import Dict
import json
import django
import os,sys,inspect

current_dir = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
parent_dir = os.path.dirname(current_dir)
sys.path.insert(0, parent_dir) 

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "munch_backend.settings")
django.setup()

from core.models import Inventory

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

        name = item.get('name')
        reference = item.get('reference')
        brand = item.get('brand')
        price = item.get('price')
        type = item.get('type')
        subtype = item.get('subtype')
        price = item.get('price')
        form = item.get('form')
        release_date = item.get('release_date') if item.get('release_date') else None

        color = format_list_field('color', item.get('color'))
        size = format_list_field('size', item.get('size'))
        material = format_list_field('material', item.get('material'))
        images = format_list_field('images', item.get('images'))

        row = Inventory(name=name, reference=reference, brand=brand, type=type, subtype=subtype,
            color=color, size=size, price=price, material=material, form=form, release_date=release_date,
            images=images)

        try:
            row.save()
        except django.db.utils.IntegrityError as e:
            print('WARNING: ' + str(e) + 'for the following item:')
            print(item)


if __name__ == '__main__':
    print("#### Inventory exporter ####")

    data_path = parse_arguments()

    with open(data_path, 'r') as f:
        inventory = json.load(f)

    validate_format(inventory)

    n_items  = len(inventory.get('inventory'))
    print(f'Number of items to import: {n_items}')

    import_to_db(inventory)
