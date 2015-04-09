React             = require("react")
FlexboxTutorial   = require("./components/FlexboxTutorial").FlexboxTutorial
TutorialControls  = require("./components/FlexboxTutorial").TutorialControls
$                 = require("jquery")

$(document).ready ->
  React.render(React.createElement(FlexboxTutorial),  $("#section-1")[0])
  React.render(React.createElement(TutorialControls), $("#tutorial-controls")[0])

