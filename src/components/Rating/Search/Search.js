import React, { useEffect, useState } from "react";
import "./Search.css";
import axios from "axios";
import { FaStar } from "react-icons/fa";

function Search({ getTodosByUserId, setAverage, setListStars }) {
  const [result, setResult] = useState([]);
  const [zmienna, setZmienna] = useState("");
  const [tab, setTab] = useState([]);
  const [stars, setStars] = useState(0);
  const [starsV, setStarsV] = useState(undefined);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios({
      url: "http://jsonplaceholder.typicode.com/users",
      method: "GET",
    }).then((response) => {
      //console.log(response);
      let temp = response.data;
      for (let i = 0; i < temp.length; i++) temp[i] = { ...temp[i], rating: 0 };
      setResult(response.data);
    });
  };

  const search = (param) => {
    let tab = result;
    let lista = tab;
    lista = lista.filter((element) =>
      element.toUpperCase().includes(param.toUpperCase())
    );
    setResult([lista]);
  };

  const handleMouseOver = (e) => {
    setStarsV(e);
  };
  const handleMouseLeave = (e) => {
    setStarsV(undefined);
  };

  return (
    <div className="search-component">
      <h2>My Collection</h2>
      <input
        type="text"
        onChange={(e) => {
          setZmienna(e.target.value);
          search(e.target.value);
        }}
        placeholder={"Search by Name"}
      ></input>
      <h4></h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>address</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Ratings</th>
          </tr>
        </thead>
        <tbody>
          {result
            ? result.map((e, index) => (
                <tr key={e.id} onClick={() => getTodosByUserId(e.id)}>
                  <td>{e.company.name}</td>
                  <td>{e.address.street}</td>
                  <td>{e.email}</td>
                  <td>{e.phone}</td>
                  <td>
                    {[...Array(5)].map((s, i) => {
                      const ratingValue = i++;
                      return (
                        <label key={i}>
                          <FaStar
                            key={i}
                            size={20}
                            style={{
                              cursor: "pointer",
                            }}
                            color={result[index].rating >= i ? "gold" : "grey"}
                            onClick={() => {
                              let temp = result;
                              temp[index].rating = i;
                              setResult([...temp]);
                              let tempAvg = 0;
                              let tempStars = [0, 0, 0, 0, 0, 0];
                              for (let j = 0; j < temp.length; j++) {
                                tempAvg += temp[j].rating;
                                tempStars[temp[j].rating]++;
                              }
                              setListStars(tempStars);
                              setAverage(
                                Math.floor(tempAvg / (temp.length * 5) * 100)
                              );
                            }}
                          />
                        </label>
                      );
                    })}
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
}
export default Search;
