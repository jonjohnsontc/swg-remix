import {
  mdiMusicClefTreble,
  mdiMetronome,
  mdiMusicCircleOutline,
} from "@mdi/js";
import Icon from "@mdi/react";

export function TrebleClef() {
  return <Icon path={mdiMusicClefTreble} size="1.5rem"></Icon>;
}

export function Metronome() {
  return <Icon path={mdiMetronome} size="1.5rem"></Icon>;
}

export function MusicCircle(props: { size: string; className: string }) {
  return (
    <Icon
      path={mdiMusicCircleOutline}
      size={props.size}
      className={props.className}
      style={{ position: "relative", right: "5%" }}
    ></Icon>
  );
}
