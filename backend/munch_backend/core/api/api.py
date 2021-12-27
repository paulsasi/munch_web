from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from core.models import Inventory
from core.api.serializers import InventorySerializer
from django.db.models import Q
from munch_backend.settings import STATICFILES_DIRS
from os.path import isfile
from base64 import b64encode

@api_view(['GET'])
def inventory_api_view(request):

    if request.method == 'GET':

        # Parse URL args
        name = request.query_params.get('name', None)
        reference = request.query_params.get('reference', None)
        brand = request.query_params.get('brand', None)
        type = request.query_params.get('type', None)
        subtype = request.query_params.get('subtype', None)
        price = request.query_params.get('price', None)

        # Construct filter
        filter_conditions = Q()
        if name:
            filter_conditions &= Q(name=name)
        if reference:
            filter_conditions &= Q(reference=reference)
        if brand:
            filter_conditions &= Q(brand=brand)
        if type:
            filter_conditions &= Q(type=type)
        if subtype:
            filter_conditions &= Q(subtype=subtype)
        if price:
            filter_conditions &= Q(price=price)

        # Query
        inventory = Inventory.objects.filter(filter_conditions)
        inventory_serializer = InventorySerializer(inventory, many=True)

        headers = {'Content-type': 'application/json'}
        return Response(data=inventory_serializer.data, headers=headers)


@api_view(['GET'])
def image_api_view(request, name: str):

    if request.method == 'GET':

        img_path = STATICFILES_DIRS[0] / name
        print('ggggg')
        print(img_path)

        if not isfile(img_path):
            return Response('Image not found', status=status.HTTP_400_BAD_REQUEST)
        
        with open(img_path, 'rb') as f:
            img = f.read()
        encoded_img = b64encode(img)
        
        headers = {'Content-type': 'image/jpeg'}
        return Response(headers=headers, data=encoded_img)