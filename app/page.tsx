import Puzzle from "./puzzle";

export default function Game() {

  // TODO Have some instructions on how to play. Accessible from a menu.
  //      Also should show up on the first time the game is played, cached in browser.
  //      Probably just display as a pop-up card thing. Not a literal pop-up.

  return (
    <div>
      <h1>Palette Puzzle</h1>
      <Puzzle />
    </div>
  );
}
