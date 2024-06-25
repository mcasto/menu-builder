import { app, dialog } from "electron";
import { readFileSync } from "fs-extra";

export default () => {
  const defaultPath = app.getPath("desktop");
  const importFile = dialog
    .showOpenDialogSync({
      defaultPath,
      filters: [{ label: "JSON Files", extensions: [".json"] }],
    })
    ?.shift();

  if (!importFile) {
    return false;
  }

  const json = JSON.parse(readFileSync(importFile));

  return json;
};
