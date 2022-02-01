from django.db import models


class Inventory(models.Model):
    name = models.CharField(max_length=30)
    reference = models.CharField(max_length=30, unique=True)
    brand = models.CharField(max_length=30)
    type = models.CharField(max_length=30)
    subtype = models.CharField(max_length=30)
    color = models.CharField(max_length=255)
    size = models.CharField(max_length=255)
    price = models.FloatField()
    material = models.CharField(max_length=255)
    form = models.CharField(max_length=255)
    release_date = models.DateField(blank=True, null=True)
    images = models.CharField(max_length=255)

""" INSERT INTO core_inventory (name, reference, brand, type, subtype, color, size, price, material, form, images)
VALUES ("chaqueta","C143245672","Eres", "beach", "bikini", "{'red'}","{'medium', 'large'}",78,"{'cotton'}","","{'A123456789.jpg'}");
"""