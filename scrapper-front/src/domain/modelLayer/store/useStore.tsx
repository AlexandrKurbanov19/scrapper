import { useInstance } from 'react-ioc';
import { Store } from './Store';

const useStore = () => useInstance(Store);

export default useStore;
