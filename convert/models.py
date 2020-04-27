from django.db import models


# Create your models here.

class UploadImage(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='uploaded_images')
    output_type=models.CharField(max_length=3)

    def __str__(self):
        return self.title