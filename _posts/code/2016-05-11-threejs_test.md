---
layout: post
title: "threejs test"
date: 2016-05-11 14:29:27 -0700
category: code
deps:
  - "https://cdnjs.cloudflare.com/ajax/libs/three.js/r83/three.min.js"
---

<div id="WebGL-output"></div>
{% for dep in page.deps %}
<script src="{{dep}}"></script>
{% endfor %}
<script id="vertex-shader" type="x-shader/x-vertex">
	attribute vec4 vPosition;
	void main(){
		gl_Position = vPosition;
	}
</script>
<script id="fragment-shader" type="x-shader/x-fragment">
	precision mediump float;
	void main(){
		gl_FragColor=vec4(1.0, 0.0, 0.0, 1.0);
	}
</script>
<script>
  var canvas = document.getElementById('WebGL-output');
  var GOLDEN_RATIO = 1.62;
  var N64;

  function init(){
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45, canvas.offsetWidth/(canvas.offsetWidth / GOLDEN_RATIO), 0.1, 1000);
    camera.position.z = 75;
    camera.position.y = 30;
    camera.lookAt(new THREE.Vector3(0, 0, 0));


   // Add the lights
   var ambientLight = new THREE.AmbientLight(0xffffff);
   scene.add(ambientLight);

   // var light = new THREE.PointLight( 0xFFFFDD );
   // light.position.set(150, 150, 50);
   // scene.add( light );

    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000);
    renderer.setSize(canvas.offsetWidth, canvas.offsetWidth/GOLDEN_RATIO);

    // var axes = new THREE.AxisHelper(20);
    // scene.add(axes);

     var loader = new THREE.JSONLoader();
     loader.load( "{{ "/models/n64.json" | prepend: site.baseurl }}", function(geometry, materials){
       var material = new THREE.MeshFaceMaterial(materials);
       N64 = new THREE.Mesh(geometry, material);
       N64.scale.set(15, 15, 15);
       for(var i = 0, j = N64.material.materials.length; i < j; i++){
        N64.material.materials[i].side = THREE.BackSide;
       }
       N64.material.needsUpdate = true;
       scene.add(N64);
     });

    canvas.appendChild(renderer.domElement);
    

    function animate(){
      requestAnimationFrame(animate);
      if(N64){
        N64.rotation.y -= 0.03;
      }
      renderer.render(scene, camera);
    }

    animate();  

    window.onresize = function(){
      camera.aspect = window.innerWidth/window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.offsetWidth, canvas.offsetWidth/GOLDEN_RATIO);
    }
  }

  window.onload = init;
</script>
