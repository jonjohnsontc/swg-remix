import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "remix";
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
        <ScrollRestoration />
        {/* Disabling scripts for now
        TODO: Do I want to put them back in?
        I think I do, if I can preserve css animations b/w pages
         */}
        {/* <Scripts /> */}
        <LiveReload />
      </body>
    </html>
  );
}
