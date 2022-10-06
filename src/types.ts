export const types = ["json", "JSON", "yaml", "YAML", "toml", "TOML"] as const;
export type FileType = typeof types[number];

export interface GetFileOpts {
    appName?: string;
    fileName?: string;
    fileType?: FileType;
    basePath?: string;
}

export interface GetFileRet {
    content: string;
    type: FileType;
}

export interface ReadConfigOpts<T> extends GetFileOpts {
    defaultConfig?: T;
}
