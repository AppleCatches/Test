# Test

Follow these steps, some of these files are on my personal computer (windows) so you will have to build your own

HOW TO INSTALL ELECTRON.JS

WINDOWS POWERSHELL

npm -v

Get-ExecutionPolicy -List

Set-ExecutionPolicy -ExecutionPolicy RemoteSigned

Get-ExecutionPolicy -List

Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

------------------------------------------------------------------------------

npm -v

fnm install 23.10.0

fnm use 23.10.0

fnm env

$env:PATH = "C:\Users\denis\AppData\Local\fnm_multishells\47172_1742001699343;C:\Users\denis\AppData\Local\fnm_multishells\72176_1742001668298;C:\Program Files\Common Files\Oracle\Java\javapath;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\WINDOWS\System32\OpenSSH\;C:\tools\opencv\build\x64\vc16\lib\bin;C:\tools\opencv\build\x64\vc16\bin;C:\Program Files\CMake\bin;C:\ProgramData\chocolatey\bin;C:\tools\SFML-2.6.1-windows-vc17-64-bit\SFML-2.6.1\bin;C:\Program Files\Microchip\xc8\v2.36\bin;C:\Program Files (x86)\Windows Kits\10\Windows Performance Toolkit\;C:\Program Files\dotnet\;C:\Program Files\HP\HP One Agent;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\WINDOWS\System32\OpenSSH\;C:\Program Files\Git\cmd;C:\Program Files\nodejs\;C:\Users\denis\AppData\Local\Programs\Python\Python313\Scripts\;C:\Users\denis\AppData\Local\Programs\Python\Python313\;C:\Users\denis\AppData\Local\Microsoft\WindowsApps;C:\Users\denis\AppData\Local\JetBrains\PyCharm 2023.2.5\bin;C:\Users\denis\AppData\Local\JetBrains\CLion 2023.2.2\bin;C:\Users\denis\.dotnet\tools;C:\Program Files\JetBrains\IntelliJ IDEA 2024.3.2.2\bin;C:\Users\denis\AppData\Roaming\npm;C:\Users\denis\AppData\Local\Microsoft\WinGet\Packages\Schniz.fnm_Microsoft.Winget.Source_8wekyb3d8bbwe"

$env:FNM_MULTISHELL_PATH = "C:\Users\denis\AppData\Local\fnm_multishells\47172_1742001699343"

$env:FNM_VERSION_FILE_STRATEGY = "local"

$env:FNM_DIR = "C:\Users\denis\AppData\Roaming\fnm"

$env:FNM_LOGLEVEL = "info"

$env:FNM_NODE_DIST_MIRROR = "https://nodejs.org/dist"

$env:FNM_COREPACK_ENABLED = "false"

$env:FNM_RESOLVE_ENGINES = "true"

$env:FNM_ARCH = "x64"

------------------------------------------------------------------------------

WINDOWS KEY > Edit the system environment variables

 > Environment Variables...

 > System Variables

 > New...

------------------------------------------------------------------------------

** Variable name:
fnm_PATH

** Variable value:
C:\Users\denis\AppData\Local\fnm_multishells\47172_1742001699343;C:\Users\denis\AppData\Local\fnm_multishells\72176_1742001668298;C:\Program Files\Common Files\Oracle\Java\javapath;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\WINDOWS\System32\OpenSSH\;C:\tools\opencv\build\x64\vc16\lib\bin;C:\tools\opencv\build\x64\vc16\bin;C:\Program Files\CMake\bin;C:\ProgramData\chocolatey\bin;C:\tools\SFML-2.6.1-windows-vc17-64-bit\SFML-2.6.1\bin;C:\Program Files\Microchip\xc8\v2.36\bin;C:\Program Files (x86)\Windows Kits\10\Windows Performance Toolkit\;C:\Program Files\dotnet\;C:\Program Files\HP\HP One Agent;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\WINDOWS\System32\OpenSSH\;C:\Program Files\Git\cmd;C:\Program Files\nodejs\;C:\Users\denis\AppData\Local\Programs\Python\Python313\Scripts\;C:\Users\denis\AppData\Local\Programs\Python\Python313\;C:\Users\denis\AppData\Local\Microsoft\WindowsApps;C:\Users\denis\AppData\Local\JetBrains\PyCharm 2023.2.5\bin;C:\Users\denis\AppData\Local\JetBrains\CLion 2023.2.2\bin;C:\Users\denis\.dotnet\tools;C:\Program Files\JetBrains\IntelliJ IDEA 2024.3.2.2\bin;C:\Users\denis\AppData\Roaming\npm;C:\Users\denis\AppData\Local\Microsoft\WinGet\Packages\Schniz.fnm_Microsoft.Winget.Source_8wekyb3d8bbwe

[]

** Variable name:
FNM_MULTISHELL_PATH

** Variable value:
C:\Users\denis\AppData\Local\fnm_multishells\47172_1742001699343

[]

** Variable name:
FNM_VERSION_FILE_STRATEGY

