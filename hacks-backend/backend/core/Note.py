import uuid
from rest_framework import serializers
from django.db import models


class NoteModel(models.Model):
    """
    The NoteModel class that consists of an image, caption,
    and two 1-5 ratings (0 if not answered yet) on induced feelings and impact
    """
    ratings = {"0": "No answer",
               "1": "Awful",
               "2": "Bad",
               "3": "Neutral",
               "4": "Good",
               "5": "Astonishing"}

    id = models.UUIDField(primary_key=True, default=uuid.uuid4)

    image_str = models.TextField()
    caption = models.CharField(max_length=200)
    feeling = models.CharField(max_length=1, choices=ratings)
    impact = models.CharField(max_length=1, choices=ratings)

    def __init__(self, image_str, caption, feeling, impact, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.image_str = image_str
        self.caption = caption
        self.feeling = feeling
        self.impact = impact


class NoteSerializer(serializers.ModelSerializer):
    image_str = serializers.CharField(required=True)
    caption = serializers.CharField(required=True)
    feeling = serializers.CharField(required=True)
    impact = serializers.CharField(required=True)

    class Meta:
        model = NoteModel
        fields = ("image_str", "caption", "feeling", "impact")
