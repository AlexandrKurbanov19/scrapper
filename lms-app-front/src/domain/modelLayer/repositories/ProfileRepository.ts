import DataProviderInterface from '../../dataLayer/dataProvider/DataProviderInterface';
import {
  ProfileEntity,
  ProfileEntityInstance,
} from '../store/CoreStore/ProfileStore/entities/ProfileEntity';

class ProfileRepository {
  constructor(
    private readonly dataProvider: DataProviderInterface,
  ) {
  }

  async fetchProfile(): Promise<ProfileEntityInstance | null> {
    const data = await this.dataProvider.fetchProfile();

    if (!data) {
      return null;
    }

    try {
      return ProfileEntity.create({
        ...data,
        firstname: data.firstname || '',
        lastname: data.lastname || '',
        patronymic: data.patronymic || '',
      });
    } catch (error: unknown) {
      console.error(error);

      if (error instanceof Error) {
        throw error;
      } else {
        throw new Error(String(error));
      }
    }
  }
}

export default ProfileRepository;
