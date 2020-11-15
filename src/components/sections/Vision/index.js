import React from "react";
import Box from "../../common/Box";
import "./vision.scss";

const Vision = () => {
  return (
    <React.Fragment>
      <div className="vision_container">
        <Box className="vision_heading">
          <h2>Min vision</h2>
        </Box>
        <Box className="vision_content">
          <p>
            Bacon ipsum dolor amet tail ham hock corned beef frankfurter
            hamburger. Salami turducken kielbasa short loin tri-tip venison
            prosciutto beef landjaeger pork belly flank meatball kevin. Sausage
            t-bone shankle bacon meatball jerky, swine short loin turkey fatback
            hamburger pastrami.
          </p>
        </Box>
      </div>
      <div className="vision_container">
        <Box className="vision_content">
          <p>
            Drumstick meatloaf beef ribs, alcatra hamburger cow shankle chicken
            boudin. Beef ribs cupim tri-tip alcatra filet mignon kielbasa ham
            hock doner andouille chislic tongue pork chop. Short loin meatball
            beef ribs sausage leberkas. Ham turkey alcatra tail pastrami chuck
            spare ribs ham hock fatback jerky kevin venison t-bone.
          </p>
        </Box>
        <Box className="vision_image"></Box>
      </div>
    </React.Fragment>
  );
};
export default Vision;
