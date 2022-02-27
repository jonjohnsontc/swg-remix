import SearchBar from "~/components/searchBar";

export default function Index() {
  return (
    <div className="home-content">
      <div className="columns is-centered">
        <div className="column is-one-third-widescreen is-half-full-hd is-three-quarters">
          <h2 className="title has-text-centered is-size-1-mobile">
            Discover Thousands of Songwriters
          </h2>
        </div>
      </div>
      <div className="column is-full my-5"></div>
      <div className="columns is-centered">
        <div className="column is-narrow is-one-quarter-widescreen is-one-quarter-fullhd is-one-third-desktop">
          <SearchBar />
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-half">
          <hr />
        </div>
      </div>
      <h2 className="has-text-centered">
        Don't know where to start? Try a <a href="">Random Match</a>
      </h2>
    </div>
  );
}
