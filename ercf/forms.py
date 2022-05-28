from django import forms
from .models import Post, Review, Video, Sample
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

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

class SampleForm(forms.ModelForm):
    title = forms.CharField(label="Title",widget=forms.Textarea(attrs={'cols': 50, 'rows':1}), )
    description = forms.CharField(label="Description",widget=forms.Textarea(attrs={'cols': 50, 'rows': 10}), )
    class Meta:
        model = Sample
        fields = ['title', 'description', 'picture', 'file']


class SignUpForm(UserCreationForm):
    username = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    email=forms.EmailField(widget=forms.EmailInput(attrs={'class': 'form-control'}), max_length=65)
    password1=forms.CharField(widget=forms.PasswordInput(attrs={'label': 'hi', 'class': 'form-control', 'placeholder': 'Password'}))
    password2=forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Confirm Password'}))

    class Meta(UserCreationForm.Meta):
        model = User
        fields = ['username', 'email', 'password1', 'password2']