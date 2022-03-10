import { Links, LiveReload, Meta, Outlet, useLoaderData } from "remix";
import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";

import Header from "./components/header";
import stylesUrl from "./styles/mystyles.css";

export const meta: MetaFunction = () => {
  return { title: "Songwriter Graph" };
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const loader: LoaderFunction = async ({ request }) => {
  return new URL(request.url).pathname;
};

type LoaderData = string;

export function CatchBoundary() {
  return (
    <html>
      <head>
        <title>Not Found - Songwriter Graph</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Header route="search" />
        <div className="info-content">
          <h1 className="subtitle">
            Sorry, we couldn't find the page you're looking for.{" "}
            <a href="/">Go Home</a>
          </h1>
        </div>
      </body>
    </html>
  );
}

export default function App() {
  const path = useLoaderData<LoaderData>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header route={path} />
        <div className="info-content">
          <Outlet />
        </div>
        <LiveReload />
      </body>
    </html>
  );
}
