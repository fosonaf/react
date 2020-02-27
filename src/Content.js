import React, {useEffect, useState} from 'react';
import './App.css';

function Content() {

  const [collabs, setCollabs] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const columns = [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname', initialEditValue: 'initial edit value' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'Fretin', 63: 'Marseille' },
      },
    ];

    setColumns(columns);

    const data = [
      { name: 'Zidane', surname: 'Zinedine', birthYear: 1972, birthCity: 63 },
      { name: 'Debuchy', surname: 'Mathieu', birthYear: 1985, birthCity: 34 },
    ];

    setCollabs(data);
  });

  return (
    <div className="Content">
      TODO
    </div>
  );
}

export default Content;
