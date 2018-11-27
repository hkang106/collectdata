from django.contrib import admin

# Register your models here.
from . import models

@admin.register(models.Data)
class DataAdmin(admin.ModelAdmin):
    list_display=(
        'username',
        'email',
        'password',
        'messages',
        'message_ids',
        'diagnosis_answers',
        'unittest_answers',
    )


