package com.htmlism

import cats.effect._
import cats.syntax.all._

/**
  * Regenerates the `README.md` file based on the manuscript so that the GitHub view is synchronized with the book.
  */
object GenerateReadme extends IOApp.Simple {
  def run: IO[Unit] =
    program[IO]

  private def program[F[_]: Sync] =
    for {
      rw <- new BetterFilesReaderWriter[F].pure[F]

      book <- BookReaderAlg[F](rw).pure[F]
      readme <- ReadmeWriterAlg[F](rw, rw).pure[F]
      microSiteMenu <- MicrositeMenuWriterAlg[F](rw).pure[F]

      toc <- book.readChapterHeadings
      _ <- readme.write(toc)
      _ <- microSiteMenu.write(toc)
    } yield ()
}
