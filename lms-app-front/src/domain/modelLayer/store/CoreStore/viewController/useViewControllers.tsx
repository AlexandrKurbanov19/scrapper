import useStore from '../../useStore';
import { ViewControllersStoreInstance } from './ViewControllersStore';

const useViewControllers = (): ViewControllersStoreInstance => {
  const store = useStore();

  return store.viewControllers;
};

export default useViewControllers;
