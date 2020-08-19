/** Returns the path to the user's download directory.
 *
 * The returned value depends on the operating system and is either a string,
 * containing a value from the following table, or `null`.
 * 
 * |Platform | Value                  | Example                      |
 * | ------- | ---------------------- | ---------------------------- |
 * | Linux   | `XDG_DOWNLOAD_DIR`     | /home/justjavac/Downloads    |
 * | macOS   | `$HOME`/Downloads      | /Users/justjavac/Downloads   |
 * | Windows | `{FOLDERID_Downloads}` | C:\Users\justjavac\Downloads |
 */
export default function configDir(): string | null {
  switch (Deno.build.os) {
    case "linux": {
      return Deno.env.get("XDG_DOWNLOAD_DIR") ?? null;
    }

    case "darwin": {
      const home = Deno.env.get("HOME");
      if (home) return `${home}/Downloads`;
      break;
    }

    case "windows":
      return Deno.env.get("FOLDERID_Downloads") ?? null;
  }

  return null;
}
