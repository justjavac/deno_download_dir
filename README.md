# deno_download_dir

[![tag](https://img.shields.io/github/release/justjavac/deno_download_dir)](https://github.com/justjavac/deno_download_dir/releases)
[![Build Status](https://github.com/justjavac/deno_download_dir/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_download_dir/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_download_dir)](https://github.com/justjavac/deno_download_dir/blob/master/LICENSE)
[![](https://img.shields.io/badge/deno-v1.3-green.svg)](https://github.com/denoland/deno)

Returns the path to the user's download directory.

The returned value depends on the operating system and is either a string,
containing a value from the following table, or `null`.

|Platform | Value                  | Example                      |
| ------- | ---------------------- | ---------------------------- |
| Linux   | `XDG_DOWNLOAD_DIR`     | /home/justjavac/Downloads    |
| macOS   | `$HOME`/Downloads      | /Users/justjavac/Downloads   |
| Windows | `{FOLDERID_Downloads}` | C:\Users\justjavac\Downloads |

## Usage

Requires `allow-env` permission.

Returns `null` if there is no applicable directory or if any other error occurs.

```ts
import downloadDir from "https://deno.land/x/download_dir/mod.ts";

downloadDir();
// Lin: "/home/justjavac/Downloads"
// Mac: "/Users/justjavac/Downloads"
// Win: "C:\Users\justjavac\Downloads"
```

## License

[deno_download_dir](https://github.com/justjavac/deno_download_dir) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
