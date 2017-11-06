// Copyright 2017 Dell Inc. or its subsidiaries. All Rights Reserved.

'use strict';

module.exports = {
    friendlyName: 'Dell Wsman Delete Volume',
    injectableName: 'Graph.Dell.Wsman.Delete.Volume',
    options: {
        defaults: {
            fileName: null,
            shareAddress: null,
            shareName: null,
            sharePassword: null,
            shareType: null,
            shareUsername: null,
            shutdownType: null
        }
    },
    tasks: [
        {
            label: 'dell-wsman-delete-volume',
            taskName: 'Task.Dell.Wsman.RAID'
        },
        {
            label: 'dell-wsman-get-inventory',
            taskName: 'Task.Dell.Wsman.GetInventory',
            waitOn: {
                'dell-wsman-delete-volume': 'finished'
            },
            ignoreFailure: true
        }
    ]
};
