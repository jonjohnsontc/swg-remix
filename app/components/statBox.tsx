export type Stat = {
  prompt: string;
  stat: string;
  icon: JSX.Element;
};

export default function StatBox(props: Stat) {
  return (
    <div className="tile is-4-desktop is-3-tablet is-parent">
      <article className="tile is-child stat-box">
        <h1 className="title is-size-4 is-size-6-tablet stat-line has-text-centered">
          {props.prompt}
        </h1>
        <p className="subtitle is-size-2 is-size-5-tablet is-size-5-mobile stat has-text-centered">
          {props.stat}
        </p>
        <div className="columns is-mobile is-centered mb-3">{props.icon}</div>
      </article>
    </div>
  );
}
