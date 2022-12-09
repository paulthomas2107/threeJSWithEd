import * as THREE from './node_modules/three/build/three.module.js';
import * as OrbitControls from './node_modules/three/examples/jsm/controls/OrbitControls.js';

// Scene
const scene = new THREE.Scene();

// Create Sphere
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
  color: '#00FF83',
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Lights
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 10, 10);
scene.add(light);
// Camera
const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 20;
scene.add(camera);

// Render
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGL1Renderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
// Controls
const controls = new OrbitControls(camera, canvas);
// Resize
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

const loop = () => {
  mesh.position.x += 0.1;
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
};

loop();
