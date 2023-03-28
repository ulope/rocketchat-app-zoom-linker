import {
    IAppAccessors,
    IHttp,
    ILogger,
    IMessageBuilder,
    IPersistence,
    IRead,
} from '@rocket.chat/apps-engine/definition/accessors';
import {App} from '@rocket.chat/apps-engine/definition/App';
import {IMessage, IPreMessageSentModify} from '@rocket.chat/apps-engine/definition/messages';
import {IAppInfo} from '@rocket.chat/apps-engine/definition/metadata';

const ZOOM_LINK_REGEX: RegExp = /https:\/\/.+\.zoom\.us\/j\/(?<meetingId>\d+)(?:\?pwd=(?<password>[a-zA-Z0-9]+))?/g;

export class ZoomLinkerApp extends App implements IPreMessageSentModify {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }

    public async executePreMessageSentModify(
        message: IMessage,
        builder: IMessageBuilder,
        read: IRead,
        http: IHttp,
        persistence: IPersistence,
    ): Promise<IMessage> {
        if (message.text) {
            let hasMatch = false;
            builder.setText(
                message.text.replace(ZOOM_LINK_REGEX, (match, meetingId, password, offset, inputString, groups) => {
                    const appUrl = `zoomus://zoom.us/join?action=join&confno=${meetingId}&pwd=${password ? password : ''}`;
                    hasMatch = true;
                    return `[*Zoom Meeting ${meetingId}* - [Web](${match}) | [App](${appUrl})]`;
                }),
            );
            if (hasMatch) {
                builder.setParseUrls(false);
            }
        }
        return builder.getMessage();
    }
}
