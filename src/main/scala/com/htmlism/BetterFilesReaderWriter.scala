package com.htmlism

import better.files.Dsl.*
import cats.effect.*
import cats.syntax.all.*

class BetterFilesReaderWriter[F[_]](implicit F: Sync[F]) extends ReaderAlg[F] with WriterAlg[F] {
  def lines(parts: String*): F[List[String]] =
    (file(parts) >>= lines)
      .map(_.toList)

  def write(parts: String*)(s: String): F[Unit] =
    file(parts) >>= write(s)

  private def file(parts: Seq[String]) =
    F.delay {
      parts.foldLeft(cwd)(_ / _)
    }

  private def lines(file: better.files.File) =
    F.delay {
      file.lines()
    }

  private def write(s: String)(file: better.files.File) =
    F.delay {
      file.write(s)
    }.void
}
