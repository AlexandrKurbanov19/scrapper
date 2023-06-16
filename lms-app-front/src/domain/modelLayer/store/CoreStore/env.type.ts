import EventChannelsService from '../../../serviceLayer/eventChannels/service/EventChannelsService';
import TokenProvider from '../../../infrastructureLayer/TokenProvider';
import { Repositories } from '../../repositories/RepositoriesFactory';

export type Env = {
  eventChannelsService: EventChannelsService,
  tokenProvider: TokenProvider,
  repositories: Repositories,
};
