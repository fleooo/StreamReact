const Cast = ({ data }) => {
  return (
    <div>
      <img src={data.image} alt="" className="rounded-pill m-2" />
      <div className="text-center">
        <h5>{data.name}</h5>
        <span>{data.character}</span>
      </div>
    </div>
  );
};

export default Cast;
