import React from 'react';
import iphone from '../img/iphone11.png';
import i1 from '../img/img1.webp';
import i2 from '../img/i2.jpg';
import i3 from '../img/i3.jpg';
import i4 from '../img/i4.webp';
import i5 from '../img/cameraB.png';
import i6 from '../img/camara.jpg';
import i7 from '../img/paisaje.jpg';
import s from '../styles/styles.module.css';
import Nav from './navbar';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { useRef } from 'react';
export default function Container() {
  return (
    <div className={s.container}>
      <Nav />
      <div className={s.cont1}>
        <h2 className={s.i}>iPhone 11 Pro</h2>
        <ul className={s.ul2}>
          <li>Overview</li>
          <li>Tech Specs</li>
          <button>Buy</button>
        </ul>
      </div>
      <div className={s.im0}>
        <img className={s.imgp} src={iphone} alt="" />
      </div>
      <div className={s.conteiner2}>
        <div className={s.conteiner21}>
          {' '}
          <h1 className={s.titulo2}>And then there was Pro.</h1>
          <p className={s.p2}>
            A transformative triple‑camera system that adds tons of capability
            without complexity. An unprecedented leap in battery life. And a
            mind‑blowing chip that doubles down on machine learning and pushes
            the boundaries of what a smartphone can do. Welcome to the first
            iPhone powerful enough to be called Pro.
          </p>
          <br />
          <h4 className={s.h42}>From $24.95/mo. or $599 with trade-in.*</h4>
          <br />
          <h4>
            <a className={s.a2} href="#">
              Watch the keynote Watch the film
            </a>{' '}
          </h4>
        </div>
      </div>
      <div className={s.imgc}>
        <img className={s.imgi} src={i1} alt="" />

        <img className={s.imgi} src={i2} alt="" />

        <img className={s.imgi} src={i3} alt="" />
      </div>
      <div className={s.conteinerd3}>
        <div className={s.conteiner3}>
          <div className={s.texc}>
            <h1>Take a closer look.</h1>
            <p>Two sizes. Four finishes. Stainless steel and glass design.</p>
          </div>

          <div>
            <img className={s.img4} src={i4} alt="" />
          </div>
        </div>
      </div>
      <div className={s.divcamera}>
        <img className={s.i5} src={i5} alt="" />
        <h1 className={s.titucamera}>
          Pro camera system <br /> We’ve three‑upped ourselves.
        </h1>
      </div>
      <div className={s.conteiner4}>
        <img className={s.i6} src={i6} alt="" />
        <h3 className={s.camaras}>
          Meet the first triple-camera system to combine cutting-edge technology
          with the legendary simplicity of iPhone. Capture up to four times more
          scene. Get beautiful images in drastically lowe light. Shoot the
          highest-quality video in an smartphone-then edit with the same tools
          you love for photos. You´ve never shot with anithing like it.{' '}
        </h3>
      </div>
      <div className={s.conteiner5}>
        <h2 className={s.ultimotext}>
          Expanded field of view. iPhone 11 Pro lets you zoom from the Telephoto
          all the way out to the new Ultra Wide camera, for an impressive 4x
          optical zoom range.
        </h2>
        <img className={s.i7} src={i7} alt="" />
        <div className={s.tiposdecamera}>
          {' '}
          <h3>Telephoto</h3>
          <h3> Wide</h3>
          <h3> Ultra Wide</h3>
        </div>
      </div>
    </div>
  );
}
