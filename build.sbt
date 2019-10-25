scalaVersion := "2.13.0"

libraryDependencies += "org.typelevel" %% "cats-effect" % "2.0.0"
libraryDependencies += "org.typelevel" %% "mouse"       % "0.23"
libraryDependencies += "com.github.pathikrit" %% "better-files" % "3.8.0"

enablePlugins(MicrositesPlugin)

tutSourceDirectory := baseDirectory.value / "manuscript"

micrositeUrl := "https://mcanlas.github.io"

micrositeBaseUrl := "/improv-living-guide"
