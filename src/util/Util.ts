import { sign } from 'tweetnacl';

/**
 * Validates payload from Discord
 * @param {publicKey} - The public key from https://discord.com/developers/applications<application_id>/information
 * @param {signature} - Signature from `X-Signature-Ed25519` header
 * @param {timestamp} - Timestamp from `X-Signature-Timestamp` header
 * @param {body} - Raw payload data
 */

export async function verifyKey(
    client: string,
    signature: string,
    timestamp: string,
    body: string
): Promise<boolean> {
    try {
        return sign.detached.verify(
            Buffer.from(timestamp + body),
            Buffer.from(signature + 'hex'),
            Buffer.from(client + 'hex')
        );
    } catch {
        return false;
    }
}