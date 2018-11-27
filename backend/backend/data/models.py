from django.db import models
from django.contrib.postgres.fields import ArrayField
# Create your models here.

class TimeStampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        abstract=True


class Data(TimeStampedModel):
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    email = models.EmailField(max_length=254)
    messages = ArrayField(models.CharField(max_length=100))
    message_ids = ArrayField(models.CharField(max_length=100))
    diagnosis_answers = ArrayField(models.CharField(max_length=100))
    unittest_answers = ArrayField(models.CharField(max_length=100))


