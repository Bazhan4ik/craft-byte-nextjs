"use client";
import React, { useRef, useEffect } from 'react';
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (typeof window !== 'undefined') {

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      const direct1 = new THREE.DirectionalLight(0xffffff, 3);
      direct1.position.set(0, 0, 10)
      scene.add(direct1)
      const direct2 = new THREE.DirectionalLight(0xffffff, 1);
      direct2.position.set(5, 0, 5)
      scene.add(direct2)
      const direct3 = new THREE.DirectionalLight(0xffffff, 1);
      direct3.position.set(0, 5, 5)
      scene.add(direct3)
      const direct4 = new THREE.DirectionalLight(0xffffff, 1);
      direct4.position.set(0, 5, 5)
      scene.add(direct4)

      const ambientLight = new THREE.AmbientLight(0xffffff, 5);
      scene.add(ambientLight);
      renderer.setSize(1000, 1000);
      renderer.setClearColor(0xFFFFFF, 0);
      renderer.domElement.style.width = "400px";
      renderer.domElement.style.height = "400px";
      containerRef.current?.appendChild(renderer.domElement);
      // camera.position.z = 5;
      camera.position.set(0, 0, 5);
      camera.rotateZ(1.5708);

      (async () => {
        const loader = new GLTFLoader();
        const eye = await loader.loadAsync("./eye-simpler.gltf");

        eye.scene.rotation.x = 1.5708;
        // eye.scene.rotation.y = 1.5708;
        // eye.scene.rotation.z = 1.5708;
        // eye.scene.rotation.z = -1.5708 / 8;

        scene.add(eye.scene);

        renderer.render(scene, camera);

        window.addEventListener('mousemove', (ev: MouseEvent) => {

          const x = ev.clientX;
          const y = ev.clientY;

          // eye.scene.rotation.z = x
          // eye.scene.rotation.x = y

          // eye.scene.rotation.z = 1.5708
          // eye.scene.rotation.z = 1.5708 * 1.5

          const fromLeftToCanvas = renderer.domElement.offsetLeft;
          const fromTopToCanvas = renderer.domElement.offsetTop;
          const canvasCenterHorizontal = fromLeftToCanvas + renderer.domElement.width / 2;
          const canvasCenterVertical = fromTopToCanvas + renderer.domElement.height / 2;


          eye.scene.rotation.x = 1.5708 * (1 + (canvasCenterHorizontal - x) / canvasCenterHorizontal / 2.5) // moving left/right
          eye.scene.rotation.z = 1.5708 * -(0 + (y / canvasCenterVertical) / 2.5)


          renderer.render(scene, camera);
        });
      })();
    }
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeScene;