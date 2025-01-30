import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xA7A6BA);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const canvas = document.createElement('canvas');
canvas.width = 256;
canvas.height = 256;

const ctx = canvas.getContext('2d');

const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, 'lavender');
gradient.addColorStop(1, 'purple');

ctx.fillStyle = gradient;
ctx.fillRect(0,0, canvas.width, canvas.height);

const gradientTexture = new THREE.CanvasTexture(canvas);

const gradientMaterial = new THREE.MeshBasicMaterial({ map:
  gradientTexture
});

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const cube = new THREE.Mesh( geometry, gradientMaterial);
scene.add( cube );

camera.position.z = 5;

function animate() {
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
}

