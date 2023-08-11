ThisBuild / libraryDependencySchemes += "org.scala-lang.modules" %% "scala-xml" % VersionScheme.Always

addSbtPlugin("org.typelevel"   % "sbt-tpolecat"    % "0.5.0") // automatically enable useful compiler flags
addSbtPlugin("org.wartremover" % "sbt-wartremover" % "3.1.3")
addSbtPlugin("com.47deg"       % "sbt-microsites"  % "1.4.3")
addSbtPlugin("ch.epfl.scala"   % "sbt-scalafix"    % "0.11.0")
addSbtPlugin("org.scalameta"   % "sbt-scalafmt"    % "2.5.0")
