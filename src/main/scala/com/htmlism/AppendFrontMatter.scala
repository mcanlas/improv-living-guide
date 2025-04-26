package com.htmlism

import cats.*
import cats.effect.*
import cats.syntax.all.*

/**
  * Regenerates the `README.md` file based on the manuscript so that the GitHub view is synchronized with the book.
  */
object AppendFrontMatter extends IOApp.Simple {
  def run: IO[Unit] =
    program[IO]

  private def program[F[_]: Sync] =
    for {
      rw  <- new BetterFilesReaderWriter[F].pure[F]
      alg <- new AppendFrontMatterAlg(rw).pure[F]

      files <- rw.lines("manuscript", "Book.txt")
      _     <- files.traverse(alg.appendFrontMatter)
    } yield ()
}

class AppendFrontMatterAlg[F[_]: Sync](rw: BetterFilesReaderWriter[F]) {
  def appendFrontMatter(fileName: String): F[Unit] =
    readContentsOf(fileName) >>= assertWriteFrontMatter(fileName)

  private def readContentsOf(fileName: String) =
    rw.lines("manuscript", fileName)

  private def assertWriteFrontMatter(fileName: String)(contents: List[String]) = {
    val title          = BookReaderAlg.isolateTitle(contents.filter(_.startsWith("# ")).head)
    val hasFrontMatter = contents.exists(_.startsWith("---"))

    if (hasFrontMatter)
      Applicative[F].unit
    else
      rw.write("manuscript", fileName) {
        toFileContents {
          List("---", "layout: docs", s"title: $title", "---", "") ::: contents
        }
      }
  }

  private def toFileContents(xs: List[String]) =
    xs.mkString("\n") + "\n"
}
