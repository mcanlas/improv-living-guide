package com.htmlism

import cats.effect._
import cats.implicits._

object GenerateReadme extends IOApp {
  def run(args: List[String]): IO[ExitCode] =
    for {
      book <- BookReaderAlg[IO].pure[IO]
      readme <- ReadmeWriterAlg[IO].pure[IO]

      toc <- book.readChapterHeadings
      _ <- readme.write(toc)
    } yield ExitCode.Success
}
