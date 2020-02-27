import React, {useEffect, useState} from 'react';
import './App.css';
import MaterialTable from "material-table";

const Content = () => {

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
  }, []);

  return (
    <div className="Content">
      <MaterialTable
          title="Editable Preview"
          columns={columns}
          data={collabs}
          editable={{
            onRowAdd: newData =>
                new Promise((resolve, reject) => {
                  resolve();
                  const data = [];
                  collabs.forEach(collab => data.push(collab));
                  data.push(newData);
                  setCollabs(data);
                  setTimeout(() => {
                    {
                      const data = collabs;
                      data.push(newData);
                      setCollabs(data);
                    }
                    resolve()
                  }, 1000)
                }),
            onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  resolve();
                  const data = [];
                  collabs.forEach(collab => data.push(collab));
                  const index = data.indexOf(oldData);
                  data[index] = newData;
                  setCollabs(data);
                  setTimeout(() => {
                    {
                      const data = collabs;
                      const index = data.indexOf(oldData);
                      data[index] = newData;
                      setCollabs(data);
                    }
                    resolve()
                  }, 1000)
                }),
            onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      const data = [];
                      collabs.forEach(collab => data.push(collab));
                      const index = data.indexOf(oldData);
                      data.splice(index, 1);
                      setCollabs(data);
                    }
                    resolve()
                  }, 1000)
                }),
          }}
      />
    </div>
  );
}

export default Content;
