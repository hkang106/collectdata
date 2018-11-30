from rest_framework import serializers
from . import models

class DataSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = models.Data
        fields = '__all__'
#"email", "messages", "message_ids", "diagnosis_answers", "unittest_answers"

