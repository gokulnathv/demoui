import { Component } from '@angular/core';

@Component(
    {
        selector : 'server-component',
        templateUrl : './server.component.html',
        styleUrls: ['./server.component.css']
    }
)
export class serverComponent {

    serverId: number = 1;
    serverStatus: String = "Offline";

    getStatusId() {
        return this.serverId;
    }
}