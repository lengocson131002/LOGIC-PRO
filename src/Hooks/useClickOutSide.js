import { useEffect } from 'react';
const useClickOutSide = (handler, ref) => {
    useEffect(() => {
        let eventHandler = (event) => {
            if (!ref.current.contains(event.target)) {
                handler();
            }
        }

        document.addEventListener('mousedown', eventHandler);
        return () => {
            document.removeEventListener('mousedown', eventHandler);
        }
    }, [handler, ref]);
}
export default useClickOutSide;