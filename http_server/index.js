const http = require('http');

const PORT = 3000;
const server = http.createServer();

const friends = [
    {
        id:0,
        name: 'Nikol Tesla'
    },
    {
        id:1,
        name: 'Albert Einstein'
    },
    {
        id:2,
        name: 'Sir Isaac Netwon'
    },
]

server.on('request',(req, res) =>{
    // splitting url
    const items = req.url.split('/');
    if(req.method === 'POST' & items[1] === 'friends'){
        req.on('data', (data) =>{
            const friend = data.toString();
            console.log('Request:', friend);
            friends.push(JSON.parse(friend));
            
        });
        req.pipe(res );

    }
    else if(req.method  === 'GET' && items[1] === 'friends'){

    // if(req.url === '/friends'){

        // res.writeHead(200, {
        //     'Content-Type': 'application/json',
        // });

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        // res.end('Hello! Sir Isaac Newton is your friend')
        if  (items.length === 3){
            const friendIndex = Number(items[2])
            res.end(JSON.stringify(friends[friendIndex]));
        }else{

            res.end(JSON.stringify(
            //     {
            //     id: 1,
            //     name: 'Sir Isac Newton'
            // }
                friends
        ));
        }
    }
    else if (items[1] === 'messages'){
    // else if (req.url === '/messages'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li> Hello Isaac </li>');
        res.write('<li> What are your thought on astronomy</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html/>');
        res.end()

    }
    else{
        res.statusCode = 404;
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT} ...`)
});
