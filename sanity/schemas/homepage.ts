const homepage = {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      hidden: true,
    },
    {
      name: "header",
      title: "Header",
      type: "string",
    },
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
  ],
  initialValue: {
    name: "Homepage",
  },
}

export default homepage
