export type fileType = "json" | "JSON" | "yaml" | "YAML" | "toml" | "TOML";

export interface GetFileOpts {
    appName?: string;
    fileName?: string;
    fileType?: fileType;
    basePath?: string;
}

export interface GetFileRet {
    content: string;
    type: fileType;
}

export interface ReadConfigOpts<T> extends GetFileOpts {
    defaultConfig?: T;
}
