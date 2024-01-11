/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/
import path from "node:path";

import type { Compilation } from "webpack";

/**
 * @param compilation The webpack compilation.
 * @param swDest The original swDest value.
 *
 * @returns If swDest was not absolute, the returns swDest as-is.
 * Otherwise, returns swDest relative to the compilation's output path.
 *
 * @private
 */
export const relativeToOutputPath = (compilation: Compilation, swDest: string): string => {
  // See https://github.com/jantimon/html-webpack-plugin/pull/266/files#diff-168726dbe96b3ce427e7fedce31bb0bcR38
  if (path.isAbsolute(swDest)) {
    return path.relative(compilation.options.output.path!, swDest);
  }

  // Otherwise, return swDest as-is.
  return swDest;
};
