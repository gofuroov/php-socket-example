<?php
/**
 * @author Olimjon G'ofurov <gofuroov@gmail.com>
 * Date: 19/12/21
 * Time: 17:16
 */

use Olimjon\Socket\Chat;
use Ratchet\Server\IoServer;

require __DIR__ . '/../vendor/autoload.php';

$server = IoServer::factory(
    new \Ratchet\Http\HttpServer(
        new \Ratchet\WebSocket\WsServer(
            new Chat()
        )
    ),
    8080
);

$server->run();