** Variable value:
local

[]

** Variable name:
FNM_DIR 

** Variable value:
C:\Users\denis\AppData\Roaming\fnm

[]

** Variable name:
FNM_LOGLEVEL 

** Variable value:
info

[]

** Variable name:
FNM_NODE_DIST_MIRROR 

** Variable value:
https://nodejs.org/dist

[]

** Variable name:
FNM_COREPACK_ENABLED 

** Variable value:
false

[]

** Variable name:
FNM_RESOLVE_ENGINES 

** Variable value:
true

[]

** Variable name:
FNM_ARCH 

** Variable value:
x64

------------------------------------------------------------------------------

WINDOWS POWERSHELL

fnm list-remote

** scroll to bottom = latest version

fnm use 23.10.0

node -v

npm install electron

npm fund

npm install -g npm@lastest

npm -v

------------------------------------------------------------------------------
------------------------------------------------------------------------------
------------------------------------------------------------------------------

SET UP A DEVELOPMENT ENVIORNMENT

OPEN GitHub

Select Repositories tab

Select New

Title: 

Description: 

add README.md

Create Repository

------------------------------------------------------------------------------

DOWNLOAD Visual Studio Code

OPEN VS Code app

Right-Click Welcome Tab

Pin Welcome Tab

CHECK Show welcome page on startup

------------------------------------------------------------------------------

VS CODE APP

select: Extensions (Ctrl+Shift+X)

install: JSON Server, GitHub Repositories, Remote Explorer

select: Remote Explorer Extension

If not visible, right click left-side bar

Check Remote Explorer

select: Open Remote Repository

Enter a remote URL

------------------------------------------------------------------------------

OPEN GitHub

On Repository

Select <> Code 

On Local tab 

Select HTTPS

Copy web URL

https://github.com/AppleCatches/Test.git

------------------------------------------------------------------------------

VS CODE APP

Enter a remote URL

Paste web URL

Select Open GitHub Repository

------------------------------------------------------------------------------

Under GitHub Repository

Select New Folder...

CREATE folder src

Select folder src

CREATE file main.js

CREATE file index.html

CREATE file preload.js

CREATE file renderer.js

CREATE file styles.css

Copy and Paste File Contents to each file

SOURCE CONTROL (Ctrl+Shift+G)

In Changes

Select the + sign to Stage All Changes

Enter a Message

Commit & Push

------------------------------------------------------------------------------

Download Git

https://git-scm.com/downloads

https://cli.github.com/ <-- to do git commands on Windows Command Prompt

Set up and Install Git

** Launch Git Bash

git config --global user.name "GitHub Username"

git config --global user.email "GitHub Email"

** Copy and Paste File location where you will be putting your projects
(right click to copy and paste)

cd "C:\Users\denis\OneDrive\Desktop\fgcu\Computer Security Project"

git clone https://github.com/AppleCatches/Test.git

------------------------------------------------------------------------------

VS Code App

Workspace Trust

Code is in a restricted mode intended for safe code browsing.

Command Palette (Ctrl+Shift+P)

Workspaces: Manage Workspace Trust 

Trust

Trusted Folders & Workspaces

/AppleCatches/Test/

------------------------------------------------------------------------------

COMMAND PROMPT

cd [folder where project is located]

C:\Users\denis\OneDrive\Desktop\fgcu\Computer Security Project\Test

** verify that Electron is installed

npm install electron --save-dev

** If you have an old version, update it:

npm install electron@latest

** Create a package.json file

npm init

package name: (test) ENTER

version: (1.0.0) ENTER

description: ENTER

entry point: (index.js) main.js

test command: ENTER

git repository: (https://github.com/AppleCatches/Test.git) ENTER

keywords: ENTER

author: Denise Pierre

license: (ISC) UNLICENSED

type: (commonjs) ENTER

Is this OK? (yes) ENTER

** Generate the node_modules folder and install the dependencies in the package.json file

// npm install

------------------------------------------------------------------------------

Open File Explorer 

Locate project folder

C:\Users\denis\OneDrive\Desktop\fgcu\Computer Security Project\Test

click and drag or copy and paste

package.json and package-lock.json

to VS Code app

into your [GITHUB] project folder outside

not inside the src folder

re-edit package.json file

"main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

UPDATE TO

"main": "src/main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "electron . --remote-debugging-port=9222"
  },

SOURCE CONTROL (Ctrl+Shift+G)

In Changes

Select the + sign to Stage All Changes

Enter a Message

Commit & Push

------------------------------------------------------------------------------

OPEN Visual Studio Code app

Run and Debug (Ctrl+Shift+D)

To customize Run and Debug

Select

create a launch.json file

Select Suggested debugger

Delete contents of file

replace with contents of launch.json file

SOURCE CONTROL (Ctrl+Shift+G)

In Changes

Select the + sign to Stage All Changes

Enter a Message

Commit & Push

------------------------------------------------------------------------------


------------------------------------------------------------------------------
