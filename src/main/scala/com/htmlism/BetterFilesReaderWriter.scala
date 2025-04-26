package com.htmlism

import better.files.Dsl.*
import cats.effect.*
import cats.syntax.all.*

class BetterFilesReaderWriter[F[_]](implicit F: Sync[F]) extends ReaderAlg[F] with WriterAlg[F] {
  def lines(parts: String*): F[List[String]] =
    (file(parts) >>= lines)
      .map(_.toList)

  def write(pathParts: String*)(body: String): F[Unit] =
    file(pathParts) >>= write(body)

  private def file(parts: Seq[String]) =
    F.delay {
      parts.foldLeft(cwd)(_ / _)
    }

  private def lines(file: better.files.File) =
    F.delay {
      file.lines()
    }

  private def write(body: String)(file: better.files.File) =
    F.delay {
      file.write(body)
    }.void
}
