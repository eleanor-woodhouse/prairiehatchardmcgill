export const customDeskStructure = (S: any) =>
  S.list()
    .title("Prairie's Website")
    .items([
      S.listItem()
        .title("General Stuff")
        .child(
          S.list()
            .title("General Stuff")
            .items([
              S.listItem()
                .title("Background Image")
                .child(S.document().schemaType("backgroundImage").documentId("backgroundImage")),
            ]),
        ),
      S.listItem()
        .title("Side Menu Organisation")
        .child(S.document().schemaType("navigation").documentId("navigation")),
      S.listItem().title("Homepage").child(S.document().schemaType("homepage").documentId("homepage")),
      ...S.documentTypeListItems().filter(
        (listItem: any) => !["metadata", "navigation", "backgroundImage", "homepage"].includes(listItem.getId()),
      ),
    ])
