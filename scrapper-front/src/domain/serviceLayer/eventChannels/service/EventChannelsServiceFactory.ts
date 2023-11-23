import EventChannelsService from './EventChannelsService';
import authenticationEventChannel from '../channels/authenticationEventChannel';

class EventChannelsServiceFactory {
  static create() {
    return new EventChannelsService(
      authenticationEventChannel,
    );
  }
}

export default EventChannelsServiceFactory;
