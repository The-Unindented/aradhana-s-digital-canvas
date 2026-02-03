import { useState, useRef, useEffect, CSSProperties, ReactNode } from 'react';
import { Github, Linkedin, Handshake } from 'lucide-react';
import { gsap } from 'gsap';
import './BubbleMenu.css';



interface MenuItem {
    label: string;
    href: string;
    ariaLabel?: string;
    rotation?: number;
    hoverStyles?: {
        bgColor?: string;
        textColor?: string;
    };
}

interface BubbleMenuProps {
    logo?: ReactNode;
    onMenuClick?: (isOpen: boolean) => void;
    className?: string;
    style?: CSSProperties;
    menuAriaLabel?: string;
    menuBg?: string;
    menuContentColor?: string;
    useFixedPosition?: boolean;
    items?: MenuItem[];
    animationEase?: string;
    animationDuration?: number;
    staggerDelay?: number;
}

const DEFAULT_ITEMS: MenuItem[] = [
    {
        label: 'home',
        href: '#',
        ariaLabel: 'Home',
        rotation: -8,
        hoverStyles: { bgColor: '#F87171', textColor: '#ffffff' }
    },
    {
        label: 'about',
        href: '#about',
        ariaLabel: 'About',
        rotation: 8,
        hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
    },
    {
        label: 'projects',
        href: '#projects',
        ariaLabel: 'Projects',
        rotation: 8,
        hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
    },
    {
        label: 'experience',
        href: '#experience',
        ariaLabel: 'Experience',
        rotation: 8,
        hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
    },
    {
        label: 'contact',
        href: '#contact',
        ariaLabel: 'Contact',
        rotation: -8,
        hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
    }
];

const SOCIAL_ITEMS: MenuItem[] = [
    {
        label: 'github',
        href: 'https://github.com/The-Unindented/',
        ariaLabel: 'GitHub',
        rotation: -5,
        hoverStyles: { bgColor: '#333', textColor: '#fff' }
    },
    {
        label: 'linkedin',
        href: 'https://linkedin.com/in/singharadhana',
        ariaLabel: 'LinkedIn',
        rotation: 5,
        hoverStyles: { bgColor: '#0077b5', textColor: '#fff' }
    }
];

