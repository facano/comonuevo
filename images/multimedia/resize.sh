#!/bin/bash 

FILES=*.jpg
for i in $FILES 
do 
  echo "Processing image $i..." 
     /usr/bin/convert "$i" -resize 60% "$i"
  done 

FILES=*.JPG
for i in $FILES 
do 
  echo "Processing image $i..." 
     /usr/bin/convert "$i" -resize 60% "$i"
  done 
