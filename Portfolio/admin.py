from django.contrib import admin
from .models import ProjectInfo
from django.db import models

# Register your models here.
class ProjectAdmin(admin.ModelAdmin):
    fields = [
        "name",
        "description",
        "github",
        "demo",
        "image",
        "show"
    ]

admin.site.register(ProjectInfo,ProjectAdmin)