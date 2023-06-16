import ProfileDto from './dto/ProfileDto';

export type FetchProfileResponse = ProfileDto | null;

export interface ProfileDataProviderInterface {
  fetchProfile: () => Promise<FetchProfileResponse>,
}

type DataProviderInterface =
  & ProfileDataProviderInterface;

export default DataProviderInterface;
