from rest_framework import serializers
from .models import ProjectInfo

class ProjectSerializers(serializers.ModelSerializer):
    class Meta:
        model = ProjectInfo
        fields = ['name','description','github','demo','image']