import { Link } from "remix";

export type Neighborhood = Array<{
  wid: number;
  name: string;
  rank: number;
}>;

const Neighbor = (props: { wid: number; name: string }) => {
  let url = `/writer?wid=${props.wid}`;

  return (
    <li className="writer-result is-size-4" key={props.wid}>
      <Link to={url}>{props.name}</Link>
    </li>
  );
};

export default function Neighbors(props: { data: Neighborhood }) {
  return (
    <div className="columns is-mobile is-centered pt-4">
      <article className="tile is-vertical is-8 is-primary">
        <div className="is-size-4 has-text-centered is-primary">
          Most Similar
        </div>
        <div>
          <div className="content">
            <ol>
              {props.data.map((neighbor) => (
                <Neighbor
                  wid={neighbor.wid}
                  name={neighbor.name}
                  key={neighbor.wid}
                />
              ))}
            </ol>
          </div>
        </div>
      </article>
    </div>
  );
}
