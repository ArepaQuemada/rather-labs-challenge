import { CardProps } from "@src/interfaces/card.interface";

const Card = ({ description, id, imageUrl, title }: CardProps) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        <img src={imageUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
