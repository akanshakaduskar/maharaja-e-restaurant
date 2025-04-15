import React, { useEffect, useRef, memo } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useMeasure from 'react-use-measure';

interface SparkleProps {
  style?: React.CSSProperties;
}

const Sparkle = memo<SparkleProps>(({ style }) => (
  <div className="sparkle" style={style} />
));

Sparkle.displayName = 'Sparkle';

const SparkleGroup = memo(() => (
  <>
    {[...Array(3)].map((_, i) => (
      <Sparkle
        key={i}
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      />
    ))}
  </>
));

SparkleGroup.displayName = 'SparkleGroup';

export const AnimatedSection = memo(({ children }: { children: React.ReactNode }) => {
  const shouldReduceMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [measureRef, bounds] = useMeasure();
  const { scrollYProgress } = useScroll({
    // target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollThrottleRef = useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      if (scrollThrottleRef.current) return;

      scrollThrottleRef.current = window.requestAnimationFrame(() => {
        if (sectionRef.current) {
          const elements = sectionRef.current.getElementsByClassName('scroll-trigger');
          Array.from(elements).forEach((element) => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight * 0.8;
            if (isVisible) {
              element.classList.add('visible');
            }
          });
        }
        scrollThrottleRef.current = undefined;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollThrottleRef.current) {
        window.cancelAnimationFrame(scrollThrottleRef.current);
      }
    };
  }, []);

  const motionProps = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        animate: inView ? { opacity: 1 } : { opacity: 0 },
        transition: { duration: 0.5 },
      }
    : {
        initial: { opacity: 0, y: 50 },
        animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
        transition: { duration: 0.8, ease: "easeOut" },
      };

  return (
    <motion.div
      ref={ref}
      style={{ y: shouldReduceMotion ? 0 : y, opacity }}
      {...motionProps}
      className="relative"
    >
      <div ref={measureRef}>
        <div ref={sectionRef} className="relative">
          <SparkleGroup />
          <motion.div
            initial={false}
            animate={{
              height: bounds.height > 0 ? bounds.height : "auto"
            }}
            transition={{ type: "spring", bounce: 0.2 }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
});

AnimatedSection.displayName = 'AnimatedSection';