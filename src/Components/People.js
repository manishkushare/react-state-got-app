function People(props) {
  return (
    <ul className="cards">
      {props.people.map((person, index) => {
        return (
          <li key={index} className="card">
            <img src={person.image} />
            <h2>{person.name}</h2>
          </li>
        );
      })}
    </ul>
  );
}
export default People;
