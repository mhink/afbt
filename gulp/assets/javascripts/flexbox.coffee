React             = require("react")
FlexboxTutorial   = require("./components/FlexboxTutorial").FlexboxTutorial
TutorialControls  = require("./components/FlexboxTutorial").TutorialControls
$                 = require("jquery")

$(document).ready ->
  React.render(React.createElement(FlexboxTutorial),  $("#tutorial > .tutorial-content")[0])
  React.render(React.createElement(TutorialControls), $(".tutorial-controls")[0])

