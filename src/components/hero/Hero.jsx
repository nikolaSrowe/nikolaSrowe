import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./Hero.css";

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, // Field of view
      window.innerWidth / window.innerHeight, // Aspect ratio
      0.1, // Near clipping plane
      1000 // Far clipping plane
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight); // Set to full viewport size
    containerRef.current.appendChild(renderer.domElement);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 10, 10);
    scene.add(directionalLight);

    // Create 2D blob-like shapes with gradients
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
    const numBlobs = 8; // Fixed number of blobs
    for (let i = 0; i < numBlobs; i++) {
      const geometry = new THREE.CircleGeometry(5, 32); // Increase radius for larger blobs
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      const context = canvas.getContext("2d");
      if (context) {
        const gradient = context.createRadialGradient(128, 128, 0, 128, 128, 128);
        gradient.addColorStop(0, gradients[i % gradients.length].start); // Cycle through gradients
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

      // Constrain blob positions within the visible area
      const xRange = window.innerWidth * 0.2; // 20% of the screen width
      const yRange = window.innerHeight * 0.2; // 20% of the screen height
      const zRange = 10; // Depth range

      shape.position.set(
        (Math.random() - 0.5) * xRange, // Spread across the width (constrained)
        (Math.random() - 0.5) * yRange, // Spread across the height (constrained)
        (Math.random() - 0.5) * zRange // Random depth (closer range)
      );

      shape.rotation.z = Math.random() * Math.PI;
      shapes.push(shape);
      scene.add(shape);
    }

    camera.position.z = 20; // Adjust camera position to fit the entire scene

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      shapes.forEach((shape, i) => {
        // Constrain movement within the visible area
        if (shape.position.x > window.innerWidth * 0.2) shape.position.x = window.innerWidth * 0.2;
        if (shape.position.x < -window.innerWidth * 0.2) shape.position.x = -window.innerWidth * 0.2;
        if (shape.position.y > window.innerHeight * 0.2) shape.position.y = window.innerHeight * 0.2;
        if (shape.position.y < -window.innerHeight * 0.2) shape.position.y = -window.innerHeight * 0.2;

        shape.position.y += Math.sin(Date.now() * 0.001 + i) * 0.005;
        shape.rotation.z += 0.001;
      });
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
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
    <section className="hero">
      <div ref={containerRef} className="hero-animation" />
      <div className="hero-content">
        <h1 className="hero-title">
          it girl & IT girl<p>{}</p>{" "}
          <span className="highlight">[Nikola Rowe]</span>
        </h1>
        <p className="hero-description">
          <span className="typing">Computer Science Student</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;