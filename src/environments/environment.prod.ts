const port = process.env['PORT'] || 4000;

export const environment = {
    production: true,
    baseUrl: `http://localhost:${port}`,
};
