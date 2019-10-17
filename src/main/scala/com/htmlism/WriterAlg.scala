package com.htmlism

trait WriterAlg[F[_]] {
  def write(parts: String*)(s: String): F[Unit]
}
