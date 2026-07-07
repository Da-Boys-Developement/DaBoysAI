import { createGetUserInfoTool } from "./tools/getUserInfo";
import { createGetServerInfoTool } from "./tools/getServerInfo";
import { createGetUserInfoRelatedToServerTool } from "./tools/getUserInfoRelatedToServer";

export function createTools(env) {
    return [
        createGetUserInfoTool(env),
        createGetServerInfoTool(env),
        createGetUserInfoRelatedToServerTool(env)
    ]
}
