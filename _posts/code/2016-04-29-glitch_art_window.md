---
layout: post
title: "Glitch Art Window"
date: 2016-04-29 13:08:43 -0700
category: code
---

This project ruled! When someone hands you a project and tells you that the theme is glitch art, 
it's hard not to follow up your best Max Headroom impression with an avalanche of high fives. 
My idea for this project was to take a webcam feed and apply a series of distortion effects to it. 

This project got me a lot more comfortable writing shaders and is actually the only time I've had the 
pleasure of writing a geometry shader. For that piece, the video pixels are sampled and transformed
into squares of that color. Depending on the brightness of the color, the squares are translated along 
the z-axis, giving a sort of faux-kinect effect. 

Unfortunately, this project only stayed live for about a week. The concept for the window was originally
 an interesting blend of baroque and glitch art. By the time the window was installed, however, the 
 glitch component was essentially eliminated and my impressive display was determined to be incongruous 
 with the other elements in the window. Nonetheless, it was an intensely satisfying piece of software
 to build and I learned a lot in the process.


<div class="embed-responsive embed-responsive-16by9">
	<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/qgkEKXQtbOo" frameborder="0" allowfullscreen></iframe>
</div>

[Source files](https://github.com/thelastbaldwin/of/tree/master/apps/myApps/fatPixels)