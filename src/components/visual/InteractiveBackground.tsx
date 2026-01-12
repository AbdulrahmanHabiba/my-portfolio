import { useEffect, useState } from "react";

const InteractiveBackground = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 40,
                y: (e.clientY / window.innerHeight - 0.5) * 40,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Moving Mouse Blob */}
            <div
                className="absolute w-[40%] h-[40%] bg-neon-blue/15 rounded-full blur-[120px] transition-transform duration-700 ease-out"
                style={{
                    transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
                    top: '30%',
                    left: '30%'
                }}
            />

            {/* Static/Pulse Blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-pink/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-neon-purple/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 dark:opacity-30" />
        </div>
    );
};

export default InteractiveBackground;
