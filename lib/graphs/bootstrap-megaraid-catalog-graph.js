// Copyright 2017, EMC, Inc.

'use strict';
/*jshint multistr: true */

module.exports = {
    friendlyName: 'Fresh Megaraid Catalog',
    injectableName: 'Graph.Bootstrap.Megaraid.Catalog',
    options: {
        'bootstrap-ubuntu': {
             overlayfsFile: 'secure.erase.overlay.cpio.gz'
        }
    },
    tasks: [
        {
            label: 'set-boot-pxe',
            taskName: 'Task.Obm.Node.PxeBoot',
            ignoreFailure: true
        },
        {
            label: 'reboot-start',
            taskName: 'Task.Obm.Node.Reboot',
            waitOn: {
                'set-boot-pxe': 'finished'
            }
        },
        {
            label: 'bootstrap-ubuntu',
            taskName: 'Task.Linux.Bootstrap.Ubuntu',
            waitOn: {
                'reboot-start': 'succeeded'
            }
        },
        {
            label: 'refresh-catalog-megaraid',
            taskName: 'Task.Catalog.megaraid',
            waitOn: {
                'bootstrap-ubuntu': 'succeeded'
            }
        },
        {
            label: 'final-reboot',
            taskName: 'Task.Obm.Node.Reboot',
            waitOn: {
                'refresh-catalog-megaraid': 'finished'
            }
        }
    ]
};
