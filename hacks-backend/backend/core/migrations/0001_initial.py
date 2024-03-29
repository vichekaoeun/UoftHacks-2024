# Generated by Django 5.0.1 on 2024-01-27 12:55

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='NoteModel',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('image_url', models.FileField(upload_to='')),
                ('caption', models.CharField(max_length=200)),
                ('feeling', models.CharField(choices=[('0', 'No answer'), ('1', 'Awful'), ('2', 'Bad'), ('3', 'Neutral'), ('4', 'Good'), ('5', 'Astonishing')], max_length=1)),
                ('impact', models.CharField(choices=[('0', 'No answer'), ('1', 'Awful'), ('2', 'Bad'), ('3', 'Neutral'), ('4', 'Good'), ('5', 'Astonishing')], max_length=1)),
            ],
        ),
    ]
