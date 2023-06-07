function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}

export default function Interatividade() {
  return (
    <div className="Toolbar" onclick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <Button onClick={() => alert('Playing!')}>
        Play Movie
      </Button>
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}

/*function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}
function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert('Playing ${movieName}!');
  }
  return (
    <Button onClick={handlePlayClick}> Play "{movieName}"
    </Button>
  );
}
function UploadButton() {
  return (
    <Button onClick={() => alert('Uploading!')}> Upload Image
    </Button>
  );
}
export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}

*/