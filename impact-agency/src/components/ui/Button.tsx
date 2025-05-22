import React from 'react';
import Link from 'next/link';

export type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  as?: 'button' | 'a';
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
  disabled?: boolean;
  tabIndex?: number;
  style?: React.CSSProperties;
};

/**
 * A reusable button component that can render as a <button> or a Next.js <Link> (or <a> if external).
 * Applies consistent styling for primary CTA buttons.
 */
export const Button: React.FC<ButtonProps> = ({
  href,
  children,
  className = '',
  as,
  onClick,
  type = 'button',
  target,
  rel,
  disabled = false,
  tabIndex,
  style
}) => {
  const baseClass =
    'bg-gradient-to-r from-[#2e78eb] to-[#1861c2] text-white px-6 py-3 rounded-xl shadow-lg font-medium text-base transition-all duration-200 hover:brightness-110 hover:scale-105 hover:text-white focus:text-white active:text-white focus:outline-none focus:ring-4 focus:ring-[#2e78eb]/40';

  if (href) {
    // Use Next.js Link for internal, <a> for external
    const isExternal = href.startsWith('http');
    if (isExternal) {
      return (
        <a
          href={href}
          className={`${baseClass} ${className}`}
          target={target || '_blank'}
          rel={rel || 'noopener noreferrer'}
          tabIndex={tabIndex}
          style={style}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {children}
        </a>
      );
    } else {
      return (
        <Link
          href={href}
          className={`${baseClass} ${className}`}
          tabIndex={tabIndex}
          style={style}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {children}
        </Link>
      );
    }
  }
  // Render as <button>
  return (
    <button
      type={type}
      className={`${baseClass} ${className}`}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      disabled={disabled}
      tabIndex={tabIndex}
      style={style}
    >
      {children}
    </button>
  );
};
