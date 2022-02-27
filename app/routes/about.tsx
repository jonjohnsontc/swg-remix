export default function About() {
  return (
    <div className="columns is-centered is-mobile">
      <div className="column is-6-fullhd is-8-desktop is-8-touch is-full-mobile">
        <article className="content">
          <h1 className="title is-2 is-size-3-mobile" id="about">
            About
          </h1>
          <p>
            The Songwriter Graph is a personal project of mine with the idea of
            better connecting music listeners with the people who write their
            favorite music.{" "}
          </p>
          <p>
            I love browsing Spotify and checking out the song credits when I run
            into a song I&#39;m digging. It&#39;s fun to see if I can start to
            recognize songwriters I hadn&#39;t heard of before, and checkout
            other things that they&#39;ve written. The graph is built with that
            in mind.
          </p>
          <h2 id="architecture">Architecture</h2>
          <p>
            The graph is constructed out of a universe of songs, all co-located
            around each other based on how they sound. Each songwriter is
            represented by all of the songs we&#39;re able to match to them.{" "}
          </p>
          <p>
            Songs that are written by multiple writers are represented once for
            every co-writer. So, a song written by 5 people is represented 5
            times on the graph. Normally, those points would all be in the same
            location, but every songwriter&#39;s catalog of songs is normalized
            to try and retain some kind of uniqueness.
          </p>
          <p>
            Then, we use an Approximate Nearest Neighbors model to roughly
            calculate the distance between each song. After, we leverage the
            model to identify the writers who are most closely related to one
            another, by counting how frequently other writers appear next to
            them.
          </p>
          <p>
            Each songwriter page lists their 5 most frequent sonic neighbors,
            along with a few high-level stats about their writing style.
          </p>
          <h2 id="size-scope">Size &amp; Scope</h2>
          <p>
            The nearest neighbors model is built from over 100k tracks pulled
            from Spotify&#39;s API, which has then been matched against song
            registrations from one of the major US Performing Right Societies
            (i.e., ASCAP, BMI, SESAC)
          </p>
          <p>
            These songs are spread across over 10,000 songwriter records.
            Unfortunately, due to differences in writer names in individual song
            registrations (or use of pseudonyms), there are a bunch of duplicate
            songwriter records. I hope this can get cleaned up with time.
          </p>
          <h2 id="is-it-any-good-">Is it any good?</h2>
          <p>
            LOL, of course not 🙃. This is mostly a proof-of-concept right now.
            I think the newest set of songs within this dataset are from 2018.
            There&#39;s a number of issues on GitHub that we&#39;re tracking to
            shape the future of this project, including:
          </p>
          <ul>
            <li>
              <p>Types of tracks to pull from spotify</p>
            </li>
            <li>
              <p>Better access to songwriter data</p>
            </li>
          </ul>
          <h2 id="who-might-find-this-useful-">Who might find this useful?</h2>
          <ul>
            <li>
              <p>Songwriters/Publishers looking for people to write with</p>
            </li>
            <li>
              <p>Fans looking to discover new songwriters</p>
            </li>
            <li>
              <p>People who love looking at lists</p>
            </li>
          </ul>
          <p>
            There&#39;s probably more use cases here. If you like it, or have
            thoughts about it, let me know! Pull requests are also welcome.
          </p>
        </article>
      </div>
    </div>
  );
}
