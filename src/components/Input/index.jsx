import "../../routers/Home/home.css";

export const Input = ({ value, onChange, name, label }) => {
  return (
    <div className="buscador_container">
      <span className="buscador_span">{label}</span>
      <div className="buscador_container_input">
        <input
          type="text"
          className="buscador_input"
          placeholder="Wubalubadubdub ... busca aqui!"
          value={value}
          onChange={onChange}
          name={name}
        ></input>
      </div>
    </div>
  );
};
