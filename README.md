# Test Case Counter

*A CLI tool to count the number of Java test cases written by a specific git user in a repository over a specified date range. It supports filtering by file extensions and target subfolders.*

---

## Usage

- Install the [test-case-counter](https://www.npmjs.com/package/test-case-counter) package globally

  ```bash
  npm install -g test-case-counter
  ```

- Navigate to the directory of your Java project where the test cases are written, ensure that project is a git repository with commits properly tracked, use the test-case-counter command to analyze the testcases

  ```bash
  test-case-counter -a <author> -s <start_date> -e <end_date> [-x <extensions>] [-t <target>]
  ```

## Options

| **Option**             | **Description**                                                                 |
|------------------------|---------------------------------------------------------------------------------|
| `-a, --author`         | (Required) Name of the git user                   |
| `-s, --start`          | (Required) Start date in `DD-MM-YYYY` format                                   |
| `-e, --end`            | (Required) End date in `DD-MM-YYYY` format                                     |
| `-x, --extensions`     | File extensions to filter by (comma-separated). Default: `.java`               |
| `-t, --target`         | Subfolder to filter files                                            |

## Example

- *Count testcases by "Arindam Halder" between Jan 1, 2025 and Jan 10, 2025*

  ```bash
  test-case-counter -a "Arindam Halder" -s 01-01-2025 -e 10-01-2025
  ```

  ```bash
  +===============================================+
  |               Test Case Counter               |
  +===============================================+
  | Author:            Arindam Halder             
  | Date range:        01-01-2025 - 10-01-2025    
  +-----------------------------------------------+
  | Total testcases written:  21                 
  +===============================================+
  ```

- *Count testcases by "Arindam Halder" in files with .java and .kt extensions*
  ```bash
  test-case-counter -a "Arindam Halder" -s 01-01-2025 -e 10-01-2025 -x .java,.kt
  ```

  ```bash
  +===============================================+
  |               Test Case Counter               |
  +===============================================+
  | Author:            Arindam Halder             
  | Date range:        01-01-2025 - 10-01-2025    
  +-----------------------------------------------+
  | Total testcases written:  21                 
  +===============================================+
  ```

- *Count testcases by "Arindam Halder" in the "Spring-Data-Jpa" subfolder*
  ```bash
  test-case-counter -a "Arindam Halder" -s 01-01-2025 -e 10-01-2025 -t Spring-Data-Jpa
  ```

  ```bash
  +===============================================+
  |               Test Case Counter               |
  +===============================================+
  | Author:            Arindam Halder
  | Date range:        01-01-2025 - 10-01-2025
  | Target subfolder:  Spring-Data-Jpa
  +-----------------------------------------------+
  | Total testcases written:  18
  +===============================================+
  ```