import * as THREE from './node_modules/three/build/three.module.js';

// Scene
const scene = new THREE.Scene();

// Sphere
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
  color: '#00FF83',
});
const mesh = new THREE.Mesh(geometry, material);
// Lights
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 10, 10);
scene.add(light);
// Scene
scene.add(mesh);
// Camera
const camera = new THREE.PerspectiveCamera(45, 800 / 600);
camera.position.z = 20;
scene.add(camera);
// Render
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGL1Renderer({ canvas });
renderer.setSize(800, 600);
renderer.render(scene, camera);
