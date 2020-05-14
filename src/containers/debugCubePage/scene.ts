import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

type Options = {
  canvas: HTMLCanvasElement;
};

export const createScene = (options: Options) => {
  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: options.canvas });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  const controls = new OrbitControls(camera, options.canvas);
  camera.position.set(-0, 0, 100);
  controls.update();
  let isDestroyed = false;
  const destroy = () => {
    isDestroyed = true;
  };
  function animate() {
    if (isDestroyed) return;
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  var light = new THREE.PointLight(0xff0000, 10, 100);
  light.position.set(-50, -50, -50);
  scene.add(light);

  var geometry = new THREE.PlaneGeometry(64, 64, 32);
  var material = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide });
  var plane = new THREE.Mesh(geometry, material);
  scene.add(plane);

  return { destroy };
};

export type DebugScene = ReturnType<typeof createScene>;
