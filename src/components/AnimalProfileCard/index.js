const AnimalCard = ({ animal }) => {
  return (
    <div>
      {animal.map((animal, index) => (
        <>
          <img src={animal.avatar} alt={animal.name} />
          <span key={animal.name}>{animal.name}</span>
          <span key={animal.age}>Idade: {animal.age}</span>
          <span key={animal.size}>
            Porte: {animal.size === "small" ? "Pequeno" : "Grande"}{" "}
            {animal.size === "medium" && "Médio"}
          </span>
          <span key={animal.color}>Pelagem: {animal.color}</span>
          <span key={animal.castrated}>
            É castrado: {animal.castrated === false ? "Não" : "Sim"}
          </span>
          <span key={animal.vacinated}>
            É vacinado: {animal.vacinated === false ? "Não" : "Sim"}
          </span>
          <div key={animal.id}>{animal.obs}</div>
        </>
      ))}
    </div>
  );
};

export default AnimalCard;
