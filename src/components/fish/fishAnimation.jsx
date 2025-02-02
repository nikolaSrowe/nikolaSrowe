import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 10, 10);
scene.add(directionalLight);

const fishGeometry = new THREE.CircleGeometry(1, 32);
const fishMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const fish = new THREE.Mesh(fishGeometry, fishMaterial);
scene.add(fish);

// Set initial position
fish.position.set(0, 0, 0);

const speed = 0.05; // Speed of the fish
const bounds = { x: 10, y: 10 }; // Boundaries for the fish movement

const moveFish = () => {
  // Randomly change direction
  fish.position.x += (Math.random() - 0.5) * speed;
  fish.position.y += (Math.random() - 0.5) * speed;

  // Keep fish within bounds
  if (fish.position.x > bounds.x) fish.position.x = bounds.x;
  if (fish.position.x < -bounds.x) fish.position.x = -bounds.x;
  if (fish.position.y > bounds.y) fish.position.y = bounds.y;
  if (fish.position.y < -bounds.y) fish.position.y = -bounds.y;
};

const animate = () => {
  requestAnimationFrame(animate);

  // Move the fish
  moveFish();

  // Render the scene
  renderer.render(scene, camera);
};

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});