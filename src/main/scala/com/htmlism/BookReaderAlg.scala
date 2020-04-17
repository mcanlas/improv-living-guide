package com.htmlism

import cats.effect._
import cats.implicits._

trait BookReaderAlg[F[_]] {
  def readChapterHeadings: F[List[(String, String)]]
}

object BookReaderAlg {
  private val titlePattern = """# (.*)""".r

  def apply[F[_]](reader: ReaderAlg[F])(implicit F: Sync[F]): BookReaderAlg[F] =
    new BookReaderAlg[F] {
      def readChapterHeadings: F[List[(String, String)]] =
        for {
          files <- findChapters
          pairs <- files.traverse(withTitle)
        } yield pairs

      private def withTitle(f: String) =
        readChapter(f)
          .map(findTitleLine)
          .map(isolateTitle)
          .map(t => (t, f))

      private def findChapters =
        reader.lines("manuscript", "Book.txt")

      private def readChapter(s: String) =
        reader.lines("manuscript", s)
    }

  private def findTitleLine(xs: List[String]): String =
    xs.filter(_.startsWith("# "))
      .head

  def isolateTitle(s: String): String =
    s match {
      case titlePattern(title) => title
    }
}
