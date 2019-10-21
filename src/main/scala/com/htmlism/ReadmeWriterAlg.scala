package com.htmlism

import cats.effect._
import cats.implicits._

trait ReadmeWriterAlg[F[_]] {
  def write(xs: List[(String, String)]): F[Unit]
}

object ReadmeWriterAlg {
  private lazy val file =
    "README.md"

  def apply[F[_]](reader: ReaderAlg[F], writer: WriterAlg[F])(implicit F: Sync[F]): ReadmeWriterAlg[F] =
    new ReadmeWriterAlg[F] {
      def write(toc: List[(String, String)]): F[Unit] =
        (for {
          readme <- reader.lines(file)
        } yield {
          val newToc =
            toc.map((format _).tupled)

          val newReadmeLines =
            keepUpToChapter(readme)._1 ::: newToc

          val payload =
            (newReadmeLines :+ "")
              .mkString("\n")

          writer
            .write(file)(payload)
        }).void
    }

  private def format(title: String, file: String): String =
    s"* [$title](manuscript/$file)"

  private def keepUpToChapter(xs: List[String]) =
    xs
      .foldLeft(List[String]() -> false) { case ((acc, afterChapter), e) =>
        if (afterChapter)
          acc -> afterChapter
        else {
          val newStatus =
            e.contains("Chapters") || afterChapter

          (acc :+ e) -> newStatus
        }
      }
}
