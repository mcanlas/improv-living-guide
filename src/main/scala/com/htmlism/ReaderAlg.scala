package com.htmlism

trait ReaderAlg[F[_]] {
  def lines(parts: String*): F[List[String]]
}
