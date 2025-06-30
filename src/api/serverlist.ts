export class ServerItem {
    name: string= "";
    description: string= "";
    online: boolean = false;
    playerCount: number = 0;
    capacity: number = 0;
    icon: string = "";  // base64
    onlineMapUrl: string = "";
    serverUrl: string = "";
}

export const getServerList = (): Promise<ServerItem[]> => {
    return new Promise((resolve) => {
        resolve([{
            name: 'Server 1',
            description: 'This is the first server',
            online: true,
            playerCount: 10,
            capacity: 100,
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...==',
            onlineMapUrl: 'https://example.com/map1.png',
            serverUrl: 'https://example.com/server1'
        }]);
    })
}