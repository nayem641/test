import "../../SCSS/storySkeleton.scss";

export default function StorySkeleton() {
 const users=[12,123,12,2,4,12,23]

  return (
    <div className="container">
      {users.map((user) => (
        <div className={"item"} >
          <div className={"number"}></div>
          <div className={"img"}>
            <div className="r1"></div>
            <div className="r2"></div>
          </div>
          <div className={"author"}></div>
        </div>
      ))}
    </div>
  );
}
