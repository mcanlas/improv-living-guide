scalaVersion := "2.13.5"

libraryDependencies += "org.typelevel"        %% "cats-effect"  % "3.0.0-RC3"
libraryDependencies += "com.github.pathikrit" %% "better-files" % "3.9.1"

enablePlugins(MicrositesPlugin)

tutSourceDirectory := baseDirectory.value / "manuscript"

micrositeUrl := "https://mcanlas.github.io"

micrositeBaseUrl := "/improv-living-guide"

micrositeGithubOwner := "mcanlas"
micrositeGithubRepo := "improv-living-guide"

micrositeDocumentationUrl := "introduction.html"
micrositeDocumentationLabelDescription := "Read the book"

micrositeAuthor := "Mark Canlas"

scalafmtOnCompile := true

resolvers -= ("tpolecat" at "http://dl.bintray.com/tpolecat/maven")

resolvers += ("tpolecat" at "http://dl.bintray.com/tpolecat/maven").withAllowInsecureProtocol(true)
