import { useSearchParams } from "remix";

import { Icon } from "@mdi/react";
import { mdiMusicNote } from "@mdi/js";

export default function SearchBar() {
  const [params] = useSearchParams();
  let defaultVal = params.get("term");
  if (!defaultVal) {
    defaultVal = "";
  }

  return (
    <form action="" className="field has-addons">
      <div className="control has-icons-left is-expanded">
        <input
          type="text"
          name="term"
          className="input is-rounded"
          placeholder="Search for a writer here"
          defaultValue={defaultVal}
        />
        <div className="icon is-left">
          <Icon path={mdiMusicNote} size="1.5em" />
        </div>
      </div>
      <div className="control">
        <input
          formAction="/search"
          type="submit"
          value="Go"
          className="button is-primary is-rounded"
        />
      </div>
    </form>
  );
}
