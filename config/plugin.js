module.exports = ({ env }) => ({
  // ...,
  graphql: {
    config: {
      endpoint: "/graphql",
      apolloServer: {
        introspection: true,
      },
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: "nanodevca",
        api_key: "451287564133662",
        api_secret: "P_7ezZcFxMeYN9RxagCFNtVzehs",
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
