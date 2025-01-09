# Test Case Counter

A CLI tool to count the number of Java test cases written by a specific Git user in a Git repository over a specified date range. It supports filtering by file extensions and target subfolders.

---

## Usage

Install the package globally using npm:

```bash
npm install -g test-case-counter
```

Install the package globally using npm:

```bash
test-case-counter -a <author> -s <start_date> -e <end_date> [-x <extensions>] [-t <target>]
```
## Options

| **Option**             | **Description**                                                                 |
|------------------------|---------------------------------------------------------------------------------|
| `-a, --author`         | (Required) Author name (Git)                   |
| `-s, --start`          | (Required) Start date in `YYYY-MM-DD` format                                   |
| `-e, --end`            | (Required) End date in `YYYY-MM-DD` format                                     |
| `-x, --extensions`     | File extensions to filter by (comma-separated). Default: `.java`               |
| `-t, --target`         | Subfolder to filter files.                                            |

## Example

- **Count test cases by "John Doe" between Jan 1, 2024, and Jan 10, 2024:**

  ```bash
  test-case-counter -a "John Doe" -s 2024-01-01 -e 2024-01-10
  ```

- **Count test cases by "John Doe" in files with .java and .kt extensions:**
  ```bash
  test-case-counter -a "Jane Doe" -s 2024-01-01 -e 2024-01-10 -x .java,.kt
  ```

- **Count test cases by "John Doe" in the src/test subfolder:**
  ```bash
  test-case-counter -a "Jane Doe" -s 2024-01-01 -e 2024-01-10 -t src/test
  ```