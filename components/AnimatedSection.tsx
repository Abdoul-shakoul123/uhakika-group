'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
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
  const isInternal = href.startsWith('/') && !href.startsWith('//') && !href.startsWith('/http');
  const motionProps = {
    initial: { opacity: 0, y: 20 } as const,
    whileInView: { opacity: 1, y: 0 } as const,
    viewport: { once: true } as const,
    transition: { delay },
    className,
  };
  if (isInternal) {
    return (
      <Link href={href} className={className}>
        <motion.span
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay }}
        >
          {children}
        </motion.span>
      </Link>
    );
  }
  return (
    <motion.a href={href} target="_blank" rel="noopener noreferrer" {...motionProps}>
      {children}
    </motion.a>
  );
}

