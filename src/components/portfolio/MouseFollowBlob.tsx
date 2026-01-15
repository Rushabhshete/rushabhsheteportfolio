import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const MouseFollowBlob = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mousePosition.x, springConfig);
  const y = useSpring(mousePosition.y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX - 200, y: e.clientY - 200 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Primary blob */}
      <motion.div
        className="fixed w-[400px] h-[400px] rounded-full pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen"
        style={{
          x,
          y,
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      {/* Secondary blob with offset */}
      <motion.div
        className="fixed w-[300px] h-[300px] rounded-full pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen"
        style={{
          x: useSpring(mousePosition.x + 50, { damping: 35, stiffness: 100 }),
          y: useSpring(mousePosition.y + 50, { damping: 35, stiffness: 100 }),
          background: 'radial-gradient(circle, hsl(var(--accent) / 0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
    </>
  );
};

export default MouseFollowBlob;
