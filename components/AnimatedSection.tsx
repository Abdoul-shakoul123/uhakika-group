'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export function AnimatedHeading({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.h2>
  );
}

export function AnimatedParagraph({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.p>
  );
}

export function AnimatedLink({ children, href, delay = 0, className = '' }: { children: ReactNode; href: string; delay?: number; className?: string }) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

