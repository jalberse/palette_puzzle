import Puzzle from "./puzzle";
import Header from "./header";

export default function Game() {

  // TODO Have the help menu show up by default on first load,
  //      but only when the help icon is clicked on later visits.

  // TODO Make the target and end colors change daily rather than randomly generating them on load.
  //      The extremely dumb way is to hard-code that and then redeploy a change each day changing the color.
  //      The less dumb way is to set up a basic database that stores the colors, and a cron job.
  //        That also sets us up for other database stuff later (multiple games being the obvious),
  //        track history, and lets us put the DB and cron job stuff on the resume line.
  // So... switch to a DB to store the target color and the end color: https://vercel.com/docs/storage/vercel-postgres/quickstart
  // And then set up a cron job to change the target color and end color daily: https://vercel.com/docs/solutions/vercel-cron-jobs
  // And of course set up our frontend to pull from there rather than randomly generating them.
  // https://vercel.com/templates/next.js/vercel-cron
  // Steps: 
  // 1. Create the database, table, populate with 2 colors:
  // https://vercel.com/docs/storage/vercel-postgres/quickstart
  // 2. Change the code to read from that instead of generating randomly.
  // 3. Set up the cron job to change the colors daily.
  // Note that I didn't mention dev vs production databases.
  //   That's because I don't want to pay for 2. Thanks, Vercel.
  //   We'll do it live!
  // Once I fix the adding-colors endpoint, we just need a cron job to ping it once a day (and ensure security is fine,
  //   which I think I'll see once we get to the cron setup).
  //   (plus reading from the DB for the colors on mounting the puzzle)

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

  return (
    <div>
      <Header />
      <Puzzle />
    </div>
  );
}
