from django.db import models
from django.contrib.postgres.fields import ArrayField
# Create your models here.
from django.utils.encoding import python_2_unicode_compatible


@python_2_unicode_compatible
class TimeStampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        abstract=True


@python_2_unicode_compatible
class Data(TimeStampedModel):
    username = models.CharField(max_length=255, default="anoynmous" )
    password = models.CharField(max_length=255, default="")
    email = models.EmailField(max_length=254 , default="test@aka.com") 
    messages = ArrayField(models.CharField(max_length=100),  default=list)
    message_ids = ArrayField(models.CharField(max_length=100),  default=list)
    diagnosis_answers = ArrayField(models.CharField(max_length=100),  default=list)
    unittest_answers = ArrayField(models.CharField(max_length=100),  default=list)


