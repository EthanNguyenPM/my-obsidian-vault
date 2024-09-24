This section will detail the key Markdown syntax you need to know.

---

Table of Contents

    Headings
    Emphasis
    Lists
        Unordered Lists
        Ordered Lists
    Links
        External Links
        Internal Links
    Images
    Blockquotes
    Code Blocks and Inline Code
    Tables
    Task Lists
    Footnotes
    Horizontal Rule
    Strikethrough
    Highlight
    Subscript and Superscript

---

### 1. **Headings**


Headings in Markdown are created using the `#` symbol. The number of `#` symbols determines the heading level.

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
```
### 2. **Emphasis**

You can add emphasis to your text using _italic_ or **bold** formatting.

```markdown
*Italic* or _Italic_
**Bold** or __Bold__
***Bold and Italic*** or ___Bold and Italic___
```
### 3. **Lists**

#### Unordered Lists

You can create unordered lists using `-` or `*`.

```markdown
- Item 1
- Item 2
  - Sub-item 1
  - Sub-item 2
```

#### Ordered Lists

You can create ordered lists by starting with numbers.

```markdown
1. First item
2. Second item
3. Third item
```

### 4. **Links**

#### External links

You can create links using the following format:

```markdown
[Text to display](https://example.com)
```

#### Internal links

```markdown
[[internal-link|alias name]]
```

### 5. **Images**

You can embed images using the same syntax as links but with an exclamation mark (`!`) before it.

```markdown
![Alt text](https://example.com/image.png)
```

### 6. **Blockquotes**

Blockquotes are created using the `>` symbol.

```markdown
> This is a blockquote.
```

Example:

> hello world
> make me fly
### 7. **Code Blocks and Inline Code**

For inline code, surround your text with backticks (`` ` ``).

```markdown
`This is inline code`
```

Example:

`This is inline code`

For code blocks, use triple backticks (` ``` `).

This is a code block.

````
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
````

### 8. **Tables**

You can create tables using pipes (`|`) and dashes (`-`).

```markdown
| Header 1 | Header 2 |
| -------- | -------- |
| Row 1    | Data 1   |
| Row 2    | Data 2   |
```

### 9. **Task Lists**

You can create task lists using square brackets.

```markdown
- [ ] Task not completed
- [x] Task completed
```

### 10. **Footnotes**

Footnotes can be added like this[^1].

```markdown
This is a sentence with a footnote[^1].

[^1]: This is the footnote text.
```

### 11. **Horizontal Rule**

You can create horizontal rules by using three or more dashes (`---`).

```markdown
---
```

---
### 12. **Strikethrough**

You can strike through text by wrapping it in double tildes (`~~`).

```markdown
~~This text is struck through~~
```

The rendered output looks like this:

~~The world is flat~~. We now know that the world is round.

### 13. **Highlight**

This isn’t common, but some Markdown processors allow you to highlight text. The result looks ==like this==. To highlight words, use two equal signs (\==) before and after the words.

```markdown
I need to highlight these ==very important words==.
```

Alternatively, you can use the mark HTML tag.

```
I need to highlight these <mark>very important words</mark>.
````

I need to highlight these <mark>very important words</mark>.

### 14. **Subscript and Superscript**

You can create subscript using `~` and superscript using `^`.

```markdown
H<sub>2</sub>O  // Subscript
X<sup>2</sup>   // Superscript
```

The result will be like below:
- H<sub>2</sub>O
- X<sup>2</sup>