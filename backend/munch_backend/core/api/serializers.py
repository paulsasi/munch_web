from rest_framework import serializers
from core.models import Inventory

class InventorySerializer(serializers.ModelSerializer):
    """Inventory serializer"""

    
    class Meta:
        model = Inventory
        fields = '__all__'
