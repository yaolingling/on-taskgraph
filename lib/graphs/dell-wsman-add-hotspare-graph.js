// Copyright 2017 Dell Inc. or its subsidiaries. All Rights Reserved.

'use strict';

module.exports = {
    friendlyName: 'Dell Wsman Add Hot Spare',
    injectableName: 'Graph.Dell.Wsman.Add.Hotspare',
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
            label: 'dell-wsman-add-hotspare',
            taskName: 'Task.Dell.Wsman.RAID'
        },
        {
            label: 'dell-wsman-get-inventory',
            taskName: 'Task.Dell.Wsman.GetInventory',
            waitOn: {
                'dell-wsman-add-hotspare': 'finished'
            },
            ignoreFailure: true
        }

    ]
};
