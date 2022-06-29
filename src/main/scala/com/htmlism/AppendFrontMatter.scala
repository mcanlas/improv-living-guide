package com.htmlism

import cats._
import cats.effect._
import cats.syntax.all._

/**
  * Regenerates the `README.md` file based on the manuscript so that the GitHub view is synchronized with the book.
  */
object AppendFrontMatter extends IOApp.Simple {
  def run: IO[Unit] =
    program[IO]

  private def program[F[_]: Sync] =
    for {
      rw <- new BetterFilesReaderWriter[F].pure[F]
      alg <- new AppendFrontMatterAlg(rw).pure[F]

      files <- rw.lines("manuscript", "Book.txt")
      _ <- files.traverse(alg.appendFrontMatter)
    } yield ()
}

class AppendFrontMatterAlg[F[_]: Sync](rw: BetterFilesReaderWriter[F]) {
  def appendFrontMatter(f: String): F[Unit] =
    contentsOf(f) >>= maybeWrite(f)

  private def contentsOf(f: String) =
    rw.lines("manuscript", f)

  private def maybeWrite(f: String)(contents: List[String]) = {
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
    xs.mkString("\n") + "\n"
}
