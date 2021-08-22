import { useCallback } from "react";
import { useState } from "react";

const useForceUpdate = () => {
    const [, updateState] = useState<{}>();
    const forceUpdate = useCallback(() => updateState({}), []);
    return forceUpdate;
}

export default useForceUpdate;