import React, { useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import { Button, ButtonGroup } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const ShareButton = ({ url, shareTitle }) => {
  const [showShareButtons, setShowShareButtons] = useState(false);

  const handleShareClick = () => {
    setShowShareButtons((prevValue) => !prevValue);
  };

  return (
    <div>
      <Button onClick={handleShareClick}>{shareTitle}</Button>
      {showShareButtons && (
        <ButtonGroup className="mt-2">
          {/* Facebook Share Button */}
          <FacebookShareButton url={url}>
            <Button
              variant="info"
              className="share-button"
              style={{ backgroundColor: "#1877f2" }}
            >
              <FaFacebook />
            </Button>
          </FacebookShareButton>

          {/* Twitter Share Button */}
          <TwitterShareButton url={url}>
            <Button
              variant="info"
              className="share-button"
              style={{ backgroundColor: "#1da1f2" }}
            >
              <FaTwitter />
            </Button>
          </TwitterShareButton>

          {/* WhatsApp Share Button */}
          <WhatsappShareButton url={url}>
            <Button
              variant="info"
              className="share-button"
              style={{ backgroundColor: "#25d366" }}
            >
              <FaWhatsapp />
            </Button>
          </WhatsappShareButton>
        </ButtonGroup>
      )}
    </div>
  );
};

export default ShareButton;
