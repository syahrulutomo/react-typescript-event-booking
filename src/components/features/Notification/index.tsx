import React from "react";
import { 
  NotificationContainer, 
  NotificationList,
  NotificationContent,
  NotificationLeftPart,
  NotificationRightPart,
  NotificationImage,
  NotificationText,
  NotificationTime 
} from "./Notification";
import { HighlightsTitle } from "./../Highlights/Highlights";
import GoJakartaImage from "./../../../assets/images/go-jakarta.jpeg";

const Notification = () => {
  return (
    <NotificationContainer>
      <HighlightsTitle>Notifications</HighlightsTitle>
      <NotificationList>
        <NotificationContent>
          <NotificationLeftPart>
            <NotificationImage src={GoJakartaImage} alt="image" />
          </NotificationLeftPart>
          <NotificationRightPart>
            <NotificationText>
              <span style={{ fontWeight: "600" }}>Go Jakarta</span> just announced a new event for Jul 16.
              <NotificationTime>2 days ago</NotificationTime>
            </NotificationText>
          </NotificationRightPart>
        </NotificationContent>
        {/* ----------------------- */}
        <NotificationContent>
          <NotificationLeftPart>
            <NotificationImage src={GoJakartaImage} alt="image" />
          </NotificationLeftPart>
          <NotificationRightPart>
            <NotificationText>
              <span style={{ fontWeight: "600" }}>Go Jakarta</span> just announced a new event for Jul 16.
              <NotificationTime>2 days ago</NotificationTime>
            </NotificationText>
          </NotificationRightPart>
        </NotificationContent>
        {/* ------------------------ */}
        <NotificationContent>
          <NotificationLeftPart>
            <NotificationImage src={GoJakartaImage} alt="image" />
          </NotificationLeftPart>
          <NotificationRightPart>
            <NotificationText>
              <span style={{ fontWeight: "600" }}>Go Jakarta</span> just announced a new event for Jul 16.
              <NotificationTime>2 days ago</NotificationTime>
            </NotificationText>
          </NotificationRightPart>
        </NotificationContent>
        {/* ------------------------- */}
        <NotificationContent>
          <NotificationLeftPart>
            <NotificationImage src={GoJakartaImage} alt="image" />
          </NotificationLeftPart>
          <NotificationRightPart>
            <NotificationText>
              <span style={{ fontWeight: "600" }}>Go Jakarta</span> just announced a new event for Jul 16.
              <NotificationTime>2 days ago</NotificationTime>
            </NotificationText>
          </NotificationRightPart>
        </NotificationContent>
        {/* ------------------------- */}
        <NotificationContent>
          <NotificationLeftPart>
            <NotificationImage src={GoJakartaImage} alt="image" />
          </NotificationLeftPart>
          <NotificationRightPart>
            <NotificationText>
              <span style={{ fontWeight: "600" }}>Go Jakarta</span> just announced a new event for Jul 16.
              <NotificationTime>2 days ago</NotificationTime>
            </NotificationText>
          </NotificationRightPart>
        </NotificationContent>
        {/* ------------------------- */}
        <NotificationContent>
          <NotificationLeftPart>
            <NotificationImage src={GoJakartaImage} alt="image" />
          </NotificationLeftPart>
          <NotificationRightPart>
            <NotificationText>
              <span style={{ fontWeight: "600" }}>Go Jakarta</span> just announced a new event for Jul 16.
              <NotificationTime>2 days ago</NotificationTime>
            </NotificationText>
          </NotificationRightPart>
        </NotificationContent>
      </NotificationList>
    </NotificationContainer>
  );
}

export default Notification;
