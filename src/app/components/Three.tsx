"use client";
import React, { useRef, useEffect } from 'react';
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {

      const geometry = new THREE.BoxGeometry();

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      const ambientLight = new THREE.AmbientLight(0xffffff, 3);
      scene.add(ambientLight);
      renderer.setSize(400, 400);
      renderer.setClearColor(0xe232222, 0);
      containerRef.current?.appendChild(renderer.domElement);
      camera.position.z = 5;


      // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      // const cube = new THREE.Mesh(geometry, material);
      // scene.add(cube);

      (async () => {
        const loader = new GLTFLoader();
        const eye = await loader.loadAsync("./almost_eye.gltf");

        // eye.scene.scale.multiplyScalar(1.5);
        eye.scene.rotation.x = 1.5708;
        eye.scene.rotation.y = 1.5708;

        scene.add(eye.scene);

        renderer.render(scene, camera);

        const clock = new THREE.Clock();

        const animateGeometry = () => {
          const elapsedTime = clock.getElapsedTime();

          // eye.scene.rotation.y = elapsedTime;
          eye.scene.rotation.x = elapsedTime;
          // eye.scene.rotation.z = elapsedTime;

          renderer.render(scene, camera);

          window.requestAnimationFrame(animateGeometry);
        }

        animateGeometry();
      })();

      renderer.render(scene, camera);



    }
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeScene;