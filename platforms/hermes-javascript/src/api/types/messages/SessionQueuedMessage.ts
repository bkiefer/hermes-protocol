export interface SessionQueuedMessage {
    /** The id of the session that was queued. */
    sessionId: string
    /** The id of the site where the interaction takes place. */
    siteId: string
    /** Custom data provided in the StartSessionMessage or a ContinueSessionMessage. */
    customData?: string
}
