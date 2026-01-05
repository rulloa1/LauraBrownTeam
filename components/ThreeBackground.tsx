import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Init ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.02);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ReinhardToneMapping;
    containerRef.current.appendChild(renderer.domElement);

    // --- Post Processing ---
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0;
    bloomPass.strength = 1.8;
    bloomPass.radius = 0.5;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // --- Objects ---
    const logoGroup = new THREE.Group();
    const material = new THREE.MeshStandardMaterial({
      color: 0x111111,
      metalness: 1.0,
      roughness: 0.1,
      emissive: 0x002244,
      emissiveIntensity: 0.2
    });
    const edgeMaterial = new THREE.MeshBasicMaterial({ color: 0x00A3FF });
    const geometry = new THREE.SphereGeometry(1.2, 32, 32);
    const mesh = new THREE.Mesh(geometry, material);
    const wireframe = new THREE.LineSegments(new THREE.EdgesGeometry(geometry), edgeMaterial);
    mesh.add(wireframe);
    logoGroup.add(mesh);
    scene.add(logoGroup);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const spotlight1 = new THREE.SpotLight(0x00A3FF, 50);
    spotlight1.position.set(5, 5, 5);
    spotlight1.angle = 0.3;
    spotlight1.penumbra = 0.5;
    scene.add(spotlight1);

    const spotlight2 = new THREE.SpotLight(0xffffff, 10);
    spotlight2.position.set(-5, 5, 5);
    spotlight2.angle = 0.5;
    scene.add(spotlight2);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x00A3FF,
      transparent: true,
      opacity: 0.8,
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    particlesMesh.position.y = -5;
    scene.add(particlesMesh);

    // --- Animation Loop ---
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const time = Date.now() * 0.002;
      const scale = 1 + Math.sin(time * 2) * 0.02;
      logoGroup.scale.set(scale, scale, scale);
      logoGroup.rotation.y += 0.002;

      const positions = particlesGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particlesCount; i++) {
        const x = positions[i * 3];
        positions[i * 3 + 1] = Math.sin(Date.now() * 0.001 + x) * 0.5 - 2;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      composer.render();
    };
    animate();

    // --- GSAP Setup ---
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    
    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1
        }
      });

      tl.to(logoGroup.position, { z: -10, y: 5, duration: 2 }, 0)
        .to(logoGroup.rotation, { x: 1, duration: 2 }, 0)
        .to(camera.position, { z: 8, duration: 2 }, 0)
        .to(particlesMesh.position, { y: 0, duration: 2 }, 0.5);

      // Color transition
      tl.to(particlesMaterial.color, { r: 0.97, g: 0.33, b: 0, duration: 1 }, 2)
        .to(camera.rotation, { z: 0.2, duration: 2 }, 2);

      tl.to(particlesMesh.scale, { x: 2, y: 2, z: 2, duration: 2 }, 4)
        .to(scene.fog, { density: 0.05, duration: 2 }, 4);

      tl.to(spotlight1, { intensity: 100, angle: 0.1, duration: 2 }, 6)
        .to(bloomPass, { strength: 3, radius: 1, duration: 2 }, 6);
    }

    // --- Card Interactions ---
    // Note: We use global event listeners here for simplicity interacting with React components
    // A more React-way would be contexts, but this mimics the provided script logic effectively.
    const handleMouseEnter = (e: any) => {
        if (!e.target.closest('.service-card')) return;
        const card = e.target.closest('.service-card');
        const colorHex = card.getAttribute('data-color');
        const color = new THREE.Color(colorHex);
        gsap.to(particlesMaterial.color, { r: color.r, g: color.g, b: color.b, duration: 0.5 });
        gsap.to(bloomPass, { strength: 3, duration: 0.2 });
    };

    const handleMouseLeave = (e: any) => {
        if (!e.target.closest('.service-card')) return;
        gsap.to(particlesMaterial.color, { r: 0.97, g: 0.33, b: 0, duration: 0.5 });
        gsap.to(bloomPass, { strength: 1.8, duration: 0.5 });
    };

    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      // Dispose other three resources if needed
    };
  }, []);

  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none" />;
};

export default ThreeBackground;