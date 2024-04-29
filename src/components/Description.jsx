const Description = ({ data }) => {
  return (
    <div>
      <h1 className="text-primary">{data.title}</h1>
      <p>{data.overview}</p>
      <p>
        <b className="text-primary">Release date:</b> {data.releaseDate}
      </p>
      <p>
        <b className="text-primary">Runtime:</b> {data.runtime} min
      </p>
      <p>
        <b className="text-primary">Rating:</b> {data.rating}%
      </p>
      <p>
        <b className="text-primary">Genres:</b> {data.genres}
      </p>
      <p>
        <b className="text-primary">Budget:</b> ${data.budget}
      </p>
      <p>
        <b className="text-primary">Revenue:</b> ${data.revenue}
      </p>
    </div>
  );
};

export default Description;
