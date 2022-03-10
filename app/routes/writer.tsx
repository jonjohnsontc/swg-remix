import { LoaderFunction, MetaFunction, useSearchParams } from "remix";
import type { Neighborhood } from "~/components/neighborsListing";

import { db } from "~/utils/db.server";
import { useLoaderData } from "remix";
import StatBox from "~/components/statBox";
import { Metronome, TrebleClef, MusicCircle } from "~/components/icons";
import Neighbors from "~/components/neighborsListing";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const wid = url.searchParams.get("wid");
  let intWid;

  // If there is no term, we'll return a blank string and then
  // return the Index page in the route
  if (!wid) {
    return "";
  }

  // If the wid can't be converted into a number, we'll just return a blank
  // string and return the homepage again.
  intWid = Number(wid);
  if (isNaN(intWid)) {
    throw new Response("Not found", { status: 404 });
  }

  const result = await db.writers.findUnique({
    where: { wid: intWid },
  });
  if (!result) {
    throw new Response("Not found", { status: 404 });
  }

  let matches;
  if (result?.matches) {
    matches = JSON.parse(result.matches.toString("utf-8"));
  }
  const convertedResult = {
    wid: result?.wid,
    writerName: result?.writerName,
    ipi: result?.ipi,
    meanTempo: result?.meanTempo,
    modeKey: result?.modeKey,
    matches: matches,
  };

  return convertedResult;
};

type LoaderData = {
  wid: number;
  writerName: string;
  ipi: string;
  meanTempo: string;
  modeKey: string;
  matches: Neighborhood;
};

export const meta: MetaFunction = () => {
  // TODO: Can I use loader data to pull the writers name?
  const [params] = useSearchParams();
  return { title: `${params.get("name")} - Songwriter Graph` };
};

export default function Writer() {
  let data = useLoaderData<LoaderData>();

  // We take up to the first 5 matches (if available) to show to the user
  let matches: Neighborhood;
  if (data.matches.length > 5) {
    matches = data.matches.slice(0, 5);
  } else {
    matches = data.matches.slice();
  }
  let keyMap = new Map([
    ["0", "C"],
    ["1", "C \u266F / B \u266D"],
    ["2", "D"],
    ["3", "D \u266F / E \u266D"],
    ["4", "E"],
    ["5", "F"],
    ["6", "F \u266F / G \u266D"],
    ["7", "G"],
    ["8", "G \u266F / A \u266D"],
    ["9", "A"],
    ["10", "A \u266F / B \u266D"],
    ["11", "B"],
  ]);

  const getTonalKeys = (keyResult: string): string => {
    if (keyResult.startsWith("(")) {
      const keys = keyResult.replace("(", "").replace(")", "").split(",");
      const tonalKeys = keys
        .map((int) => {
          return keyMap.get(int);
        })
        .join(", ");
      return tonalKeys;
    } else {
      const tonalKey = keyMap.get(keyResult);
      if (!tonalKey) {
        return "unknown";
      } else {
        return tonalKey;
      }
    }
  };
  let key = getTonalKeys(data.modeKey);
  let roundTempo = Number(data.meanTempo).toFixed(2);

  return (
    <div className="columns is-centered is-mobile">
      <div className="column tile is-ancestor is-5-widescreen is-half-desktop is-full-mobile is-three-quarters-tablet writer-card">
        <div className="tile is-vertical is-parent">
          <article className="box tile is-child pb-6 notification is-primary">
            <div className="columns is-mobile is-vcentered">
              <h1 className="title is-size-4-mobile is-size-2-table column is-two-thirds">
                {data.writerName}
                <p className="subtitle is-2 is-size-3-table is-size-4-mobile">
                  IPI: {data.ipi}
                </p>
              </h1>
              <MusicCircle
                size="33%"
                className="column is-one-third"
              ></MusicCircle>
            </div>
            <hr />
            <div className="columns is-mobile is-centered stat-panel pt-3">
              <StatBox
                prompt="Primary Key(s)"
                icon={TrebleClef()}
                stat={key}
              ></StatBox>
              <div className="column is-1"></div>
              <StatBox
                prompt="Avg Tempo"
                icon={Metronome()}
                stat={roundTempo}
              ></StatBox>
            </div>
            <hr />
            <Neighbors data={matches}></Neighbors>
          </article>
        </div>
      </div>
    </div>
  );
}
