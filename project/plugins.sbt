ThisBuild / libraryDependencySchemes += "org.scala-lang.modules" %% "scala-xml" % VersionScheme.Always
addSbtPlugin("com.github.cb372" % "sbt-explicit-dependencies" % "0.3.1")
addSbtPlugin("org.typelevel"    % "sbt-tpolecat"              % "0.5.2") // automatically enable useful compiler flags
addSbtPlugin("org.wartremover"  % "sbt-wartremover"           % "3.4.0")
addSbtPlugin("com.47deg"        % "sbt-microsites"            % "1.4.3")
addSbtPlugin("ch.epfl.scala"    % "sbt-scalafix"              % "0.14.3")
addSbtPlugin("org.scalameta"    % "sbt-scalafmt"              % "2.5.5")
