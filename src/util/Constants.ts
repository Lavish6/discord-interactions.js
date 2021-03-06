import { Snowflake } from './Snowflake';

export enum Constants {
    GATEWAY = 'wss://gateway.discord.gg/?v=6&encoding=json',
    ENDPOINT = 'https://discord.com/api/v8'
};

export class Codes {
    1000: 'WS_INVALID_REQUEST';
    4004: 'TOKEN_INVALID';
    4010: 'SHARDING_INVALID';
    4011: 'SHARDING_REQUESTED';
    4013: 'INVALID_INTENTS';
    4014: 'DISALLOWED_INTENTS';
};

/**
 * Types for Interaction
 * Docs: { @link https://discord.com/developers/docs/interactions/slash-commands#interaction-interactiontype }
 */
export enum InteractionType {
    PING = 1,
    APPLICATION_COMMAND = 2
}

/**
 * Types for Interaction response
 * Docs: { @link https://discord.com/developers/docs/interactions/slash-commands#interaction-response-interactionresponsetype }
 */
export enum InteractionResponseType {
    PONG = 1,
    ACKNOWLEDGE = 2,
    CHANNEL_MESSAGE = 3,
    CHANNEL_MESSAGE_WITH_SOURCE = 4,
    DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE = 5
}

/**
 * Types for application command options.
 * Docs: { @link https://discord.com/developers/docs/interactions/slash-commands#applicationcommandoptiontype }
 */
export enum ApplicationCommandOptionType {
    SUB_COMMAND = 1,
    SUB_COMMAND_GROUP = 2,
    STRING = 3,
    INTEGER = 4,
    BOOLEAN = 5,
    USER = 6,
    CHANNEL = 7,
    ROLE = 8
}

/**
 * Application command
 * Docs: { @link https://discord.com/developers/docs/interactions/slash-commands#applicationcommand }
 * Fields marked with `?` are optional
 */
export interface ApplicationCommand {
    id: Snowflake,
    application_id: Snowflake,
    name: string,
    description: string,
    options?: ApplicationCommandOption[],
    default_permission?: boolean
}

/**
 * Options for application commands
 * Docs: { @link https://discord.com/developers/docs/interactions/slash-commands#applicationcommandoption }
 * Fields marked with `?` are optional
 */
export interface ApplicationCommandOption {
    type: ApplicationCommandOptionType,
    name: string,
    description: string,
    required?: boolean,
    choices?: ApplicationCommandOptionChoice[],
    options?: ApplicationCommandOption[],
}

/**
 * Choices for appplication commands.
 * Docs: { @link https://discord.com/developers/docs/interactions/slash-commands#applicationcommandoptionchoice }
 */
export interface ApplicationCommandOptionChoice {
    name: string,
    value: string | number
}

/**
 * Returned when fetch the permissions for a command in a guild
 * Docs: { @link https://discord.com/developers/docs/interactions/slash-commands#guildapplicationcommandpermissions }
 */
export interface GuildApplicationCommandPermissions {
    id: Snowflake,
    application_id: Snowflake,
    guild_id: Snowflake,
    permissions: ApplicationCommandPermissions[]
}

/**
 * Permissions for application commands
 * Docs: { @link https://discord.com/developers/docs/interactions/slash-commands#applicationcommandpermissions }
 */
export interface ApplicationCommandPermissions {
    id: Snowflake,
    type: ApplicationCommandPermissionType,
    permission: boolean
}

export enum ApplicationCommandPermissionType {
    ROLE = 1,
    USER = 2
}

export enum VoiceStatus {
    IDENTIFY = 0,
    SELECT_PROTOCOL = 1,
    READY = 2,
    HEARTBEAT = 3,
    SESSION_DESCRIPTION = 4,
    SPEAKING = 5,
    HEARTBEAT_ACK = 6,
    RESUME = 7,
    HELLO = 8,
    RESUMED = 9,
    CLIENT_DISCONNECT = 10
};

export enum OPcodes {
    DISPATCH = 0,
    HEARTBEAT = 1,
    IDENTIFY = 2,
    PRESENCE_UPDATE = 3,
    VOICE_STATE_UPDATE = 4,
    RESUME = 6,
    RECONNECT = 7,
    REQUEST_GUILD_MEMBERS = 8,
    INVALID_SESSION = 9,
    HELLO = 10,
    HEARTBEAT_ACK = 11
};

