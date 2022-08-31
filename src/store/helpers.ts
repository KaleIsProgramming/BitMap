import axios from "axios";

export const addAbortSignalListener = (signal: AbortSignal) => {
    const source = axios.CancelToken.source();
    signal.addEventListener('abort', () => {
        source.cancel();
    })
}