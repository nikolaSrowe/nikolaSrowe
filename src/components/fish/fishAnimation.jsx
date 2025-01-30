import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import TWEEN from "@tweenjs/tween.js";

const FishAnimation = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // Scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(80, container.offsetWidth / container.offsetHeight, 0.1, 250);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.DirectionalLight(0xffffff, 0.4); 
    light.position.set(20, 30, 130);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040, 2.2);
    scene.add(ambientLight);

    // Fish creation logic
    const fish = new Fish();
    const fishObject = fish.getFish(); // This method is now properly implemented
    fishObject.scale.set(0.16, 0.16, 0.16);
    scene.add(fishObject);

    const fishCenter = new THREE.Object3D();
    fishObject.rotation.set(0, -Math.PI / 2, 0);
    fishCenter.add(fishObject);
    scene.add(fishCenter);

    const swimPath = fish.swimPath([
      new THREE.Vector3(-17, 16, 90),
      new THREE.Vector3(-20, 15, 98),
      new THREE.Vector3(-14, 13, 110),
      new THREE.Vector3(0, 13, 113),
      new THREE.Vector3(16, 16, 110),
      new THREE.Vector3(15, 21, 92),
      new THREE.Vector3(5, 20, 77),
      new THREE.Vector3(-7, 17, 79),
      new THREE.Vector3(-17, 16, 90),
    ]);

    // Animation variables
    let t = 0;
    let speed = 0.002;

    const animate = () => {
      requestAnimationFrame(animate);
      TWEEN.update();

      const swimData = fish.update();
      speed = swimData.speed / 2000;

      const pt = swimPath.spline.getPoint(t);
      const tangent = swimPath.spline.getTangent(t);

      fishCenter.position.copy(pt);
      fishCenter.lookAt(pt.add(new THREE.Vector3(tangent.x, tangent.y, tangent.z)));

      fishObject.rotation.y = swimData.xRotation.x - Math.PI / 2;

      t = t >= 1 ? 0 : t + speed;

      renderer.render(scene, camera);
    };

    // Start animation
    fish.swim();
    animate();

    // Cleanup
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "400px" }} />;
};

class Fish {
  getFish() {
    const geometry = new THREE.DodecahedronGeometry(19.5, 2);
    const material = new THREE.MeshLambertMaterial({ color: 0xffb200 });
    const fishHead = new THREE.Mesh(geometry, material);
    fishHead.scale.set(0.8, 0.8, 0.5);

    const fishBody = new THREE.Group();
    fishBody.add(fishHead);

    return fishBody;
  }

  swimPath(points) {
    const spline = new THREE.CatmullRomCurve3(points);
    const material = new THREE.LineBasicMaterial({ color: 0xff00f0 });
    const geometry = new THREE.BufferGeometry().setFromPoints(spline.getPoints(100));

    return {
      line: new THREE.Line(geometry, material),
      spline: spline,
    };
  }

  update() {
    return { speed: 1, xRotation: { x: 0 } }; // Mock implementation
  }

  swim() {
    console.log("Fish is swimming...");
  }
}

export default FishAnimation;
