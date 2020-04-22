scalaVersion := "2.13.1"

libraryDependencies += "org.typelevel" %% "cats-effect" % "2.1.3"
libraryDependencies += "org.typelevel" %% "mouse"       % "0.25"
libraryDependencies += "com.github.pathikrit" %% "better-files" % "3.8.0"

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
