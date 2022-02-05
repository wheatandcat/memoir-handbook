#!/usr/bin/env zx
let log = String(
  await $`git log HEAD --pretty=format:"%H | %cd | %s" --no-merges`
);
let logValue = log.split("\n");
const value = logValue.map((v) => {
  const data = v.split(" | ");
  const date = new Date(data[1]);

  return {
    commit: data[0],
    date: `${date.getFullYear()}-${("00" + (date.getMonth() + 1)).slice(-2)}-${(
      "00" + date.getDate()
    ).slice(-2)}`,
    title: data[2],
  };
});
console.log("");
const items = [];
for (var i = 0; i < value.length; i++) {
  const item = value[i];
  const isSameDate = items.find((v) => v.date === item.date);
  if (isSameDate) {
    isSameDate.items.push(item);
  } else {
    items.push({
      date: item.date,
      items: [item],
    });
  }
}
let text = "# 編集履歴 \n";
for (var i = 0; i < items.length; i++) {
  const item = items[i];
  text += `\n## ${item.date} \n`;
  for (var l = 0; l < item.items.length; l++) {
    const data = item.items[l];
    text += ` - [${data.title}](https://github.com/wheatandcat/memoir-handbook/commit/${data.commit}) \n`;
  }
}

fs.writeFileSync("./docs/CHANGE_LOG.md", text);
