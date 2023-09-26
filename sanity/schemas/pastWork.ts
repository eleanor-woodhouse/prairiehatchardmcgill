const pastWork = {
  name: "pastWork",
  title: "Past Work",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      description: "This is how the page will appear in the url",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "images",
      type: "array",
      of: [{ type: "image" }],
      options: {
        layout: "grid",
      },
    },
  ],
}

export default pastWork
