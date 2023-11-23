import type { AuthenticationEventChannel } from '../channels/authenticationEventChannel';

class EventChannelsService {
  constructor(
    public readonly authenticationEventChannel: AuthenticationEventChannel,
  ) {}
}

export default EventChannelsService;
