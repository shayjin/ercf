from django.contrib import admin

# Register your models here.

from .models import Post, Topic, Review, Video, Sample

admin.site.register(Post)
admin.site.register(Topic)
admin.site.register(Review)
admin.site.register(Video)
admin.site.register(Sample)
