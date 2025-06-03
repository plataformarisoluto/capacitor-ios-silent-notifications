var capacitorIosSilentNotifications = (function (exports, core) {
    'use strict';

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const IosSilentNotifications$1 = core.registerPlugin('IosSilentNotifications', {
        web: async () => Promise.resolve().then(function () { return plugin; }).then((module) => new module.IosSilentNotifications()),
        ios: async () => Promise.resolve().then(function () { return plugin; }).then((module) => new module.IosSilentNotifications()),
        android: async () => Promise.resolve().then(function () { return plugin; }).then((module) => new module.IosSilentNotifications()),
    });

    class IosSilentNotifications extends core.WebPlugin {
    }

    var plugin = /*#__PURE__*/Object.freeze({
        __proto__: null,
        IosSilentNotifications: IosSilentNotifications
    });

    exports.IosSilentNotifications = IosSilentNotifications$1;

    return exports;

})({}, capacitorExports);
