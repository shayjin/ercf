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
    author_identity = models.TextField()

    def __str__(self):
        return self.title

class Review(models.Model):
    content = models.TextField(max_length=50)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    commenter = models.ForeignKey(User, on_delete=models.CASCADE, related_name="com")
    date_posted = models.DateTimeField(auto_now_add=True)
    approved = models.BooleanField(default=True)
    post_date = models.DateTimeField(auto_now_add=False, default="1111-11-11 11:11")
    post_title = models.TextField(default="")
    post_id = models.TextField(default="")
    
    def __str__(self):
        return self.content
    
class Video(models.Model):
    url = models.TextField()
    audio = models.FileField(upload_to="documents/", null=True, blank=True)
    audio_url = models.TextField(null=True, default="?")
    video_id = models.TextField(default="id")
    title = models.TextField(default="title")
    topic = models.ForeignKey(Topic, on_delete=models.SET_NULL, null=True)

class Sample(models.Model):
    title = models.TextField()
    description = models.TextField()
    picture = models.ImageField(
                upload_to="images/"
              )
    s1 = models.FileField(upload_to="documents/", null=True, blank=True)
    s2 = models.FileField(upload_to="documents/", null=True, blank=True)
    s3 = models.FileField(upload_to="documents/", null=True, blank=True)
    s4 = models.FileField(upload_to="documents/", null=True, blank=True)
    s5 = models.FileField(upload_to="documents/", null=True, blank=True)
    s6 = models.FileField(upload_to="documents/", null=True, blank=True)
    s7 = models.FileField(upload_to="documents/", null=True, blank=True)
    s8 = models.FileField(upload_to="documents/", null=True, blank=True)
    s9 = models.FileField(upload_to="documents/", null=True, blank=True)
    s10 = models.FileField(upload_to="documents/", null=True, blank=True)
    ss = []
    url = models.TextField(null=True, default="?")
    s1_url = models.TextField(null=True, default="?")
    s2_url = models.TextField(null=True, default="?")
    s3_url = models.TextField(null=True, default="?")
    s4_url = models.TextField(null=True, default="?")
    s5_url = models.TextField(null=True, default="?")
    s6_url = models.TextField(null=True, default="?")
    s7_url = models.TextField(null=True, default="?")
    s8_url = models.TextField(null=True, default="?")
    s9_url = models.TextField(null=True, default="?")
    s10_url = models.TextField(null=True, default="?")
    


    
    
    
    