import Puzzle from "./puzzle";

export default function Game() {

  // TODO Have some instructions on how to play. Accessible from a menu.
  //      Also should show up on the first time the game is played, cached in browser.
  //      Probably just display as a pop-up card thing. Not a literal pop-up.

  // TODO Different modes.
  // RGB (Additive) - the one we're starting with.
  // CMYK (Subtractive)
  // RYB (Subtractive) https://github.com/camme/ryb-color-mixer?tab=readme-ov-file 
  // Gradients (Start and End) (?)

  // Hmm. https://stackoverflow.com/questions/14819058/mixing-two-colors-naturally-in-javascript
  // And well, CMYK and RYB mixing are both just subtractive models - we shouldn't care about
  //   what the primary colors are.
  //   In fact, we could pick arbitrary primary colors and it would still work.
  // TODO We *do* want to guarantee that the target is achievable from mixing the primaries,
  //      though. We can just simulate mixing from primaries with N steps from the starting color.
  //      That can get the minimum score automatically, and ensures the target is reachable.
  //      Though since idk about the exact mixing models, maybe we want to just ensure there's some accuracy
  //        threshold to avoid rounding issues.

  return (
    <div>
      <h1>Palette Puzzle</h1>
      <Puzzle />
    </div>
  );
}
