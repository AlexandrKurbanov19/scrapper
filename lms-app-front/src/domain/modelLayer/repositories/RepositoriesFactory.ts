import DataProviderInterface from '../../dataLayer/dataProvider/DataProviderInterface';

import ProfileRepository from './ProfileRepository';

export interface Repositories {
  readonly profileRepository: ProfileRepository,
}

class RepositoriesFactory {
  constructor(
    private readonly dataProvider: DataProviderInterface,
  ) {
  }

  create(): Repositories {
    return {
      profileRepository: new ProfileRepository(this.dataProvider),
    } as const;
  }
}

export default RepositoriesFactory;
