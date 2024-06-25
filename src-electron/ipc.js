const { ipcMain } = require("electron");

import exportTree from "./api/export-tree";
import importTree from "./api/import-tree";

ipcMain.handle("export-tree", (e, tree) => exportTree(tree));
ipcMain.handle("import-tree", importTree);
