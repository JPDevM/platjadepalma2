// Dependencies
import React, { Fragment } from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

// Middlewares

// Components

// Styles

// Media
const FacebookChat = () => {
  return (
    <Fragment>
      {/* https://www.facebook.com/business/help/1524587524402327 */}

      <MessengerCustomerChat
        pageId="106605797516371"
        appId="6426186054118328"
      />
    </Fragment>
  );
};

export default FacebookChat;