export class Error {
    UNKNOWN_ACCOUNT: 10001;
    UNKNOWN_APPLICATION: 10002;
    UNKNOWN_CHANNEL: 10003;
    UNKNOWN_GUILD: 10004;
    UNKNOWN_INTEGRATION: 10005;
    UNKNOWN_INVITE: 10006;
    UNKNOWN_MEMBER: 10007;
    UNKNOWN_MESSAGE: 10008;
    UNKNOWN_PERMISSIONS_OVERWRITE: 10009;
    UNKNOWN_PROVIDER: 10010;
    UNKNOWN_ROLE: 10011;
    UNKNOWN_TOKEN: 10012;
    UNKNOWN_USER: 10013;
    UNKNOWN_EMOJI: 10014;
    UNKNOWN_WEBHOOK: 10015;
    UNKNOWN_BAN: 10026;
    UNKNOWN_SKU: 10027;
    UNKNOWN_STORE_LISTING: 10028;
    UNKNOWN_ENTITLEMENT: 10029;
    UNKNOWN_BUILD: 10030;
    UNKNOWN_LOBBY: 10031;
    UNKNOWN_BRANCH: 10032;
    UNKNOWN_REDISTRIBUTABLE: 10036;
    UNKNOWN_GUILD_TEMPLATE: 10057;
    UNKNOWN_INTERACTION: 10062;
    UNKNOWN_APPLICATION_COMMAND: 10063;
    BOT_PROHIBITTED_ENDPOINT: 20001;
    BOT_ALLOWED_ENPOINT: 20002;
    ANNOUNCEMENT_EDIT_RATE_LIMITS: 20022;
    CHANNEL_WRITE_RATE_LIMIT: 20028;
    MAXIMUM_GUILDS: 30001;
    MAXIMUM_FRIENDS: 30002;
    MAXIMUM_PINS: 30003;
    MAXIMUM_ROLES: 30005;
    MAXIMUM_WEBHOOKS: 30007;
    MAXIMUM_REACTIONS: 30010;
    MAXIMUM_CHANNELS: 30013;
    MAXIMUM_ATTACHMENTS: 30015;
    MAXIMUM_INVITES: 30016;
    GUILD_ALREADY_HAS_TEMPLATE: 30031;
    UNAUTHORIZED: 40001;
    ACCOUNT_REQUIRED_VERIFICATION: 40002;
    REQUEST_ENTITY_TOO_LARGE: 40005;
    FEATURE_TEMPORARILY_DISABLED: 40006;
    USER_BANNED: 40007;
    MESSAGE_ALREADY_CROSSPOSTED: 40033;
    MISSING_ACCESS: 50001;
    INVALID_ACCOUNT_TYPE: 50002;
    CANNOT_EXECUTE_ON_DM: 50003;
    GUILD_WIDGET_DISABLED: 50004;
    CANNOT_EDIT_MESSAGE_BY_OTHER_USER: 50005;
    CANNOT_SEND_EMPTY_MESSAGE: 50006;
    CANNOT_MESSAGE_USER: 50007;
    CANNOT_SEND_MESSAGES_IN_VOICE_CHANNEL: 50008;
    CHANNEL_VERIFICATION_LEVEL_TOO_HIGH: 50009;
    OAUTH2_APPLICATION_DISABLED_BOT: 50010;
    OAUTH2_APPLICATION_LIMIT: 50011;
    INVALID_OAUTH2_STATE: 50012;
    MISSING_PERMISSIONS: 50013;
    INVALID_AUTHENTICATION_TOKEN: 50014;
    NOTE_TOO_LONG: 50015;
    INVALID_DELETE_MESSAGE_QUANTITY: 50016;
    CANNOT_PIN_MESSAGE_FROM_ANOTHER_CHANNEL: 50019;
    INVALID_INVITE_OR_TOKEN_CODE: 50020;
    CANNOT_EXECUTE_ACTION_ON_SYSTEM_MESSAGE: 50021;
    CANNOT_EXECUTE_ACTION_ON_CHANNEL_TYPE: 50024;
    INVALID_OAUTH2_TOKEN: 50025;
    INVALID_WEBHOOK_TOKEN: 50027;
    INVALID_RECIPENTS: 50033;
    DELETE_MESSAGE_TOO_OLD: 50034;
    INVALID_FORM_BODY: 50035;
    INVITE_ACCEPTED_TO_GUILD
    INVALID_API_VERSION: 50041;
    CANNOT_DELETE_COMMUNITY_REQUIRED_CHANNEL: 50074;
    INVALID_STICKER: 50081;
    TWO_FACTOR_REQUIRED_FOR_OPERATION: 60003;
    REACTION_BLOCKED: 90001;
    RESOURCE_OVERLOADED: 130000;
};