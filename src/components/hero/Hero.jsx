import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./Hero.css";

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 10, 10);
    scene.add(directionalLight);

    const gradients = [
      { start: "#e5b9c1", end: "#c8e1d3" },
      { start: "#dbf4b6", end: "#b1f3cc" },
      { start: "#9ec1ed", end: "#a0efdb" },
      { start: "#e7b4c4", end: "#acb7ed" },
      { start: "#b1f3cc", end: "#9ec1ed" },
      { start: "#a0efdb", end: "#e7b4c4" },
      { start: "#acb7ed", end: "#dbf4b6" },
    ];

    const shapes = [];
    const numBlobs = 8;
    for (let i = 0; i < numBlobs; i++) {
      const geometry = new THREE.CircleGeometry(5, 32);
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      const context = canvas.getContext("2d");
      if (context) {
        const gradient = context.createRadialGradient(128, 128, 0, 128, 128, 128);
        gradient.addColorStop(0, gradients[i % gradients.length].start);
        gradient.addColorStop(1, gradients[i % gradients.length].end);
        context.fillStyle = gradient;
        context.fillRect(0, 0, 256, 256);
      }
      const texture = new THREE.CanvasTexture(canvas);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.95,
        side: THREE.DoubleSide,
      });
      const shape = new THREE.Mesh(geometry, material);

      const xRange = window.innerWidth * 0.2;
      const yRange = window.innerHeight * 0.2;
      const zRange = 10;

      shape.position.set(
        (Math.random() - 0.5) * xRange,
        (Math.random() - 0.5) * yRange,
        (Math.random() - 0.5) * zRange
      );

      shape.rotation.z = Math.random() * Math.PI;
      shapes.push(shape);
      scene.add(shape);
    }

    camera.position.z = 20;

    const animate = () => {
      requestAnimationFrame(animate);
      shapes.forEach((shape, i) => {
        shape.position.y += Math.sin(Date.now() * 0.001 + i) * 0.005;
        shape.rotation.z += 0.001;
      });
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div ref={containerRef} className="hero-animation" />
      <div className="hero-content">
        <h1 className="hero-title shadow-text">
          Computer Science Student
        </h1>
        <p className="spaced-text"></p>
        <h1 className="hero-title shadow-text" style={{ color: "var(--primary)" }}>
          [Nikola Rowe]
        </h1>
        <p className="hero-description">
          <span className="typing"> your it girl & IT girl</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
