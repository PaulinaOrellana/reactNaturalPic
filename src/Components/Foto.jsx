import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faThinHeart, faHeart as faSolidHeart } from '@fortawesome/free-regular-svg-icons';


const Foto = ({ foto }) => { 
    const [selected, setSelected] = useState(false);

  return (
    <Card style={{ width: '18rem', position: 'relative', margin:'5px'}}>
      <Card.Img variant="top" src={foto.src.tiny} />
      <Card.Body style={{ position: "absolute", bottom: 0, backgroundColor: "rgba(255, 255, 255, 0.01)", width: "100%" }}>
        <Card.Text style={{ color: 'white' }}>
            {foto.alt}
            </Card.Text>
      </Card.Body>
      <FontAwesomeIcon
            icon={selected ? faSolidHeart : faThinHeart}
            style={{ color: selected ? 'red' : 'white', position: 'absolute', top: 10, right: 15 }}
            onClick={() => setSelected(!selected)}
          />
    </Card>
  );
};

export default Foto;