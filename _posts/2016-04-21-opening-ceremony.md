---
layout: post
title:  "Opening Ceremony Pop-In Video Booth"
date:   2016-04-21 14:40:49 -0700
category: creative_code
---

![store shot][image1]

In honor of the Opening Ceremony Pop-In, we created a video booth that gives users 
the ability to add glitch effects onto their selfie video. Like our Pop-In photo booths, 
users initiate a video by touching the screen.

![control box][image2]

Users can add effects using any or all of the physical knobs, located in a custom 
plexi case below the touch screen. An Arduino Uno, shown in the case above, 
communicates knob input to the Mac Mini inside the enclosure.

![output][image3]

The user sees their effects in real time, whether it’s during a recording or before/after. After recording is finished, they will receive a number and code they can use to text in for their glitch videos.

One of the inspirations for the shop was surveillance videos, which inspired the touch interface and control box.

[View the source code on github][github_link]

[image1]: /images/opening_ceremony_1.jpg
[image2]: /images/opening_ceremony_2.jpg
[image3]: /images/opening_ceremony_3.jpg
[github_link]: https://github.com/thelastbaldwin/glitch_photo_booth
