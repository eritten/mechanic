from django.contrib import admin
from .models import Car

# Register your models here.
admin.site.register(Car)
admin.site.site_title = "Lefthand drive admin"
admin.site.site_header = "Lefthand drive header"
