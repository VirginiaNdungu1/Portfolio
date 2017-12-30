from django.db import models

# Create your models here.


class Project(models.Model):
    image = models.ImageField(upload_to='pictures/')
    title = models.CharField(max_length=80)
    description = models.TextField(max_length=300)
    github_link = models.CharField(max_length=140)
    deployed_link = models.CharField(max_length=140, blank=True)
    active_project = models.BooleanField(default=False)

    def __str__(self):
        return self.title
