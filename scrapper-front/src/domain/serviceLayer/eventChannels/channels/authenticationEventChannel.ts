import { EventBus } from '../../../../lib/eventbus';
import eventbus from '../../../../lib/eventbus/eventbus';

export type AuthenticationEventChannelMethods = {
  onLogin: (userId: string) => void
  on401Error: () => void
  onLogout: () => void
};

export type AuthenticationEventChannel = EventBus<AuthenticationEventChannelMethods>;

const authenticationEventChannel = eventbus<AuthenticationEventChannelMethods>({ debug: false });

export default authenticationEventChannel;
