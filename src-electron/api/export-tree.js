import { app, dialog } from "electron";
import { writeFileSync } from "fs-extra";

export default (tree) => {
  if (!tree || tree.length == 0) {
    return false;
  }

  const defaultPath = app.getPath("desktop");
  const outputPath = dialog.showSaveDialogSync({
    defaultPath,
    properties: ["createDirectory"],
    filters: [{ name: "JSON Files", extensions: [".json"] }],
  });

  if (!outputPath) {
    return false;
  }

  writeFileSync(outputPath, JSON.stringify(tree));

  return { export: tree, outputPath };
};
