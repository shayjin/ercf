from django import forms
from .models import Post, Review, Video


class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'topic', 'content']

class ReviewForm(forms.ModelForm):
    content = forms.CharField(label="",widget=forms.Textarea(attrs={'cols': 50, 'rows': 2}), )
    class Meta:
        model = Review
        fields = ['content']
        
class VideoForm(forms.ModelForm):
    class Meta:
        model = Video
        fields = ['url', 'topic']