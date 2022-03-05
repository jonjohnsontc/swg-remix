import Logo from "./logo";
import { NavButton, ExternalNavButton } from "./navButton";
import SearchBar from "./searchBar";

const HamburgerToggle = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
        document.addEventListener('DOMContentLoaded', () => {

          // Get all "navbar-burger" elements
          const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
          
          // Check if there are any navbar burgers
          if ($navbarBurgers.length > 0) {
            console.log("We have nav-burgers");
            // Add a click event on each of them
            $navbarBurgers.forEach( el => {
              el.addEventListener('click', () => {
        
                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
                console.log("should be active")
              });
            });
          }
        
        });
`,
      }}
    ></script>
  );
};

export default function Header(props: { route: string }) {
  if (props.route.includes("search") || props.route.includes("writer")) {
    return HeaderWithSearch();
  }

  return (
    <>
      <nav
        className="navbar is-tab header"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Logo />
          <a
            className="navbar-burger"
            role="button"
            aria-label="menu"
            data-target="navMenu"
            aria-expanded="false"
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <div className="navbar-menu" id="navMenu">
          <div className="navbar-start">
            <NavButton name="about" to="/about" />
            <ExternalNavButton
              name="github"
              href="https://github.com/jonjohnsontc/songwriter-graph"
            />
          </div>
          <div className="navbar-end" />
        </div>
      </nav>
      <HamburgerToggle />
    </>
  );
  {
  }
}

export function HeaderWithSearch() {
  return (
    <>
      <nav
        className="navbar is-tab header"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Logo></Logo>
          <a
            className="navbar-burger"
            role="button"
            aria-label="menu"
            data-target="navMenu"
            aria-expanded="false"
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <div className="navbar-menu" id="navMenu">
          <div className="navbar-start">
            <div className="navbar-item">
              <SearchBar />
            </div>
          </div>
          <div className="navbar-end">
            <NavButton name="about" to="/about"></NavButton>
            <ExternalNavButton
              name="github"
              href="https://github.com/jonjohnsontc/songwriter-graph"
            ></ExternalNavButton>
          </div>
        </div>
      </nav>
      <HamburgerToggle />
    </>
  );
}
