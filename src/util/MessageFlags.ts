/**
 * @name MessageFlags
 * @memberof MessageFlags
 */

/**
 * Numeric Message Flags. Available properties:
 * `CROSSPOSTED`
 * `IS_CROSSPOST`
 * `SUPPRESS_EMBEDS`
 * `SOURCE_MESSAGE_DELETED`
 * `URGENT`
 * `EPHEMERAL`
 * @type {Object}
 */

export enum MessageFlags {
    CROSSPOSTED = 1 << 0,
    IS_CROSSPOST = 1 << 1,
    SUPPRESS_EMBEDS = 1 << 2,
    SOURCE_MESSAGE_DELETED = 1 << 3,
    URGENT = 1 << 4,
    EPHEMERAL = 1 << 6,
    LOADING = 1 <<7,
}