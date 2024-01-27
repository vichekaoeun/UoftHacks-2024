from django.contrib import admin
from .Note import NoteModel


@admin.register(NoteModel)
class NoteAdmin(admin.ModelAdmin):
    list_display = ('id', 'image_str', 'caption', 'feeling', 'impact')
