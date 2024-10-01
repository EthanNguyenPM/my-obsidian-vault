---
tags:
  - dataview
  - obsidian
  - syntax
  - resources
---
**Dataview** is a powerful Obsidian plugin that allows you to create dynamic views based on the metadata and content of your notes. This note provides an overview of Dataview syntax, examples, and best practices for querying and visualizing your notes.

---
**Table of Contents
- [[#Basic Syntax|Basic Syntax]]
- [[#Frontmatter Metadata|Frontmatter Metadata]]
- [[#List Queries|List Queries]]
- [[#Table Queries|Table Queries]]
- [[#Task Queries|Task Queries]]
- [[#Calendar Queries|Calendar Queries]]
- [[#Inline Queries|Inline Queries]]
- [[#Sorting|Sorting]]
- [[#Filtering|Filtering]]
- [[#DataviewJS|DataviewJS]]
- [[#Best Practices|Best Practices]]
- [[#Example Queries|Example Queries]]
- [[#Additional Resources|Additional Resources]]
---
## Basic Syntax

Dataview queries are written inside **code blocks**. The basic structure for a Dataview query is:

````markdown
```dataview
YOUR QUERY HERE
```
````

- **list**, **table**, **task**, and **calendar** are the most common query types.
- Dataview works with frontmatter metadata (YAML) and inline fields.

---
## Frontmatter Metadata

Dataview uses metadata from your note's **frontmatter**. This is typically added at the top of the note in YAML format:

```yaml
---
tags: [dataview, obsidian]
status: in-progress
author: John Doe
created: 2024-09-27
---
```

You can query this metadata using Dataview to display notes based on tags, dates, custom fields, etc.

---
## List Queries

The **list** query displays a simple list of notes or items.

- **List all notes with a tag**:
````markdown
    ```dataview
    list
    from #dataview
    ```
````

- **List notes from a specific folder**:
    ````markdown
    ```dataview
    list
    from "Resources/Dataview"
    ```
    ````

---
## Table Queries

The **table** query allows you to display specific fields from your notes in a tabular format.

- **Table with custom fields**:
    ````markdown
    ```dataview
    table status, author, created
    from "Resources/Dataview"
    ```
    ````

- **Table with sorting**:
    ````markdown
    ```dataview
    table status, author, created
    from "Resources/Dataview"
    sort created desc
    ```
    ````

---
## Task Queries

The **task** query allows you to display tasks across your notes. This is useful if you use tasks in your notes but want to aggregate them.

- **List all incomplete tasks**:
    ````markdown
    ```dataview
    task from "Projects"
    where !completed
    ```
    ````

- **List completed tasks sorted by completion date**:
    ````markdown
    ```dataview
    task from "Projects"
    where completed
    sort completed desc
    ```
    ````

---
## Calendar Queries

The **calendar** query allows you to display notes visually on a calendar based on a date field.

- **Calendar based on a creation date**:
    ````markdown
    ```dataview
    calendar from "Projects"
    ```
    ````

You can also use custom date fields from your frontmatter to populate the calendar.

---
## Inline Queries

**Inline Queries** allow you to embed dynamic data from metadata directly in your note without creating a full-fledged Dataview block.

- **Display the created date of the current note**:
    ```markdown
    `= this.created`
    ```

- **Show the number of tasks in the current note**:
    ```markdown
    `= length(this.file.tasks)`
    ```

---
## Sorting

You can **sort** your query results by any field, such as dates, statuses, or tags.

- **Sort notes by creation date**:
    ````markdown
    ```dataview
    list from "Resources/Dataview"
    sort created desc
    ```
    ````

- **Sort tasks by due date**:
    ````markdown
    ```dataview
    task from "Projects"
    where !completed
    sort due asc
    ```
    ````

---
## Filtering

You can **filter** your results using conditions based on frontmatter metadata or inline fields.

- **Filter by a specific tag**:
    ````markdown
    ```dataview
    list from #dataview
    ```
    ````

- **Filter by custom metadata (e.g., status)**:
    ````markdown
    ```dataview
    list from "Resources/Dataview"
    where status = "in-progress"
    ```
    ````

---
## DataviewJS

For more complex or customized queries, you can use **DataviewJS**, which allows you to write JavaScript to query and manipulate your notes’ data.

- **List notes with a tag using DataviewJS**:
    ````javascript
    ```dataviewjs
    dv.list(dv.pages("#dataview").file.name);
    ```
    ````

- **Create a custom table with DataviewJS**:
    ````javascript
    ```dataviewjs
    let pages = dv.pages("#dataview").sort(p => p.created, 'desc');
    dv.table(["File", "Created"], pages.map(p => [p.file.name, p.created]));
    ```
    ````

---
## Best Practices

1. **Consistent Frontmatter**: Make sure to use consistent frontmatter metadata in your notes. For example, always use the same fields like `created`, `status`, `author`, etc.

2. **Tagging and Folder Structure**: Use tags and folders to organize your notes. This makes it easier to query them based on location or topic.

3. **Use Filters**: To make your queries more efficient, always apply filters to narrow down the results (e.g., filtering by `tags` or `metadata` fields).

4. **Inline Queries**: Use inline queries for quick, dynamic data within a note, such as showing the `created` date or the number of tasks.

5. **Experiment with DataviewJS**: If you're comfortable with JavaScript, DataviewJS offers more flexibility and customization for querying your notes.

---
## Example Queries

Here are a few example queries you can adapt for your own notes:

- **List all notes created in 2024**:
    ````markdown
    ```dataview
    list from "Resources"
    where created >= date(2024-01-01)
    ````

- **Table of notes with specific metadata**:
````markdown
    ```dataview
    table author, status, created
    from "Resources/Dataview"
    where status = "completed"
    sort created asc
    ```
````

- **Incomplete tasks across all notes**:
    ````markdown
    ```dataview
    task from "Notes"
    where !completed
    sort file.name asc
    ````

---

## Additional Resources

- [Dataview Documentation](https://blacksmithgu.github.io/obsidian-dataview/)
- [Obsidian Community Forum](https://forum.obsidian.md/)
- [Dataview GitHub Repository](https://github.com/blacksmithgu/obsidian-dataview)

---

This note provides a concise reference for working with **Dataview** in Obsidian. You can expand on this as you learn more about the plugin and customize your workflows further.