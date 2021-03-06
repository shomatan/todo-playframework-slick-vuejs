name := "todo-playframework-slick-vuejs"

version := "1.0"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.8"

libraryDependencies ++= Seq(
  cache,
  ws,
  "org.scalatestplus.play" %% "scalatestplus-play"    % "1.5.1" % Test,
  "com.typesafe.play"      %% "play-slick"            % "2.0.0",
  "com.typesafe.play"      %% "play-slick-evolutions" % "2.0.0",
  "com.h2database"         % "h2"                     % "1.4.187",
  "mysql"                  %  "mysql-connector-java"  % "5.1.36"
)

resolvers += "scalaz-bintray" at "http://dl.bintray.com/scalaz/releases"

