import {
  useCallback,
  useState,
  useRef,
  useEffect,
  useMemo,
} from 'react';
import fscreen from 'fscreen';
import { FullScreenHandle } from '../types/IFullScreen';

const useFullScreenHandle = (): FullScreenHandle => {
  const [active, setActive] = useState<boolean>(false);
  const node = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleChange = () => {
      setActive(fscreen.fullscreenElement === node.current);
    };
    fscreen.addEventListener('fullscreenchange', handleChange);
    return () => fscreen.removeEventListener('fullscreenchange', handleChange);
  }, []);

  const enter = useCallback(() => {
    if (fscreen.fullscreenElement) {
      return fscreen.exitFullscreen().then(() => fscreen.requestFullscreen(node.current));
    } if (node.current) {
      return fscreen.requestFullscreen(node.current);
    }
    return false;
  }, [node.current]);

  const exit = useCallback(() => {
    if (fscreen.fullscreenElement === node.current) {
      return fscreen.exitFullscreen();
    }
    return Promise.resolve();
  }, [node.current]);

  return useMemo(
    () => ({
      active,
      enter,
      exit,
      node,
    }),
    [active, enter, exit],
  );
};
export default useFullScreenHandle;
