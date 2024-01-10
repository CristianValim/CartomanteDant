import { useEffect, useState } from 'react';

import { Container } from './styles';
import one from '../../assets/aboutme1.png';
import two from '../../assets/aboutme2.png';
import three from '../../assets/aboutme3.png';
import { useInView } from 'react-intersection-observer';

import stars from '../../assets/stars.png'

export function AboutMe() {

  const [ ref, inView ] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });


  return (
    <Container id="sobremim">
      <div ref={ref} className='profile'>
      <h1>Sobre mim</h1><img className='stars' src={stars} />
      <img className={`one ${inView ? 'visible' : ''}`} src={one} alt="Foto de perfil de Dant" />
      <img className={`two ${inView ? 'visible' : ''}`} src={two} />
      <img className={`three ${inView ? 'visible' : ''}`} src={three} />
    </div>

      <div className="text">
        <p>
          Sou Dant, terapeuta holística e taróloga com anos de experiência.
          Especializo-me em Tarot, Baralho Cigano Lenormand e Baralho de Esquerda, oferecendo leituras
          profundas. Também tenho como ferramentas o Pêndulo Radiestésico,
          Mesa Radiônica de Saint Germain e Mapa Numerológico.
        </p>
        <br />
        <p className="indent">
          Minha abordagem intuitiva busca proporcionar clareza e entendimento,
          ultrapassando o convencional. Com sensibilidade única, estou sempre
          explorando novas abordagens para enriquecer a experiência do
          consultante.
        </p>
        <br />
        <p className="indent">
          Meu objetivo é te ajudar a explorar sua jornada de autoconhecimento, seja
          por meio do Tarot, radiestesia ou numerologia, busco guiar cada pessoa rumo ao empoderamento
          pessoal.
        </p>
      </div>
    </Container>
  );
}
