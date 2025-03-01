# Changelog

## **1.30.0** (2021. 09. 12.)
- Add _Reverse lines_ command.
- Fix text truncation bug in the _Escape text for JSON_ command.

## **1.29.0** (2021. 09. 04.)
- Add _Trim leading whitespace_ and _Trim leading & trailing whitespace_ commands.
- Add _Remove whitespace characters_ command.
- Add _Remove newlines_ and _Trim whitespace and remove newlines_ commands.
- Changed keybinding for _Filter lines including a string_ to `Ctrl+K G` due to a collision with a default keybinding.
- Removed the keybinding for the _Generate random GUIDs_ command due to a collision with a default keybinding.

## **1.28.0** (2021. 07. 17.)
- Add _Change case to title case_ command.
- Add copy and cut lines _including a string_, _not including a string_, _matching a regex_, and _not matching a regexp_ to clipboard as an extension to the current filter functions.

## **1.27.0** (2021. 04. 24.)
- Add _Latinize text_ and _Slugify text_ functions.
- Add _Sort lines by word count_ and _Sort lines by grapheme count_ functions.

## **1.26.0** (2021. 04. 12.)
- Add _Escape text for JSON_ and _Convert text to JSON string_ commands.

## **1.25.1** (2021. 04. 11.)
- Fix history logo pollution in commands using the quick pick which supports history (for example the _Filter lines_ commands).

## **1.25.0** (2021. 04. 02.)
- _Remove blank lines_ and _Remove surplus blank lines_ commands renamed to _Remove empty lines_ and _Remove surplus empty lines_.
- Added _Remove blank lines_ and _Remove surplus blank lines_ commands to remove lines contaning no text or only whitespace characters.

## **1.24.0** (2021. 03. 27.)
- Add commands to _prefix_, _suffix_ and _wrap_ (with same or different prefix and suffix) lines.

## **1.23.0** (2021. 03. 21.)
- Add commands to increase/decrease decimal and hexadecimal numbers. Increasing hexadecimal numbers can also be made using 8, 16, 32 and 64 bit arithmetic. 

## **1.22.1** (2021. 03. 16.)
- Fix insert number sequence when starting number is 0.

## **1.22.0** (2021. 03. 13.)  [_Sort All The Things Edition_]
- Add commands to convert between decimal and hexadecimal numbers using 8, 16, 32 and 64 bit arithmetic.
- Ignore empty and whitespace only lines when converting between decimal and hexadecimal numbers.
- Add _Sort lines ascending/descending (case sensitive)_ commands
- Add _Sort lines ascending/descending (case sensitive/insensitive at column of selection start)_ commands
- Add _Sort lines by length (and then case sensitive/insensitive)_ commands
- Add _Shuffle lines_ command

## **1.21.0** (2021. 02. 14.)
- Add _Sort lines ascending/descending using semver rules_ and _Sort IP addresses ascending/descending_ commands.

## **1.20.0** (2021. 02. 06.)
- Add icons to `Insert series of items...`, `Generate fake/random data...` selectors
- Fix name of lowercase/uppercase Greek letters and NATO phonetic alphabet items in `Insert series of items...` selector

## **1.19.1** (2021. 01. 30.)
- Fix missing import in custom version of faker dependency
- Remove missing (removed) command from submenu definition

## **1.19.0** (2021. 01. 30.) [_Insert All The Things Edition_]
- Move to use title/prompt instead of placeholders when showing input boxes to the user so instructions are always visible.
- Modify insert number sequence commands to ask for number of items to insert when there is only one selection.
- Add support for inserting Roman numeral sequences.
- Add support for inserting predefined sequences (uppercase letters, lowercase letters, uppercase Greek letters, lowercase Greek letters, NATO phonetic alphabet, English or current/custom locale month names, English or current/custom locale day names).
- Add support for generating fake data (first name, last name and full name in English, French, German and Hungarian; random hex and decimal character sequences).
- Removed standalone command for generating multiple GUIDs, five lorem ipsum sentences and five lorem ipsum paragraphs. Random GUID/UUID and lorem ipsum sentence/paragraph generation logics were folded into the new sequence generation system, which asks how many items you want to generate if there is only one selection in the active text editor.
- Add support for inserting Unix timestamps.

## **1.18.0** (2020. 11. 24.)
- Add support for text slots, which are like permanent clipboard entries in your VS Code.

## **1.17.0** (2020. 10. 17.)
- Add _Convert to zalgo text_ commands with 4 levels of intensity.
- Add _Insert full file path_, _Insert directory path_ and _Insert file name_ of the opened file commands.

## **1.16.0** (2020. 10. 03.)
- Add *Text Power Tools* editor submenu with all available commands.
- Modify pad commands to work on each line instead the content of the selection merged to a single line.

## **1.15.0** (2020. 08. 22.)
- Add support for encoding and decoding various text encodings:
  - URL encoding
  - XML entities
  - HTML entities
  - Base64 (full selection or by each line in selection)

## **1.14.0** (2020. 07. 25.)
- Add keybinding for _Filter lines using string_ and _Generate GUID_ commands as an experiment
- Reduce package size by 60% by bundling the source with webpack and optimizing GIFs used in Readme

## **1.13.0** (2020. 07. 12.)
- Most important commands (filter lines, extract information and copy selection to new editor) are now available in the editor context menu.

## **1.12.0** (2020. 06. 30.)
- Add _Generate Lorem ipsum` command
- Add `defaultGuidType` setting to specify the type of GUID generated by the 'Generate a GUID' or 'Generate multiple GUIDs' functions.

## **1.11.1** (2019. 04. 06.)
- Small changes to README.

## **1.11.0** (2019. 04. 06.)
- Add _Convert selected hexadecimal numbers to decimal_ and Convert selected decimal numbers to hexadecimal_ commands.

## **1.10.0** (2019. 01. 04.)
- Add _Copy content of selections to a new editor_ command

## **1.9.1** (2019. 01. 03.)
- Fix _Generate Guid_ command descriptions

## **1.9.0** (2018. 12. 28.)
- Added change case commands (camelCase, PascalCase, snake_case, CONSTANT_CASE, dash-case, dot.case, swap case)

## **1.8.0** (2018. 12. 22.)
- Added _Remove control characters_ command
- Added additional output formats for the _Generate GUID_ command (eg. without dashes, with braces)

## **1.7.1** (2018. 12. 15.)
- Fix missing node module error

## **1.7.0** (2018. 12. 15.)
- Added _Generate GUID_ commands

## **1.6.0** (2018. 12. 14.)
- Added _Format content as table_ commands
- Improve naming of _Insert decimal number_/_Insert hex number_ commands

## **1.5.0** (2018. 12. 09.)
- Added _Insert line number_ commands

## **1.4.0** (2018. 11. 24.)
- Added _Pad start_/_Pad end_ commands

## **1.3.0** (2018. 11. 11.)
- Added _Insert decimal number_/_Insert hex number_ commands

## **1.2.1** (2018. 09. 18.)
- Fix minimum supported version of VS Code in README.
- Fix Sublime plugin reference in README.

## **1.2.0** (2018. 09. 13.)
- Add history support for Filter text and Extract information commands.
- Clarify message displayed when there are no active editors to point out that the opened file may
  be too large.

## **1.1.0** (2018. 08. 07.)
- Added _Extract information_ commands.
- Added _Count occurrences_ commands.

## **1.0.0** (2018. 08. 05.)
- Initial release.
