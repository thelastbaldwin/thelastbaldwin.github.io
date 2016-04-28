#!/bin/bash
# 4/27/15
# create a new blog post in the specified category and title

filename_date=$(date +'%Y-%m-%d')
#if either the category or title are empty, exit with an error message
if [ -z "$1" ] || [ -z "$2" ]; then
  echo "You must provide a category and a title. Such as ./new_post.sh plamo 'My fancy RX-178'"
  exit 1 
fi

post_date=$(date +'%Y-%m-%d %T %z')
category=$1
title=$2
#format the title of the post into underscores and lowercase for the filename
formatted_title="$(echo $localVar | sed -r 's/([A-Z])/\L\1/g;s/ /_/g')"

#if the category of post doesn't exist, create the folder
if [ ! -d _posts/$category ]; then
  mkdir  _posts/$category 
fi
