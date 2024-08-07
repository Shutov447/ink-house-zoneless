const port = process.env['PORT'] || 4000;

export const environment = {
    production: false,
    baseUrl: `http://localhost:${port}`,
};
