module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eb174492345d87cde74219fe403a3d23'),
  },
});
