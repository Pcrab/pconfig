import { fileType } from "./types.js";
import YAML from "yaml";
import TOML from "@iarna/toml";

const parseFile = <T extends object>(content: string, type: fileType): T => {
    if (type === "json" || type === "JSON") {
        return JSON.parse(content) as T;
    }
    if (type === "yaml" || type === "YAML") {
        return YAML.parse(content) as T;
    }
    if (type === "toml" || type === "TOML") {
        return TOML.parse(content) as T;
    }
    throw new Error("Wrong File Type");
};

export default parseFile;
