package com.htmlism

import cats.effect._
import cats.implicits._

/**
 * Regenerates the `README.md` file based on the manuscript so that the GitHub view is synchronized with the book.
 */
object GenerateReadme extends IOApp {
  def run(args: List[String]): IO[ExitCode] =
    for {
      book <- BookReaderAlg[IO].pure[IO]
      readme <- ReadmeWriterAlg[IO].pure[IO]

      toc <- book.readChapterHeadings
      _ <- readme.write(toc)
    } yield ExitCode.Success
}
