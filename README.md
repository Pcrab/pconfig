# PConfig

A simple config lib, respects XDG Base Directory settings.

## Usage

Must provide either `appName` or `basePath` to locate the config file path.
The final path is `XDG_CONFIG_HOME/[appName]` or `basePath`.

Must provide either `fileName` or `fileType` to finally fine the file.
The final fileName is `fileName` or `config.[fileType]`.

Also `defaultConfig` can be provided.

**file:** *XDG_CONFIG_HOME/appName/config.json*

```json
{
    "test": 1234,
    "testObj": {
        "test1": "test2",
        "testArray": [1, 2, 3, 4]
    }
}
```

**file:** *XDG_CONFIG_HOME/appName/testConfig.yaml*

```yaml
test: 1234
testObj:
    test1: "test2"
    testArray: [1, 2, 3, 4]
```

**file:** *somePath/config.toml*

```toml
test = 1234
[testObj]
test1 = "test2"
testArray = [1, 2, 3, 4]
```

```typescript
import readConfig from "@pcrab/pconfig";

/*
{
    test: 1234,
    testObj: {
        test1: "test2",
        testArray: [1, 2, 3, 4]
    }
}
*/
readConfig({appName: "appName"});
readConfig({appName: "appName", fileName: "testConfig.yaml"});

/*
{
    test: 1234,
    testObj: {
        test1: "test2",
        testArray: [1, 2, 3, 4]
    },
    testDefault: 4321
}
*/
readConfig({
    basePath: "somePath",
    fileType: "toml",
    defaultConfig: {testDefault: 4321}
});
```
