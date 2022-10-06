import getFile from "./getFile.js";
import parseFile from "./parseFile.js";
import { ReadConfigOpts } from "./types.js";

const readConfig = <T extends object>(
    opts: ReadConfigOpts<T>,
): T | Record<string, never> => {
    const { content, type } = getFile(opts);
    const config = parseFile<T>(content, type);
    return { ...opts?.defaultConfig, ...config };
};

export default readConfig;
