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
    sections.forEach(section => {
      ScrollTrigger.create({
        trigger: `#${section}`,
        start: "top top",
        end: "bottom bottom",
        onEnter: () => setActive(section),
        onEnterBack: () => setActive(section),
        markers: true
      });
    });
  }, []);

  return (
    <div>
      <navbar className={styles.container}>
        {sections.map((item, index) => (
          <ul key={index}>
            <li
              active={active}
              className={active === item ? styles.active : styles.link}
            >
              <Link href={`#${item}`}>{item}</Link>
            </li>
          </ul>
        ))}
      </navbar>
      {children}
    </div>
  );
}

export default Navbar1;