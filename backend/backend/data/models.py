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
    username = models.CharField(max_length=255, null=True, blank=True)
    password = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(max_length=254, null=True, blank=True) 
    messages = ArrayField(models.CharField(max_length=100), null=True, blank=True)
    message_ids = ArrayField(models.CharField(max_length=100), null=True, blank=True)
    diagnosis_answers = ArrayField(models.CharField(max_length=100), null=True, blank=True)
    unittest_answers = ArrayField(models.CharField(max_length=100), null=True, blank=True)


