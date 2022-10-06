import { FileType, GetFileOpts, GetFileRet, types } from "./types.js";
import { XDG_CONFIG_HOME } from "@pcrab/pxdg";
import path from "path";
import { readFileSync } from "fs";

const isValidFileType = (fileExt: string): fileExt is FileType => {
    if (types.findIndex((t) => fileExt === t) !== -1) return true;
    return false;
};

const getFile = (opts: GetFileOpts): GetFileRet => {
    if (!opts.appName && !opts.basePath) {
        throw new Error("Need appName or basePath to locate your config file");
    }
    if (!opts.fileName && !opts.fileType) {
        throw new Error("Need fileName or fileType to locate your config file");
    }
    const filePath =
        opts.basePath || path.join(XDG_CONFIG_HOME, opts.appName || "");
    const fileName =
        opts.fileName || `config.${opts.fileType?.toLowerCase() || "json"}`;
    const type = opts.fileType || opts.fileName?.split(".").pop() || "json";
    if (!isValidFileType(type)) {
        throw new Error(
            "Wrong file type. File type must be one of ['json', 'JSON', 'yaml', 'YAML', 'toml', 'TOML']",
        );
    }
    const content = readFileSync(path.join(filePath, fileName), "utf-8");
    return {
        content,
        type,
    };
};

export default getFile;
