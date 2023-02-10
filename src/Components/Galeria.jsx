import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Foto from './Foto.jsx';
import MiContexto from '../Contexts/MiContexto.jsx';
import { useContext } from 'react';

const Galeria = ({ fav }) => {
 
    const {fotos, setFotos} = useContext(MiContexto);

  return (
        <Container>
        <Row>
          {fotos.map(f => {
            if (fav) {
              return f.selected ? (
                <Col key={f.id}>
                  <Foto foto={f} />
                </Col>
              ) : null;
            }
            return (
              <Col key={f.id}>
                <Foto foto={f} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  };

export default Galeria;