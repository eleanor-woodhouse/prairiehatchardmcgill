import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import schemas from "./sanity/schemas"
import { customDeskStructure } from "./sanity/deskStructure"

const config = defineConfig({
  projectId: "0l2hhkcr",
  dataset: "production",
  title: "Prairie's Website",
  apiVersion: "2023-07-11",
  basePath: "/admin",
  plugins: [deskTool({ structure: customDeskStructure })],
  schema: {
    types: schemas,
  },
})

export default config
