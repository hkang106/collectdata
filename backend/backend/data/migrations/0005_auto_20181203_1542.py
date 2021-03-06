# Generated by Django 2.0.9 on 2018-12-03 06:42

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0004_auto_20181203_1536'),
    ]

    operations = [
        migrations.AlterField(
            model_name='data',
            name='diagnosis_answers',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=100), default=list, size=None),
        ),
        migrations.AlterField(
            model_name='data',
            name='email',
            field=models.EmailField(default='test@aka.com', max_length=254),
        ),
        migrations.AlterField(
            model_name='data',
            name='message_ids',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=100), default=list, size=None),
        ),
        migrations.AlterField(
            model_name='data',
            name='messages',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=100), default=list, size=None),
        ),
        migrations.AlterField(
            model_name='data',
            name='password',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='data',
            name='unittest_answers',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=100), default=list, size=None),
        ),
        migrations.AlterField(
            model_name='data',
            name='username',
            field=models.CharField(default='anoynmous', max_length=255),
        ),
    ]
