from django.db import models
from django.contrib.auth.models import User

class Topic(models.Model):
    name = models.CharField(max_length=20)
    def __str__(self):
        return self.name

class Post(models.Model):
    title = models.CharField(max_length=100)
    topic = models.ForeignKey(Topic, on_delete=models.SET_NULL, null=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField(max_length=10000)
    date_posted = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Review(models.Model):
    content = models.TextField(max_length=50)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    commenter = models.ForeignKey(User, on_delete=models.CASCADE, related_name="com")
    date_posted = models.DateTimeField(auto_now_add=True)
    approved = models.BooleanField(default=True)
    post_id = models.DateTimeField(auto_now_add=False)
    
    def __str__(self):
        return self.content
    
class Video(models.Model):
    url = models.TextField()
    video_id = models.TextField(default="id")
    title = models.TextField(default="title")
    topic = models.ForeignKey(Topic, on_delete=models.SET_NULL, null=True)

class Sample(models.Model):
    title = models.TextField()
    description = models.TextField()
    picture = models.ImageField()
    file = models.FileField()
    


    
    
    
    