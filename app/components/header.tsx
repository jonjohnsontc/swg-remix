import Logo from "./logo";
import { NavButton, ExternalNavButton } from "./navButton";
import SearchBar from "./searchBar";

export default function Header(props: { route: string }) {
  if (props.route.includes("search") || props.route.includes("writer")) {
    return HeaderWithSearch();
  }
  return (
    <nav
      className="navbar is-tab header"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Logo />
        <a href="">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div className="navbar-menu">
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
  );
}

// (defn header-w-search-bar
//     "The header for the website, including search bar"
//     []
//     (let [toggle @(re-frame/subscribe [::subs/burger-menu])]
//       [:nav.navbar.is-tab.header
//        {:role "navigation" :aria-label "main navigation"}
//        [:div.navbar-brand
//         [new-logo]
//         [:a.navbar-burger {:role "button" :aria-label "menu" :aria-expanded "false"
//                            :class (when (= true toggle) "is-active")
//                            :on-click #(re-frame/dispatch [::events/toggle-burger-menu])}
//          [:span {:aria-hidden "true"}]
//          [:span {:aria-hidden "true"}]
//          [:span {:aria-hidden "true"}]]]
//        [:div.navbar-menu {:class (when (= true toggle) "is-active")}
//         [:div.navbar-start
//          [:div.navbar-item [search-bar]]]
//         [:div.navbar-end
//          [nav-button "about" [::events/push-state :routes/about]]
//          [nav-button "github" gh-address]]]]))

export function HeaderWithSearch() {
  return (
    <nav
      className="navbar is-tab header"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Logo></Logo>
        <a
          href=""
          className="navbar-burger"
          role="button"
          aria-label="menu"
          aria-expanded="false"
          // TODO: SHOULD TOGGLE BURGER MENU
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div className="navbar-menu">
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
  );
}
