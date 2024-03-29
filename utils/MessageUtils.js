import PropTypes from 'prop-types';

export const MessageShape = PropTypes.shape ({
    id: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['text', 'image', 'location']), 
    text: PropTypes.string, 
    uri: PropTypes.string,
    coordinate: PropTypes.shape({
        latitude: PropTypes.number.isRequired, 
        longitude: PropTypes.number.isRequired,
    }),
});

let messageId = 0;

function getNextId() { 
    messageId += 1; 
    return messageId;
}
export function createTextMessage (text) {
    return {
        type: 'text',
        id: getNextId(), 
        text,
    };
}

export function createImageMessage(image) {
    return {
        type: 'image',
        id: getNextId(),
        image, // Changed from 'image' to 'uri' to reflect the proper field
    };
}
  
export function createLocationMessage (coordinate) {
    return {
        type: 'location',
        id: getNextId(),
        coordinate,
    };
}