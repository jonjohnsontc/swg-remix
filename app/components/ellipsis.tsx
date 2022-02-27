export default function Ellipsis() {
  return (
    <div>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <span className="sr-only is-size-4">Loading...</span>
      </div>
    </div>
  );
}
