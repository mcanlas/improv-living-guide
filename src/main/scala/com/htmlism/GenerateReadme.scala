package com.htmlism

import cats.effect._
import cats.implicits._

/**
 * Regenerates the `README.md` file based on the manuscript so that the GitHub view is synchronized with the book.
 */
object GenerateReadme extends IOApp {
  def run(args: List[String]): IO[ExitCode] =
    program[IO]

  private def program[F[_]: Sync]: F[ExitCode] =
    for {
      rw <- new BetterFilesReaderWriter[F].pure[F]

      book <- BookReaderAlg[F](rw).pure[F]
      readme <- ReadmeWriterAlg[F](rw, rw).pure[F]

      toc <- book.readChapterHeadings
      _ <- readme.write(toc)
    } yield ExitCode.Success
}
