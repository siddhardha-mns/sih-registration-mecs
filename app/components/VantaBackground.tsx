"use client";

import { useEffect, useRef, useState } from "react";

export default function VantaBackground() {
    const vantaRef = useRef<HTMLDivElement>(null);
    const [vantaEffect, setVantaEffect] = useState<any>(null);

    useEffect(() => {
        let effect: any = null;
        let threeScript: HTMLScriptElement | null = null;
        let vantaScript: HTMLScriptElement | null = null;

        const loadVanta = () => {
            if (!vantaRef.current) return;

            // Check if window.VANTA and window.THREE are available
            if ((window as any).VANTA && (window as any).THREE) {
                try {
                    effect = (window as any).VANTA.WAVES({
                        el: vantaRef.current,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.00,
                        minWidth: 200.00,
                        scale: 1.00,
                        scaleMobile: 1.00,
                        color: 0x111111,
                        shininess: 36.00,
                        waveHeight: 17.50,
                        waveSpeed: 0.70,
                        zoom: 0.65
                    });
                    setVantaEffect(effect);
                } catch (e) {
                    console.error("Vanta error:", e);
                }
            }
        };

        const loadScripts = async () => {
            // Check for existing three.js script or create it
            const threeSrc = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
            let existingThreeScript = document.querySelector(`script[src="${threeSrc}"]`) as HTMLScriptElement;

            if (!existingThreeScript && !(window as any).THREE) {
                threeScript = document.createElement("script");
                threeScript.src = threeSrc;
                threeScript.async = true;
                document.head.appendChild(threeScript);
                await new Promise((resolve) => {
                    threeScript!.onload = resolve;
                });
            } else if (existingThreeScript && !(window as any).THREE) {
                // If script tag exists but hasn't finished loading yet
                await new Promise((resolve) => {
                    existingThreeScript.addEventListener('load', resolve);
                });
            }

            // Check for existing Vanta script or create it
            const vantaSrc = "https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.waves.min.js";
            let existingVantaScript = document.querySelector(`script[src="${vantaSrc}"]`) as HTMLScriptElement;

            if (!existingVantaScript && (!(window as any).VANTA || !(window as any).VANTA.WAVES)) {
                vantaScript = document.createElement("script");
                vantaScript.src = vantaSrc;
                vantaScript.async = true;
                document.head.appendChild(vantaScript);
                await new Promise((resolve) => {
                    vantaScript!.onload = resolve;
                });
            } else if (existingVantaScript && (!(window as any).VANTA || !(window as any).VANTA.WAVES)) {
                await new Promise((resolve) => {
                    existingVantaScript.addEventListener('load', resolve);
                });
            }

            loadVanta();
        };

        loadScripts();

        return () => {
            if (effect) effect.destroy();
            // Optional: we could remove scripts but usually safe to keep them
        };
    }, []);

    return <div ref={vantaRef} className="absolute inset-0 w-full h-full z-0" />;
}
