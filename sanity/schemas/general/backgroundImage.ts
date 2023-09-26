const backgroundImage = {
  name: "backgroundImage",
  title: "Background Image",
  type: "document",
  fields: [
    {
      name: "name",
      title: "",
      type: "string",
      hidden: true,
    },
    {
      name: "image",
      title: "Image",
      type: "image",
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
    name: "Background Image",
  },
}

export default backgroundImage
