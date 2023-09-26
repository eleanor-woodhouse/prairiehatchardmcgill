const navigationSection = {
  name: "navigation.section",
  type: "object",
  title: "Heading",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Heading Name",
    },
    {
      type: "array",
      name: "links",
      title: "Links OR Sub-Headings",
      description: "What links or sub-headings should go under this heading?",
      of: [{ type: "navigation.link" }],
    },
  ],
}

export default navigationSection
