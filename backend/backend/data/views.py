from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers
import ipdb

class setData(APIView):
    def post(self, request, format=None): # thrid arg is caught by regex in url
        try:
            #deserializer save to DB!
            
            username = request.data.get('username')
            password = request.data.get('password')
            print(request.data)
            s = serializers.DataSerializer(data=request.data, partial=True)
            
            #ipdb.set_trace()

            if s.is_valid():
                s.save() #.save() will call .create()
            
            #models.Data.objects.create(username=username, password=password)
            # d = moddel.Data(username=request.data.username, password=request.data.password)
            # d.save()

            return Response(data={"is_created": True}, status=status.HTTP_200_OK)
        
        except:
            print("bad request")
            return Response(data={"is_created": False}, status=status.HTTP_400_BAD_REQUEST)
        
        
