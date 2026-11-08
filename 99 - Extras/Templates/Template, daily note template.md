<%*
const noteDay = moment(tp.file.title, ["DD-MM-YYYY - dddd", "YYYY-MM-DD", "YYYY-M-D"], "en", true);
if (!noteDay.isValid()) throw new Error("Daily note title must contain a supported date.");
const iso = noteDay.format("YYYY-MM-DD");
const adjacent = (offset) => "04 - Daily/" + noteDay.clone().add(offset, "days").locale("en").format("YYYY/MM-MMMM/DD-MM-YYYY - dddd");
tR += `---
date: ${iso}
---

# ${noteDay.clone().locale("en").format("dddd, MMMM DD, YYYY")}

<< [[${adjacent(-1)}|Yesterday]] | [[${adjacent(1)}|Tomorrow]] >>

## Daily review

### What happened today?

### What went well?

### What needs attention?

### Next action
- [ ] 

## Notes

## Notes created on this day
\`\`\`dataview
LIST FROM "" WHERE file.cday = date("${iso}") SORT file.ctime ASC
\`\`\`

## Notes last modified on this day
\`\`\`dataview
LIST FROM "" WHERE file.mday = date("${iso}") SORT file.mtime ASC
\`\`\`
`;
%>
