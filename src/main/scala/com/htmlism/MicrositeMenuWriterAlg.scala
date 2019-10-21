package com.htmlism

trait MicrositeMenuWriterAlg[F[_]] {
  def write(xs: List[(String, String)]): F[Unit]
}

object MicrositeMenuWriterAlg {
  def apply[F[_]](writer: WriterAlg[F]): MicrositeMenuWriterAlg[F] =
    new MicrositeMenuWriterAlg[F] {
      def write(toc: List[(String, String)]): F[Unit] =
        writer
          .write("src", "main", "resources", "microsite", "data", "menu.yml") {
            toc
              .map((toPair _).tupled)
              .flatMap(p => List(s"  - title: ${p.title}", s"    url: ${p.url}"))
              .prepended("options:")
              .mkString("\n") + "\n"
          }
    }

  def toPair(title: String, file: String) =
    Pair(title, file.replace("md", "html"))

  case class Pair(title: String, url: String)
}
