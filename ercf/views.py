from calendar import c
import os
import subprocess
from django import forms
from django.contrib import messages
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, redirect, render
from django.urls import reverse
from django.db.models import Q
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm
import pytube as pt
import youtube_dl

from .models import Post, Topic, Review, Video
from .forms import PostForm, ReviewForm, VideoForm

from bs4 import BeautifulSoup
import requests
from tkinter import *
from pytube import YouTube
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

name = 'shay'
   
def loginUser(request):
    page = "login"
    if request.user.is_authenticated:
        return redirect("ercf:index")
    
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        
        try:
            user = User.objects.get(username=username)
        except:
            messages.error(request, "Invalid Username.")
        
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            login(request, user)
            return redirect("ercf:index")
        else:
            messages.error(request, "Invalid Password.")
        
    context = {"page": page}
    return render(request, "ercf/login.html", context)

def logoutUser(request):
    logout(request)
    return redirect("ercf:index")

def registerUser(request):
    page = "register"
    form = UserCreationForm()
    
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.username = user.username.lower()
            user.save()
            login(request, user)
            return redirect("ercf:index")
        else:
            messages.error(request, "Invalid request.")
    context = {
        "page": page, 
        "form": form
    } 
    return render(request, "ercf/login.html", context)

def index(request):
    return render(request, "ercf/index.html")

def posts(request):
    q = request.GET.get("q") if request.GET.get("q") != None else ""
    topics = Topic.objects.all()
    posts = Post.objects.filter(
        Q(topic__name__icontains=q) |
        Q(title__icontains=q) |
        Q(content__icontains=q)
    ).order_by("-id")
    
    context = {
        "name": name,
        "posts": posts,
        "posts_count": posts.count(),
        "topics": topics
    }
    
    return render(request, "ercf/posts.html", context)

def post(request, pk):
    post = Post.objects.get(id=pk)
    form = ReviewForm()
    
    reviews = Review.objects.all().order_by("-id")
    
    if request.method == "POST":
        form = ReviewForm(request.POST)
        if form.is_valid():
            review = form.save(commit=False)
            review.author = post.author
            review.approved = True
            review.commenter = request.user
            review.save()
            return redirect('ercf:post', post.id)
        
    context = {"form": form, "review_count": reviews.count(), "reviews": reviews, "form": form, "post": post}
    return render(request, 'ercf/post.html', context)

@login_required(login_url="ercf:login")   
def deleteComment(request, pk):
    review = Review.objects.get(id=pk)
    
    if request.user != review.commenter and request.user != review.author:
       return HttpResponse("You are not allowed here!")
    
    if request.method == "POST":
        review.delete()
        return redirect("ercf:posts")
    return render(request, "ercf/delete_comment.html", {"review": review})

def navbar(request):
    return render(request, "ercf/navbar.html")

@login_required(login_url="ercf:login")   
def create_post(request):
    form = PostForm()
    
    if request.method == "POST":
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.save()
            return redirect('ercf:posts')
        
    context = {"form": form, "edit": False}
    return render(request, "ercf/form.html", context)

@login_required(login_url="ercf:login")   
def update_post(request, pk):
    post = Post.objects.get(id=pk)
    form = PostForm(instance=post)
    
    if request.user != post.author:
        return HttpResponse("You are not allowed here!")
    
    if request.method == "POST":
        form = PostForm(request.POST, instance=post)
        if form.is_valid():
            form.save()
            return redirect('ercf:posts')
    context = {'form': form, "edit": True, "post": post}
    return render(request, 'ercf/form.html', context)

@login_required(login_url="ercf:login")   
def delete_post(request, pk):
    post = Post.objects.get(id=pk)
    
    if request.user != post.author:
        return HttpResponse("You are not allowed here!")
    
    if request.method == "POST":
        post.delete()
        return redirect("ercf:posts")
    return render(request, "ercf/delete.html", {"post": post})


def userProfile(request,pk):
    user = User.objects.get(id=pk)
    posts = user.post_set.all()
    reviews = user.review_set.all()
    context = {"user": user, "posts": posts, "reviews": reviews}
    return render(request, "ercf/profile.html", context)

def beats(request):
    videos = Video.objects.all().order_by("-id")
    first = True
    first_video_id = ""
    q = request.GET.get("q") if request.GET.get("q") != None else ""
    topics = Topic.objects.all()
    videos = Video.objects.filter(
        Q(topic__name__icontains=q)
    ).order_by("-id")

    for video in videos:
        video.video_id = video.url[video.url.index("?v=")+3::]
        html_text = requests.get(video.url).text
        soup = BeautifulSoup(html_text, 'lxml')
        soup.prettify()
        video.title = soup.title.string
        if first:
            first_video_id = video.video_id
            first = False
    context = {"videos": videos, "first_video_id": first_video_id, "topics": topics}
        
    return render(request, "ercf/beats.html", context)

def createVideo(request):
    form = VideoForm()
    
    if request.method == "POST":
        form = VideoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('ercf:beats')
        
    context = {"form": form, "edit": False, "video": True} 
    return render(request, "ercf/form.html", context)

def samples(request):
    return render(request, "ercf/samples.html")