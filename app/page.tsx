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

  // TODO Top bar - reference wordle. Below are all elements of that.
  // TODO Center: nice logo. Palette Puzzle.
  // TODO Right: a (?) button that shows the instructions in a dialog.
  // TODO Right: a settings button/icon that shows a settings dialog (I guess we'd want a dark mode etc...)
  // TODO top left - Hamburger menu in the - switch puzzles (RGB, CMYK, RYB)
  // TODO Top right: A button like "Subscribe to Games" but that takes us to Reference Rover's site.
  //      We'll have a permanent advertisement to our main product.
  //      I'll need to actually release Reference Rover though, which will come after this release.

  // TODO Pick a good font. The one we have is ugly on everything.
  //      Could use a Chevy Ray font?
  // https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#local-fonts
  

  // TODO Let's work on the header in the new headere.tsx file.
  //  Header component let's go...

  return (
    <div>
      <h1 className="text-center">Palette Puzzle</h1>
      <Puzzle />
    </div>
  );
}
