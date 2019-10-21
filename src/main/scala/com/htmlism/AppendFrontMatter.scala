package com.htmlism

import cats._
import cats.effect._
import cats.implicits._

/**
 * Regenerates the `README.md` file based on the manuscript so that the GitHub view is synchronized with the book.
 */
object AppendFrontMatter extends IOApp {
  def run(args: List[String]): IO[ExitCode] =
    program[IO]

  private def program[F[_]: Sync]: F[ExitCode] =
    for {
      rw <- new BetterFilesReaderWriter[F].pure[F]
      files <- rw.lines("manuscript", "Book.txt")
      _ <- files.traverse(appendFrontMatter[F](rw))
    } yield ExitCode.Success

  private def appendFrontMatter[F[_]: Monad](rw: BetterFilesReaderWriter[F])(f: String): F[Unit] =
    contentsOf[F](rw, f) >>= maybeWrite(rw, f)

  private def contentsOf[F[_]](rw: BetterFilesReaderWriter[F], f: String): F[List[String]] =
    rw.lines("manuscript", f)

  private def maybeWrite[F[_]: Applicative](rw: BetterFilesReaderWriter[F], f: String)(contents: List[String]) = {
    val title = BookReaderAlg.isolateTitle(contents.filter(_.startsWith("# ")).head)
    val hasFrontMatter = contents.exists(_.startsWith("---"))

    if (hasFrontMatter)
      Applicative[F].unit
    else
      rw.write("manuscript", f) {
        toFileContents {
          List("---", "layout: docs", s"title: $title", "---", "") ::: contents
        }
      }
  }

  private def toFileContents(xs: List[String]) =
    (xs.mkString("\n")) + "\n"
}
