from django.urls import path
from core.api.api import inventory_api_view, image_api_view

urlpatterns = [
    path('inventory/', inventory_api_view, name='inventory_api_view'),
    path('image/<str:name>', image_api_view, name='image_api_view')
]
