'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: { delay: number; y: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom.delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Reveal({
  children,
  delay = 0,
  y = 40,
  className,
  once = true,
}: Props) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      custom={{ delay, y }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
