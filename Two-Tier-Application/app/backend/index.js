const http = require('http');
const port = 3000;

const requestHandler = (req, res) => {
    res.end('Hello from the Backend Application!');
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

