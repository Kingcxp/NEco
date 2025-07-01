export class ServerItem {
    name: string= "";
    description: string= "";
    online: boolean = false;
    playerCount: number = -1;
    capacity: number = -1;
    icon: string = "";  // base64
    onlineMapUrl: string = "";
    serverUrl: string = "";
}

// Fetch real-time status.
export const getStatusList = (): Promise<ServerItem[]> => {
    return new Promise((resolve) => {
        resolve([{
            name: 'Server 1',
            description: 'This is the first server',
            online: true,
            playerCount: 10,
            capacity: 20,
            icon: "",
            onlineMapUrl: "",
            serverUrl: ""
        }]);
    });
}

// Static infomation list.
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
            },{
                name: 'Server 2',
                description: 'This is the second server',
                online: false,
                playerCount: 0,
                capacity: 100,
                icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...==',
                onlineMapUrl: 'https://example.com/map2.png',
                serverUrl: 'https://example.com/server2'
            }
    
        ]);
    })
}