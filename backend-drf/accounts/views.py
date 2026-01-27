from django.shortcuts import render
from .serializers import RegisterSerializer
from rest_framework import generics, status
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from rest_framework.response import Response


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class= RegisterSerializer
    permission_classes=[AllowAny]
    
   