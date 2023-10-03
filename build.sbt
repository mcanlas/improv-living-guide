libraryDependencies += "org.typelevel"        %% "cats-effect"  % "3.5.2"
libraryDependencies += "com.github.pathikrit" %% "better-files" % "3.9.2"

enablePlugins(MicrositesPlugin)

mdocIn := baseDirectory.value / "manuscript"

micrositeUrl := "https://mcanlas.github.io"

micrositeBaseUrl := "/improv-living-guide"

micrositeGithubOwner := "mcanlas"
micrositeGithubRepo  := "improv-living-guide"

micrositeDocumentationUrl              := "introduction.html"
micrositeDocumentationLabelDescription := "Read the book"

micrositeAuthor := "Mark Canlas"

resolvers -= ("tpolecat" at "http://dl.bintray.com/tpolecat/maven")

resolvers += ("tpolecat" at "http://dl.bintray.com/tpolecat/maven").withAllowInsecureProtocol(true)
