from django.db import models

# Create your models here.
class ProjectInfo(models.Model):

    name = models.CharField(max_length = 60)
    description = models.TextField(max_length = 400)
    github = models.URLField()
    demo = models.URLField(blank = True)
    image = models.FileField(upload_to = "images/",blank = True)
    show = models.BooleanField(default = False)

    def __str__(self):
        return self.name