export default function BubbleMenu({
    logo,
    onMenuClick,
    className,
    style,
    menuAriaLabel = 'Toggle menu',
    menuBg = '#fff',
    menuContentColor = '#111',
    useFixedPosition = true,
    items,
    animationEase = 'back.out(1.5)',
    animationDuration = 0.5,
    staggerDelay = 0.12
}: BubbleMenuProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);

    const overlayRef = useRef<HTMLDivElement>(null);
    const bubblesRef = useRef<(HTMLAnchorElement | null)[]>([]);
    const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);

    const menuItems = items?.length ? items : DEFAULT_ITEMS;
    const containerClassName = ['bubble-menu', useFixedPosition ? 'fixed' : 'absolute', className]
        .filter(Boolean)
        .join(' ');

    const handleToggle = () => {
        const nextState = !isMenuOpen;
        if (nextState) setShowOverlay(true);
        setIsMenuOpen(nextState);
        onMenuClick?.(nextState);
    };

    const handleItemClick = () => {
        setIsMenuOpen(false);
        onMenuClick?.(false);
    };

    useEffect(() => {
        const overlay = overlayRef.current;
        const bubbles = bubblesRef.current.filter(Boolean);
        const labels = labelRefs.current.filter(Boolean);

        if (!overlay || !bubbles.length) return;

        if (isMenuOpen) {
            gsap.set(overlay, { display: 'flex' });
            gsap.killTweensOf([...bubbles, ...labels]);
            gsap.set(bubbles, { scale: 0, transformOrigin: '50% 50%' });
            gsap.set(labels, { y: 24, autoAlpha: 0 });

            bubbles.forEach((bubble, i) => {
                const delay = i * staggerDelay + gsap.utils.random(-0.05, 0.05);
                const tl = gsap.timeline({ delay });

                tl.to(bubble, {
                    scale: 1,
                    duration: animationDuration,
                    ease: animationEase
                });
                if (labels[i]) {
                    tl.to(
                        labels[i],
                        {
                            y: 0,
                            autoAlpha: 1,
                            duration: animationDuration,
                            ease: 'power3.out'
                        },
                        `-=${animationDuration * 0.9}`
                    );
                }
            });
        } else if (showOverlay) {
            gsap.killTweensOf([...bubbles, ...labels]);
            gsap.to(labels, {
                y: 24,
                autoAlpha: 0,
                duration: 0.2,
                ease: 'power3.in'
            });
            gsap.to(bubbles, {
                scale: 0,
                duration: 0.2,
                ease: 'power3.in',
                onComplete: () => {
                    gsap.set(overlay, { display: 'none' });
                    setShowOverlay(false);
                }
            });
        }
    }, [isMenuOpen, showOverlay, animationEase, animationDuration, staggerDelay]);

    useEffect(() => {
        const handleResize = () => {
            if (isMenuOpen) {
                const bubbles = bubblesRef.current.filter(Boolean);
                const isDesktop = window.innerWidth >= 900;

                bubbles.forEach((bubble, i) => {
                    const item = menuItems[i];
                    if (bubble && item) {
                        const rotation = isDesktop ? (item.rotation ?? 0) : 0;
                        gsap.set(bubble, { rotation });
                    }
                });
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen, menuItems]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    return (
        <>
            {/* Backdrop blur overlay */}
            <div
                className={`bubble-menu-backdrop ${isMenuOpen ? 'visible' : ''}`}
                onClick={handleToggle}
                aria-hidden="true"
            />

            <nav className={containerClassName} style={style} aria-label="Main navigation">
                <div className="bubble logo-bubble" aria-label="Logo" style={{ background: menuBg }}>
                    <span className="logo-content">
                        {typeof logo === 'string' ? (
                            <img src={logo} alt="Logo" className="bubble-logo" />
                        ) : (
                            logo || (
                                <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>
                                    <span style={{ color: '#111' }}>aiwitharadhana</span>
                                    <span style={{ color: '#F87171' }}>.in</span>
                                </span>
                            )
                        )}
                    </span>
                </div>

                <div className="bubble-actions">
                    <a
                        href="https://github.com/The-Unindented/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bubble icon-bubble"
                        style={{ background: menuBg }}
                        aria-label="GitHub"
                    >
                        <Github size={20} className="social-icon" />
                    </a>

                    <a
                        href="https://linkedin.com/in/singharadhana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bubble icon-bubble"
                        style={{ background: menuBg }}
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} className="social-icon" />
                    </a>

                    <a
                        href="#contact"
                        className="bubble cta-bubble"
                        style={{ background: '#F87171', color: '#000', width: '50px', padding: 0 }}
                        aria-label="Say Hello"
                    >
                        <Handshake size={28} />
                    </a>

                    <button
                        type="button"
                        className={`bubble toggle-bubble menu-btn ${isMenuOpen ? 'open' : ''}`}
                        onClick={handleToggle}
                        aria-label={menuAriaLabel}
                        aria-pressed={isMenuOpen}
                        style={{ background: menuBg }}
                    >
                        <span className="menu-line" style={{ background: menuContentColor }} />
                        <span className="menu-line short" style={{ background: menuContentColor }} />
                    </button>
                </div>
            </nav>

            {showOverlay && (
                <div
                    ref={overlayRef}
                    className={`bubble-menu-items ${useFixedPosition ? 'fixed' : 'absolute'}`}
                    aria-hidden={!isMenuOpen}
                >
                    <ul className="pill-list" role="menu" aria-label="Menu links">
                        {menuItems.map((item, idx) => (
                            <li key={idx} role="none" className="pill-col">
                                <a
                                    role="menuitem"
                                    href={item.href}
                                    aria-label={item.ariaLabel || item.label}
                                    className="pill-link"
                                    onClick={handleItemClick}
                                    style={{
                                        '--item-rot': `${item.rotation ?? 0}deg`,
                                        '--pill-bg': menuBg,
                                        '--pill-color': menuContentColor,
                                        '--hover-bg': item.hoverStyles?.bgColor || '#f3f4f6',
                                        '--hover-color': item.hoverStyles?.textColor || menuContentColor
                                    } as CSSProperties}
                                    ref={el => {
                                        if (el) bubblesRef.current[idx] = el;
                                    }}
                                >
                                    <span
                                        className="pill-label"
                                        ref={el => {
                                            if (el) labelRefs.current[idx] = el;
                                        }}
                                    >
                                        {item.label}
                                    </span>
                                </a>
                            </li>
                        ))}
                        {/* Mobile-only social items */}
                        {SOCIAL_ITEMS.map((item, idx) => (
                            <li key={`social-${idx}`} role="none" className="pill-col mobile-only-item">
                                <a
                                    role="menuitem"
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.ariaLabel || item.label}
                                    className="pill-link"
                                    onClick={handleItemClick}
                                    style={{
                                        '--item-rot': `${item.rotation ?? 0}deg`,
                                        '--pill-bg': menuBg,
                                        '--pill-color': menuContentColor,
                                        '--hover-bg': item.hoverStyles?.bgColor || '#f3f4f6',
                                        '--hover-color': item.hoverStyles?.textColor || menuContentColor
                                    } as CSSProperties}
                                    ref={el => {
                                        // Need to handle refs carefully or just skip animation refs for these if strict
                                        // Or extend bubblesRef array
                                        if (el) bubblesRef.current[menuItems.length + idx] = el;
                                    }}
                                >
                                    <span
                                        className="pill-label"
                                        ref={el => {
                                            if (el) labelRefs.current[menuItems.length + idx] = el;
                                        }}
                                    >
                                        {item.label}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}
