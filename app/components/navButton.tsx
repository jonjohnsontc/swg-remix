import { NavLink } from "remix";

export function NavButton(props: { name: string; to: string }) {
  return (
    <p className="is-size-2">
      <NavLink to={props.to} className="navbar-item is-2 mt-2">
        {props.name}
      </NavLink>
    </p>
  );
}

export function ExternalNavButton(props: { name: string; href: string }) {
  return (
    <p className="is-size-2">
      <a href={props.href} className="navbar-item is-2 mt-2">
        {props.name}
      </a>
    </p>
  );
}
