# README
## Descritpion
Tortoise SVN is a simple extension for TortoiseSVN binding.

[https://tortoisesvn.net/](https://tortoisesvn.net/)

TortoiseSVN is only available on Windows.
Therefore this extension will NOT WORK on linux and MacOS.

This extension provides commands for various Tortoise SVN actions (see list below) for the
current active file or a folder in the explorer by right-clicking on it.

## Available Commands

* vstortoise.svnLog : Open __log__ for the current active file
* vstortoise.svnDiff : Open __diff__ for the current active file
* vstortoise.svnRevert : Open __revert__ for the current active file
* vstortoise.svnBlame : Open __blame__ for the current active file
* vstortoise.svnCommit : Open __commit__ for the current active file
* vstortoise.svnUpdate : Open __update__ for the current active file

## Default Keybindings

* alt + shift + l : Log
* alt + shift + c : Commit
* alt + shift + d : Diff
* alt + shift + r : Revert
* alt + shift + u : Update

## Requirements

Tortoise-Proc.exe must be accessible. This can be done by putting TortoiseSVN/bin directory in your system or user %PATH% or 
by specifying the directory in extension settings.

## Changelog

### 1.2.0
- Add configuration to set TortoiseSVN path
- minor refactoring
- minor bugfixes

### 1.1.0
- Change keybindings value du tu conflict with default keybindings

### 1.0.0

- Add context and explorer menu for all commands (works with insiders build !)
- Fix generated TortoiseSVN command