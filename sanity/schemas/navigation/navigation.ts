const navigation = {
  name: "navigation",
  type: "document",
  title: "Navigation",
  fields: [
    {
      type: "string",
      name: "name",
      title: "",
      hidden: true,
    },
    {
      type: "array",
      name: "sections",
      title: "Headings (optional)",
      description: "Add a heading to group links under",
      of: [{ type: "navigation.section" }],
    },
    {
      type: "array",
      name: "links",
      title: "Solo Links",
      description: "Add a link that doesn't belong under any heading (e.g. to the Contact page)",
      of: [{ type: "navigation.link" }],
    },
  ],
  initialValue: {
    name: "Side Menu",
  },
}

export default navigation
