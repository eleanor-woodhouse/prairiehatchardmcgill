const navigationLink = {
  name: "navigation.link",
  type: "object",
  title: "Link OR Sub-Sections",
  preview: {
    select: {
      title: "title",
      targetTitle: "target.name",
    },
    // TODO Newly failing to compile at this point due to type errors. Need to check Sanity and Typescript versions, and Sanity docs.
    // prepare: ({ title, targetTitle }: { title: any; targetTitle: any }) => ({
    //   title: title || targetTitle,
    // }),
  },
  fields: [
    {
      type: "reference",
      name: "target",
      title: "If you are adding a link:",
      description: "Choose what page the link goes to",
      to: [{ type: "extraPage" }, { type: "pastWork" }],
      options: {
        disableNew: true,
      },
    },
    {
      type: "string",
      name: "title",
      title: "If you are adding a sub-section:",
      description: "Fill this out and leave the above field empty",
    },
    {
      type: "array",
      name: "children",
      title: "Sub-Section Links (optional)",
      description: "If you've just created a sub-heading, what links should go under it?",
      of: [{ type: "navigation.link" }],
    },
  ],
}

export default navigationLink
