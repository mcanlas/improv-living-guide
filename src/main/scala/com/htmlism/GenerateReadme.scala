package com.htmlism

import cats._
import cats.effect._
import cats.implicits._

/**
 * Regenerates the `README.md` file based on the manuscript so that the GitHub view is synchronized with the book.
 */
object GenerateReadme extends IOApp {
  def run(args: List[String]): IO[ExitCode] =
    runSync[IO]

  private def runSync[F[_]: Sync] =
    program[F](BookReaderAlg[F], ReadmeWriterAlg[F])

  private def program[F[_]: Monad](book: BookReaderAlg[F], readme: ReadmeWriterAlg[F]): F[ExitCode] =
    for {
      toc <- book.readChapterHeadings
      _ <- readme.write(toc)
    } yield ExitCode.Success
}
