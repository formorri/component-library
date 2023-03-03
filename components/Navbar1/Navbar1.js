import styles from './Navbar1.module.scss';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

const Navbar1 = ({ children }) => {
  const sections = ['home', 'highlights', 'messages', 'performance', 'value', 'downloads'];
  const [active, setActive] = useState('home');

  useEffect(() => {
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section}`,
        start: "top center",
        end: "bottom center",
        // toggleActions: "play none none reset",
        onEnter: () => setActive(section),
        onLeave: () => setActive(section),
        onEnterBack: () => setActive(section),
        onLeaveBack: () => setActive(section),
        markers: true,
      });
    });
  }, []);

  return (
    <div>
      <nav className={styles.container}>
        {sections.map((item) => (
          <ul key={item}>
            <li
              className={active === item ? styles.active : styles.link}
            >
              <a
                href={`#${item}`}
              >{item}</a>
            </li>
          </ul>
        ))}
      </nav>
      {children}
    </div>
  );
};

export default Navbar1;
