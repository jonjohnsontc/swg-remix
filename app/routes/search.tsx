import type { LoaderFunction, MetaFunction } from "remix";

import { Link, useLoaderData, useSearchParams } from "remix";
import Index from ".";
import { db } from "~/utils/db.server";

type LoaderData = {
  term: string;
  count: number;
  skip: number;
  writers: {
    wid: number;
    writerName: string | null;
  }[];
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const term = url.searchParams.get("term");
  const skip = url.searchParams.get("skip");
  let skipInt: number;
  if (!skip) {
    skipInt = 0;
  } else {
    skipInt = parseInt(skip);
  }

  // If there is no term, we'll return a blank string,
  // which will trigger the search results fn to return the Index page
  if (!term) {
    return "";
  }
  const count = db.writers.count({
    where: { writerName: { contains: term?.toUpperCase() } },
  });
  const results = db.writers.findMany({
    where: {
      writerName: {
        contains: term?.toUpperCase(),
      },
    },
    take: 10,
    skip: skipInt * 10,
    select: {
      wid: true,
      writerName: true,
    },
  });

  const writerResults: LoaderData = {
    term: term,
    count: await count,
    skip: skipInt,
    writers: await results,
  };

  return writerResults;
};

export const meta: MetaFunction = () => {
  const [data] = useSearchParams();
  return { title: `Search Results for "${data.get("term")}" Songwriter Graph` };
};

export default function SearchResults() {
  const data = useLoaderData<LoaderData>();

  const results = data.skip * 10 + 10;
  const prev = data.skip !== 0;
  const next = data.count > results;
  let prevUrl: string | undefined = undefined;
  let nextUrl: string | undefined = undefined;
  if (prev) {
    prevUrl = `/search?term=${data.term}&skip=${data.skip - 1}`;
  }
  if (next) {
    nextUrl = `/search?term=${data.term}&skip=${data.skip + 1}`;
  }

  const resultsPagination = (resultLength: number) => {
    if (resultLength <= 10) {
      return <div></div>;
    }
    return (
      <nav
        className="pagination is-rounded mt-6"
        role="navigation"
        aria-label="navigation"
      >
        {/* @ts-ignore - for the disabled attribute */}
        <a href={prevUrl} className="pagination-previous" disabled={!prevUrl}>
          Previous
        </a>
        {/* @ts-ignore - for the disabled attribute */}
        <a href={nextUrl} className="pagination-next" disabled={!nextUrl}>
          Next
        </a>
      </nav>
    );
  };

  // If there's no search term, we'll return the index page
  if (!data) {
    return <Index />;
  }

  if (data.count > 0) {
    return (
      <div className="search-results columns">
        <div className="column info-content is-offset-1 is-7">
          <div className="subtitle is-2">{data.count} results</div>
          <div className="content">
            <ul>
              {data.writers.map((writer) => (
                <li key={writer.wid} className="writer-result">
                  <Link
                    to={`/writer?wid=${writer.wid}&name=${writer.writerName}`}
                  >
                    {writer.writerName}
                  </Link>
                </li>
              ))}
            </ul>
            {resultsPagination(data.count)}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="search-results">
        Sorry, your search returned 0 results
      </div>
    );
  }
}
