import { AxiosInstance, AxiosResponse, CancelToken } from 'axios';
export declare class EmailClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param groupId (optional)
     * @param statuses (optional)
     * @param includeContents (optional)
     */
    getAll(search: string | null | undefined, skip: number | undefined, take: number | undefined, groupId: string | null | undefined, statuses: EmailStatus[] | null | undefined, includeContents: boolean | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfEmail>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfEmail>;
    /**
     * This is a webhook called by SendGrid
     */
    update(cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param statuses (optional)
     * @param includeContents (optional)
     */
    getAllByUser(userId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, statuses: EmailStatus[] | null | undefined, includeContents: boolean | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfEmail>;
    protected processGetAllByUser(response: AxiosResponse): Promise<ListOfEmail>;
    get(emailId: string | null, cancelToken?: CancelToken | undefined): Promise<Email>;
    protected processGet(response: AxiosResponse): Promise<Email>;
}
export declare class GroupAttendanceClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param status (optional)
     */
    getAll(groupId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, status: AttendanceStatus | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfUserAttendance>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfUserAttendance>;
    get(groupId: string | null, userId: string | null, cancelToken?: CancelToken | undefined): Promise<UserAttendance>;
    protected processGet(response: AxiosResponse): Promise<UserAttendance>;
    update(groupId: string | null, userId: string | null, settings: UpdateAttendanceSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
}
export declare class MeetingClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param parentId (optional)
     * @param from (optional)
     * @param to (optional)
     */
    getAll(search: string | null | undefined, skip: number | undefined, take: number | undefined, parentId: string | null | undefined, from: Date | null | undefined, to: Date | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfMeeting>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfMeeting>;
    create(settings: CreateMeetingSettings, cancelToken?: CancelToken | undefined): Promise<Meeting>;
    protected processCreate(response: AxiosResponse): Promise<Meeting>;
    get(meetingId: string | null, cancelToken?: CancelToken | undefined): Promise<Meeting>;
    protected processGet(response: AxiosResponse): Promise<Meeting>;
    update(meetingId: string | null, settings: UpdateMeetingSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(meetingId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    getAllFiles(meetingId: string | null, cancelToken?: CancelToken | undefined): Promise<ListOfFile>;
    protected processGetAllFiles(response: AxiosResponse): Promise<ListOfFile>;
    createFile(meetingId: string | null, settings: CreateFileSettings, cancelToken?: CancelToken | undefined): Promise<File>;
    protected processCreateFile(response: AxiosResponse): Promise<File>;
    getFile(meetingId: string | null, fileId: string | null, cancelToken?: CancelToken | undefined): Promise<File>;
    protected processGetFile(response: AxiosResponse): Promise<File>;
    updateFile(meetingId: string | null, fileId: string | null, settings: UpdateFileSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdateFile(response: AxiosResponse): Promise<void>;
    deleteFile(meetingId: string | null, fileId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDeleteFile(response: AxiosResponse): Promise<void>;
    downloadFile(meetingId: string | null, fileId: string | null, cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processDownloadFile(response: AxiosResponse): Promise<FileResponse>;
}
export declare class UserAttendanceClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param status (optional)
     */
    getAll(userId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, status: AttendanceStatus | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfGroupAttendance>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfGroupAttendance>;
    get(userId: string | null, groupId: string | null, cancelToken?: CancelToken | undefined): Promise<GroupAttendance>;
    protected processGet(response: AxiosResponse): Promise<GroupAttendance>;
    update(userId: string | null, groupId: string | null, settings: UpdateAttendanceSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
}
export declare class BackupClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     */
    getAll(skip: number | undefined, take: number | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfBackup>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfBackup>;
    create(cancelToken?: CancelToken | undefined): Promise<Backup>;
    protected processCreate(response: AxiosResponse): Promise<Backup>;
    get(id: string | null, cancelToken?: CancelToken | undefined): Promise<Backup>;
    protected processGet(response: AxiosResponse): Promise<Backup>;
}
export declare class ExternalApplicationClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     */
    getAll(search: string | null | undefined, skip: number | undefined, take: number | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfExternalApplication>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfExternalApplication>;
    create(settings: CreateExternalApplicationSettings, cancelToken?: CancelToken | undefined): Promise<ExternalApplication>;
    protected processCreate(response: AxiosResponse): Promise<ExternalApplication>;
    get(applicationId: string | null, cancelToken?: CancelToken | undefined): Promise<ExternalApplication>;
    protected processGet(response: AxiosResponse): Promise<ExternalApplication>;
    update(applicationId: string | null, settings: UpdateExternalApplicationSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(applicationId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
}
export declare class ImageClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * Resizes the given image to the specified size.
     * @param uri (optional) Uri of the image to resize.
     * @param size (optional) The default width and height of the result image in pixels.
     * @param width (optional) A custom width to override the default size.
     * @param height (optional) A custom height to override the default size.
     * @return Uri of the resized image.
     */
    get(uri: string | null | undefined, size: number | null | undefined, width: number | null | undefined, height: number | null | undefined, cancelToken?: CancelToken | undefined): Promise<ResizedImage>;
    protected processGet(response: AxiosResponse): Promise<ResizedImage>;
}
export declare class LogClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param logLevel (optional)
     */
    getAll(search: string | null | undefined, skip: number | undefined, take: number | undefined, logLevel: number | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfLog>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfLog>;
    get(logId: string | null, cancelToken?: CancelToken | undefined): Promise<Log>;
    protected processGet(response: AxiosResponse): Promise<Log>;
}
export declare class PlatformClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    get(cancelToken?: CancelToken | undefined): Promise<Platform>;
    protected processGet(response: AxiosResponse): Promise<Platform>;
    terms(cancelToken?: CancelToken | undefined): Promise<string>;
    protected processTerms(response: AxiosResponse): Promise<string>;
    defaultSettings(environment: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<any>;
    protected processDefaultSettings(response: AxiosResponse): Promise<any>;
}
export declare class ProjectionClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param status (optional)
     */
    getAll(search: string | null | undefined, skip: number | undefined, take: number | undefined, status: ProjectionStatus | null | undefined, cancelToken?: CancelToken | undefined): Promise<ProjectionList>;
    protected processGetAll(response: AxiosResponse): Promise<ProjectionList>;
    get(projectionId: string | null, cancelToken?: CancelToken | undefined): Promise<Projection>;
    protected processGet(response: AxiosResponse): Promise<Projection>;
}
export declare class NotificationClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param type (optional)
     * @param seen (optional)
     * @param read (optional)
     * @param from (optional)
     * @param to (optional)
     */
    getAll(skip: number | undefined, take: number | undefined, type: string | null | undefined, seen: boolean | null | undefined, read: boolean | null | undefined, from: Date | null | undefined, to: Date | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfNotification>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfNotification>;
    get(notificationId: string | null, cancelToken?: CancelToken | undefined): Promise<Notification>;
    protected processGet(response: AxiosResponse): Promise<Notification>;
    update(notificationId: string | null, settings: UpdateNotificationSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(notificationId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    markAllAsSeen(cancelToken?: CancelToken | undefined): Promise<void>;
    protected processMarkAllAsSeen(response: AxiosResponse): Promise<void>;
    markAllAsRead(cancelToken?: CancelToken | undefined): Promise<void>;
    protected processMarkAllAsRead(response: AxiosResponse): Promise<void>;
}
export declare class ScheduledEmailClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param groupId (optional)
     */
    getAll(skip: number | undefined, take: number | undefined, groupId: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfScheduledEmail>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfScheduledEmail>;
    /**
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     */
    getAllForRecipient(recipientId: string | null, skip: number | undefined, take: number | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfScheduledEmail>;
    protected processGetAllForRecipient(response: AxiosResponse): Promise<ListOfScheduledEmail>;
    get(scheduleId: string | null, cancelToken?: CancelToken | undefined): Promise<ScheduledEmail>;
    protected processGet(response: AxiosResponse): Promise<ScheduledEmail>;
    create(settings: CreateScheduledEmailSettings, cancelToken?: CancelToken | undefined): Promise<ScheduledEmail>;
    protected processCreate(response: AxiosResponse): Promise<ScheduledEmail>;
    update(scheduleId: string | null, settings: UpdateScheduledEmailSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(scheduleId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    leave(scheduleId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processLeave(response: AxiosResponse): Promise<void>;
}
export declare class ObservationContentClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param published (optional)
     */
    getAll(definitionId: string | null, skip: number | undefined, take: number | undefined, published: boolean | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfObservationContent>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfObservationContent>;
    get(contentId: string | null, cancelToken?: CancelToken | undefined): Promise<ObservationContent>;
    protected processGet(response: AxiosResponse): Promise<ObservationContent>;
    update(contentId: string | null, settings: UpdateObservationContentSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(contentId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    create(settings: CreateObservationContentSettings, cancelToken?: CancelToken | undefined): Promise<ObservationContent>;
    protected processCreate(response: AxiosResponse): Promise<ObservationContent>;
    publish(contentId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processPublish(response: AxiosResponse): Promise<void>;
}
export declare class ObservationClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    getAllForArea(options: ObservationAreaOptions, cancelToken?: CancelToken | undefined): Promise<ListOfLocatableObservation>;
    protected processGetAllForArea(response: AxiosResponse): Promise<ListOfLocatableObservation>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param definitionId (optional)
     * @param from (optional)
     * @param to (optional)
     * @param friendly (optional)
     * @param anonymousUser (optional)
     */
    getAllForGroup(groupId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, definitionId: string | null | undefined, from: Date | null | undefined, to: Date | null | undefined, friendly: boolean | null | undefined, anonymousUser: boolean | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfObservation>;
    protected processGetAllForGroup(response: AxiosResponse): Promise<ListOfObservation>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param definitionId (optional)
     * @param groupId (optional)
     * @param from (optional)
     * @param to (optional)
     * @param friendly (optional)
     */
    getAllForPublisher(publisherId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, definitionId: string | null | undefined, groupId: string | null | undefined, from: Date | null | undefined, to: Date | null | undefined, friendly: boolean | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfObservation>;
    protected processGetAllForPublisher(response: AxiosResponse): Promise<ListOfObservation>;
    get(observationId: string | null, friendly: boolean | null | undefined, cancelToken?: CancelToken | undefined): Promise<Observation>;
    protected processGet(response: AxiosResponse): Promise<Observation>;
    update(observationId: string | null, settings: UpdateObservationSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(observationId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    create(settings: CreateObservationSettings, cancelToken?: CancelToken | undefined): Promise<Observation>;
    protected processCreate(response: AxiosResponse): Promise<Observation>;
    predict(observationContentId: string | null, settings: PredictObservationSettings, cancelToken?: CancelToken | undefined): Promise<CreateObservationSettings>;
    protected processPredict(response: AxiosResponse): Promise<CreateObservationSettings>;
    downloadFile(observationId: string | null, fileId: string | null, cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processDownloadFile(response: AxiosResponse): Promise<FileResponse>;
}
export declare class ObservationDefinitionClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param programId (optional) - null/empty to show all
    - program ID to filter to specific program
    - "none" to filter to items not in any program
     */
    getAllForPublisher(publisherId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, programId: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfObservationDefinition>;
    protected processGetAllForPublisher(response: AxiosResponse): Promise<ListOfObservationDefinition>;
    create(settings: CreateObservationDefinitionSettings, cancelToken?: CancelToken | undefined): Promise<ObservationDefinition>;
    protected processCreate(response: AxiosResponse): Promise<ObservationDefinition>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param consumerId (optional)
     * @param publisherId (optional)
     * @param programId (optional) - null/empty to show all
    - program ID to filter to specific program
    - "none" to filter to items not in any program
     * @param itemId (optional)
     * @param activated (optional)
     */
    getAllByActivation(search: string | null | undefined, skip: number | undefined, take: number | undefined, consumerId: string | null | undefined, publisherId: string | null | undefined, programId: string | null | undefined, itemId: string | null | undefined, activated: boolean | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfObservationDefinition>;
    protected processGetAllByActivation(response: AxiosResponse): Promise<ListOfObservationDefinition>;
    update(observationDefinitionId: string | null, settings: UpdateObservationDefinitionSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(observationDefinitionId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param publisherId (optional)
     * @param programId (optional) - null/empty to show all
    - program ID to filter to specific program
    - "none" to filter to items not in any program
     * @param countryCode (optional)
     */
    getAllPublished(search: string | null | undefined, skip: number | undefined, take: number | undefined, publisherId: string | null | undefined, programId: string | null | undefined, countryCode: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfObservationDefinition>;
    protected processGetAllPublished(response: AxiosResponse): Promise<ListOfObservationDefinition>;
    get(id: string | null, cancelToken?: CancelToken | undefined): Promise<ObservationDefinition>;
    protected processGet(response: AxiosResponse): Promise<ObservationDefinition>;
}
export declare class ObservationFormClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     */
    getAllForObservationContent(contentId: string | null, skip: number | undefined, take: number | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfObservationForm>;
    protected processGetAllForObservationContent(response: AxiosResponse): Promise<ListOfObservationForm>;
    get(observationFormId: string | null, cancelToken?: CancelToken | undefined): Promise<ObservationForm>;
    protected processGet(response: AxiosResponse): Promise<ObservationForm>;
    update(observationFormId: string | null, settings: UpdateObservationFormSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(observationFormId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    create(settings: CreateObservationFormSettings, cancelToken?: CancelToken | undefined): Promise<ObservationForm>;
    protected processCreate(response: AxiosResponse): Promise<ObservationForm>;
}
export declare class ObservationMigrationClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * Change the ownership (publisher) of an given observation definition, all related data including
    activations and observation will be transferred to the new publisher as well.
     */
    migrateObservationDefinition(observationDefinitionId: string | null, settings: MigrateObservationDefinitionSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processMigrateObservationDefinition(response: AxiosResponse): Promise<void>;
    /**
     * Create a duplicate copy of an observation definition under the same publisher.
            
    NOTE: this might run for a while if there are a lot of observations need to be migrated, when tested
    locally, 2400 observations took about 3 minutes to finish, as such, the command would be timeout but it
    will finish eventually, check the logs for progress.
     */
    duplicateObservationDefinition(observationDefinitionId: string | null, settings: DuplicateObservationDefinitionSettings, cancelToken?: CancelToken | undefined): Promise<ObservationDefinition>;
    protected processDuplicateObservationDefinition(response: AxiosResponse): Promise<ObservationDefinition>;
    /**
     * @param definitionId (optional)
     * @param groupId (optional)
     * @deprecated
     */
    getObservationAnonymousUsers(definitionId: string | null | undefined, groupId: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<string[]>;
    protected processGetObservationAnonymousUsers(response: AxiosResponse): Promise<string[]>;
    /**
     * @deprecated
     */
    batchMergeObservationAnonymousUsers(settings: BatchMergeObservationAnonymousUsersSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processBatchMergeObservationAnonymousUsers(response: AxiosResponse): Promise<void>;
}
export declare class ObservationSettingsClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param definitionId (optional)
     * @param organisationId (optional)
     */
    getAll(skip: number | undefined, take: number | undefined, definitionId: string | null | undefined, organisationId: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfObservationSettings>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfObservationSettings>;
    create(settings: CreateObservationSettingsSettings, cancelToken?: CancelToken | undefined): Promise<ObservationSettings>;
    protected processCreate(response: AxiosResponse): Promise<ObservationSettings>;
    get(settingsId: string | null, cancelToken?: CancelToken | undefined): Promise<ObservationSettings>;
    protected processGet(response: AxiosResponse): Promise<ObservationSettings>;
    update(settingsId: string | null, settings: UpdateObservationSettingsSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(settingsId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
}
export declare class CustomerClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    get(customerId: string | null, cancelToken?: CancelToken | undefined): Promise<Customer>;
    protected processGet(response: AxiosResponse): Promise<Customer>;
    getForUser(userId: string | null, cancelToken?: CancelToken | undefined): Promise<Customer>;
    protected processGetForUser(response: AxiosResponse): Promise<Customer>;
}
export declare class MerchantClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    get(merchantId: string | null, cancelToken?: CancelToken | undefined): Promise<Merchant>;
    protected processGet(response: AxiosResponse): Promise<Merchant>;
    getForOrganisation(organisationId: string | null, cancelToken?: CancelToken | undefined): Promise<Merchant>;
    protected processGetForOrganisation(response: AxiosResponse): Promise<Merchant>;
    createUrl(publisherId: string | null | undefined, redirectUrl: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<string>;
    protected processCreateUrl(response: AxiosResponse): Promise<string>;
    create(scope: string | null | undefined, state: string | null | undefined, code: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processCreate(response: AxiosResponse): Promise<FileResponse>;
}
export declare class PaymentClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    get(paymentId: string | null, cancelToken?: CancelToken | undefined): Promise<Payment>;
    protected processGet(response: AxiosResponse): Promise<Payment>;
    create(settings: CreatePaymentSettings, cancelToken?: CancelToken | undefined): Promise<Payment>;
    protected processCreate(response: AxiosResponse): Promise<Payment>;
}
export declare class PaymentSettingsClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    publicKey(cancelToken?: CancelToken | undefined): Promise<string>;
    protected processPublicKey(response: AxiosResponse): Promise<string>;
    regions(cancelToken?: CancelToken | undefined): Promise<Region[]>;
    protected processRegions(response: AxiosResponse): Promise<Region[]>;
    countries(cancelToken?: CancelToken | undefined): Promise<Country[]>;
    protected processCountries(response: AxiosResponse): Promise<Country[]>;
    currencies(cancelToken?: CancelToken | undefined): Promise<Currency[]>;
    protected processCurrencies(response: AxiosResponse): Promise<Currency[]>;
}
export declare class ProductClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param publisherId (optional)
     * @param countryCode (optional)
     */
    getAll(search: string | null | undefined, skip: number | undefined, take: number | undefined, publisherId: string | null | undefined, countryCode: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<Product>;
    protected processGetAll(response: AxiosResponse): Promise<Product>;
    create(settings: CreateProductSettings, cancelToken?: CancelToken | undefined): Promise<Product>;
    protected processCreate(response: AxiosResponse): Promise<Product>;
    get(productId: string | null, cancelToken?: CancelToken | undefined): Promise<Product>;
    protected processGet(response: AxiosResponse): Promise<Product>;
    update(productId: string | null, settings: UpdateProductSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(productId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
}
export declare class PublisherClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     */
    getAll(search: string | null | undefined, skip: number | undefined, take: number | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfPublisher>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfPublisher>;
    get(publisherId: string | null, cancelToken?: CancelToken | undefined): Promise<Publisher>;
    protected processGet(response: AxiosResponse): Promise<Publisher>;
    request(publisherId: string | null, settings: RequestPublisherSettings, cancelToken?: CancelToken | undefined): Promise<Publisher>;
    protected processRequest(response: AxiosResponse): Promise<Publisher>;
    approve(publisherId: string | null, settings: ApprovePublisherSettings, cancelToken?: CancelToken | undefined): Promise<Publisher>;
    protected processApprove(response: AxiosResponse): Promise<Publisher>;
}
export declare class StripeClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    event(cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processEvent(response: AxiosResponse): Promise<FileResponse>;
}
export declare class TaskFileClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    getAll(taskId: string | null, cancelToken?: CancelToken | undefined): Promise<ListOfFile>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfFile>;
    create(taskId: string | null, settings: CreateFileSettings, cancelToken?: CancelToken | undefined): Promise<File>;
    protected processCreate(response: AxiosResponse): Promise<File>;
    get(taskId: string | null, fileId: string | null, cancelToken?: CancelToken | undefined): Promise<File>;
    protected processGet(response: AxiosResponse): Promise<File>;
    update(taskId: string | null, fileId: string | null, settings: UpdateFileSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(taskId: string | null, fileId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    download(taskId: string | null, fileId: string | null, cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processDownload(response: AxiosResponse): Promise<FileResponse>;
}
export declare class ImplementationClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param publisherId (optional)
     * @param consumerId (optional)
     * @param teamId (optional)
     */
    getAll(search: string | null | undefined, skip: number | undefined, take: number | undefined, publisherId: string | null | undefined, consumerId: string | null | undefined, teamId: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfImplementation>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfImplementation>;
    create(settings: CreateImplementationSettings, cancelToken?: CancelToken | undefined): Promise<Implementation>;
    protected processCreate(response: AxiosResponse): Promise<Implementation>;
    get(implementationId: string | null, cancelToken?: CancelToken | undefined): Promise<Implementation>;
    protected processGet(response: AxiosResponse): Promise<Implementation>;
    update(implementationId: string | null, settings: UpdateImplementationSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(implementationId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     */
    getAllTasks(implementationId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfTask>;
    protected processGetAllTasks(response: AxiosResponse): Promise<ListOfTask>;
}
export declare class ItemActivationClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param itemType (optional)
     * @param programId (optional) - null/empty to show all
    - program ID to filter to specific program
    - "none" to filter to items not in any program
     * @param consumerId (optional)
     * @param includeDeactivated (optional)
     */
    getAllForPublisher(publisherId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, itemType: string | null | undefined, programId: string | null | undefined, consumerId: string | null | undefined, includeDeactivated: boolean | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfItemActivation>;
    protected processGetAllForPublisher(response: AxiosResponse): Promise<ListOfItemActivation>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param consumerId (optional)
     * @param itemType (optional)
     * @param itemId (optional)
     * @param programId (optional) - null/empty to show all
    - program ID to filter to specific program
    - "none" to filter to items not in any program
     * @param publisherId (optional)
     */
    getAllByActivation(search: string | null | undefined, skip: number | undefined, take: number | undefined, consumerId: string | null | undefined, itemType: string | null | undefined, itemId: string | null | undefined, programId: string | null | undefined, publisherId: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfItemActivation>;
    protected processGetAllByActivation(response: AxiosResponse): Promise<ListOfItemActivation>;
    create(consumerId: string | null | undefined, itemId: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ItemActivation>;
    protected processCreate(response: AxiosResponse): Promise<ItemActivation>;
    get(itemActivationId: string | null, cancelToken?: CancelToken | undefined): Promise<ItemActivation>;
    protected processGet(response: AxiosResponse): Promise<ItemActivation>;
    update(itemActivationId: string | null, activated: boolean | undefined, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    get2(itemId: string | null, consumerId: string | null, cancelToken?: CancelToken | undefined): Promise<ItemActivation>;
    protected processGet2(response: AxiosResponse): Promise<ItemActivation>;
}
export declare class ProgramActivationClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param programId (optional)
     * @param consumerId (optional)
     */
    getAll(search: string | null | undefined, skip: number | undefined, take: number | undefined, programId: string | null | undefined, consumerId: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfProgramActivation>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfProgramActivation>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param programId (optional)
     */
    getAllForPublisher(publisherId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, programId: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfProgramActivation>;
    protected processGetAllForPublisher(response: AxiosResponse): Promise<ListOfProgramActivation>;
    get(id: string | null, cancelToken?: CancelToken | undefined): Promise<ProgramActivation>;
    protected processGet(response: AxiosResponse): Promise<ProgramActivation>;
    get2(programId: string | null, consumerId: string | null, cancelToken?: CancelToken | undefined): Promise<ProgramActivation>;
    protected processGet2(response: AxiosResponse): Promise<ProgramActivation>;
    createByPhase(settings: ActivateProgramPhaseSettings, cancelToken?: CancelToken | undefined): Promise<ProgramActivation>;
    protected processCreateByPhase(response: AxiosResponse): Promise<ProgramActivation>;
    setCurrentPhase(programActivationId: string | null, programPhaseId: string | null, cancelToken?: CancelToken | undefined): Promise<ProgramActivation>;
    protected processSetCurrentPhase(response: AxiosResponse): Promise<ProgramActivation>;
    deactivate(programActivationId: string | null, programPhaseId: string | null, cancelToken?: CancelToken | undefined): Promise<ProgramActivation>;
    protected processDeactivate(response: AxiosResponse): Promise<ProgramActivation>;
}
export declare class ProgramClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     */
    getAllForPublisher(publisherId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfProgram>;
    protected processGetAllForPublisher(response: AxiosResponse): Promise<ListOfProgram>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param publisherId (optional)
     * @param programId (optional) - null/empty to show all
    - program ID to filter to specific program
     * @param countryCode (optional)
     */
    getAllPublished(search: string | null | undefined, skip: number | undefined, take: number | undefined, publisherId: string | null | undefined, programId: string | null | undefined, countryCode: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfProgram>;
    protected processGetAllPublished(response: AxiosResponse): Promise<ListOfProgram>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param consumerId (optional)
     * @param publisherId (optional)
     * @param itemId (optional)
     * @param activated (optional)
     */
    getAllByActivation(search: string | null | undefined, skip: number | undefined, take: number | undefined, consumerId: string | null | undefined, publisherId: string | null | undefined, itemId: string | null | undefined, activated: boolean | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfProgram>;
    protected processGetAllByActivation(response: AxiosResponse): Promise<ListOfProgram>;
    create(settings: CreateProgramSettings, cancelToken?: CancelToken | undefined): Promise<Program>;
    protected processCreate(response: AxiosResponse): Promise<Program>;
    get(id: string | null, cancelToken?: CancelToken | undefined): Promise<Program>;
    protected processGet(response: AxiosResponse): Promise<Program>;
    update(programId: string | null, settings: UpdateProgramSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(programId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
}
export declare class ProgramPhaseClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    get(id: string | null, cancelToken?: CancelToken | undefined): Promise<ProgramPhase>;
    protected processGet(response: AxiosResponse): Promise<ProgramPhase>;
    create(settings: CreateProgramPhaseSettings, cancelToken?: CancelToken | undefined): Promise<ProgramPhase>;
    protected processCreate(response: AxiosResponse): Promise<ProgramPhase>;
    update(programPhaseId: string | null, settings: UpdateProgramPhaseSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(programPhaseId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
}
export declare class TaskCommentClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     */
    getAll(taskId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfComment>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfComment>;
    create(taskId: string | null, settings: CreateCommentSettings, cancelToken?: CancelToken | undefined): Promise<Comment>;
    protected processCreate(response: AxiosResponse): Promise<Comment>;
    get(taskId: string | null, commentId: string | null, cancelToken?: CancelToken | undefined): Promise<Comment>;
    protected processGet(response: AxiosResponse): Promise<Comment>;
    update(taskId: string | null, commentId: string | null, settings: UpdateCommentSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(taskId: string | null, commentId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     */
    getAllReplies(taskId: string | null, commentId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfComment>;
    protected processGetAllReplies(response: AxiosResponse): Promise<ListOfComment>;
}
export declare class TaskClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param implementationId (optional)
     */
    getAll(search: string | null | undefined, skip: number | undefined, take: number | undefined, implementationId: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfTask>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfTask>;
    create(settings: CreateTaskSettings, cancelToken?: CancelToken | undefined): Promise<Task>;
    protected processCreate(response: AxiosResponse): Promise<Task>;
    get(taskId: string | null, cancelToken?: CancelToken | undefined): Promise<Task>;
    protected processGet(response: AxiosResponse): Promise<Task>;
    update(taskId: string | null, settings: UpdateTaskSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(taskId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
}
export declare class SharingClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    getByAlias(aliasId: string | null, cancelToken?: CancelToken | undefined): Promise<Sharing>;
    protected processGetByAlias(response: AxiosResponse): Promise<Sharing>;
    delete(sharingId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     */
    getAllGroupInvitationsForGroup(groupId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfSharing>;
    protected processGetAllGroupInvitationsForGroup(response: AxiosResponse): Promise<ListOfSharing>;
    createForGroupInvitation(settings: CreateGroupInvitationSharingSettings, cancelToken?: CancelToken | undefined): Promise<Sharing>;
    protected processCreateForGroupInvitation(response: AxiosResponse): Promise<Sharing>;
}
export declare class TicketClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param userId (optional)
     */
    getAll(search: string | null | undefined, skip: number | undefined, take: number | undefined, userId: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfTicket>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfTicket>;
    create(settings: CreateTicketSettings, cancelToken?: CancelToken | undefined): Promise<Ticket>;
    protected processCreate(response: AxiosResponse): Promise<Ticket>;
    get(ticketId: string | null, cancelToken?: CancelToken | undefined): Promise<Ticket>;
    protected processGet(response: AxiosResponse): Promise<Ticket>;
    update(ticketId: string | null, settings: UpdateTicketSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
}
export declare class SurveyContentClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     */
    getAll(surveyId: string | null, skip: number | undefined, take: number | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfSurveyContent>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfSurveyContent>;
    create(surveyId: string | null, settings: CreateSurveyContentSettings, cancelToken?: CancelToken | undefined): Promise<SurveyContent>;
    protected processCreate(response: AxiosResponse): Promise<SurveyContent>;
    get(surveyId: string | null, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<SurveyContent>;
    protected processGet(response: AxiosResponse): Promise<SurveyContent>;
    update(surveyId: string | null, contentId: string | null, settings: UpdateSurveyContentSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(surveyId: string | null, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    publish(surveyId: string | null | undefined, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processPublish(response: AxiosResponse): Promise<void>;
    questionTypes(cancelToken?: CancelToken | undefined): Promise<SurveyQuestionTypes>;
    protected processQuestionTypes(response: AxiosResponse): Promise<SurveyQuestionTypes>;
    answerTypes(cancelToken?: CancelToken | undefined): Promise<SurveyAnswerTypes>;
    protected processAnswerTypes(response: AxiosResponse): Promise<SurveyAnswerTypes>;
    example(cancelToken?: CancelToken | undefined): Promise<SurveySettings>;
    protected processExample(response: AxiosResponse): Promise<SurveySettings>;
    schema(cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processSchema(response: AxiosResponse): Promise<FileResponse>;
}
export declare class SurveyClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     */
    getAllForPublisher(publisherId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfSurvey>;
    protected processGetAllForPublisher(response: AxiosResponse): Promise<ListOfSurvey>;
    create(settings: CreateSurveySettings, cancelToken?: CancelToken | undefined): Promise<Survey>;
    protected processCreate(response: AxiosResponse): Promise<Survey>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param consumerId (optional)
     * @param publisherId (optional)
     * @param programId (optional) - null/empty to show all
    - program ID to filter to specific program
    - "none" to filter to items not in any program
     * @param itemId (optional)
     * @param activated (optional)
     */
    getAllByActivation(search: string | null | undefined, skip: number | undefined, take: number | undefined, consumerId: string | null | undefined, publisherId: string | null | undefined, programId: string | null | undefined, itemId: string | null | undefined, activated: boolean | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfSurvey>;
    protected processGetAllByActivation(response: AxiosResponse): Promise<ListOfSurvey>;
    get(id: string | null, cancelToken?: CancelToken | undefined): Promise<Survey>;
    protected processGet(response: AxiosResponse): Promise<Survey>;
    update(surveyId: string | null, settings: UpdateSurveySettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(surveyId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param publisherId (optional)
     * @param programId (optional) - null/empty to show all
    - program ID to filter to specific program
    - "none" to filter to items not in any program
     * @param countryCode (optional)
     */
    getAllPublished(search: string | null | undefined, skip: number | undefined, take: number | undefined, publisherId: string | null | undefined, programId: string | null | undefined, countryCode: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfSurvey>;
    protected processGetAllPublished(response: AxiosResponse): Promise<ListOfSurvey>;
}
export declare class SurveyRequestClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param surveyId (optional)
     */
    getAllForGroup(groupId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, surveyId: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfSurveyRequest>;
    protected processGetAllForGroup(response: AxiosResponse): Promise<ListOfSurveyRequest>;
    get(requestId: string | null, cancelToken?: CancelToken | undefined): Promise<SurveyRequest>;
    protected processGet(response: AxiosResponse): Promise<SurveyRequest>;
    delete(requestId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    getForToken(token: string | null, cancelToken?: CancelToken | undefined): Promise<Token>;
    protected processGetForToken(response: AxiosResponse): Promise<Token>;
    create(settings: CreateSurveyRequestSettings, cancelToken?: CancelToken | undefined): Promise<SurveyRequest>;
    protected processCreate(response: AxiosResponse): Promise<SurveyRequest>;
}
export declare class SurveyResponseClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param groupId (optional)
     * @param publisherId (optional)
     * @param contentId (optional)
     * @param jobTypeId (optional)
     * @param submitted (optional)
     */
    getAllForSurvey(surveyId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, groupId: string | null | undefined, publisherId: string | null | undefined, contentId: string | null | undefined, jobTypeId: string | null | undefined, submitted: boolean | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfSurveyResponse>;
    protected processGetAllForSurvey(response: AxiosResponse): Promise<ListOfSurveyResponse>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param surveyId (optional)
     * @param submitted (optional)
     */
    getAllForRespondent(respondentId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, surveyId: string | null | undefined, submitted: boolean | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfSurveyResponse>;
    protected processGetAllForRespondent(response: AxiosResponse): Promise<ListOfSurveyResponse>;
    get(responseId: string | null, cancelToken?: CancelToken | undefined): Promise<SurveyResponse>;
    protected processGet(response: AxiosResponse): Promise<SurveyResponse>;
    update(responseId: string | null, settings: UpdateSurveyResponseSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(surveyId: string | null | undefined, responseId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    create(settings: CreateSurveyResponseSettings, cancelToken?: CancelToken | undefined): Promise<SurveyResponse>;
    protected processCreate(response: AxiosResponse): Promise<SurveyResponse>;
}
export declare class ActorClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    get(actorId: string | null, cancelToken?: CancelToken | undefined): Promise<Actor>;
    protected processGet(response: AxiosResponse): Promise<Actor>;
}
export declare class BookAttemptClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param moduleId (optional)
     */
    getAllForActor(actorId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, moduleId: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfModuleAttemptOfBookResult>;
    protected processGetAllForActor(response: AxiosResponse): Promise<ListOfModuleAttemptOfBookResult>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param moduleId (optional)
     * @param actorType (optional)
     * @param from (optional)
     * @param to (optional)
     */
    getAllForGroup(groupId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, moduleId: string | null | undefined, actorType: ActorType | null | undefined, from: Date | null | undefined, to: Date | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfModuleAttemptOfBookResult>;
    protected processGetAllForGroup(response: AxiosResponse): Promise<ListOfModuleAttemptOfBookResult>;
    get(moduleAttemptId: string | null, cancelToken?: CancelToken | undefined): Promise<ModuleAttemptOfBookResult>;
    protected processGet(response: AxiosResponse): Promise<ModuleAttemptOfBookResult>;
    update(moduleAttemptId: string | null, settings: UpdateModuleAttemptSettingsOfBookResult, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(moduleAttemptId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    create(settings: CreateModuleAttemptSettingsOfBookResult, cancelToken?: CancelToken | undefined): Promise<ModuleAttemptOfBookResult>;
    protected processCreate(response: AxiosResponse): Promise<ModuleAttemptOfBookResult>;
    examplePass(moduleId: string | null, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<BookResult>;
    protected processExamplePass(response: AxiosResponse): Promise<BookResult>;
}
export declare class BookContentClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     */
    getAll(moduleId: string | null, skip: number | undefined, take: number | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfModuleContentOfBookSettings>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfModuleContentOfBookSettings>;
    create(moduleId: string | null, settings: CreateModuleContentSettingsOfBookSettings, cancelToken?: CancelToken | undefined): Promise<ModuleContentOfBookSettings>;
    protected processCreate(response: AxiosResponse): Promise<ModuleContentOfBookSettings>;
    get(moduleId: string | null, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<ModuleContentOfBookSettings>;
    protected processGet(response: AxiosResponse): Promise<ModuleContentOfBookSettings>;
    update(moduleId: string | null, contentId: string | null, settings: UpdateModuleContentSettingsOfBookSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(moduleId: string | null, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    createFromZip(moduleId: string | null, file: FileParameter | null | undefined, cancelToken?: CancelToken | undefined): Promise<ModuleContentOfBookSettings>;
    protected processCreateFromZip(response: AxiosResponse): Promise<ModuleContentOfBookSettings>;
    updateFromZip(moduleId: string | null, contentId: string | null, file: FileParameter | null | undefined, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdateFromZip(response: AxiosResponse): Promise<void>;
    publish(moduleId: string | null, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processPublish(response: AxiosResponse): Promise<void>;
    downloadFile(moduleId: string | null, contentId: string | null, fileId: string | null, cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processDownloadFile(response: AxiosResponse): Promise<FileResponse>;
    export(moduleId: string | null, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<CreateModuleContentSettingsOfBookSettings>;
    protected processExport(response: AxiosResponse): Promise<CreateModuleContentSettingsOfBookSettings>;
    example(cancelToken?: CancelToken | undefined): Promise<BookSettings>;
    protected processExample(response: AxiosResponse): Promise<BookSettings>;
    schema(cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processSchema(response: AxiosResponse): Promise<FileResponse>;
}
export declare class CertificateClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param publisherId (optional)
     */
    getAll(search: string | null | undefined, skip: number | undefined, take: number | undefined, publisherId: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfCertificate>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfCertificate>;
    create(settings: CreateCertificateSettings, cancelToken?: CancelToken | undefined): Promise<Certificate>;
    protected processCreate(response: AxiosResponse): Promise<Certificate>;
    get(certificateId: string | null, cancelToken?: CancelToken | undefined): Promise<Certificate>;
    protected processGet(response: AxiosResponse): Promise<Certificate>;
    update(certificateId: string | null, settings: UpdateCertificateSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(certificateId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
}
export declare class CertificationClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     */
    getAllForTrainee(traineeId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfCertification>;
    protected processGetAllForTrainee(response: AxiosResponse): Promise<ListOfCertification>;
    /**
     * Gets the certifications for a trainee at the given time.
     * @param traineeId The user id of the trainee.
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param at (optional) The UTC time at which to get certificates. If not specified, the current time is used.
     */
    getAllHistoryForTrainee(traineeId: string | null, skip: number | undefined, take: number | undefined, at: Date | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfCertificationFact>;
    protected processGetAllHistoryForTrainee(response: AxiosResponse): Promise<ListOfCertificationFact>;
    /**
     * Gets the list of users with a certificate in a group at a specified time, optionally filtered by their status and roles in the group.
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param certificateId (optional)
     * @param memberStatus (optional)
     * @param role (optional)
     * @param at (optional) The UTC time at which to get certificates. If not specified, the current time is used.
     */
    getAllHistoryForGroup(groupId: string | null, skip: number | undefined, take: number | undefined, certificateId: string | null | undefined, memberStatus: MemberStatus | null | undefined, role: string | null | undefined, at: Date | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfCertificationFact>;
    protected processGetAllHistoryForGroup(response: AxiosResponse): Promise<ListOfCertificationFact>;
    get(certificationId: string | null, cancelToken?: CancelToken | undefined): Promise<Certification>;
    protected processGet(response: AxiosResponse): Promise<Certification>;
    export(certificationId: string | null, cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processExport(response: AxiosResponse): Promise<FileResponse>;
    download(token: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processDownload(response: AxiosResponse): Promise<FileResponse>;
}
export declare class ClassClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * Get a list of all classes
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param organisationId (optional) Optional organisation id filter
     * @param teamId (optional) Optional team id filter
     * @param publisherId (optional) Optional publisher id filter
     * @param courseId (optional) Optional course id filter
     * @param programId (optional) - null/empty to show all
    - program ID to filter to specific program
    - "none" to filter to items not in any program
     * @param activated (optional) Optional filter by class activation state
     */
    getAll(search: string | null | undefined, skip: number | undefined, take: number | undefined, organisationId: string | null | undefined, teamId: string | null | undefined, publisherId: string | null | undefined, courseId: string | null | undefined, programId: string | null | undefined, activated: boolean | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfClass>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfClass>;
    create(settings: CreateClassSettings, cancelToken?: CancelToken | undefined): Promise<Class>;
    protected processCreate(response: AxiosResponse): Promise<Class>;
    get(classId: string | null, cancelToken?: CancelToken | undefined): Promise<Class>;
    protected processGet(response: AxiosResponse): Promise<Class>;
    update(classId: string | null, settings: UpdateClassSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(classId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    /**
     * Send assessment requested notification to trainers
     */
    notifyAssessors(classId: string | null, settings: NotifyAssessorsSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processNotifyAssessors(response: AxiosResponse): Promise<void>;
}
export declare class CourseClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param programId (optional) - null/empty to show all
    - program ID to filter to specific program
    - "none" to filter to items not in any program
     */
    getAllForPublisher(publisherId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, programId: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfCourse>;
    protected processGetAllForPublisher(response: AxiosResponse): Promise<ListOfCourse>;
    create(settings: CreateCourseSettings, cancelToken?: CancelToken | undefined): Promise<Course>;
    protected processCreate(response: AxiosResponse): Promise<Course>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param consumerId (optional)
     * @param publisherId (optional)
     * @param programId (optional) - null/empty to show all
    - program ID to filter to specific program
    - "none" to filter to items not in any program
     * @param itemId (optional)
     * @param activated (optional)
     */
    getAllByActivation(search: string | null | undefined, skip: number | undefined, take: number | undefined, consumerId: string | null | undefined, publisherId: string | null | undefined, programId: string | null | undefined, itemId: string | null | undefined, activated: boolean | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfCourse>;
    protected processGetAllByActivation(response: AxiosResponse): Promise<ListOfCourse>;
    update(courseId: string | null, settings: UpdateCourseSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(courseId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param publisherId (optional)
     * @param programId (optional) - null/empty to show all
    - program ID to filter to specific program
    - "none" to filter to items not in any program
     * @param countryCode (optional)
     */
    getAllPublished(search: string | null | undefined, skip: number | undefined, take: number | undefined, publisherId: string | null | undefined, programId: string | null | undefined, countryCode: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfCourse>;
    protected processGetAllPublished(response: AxiosResponse): Promise<ListOfCourse>;
    get(id: string | null, cancelToken?: CancelToken | undefined): Promise<Course>;
    protected processGet(response: AxiosResponse): Promise<Course>;
}
export declare class EnrolmentClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param activated (optional)
     * @param programId (optional) - null/empty to show all
    - program ID to filter to specific program
    - "none" to filter to items not in any program
     */
    getAllForTrainee(traineeId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, activated: boolean | null | undefined, programId: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfEnrolment>;
    protected processGetAllForTrainee(response: AxiosResponse): Promise<ListOfEnrolment>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     */
    getAllForClass(classId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfEnrolment>;
    protected processGetAllForClass(response: AxiosResponse): Promise<ListOfEnrolment>;
    get(enrolmentId: string | null, cancelToken?: CancelToken | undefined): Promise<Enrolment>;
    protected processGet(response: AxiosResponse): Promise<Enrolment>;
}
export declare class ModuleAttemptClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param moduleId (optional)
     */
    getAllForActor(actorId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, moduleId: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfModuleAttempt>;
    protected processGetAllForActor(response: AxiosResponse): Promise<ListOfModuleAttempt>;
    /**
     * Gets all module attempts within the given group.
     * @param groupId The group to get module attempts from
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param moduleId (optional) Filter the results by module id
     * @param actorType (optional) Filter the results by actor type i.e. User, TrainingSession or Team. If left null, all actor types will be searched for.
     * @param from (optional) Start time of the module attempts
     * @param to (optional) End time of the module attempts
     */
    getAllForGroup(groupId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, moduleId: string | null | undefined, actorType: ActorType | null | undefined, from: Date | null | undefined, to: Date | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfModuleAttempt>;
    protected processGetAllForGroup(response: AxiosResponse): Promise<ListOfModuleAttempt>;
    get(moduleAttemptId: string | null, cancelToken?: CancelToken | undefined): Promise<ModuleAttempt>;
    protected processGet(response: AxiosResponse): Promise<ModuleAttempt>;
    delete(moduleAttemptId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
}
export declare class ModuleClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param publisherId (optional)
     * @param type (optional)
     */
    getAll(search: string | null | undefined, skip: number | undefined, take: number | undefined, publisherId: string | null | undefined, type: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfModule>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfModule>;
    /**
     * Creates a module using the given data
     * @param settings The data used to create the module
     */
    create(settings: CreateModuleSettings, cancelToken?: CancelToken | undefined): Promise<Module>;
    protected processCreate(response: AxiosResponse): Promise<Module>;
    get(moduleId: string | null, cancelToken?: CancelToken | undefined): Promise<Module>;
    protected processGet(response: AxiosResponse): Promise<Module>;
    update(moduleId: string | null, settings: UpdateModuleSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(moduleId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    getAllFiles(moduleId: string | null, cancelToken?: CancelToken | undefined): Promise<ListOfFile>;
    protected processGetAllFiles(response: AxiosResponse): Promise<ListOfFile>;
    /**
     * Creates a file and attaches it to the module
     * @param moduleId Id of the module to attach the file to
     * @param settings Data used to create the file
     * @return Information about the created file
     */
    createFile(moduleId: string | null, settings: CreateFileSettings, cancelToken?: CancelToken | undefined): Promise<File>;
    protected processCreateFile(response: AxiosResponse): Promise<File>;
    getFile(moduleId: string | null, fileId: string | null, cancelToken?: CancelToken | undefined): Promise<File>;
    protected processGetFile(response: AxiosResponse): Promise<File>;
    updateFile(moduleId: string | null, fileId: string | null, settings: UpdateFileSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdateFile(response: AxiosResponse): Promise<void>;
    deleteFile(moduleId: string | null, fileId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDeleteFile(response: AxiosResponse): Promise<void>;
    downloadFile(moduleId: string | null, fileId: string | null, cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processDownloadFile(response: AxiosResponse): Promise<FileResponse>;
}
export declare class ModuleNpsClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    getAllForPublisher(publisherId: string | null, search: string | null | undefined, from: Date | null | undefined, to: Date | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfModuleNps>;
    protected processGetAllForPublisher(response: AxiosResponse): Promise<ListOfModuleNps>;
    getAllForModule(moduleId: string | null, from: Date | null | undefined, to: Date | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfModuleNps>;
    protected processGetAllForModule(response: AxiosResponse): Promise<ListOfModuleNps>;
    get(npsId: string | null, cancelToken?: CancelToken | undefined): Promise<Nps>;
    protected processGet(response: AxiosResponse): Promise<Nps>;
    delete(npsId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    create(settings: CreateNpsSettings, cancelToken?: CancelToken | undefined): Promise<Nps>;
    protected processCreate(response: AxiosResponse): Promise<Nps>;
}
export declare class QuizAttemptClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param moduleId (optional)
     */
    getAllForActor(actorId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, moduleId: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfModuleAttemptOfQuizResult>;
    protected processGetAllForActor(response: AxiosResponse): Promise<ListOfModuleAttemptOfQuizResult>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param moduleId (optional)
     * @param actorType (optional)
     * @param from (optional)
     * @param to (optional)
     */
    getAllForGroup(groupId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, moduleId: string | null | undefined, actorType: ActorType | null | undefined, from: Date | null | undefined, to: Date | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfModuleAttemptOfQuizResult>;
    protected processGetAllForGroup(response: AxiosResponse): Promise<ListOfModuleAttemptOfQuizResult>;
    get(moduleAttemptId: string | null, cancelToken?: CancelToken | undefined): Promise<ModuleAttemptOfQuizResult>;
    protected processGet(response: AxiosResponse): Promise<ModuleAttemptOfQuizResult>;
    update(moduleAttemptId: string | null, settings: UpdateModuleAttemptSettingsOfQuizResult, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(moduleAttemptId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    create(settings: CreateModuleAttemptSettingsOfQuizResult, cancelToken?: CancelToken | undefined): Promise<ModuleAttemptOfQuizResult>;
    protected processCreate(response: AxiosResponse): Promise<ModuleAttemptOfQuizResult>;
    examplePass(moduleId: string | null, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<QuizResult>;
    protected processExamplePass(response: AxiosResponse): Promise<QuizResult>;
}
export declare class QuizContentClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     */
    getAll(moduleId: string | null, skip: number | undefined, take: number | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfModuleContentOfQuizSettings>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfModuleContentOfQuizSettings>;
    create(moduleId: string | null, settings: CreateModuleContentSettingsOfQuizSettings, cancelToken?: CancelToken | undefined): Promise<ModuleContentOfQuizSettings>;
    protected processCreate(response: AxiosResponse): Promise<ModuleContentOfQuizSettings>;
    get(moduleId: string | null, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<ModuleContentOfQuizSettings>;
    protected processGet(response: AxiosResponse): Promise<ModuleContentOfQuizSettings>;
    update(moduleId: string | null, contentId: string | null, settings: UpdateModuleContentSettingsOfQuizSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(moduleId: string | null, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    createFromZip(moduleId: string | null, file: FileParameter | null | undefined, cancelToken?: CancelToken | undefined): Promise<ModuleContentOfQuizSettings>;
    protected processCreateFromZip(response: AxiosResponse): Promise<ModuleContentOfQuizSettings>;
    updateFromZip(moduleId: string | null, contentId: string | null, file: FileParameter | null | undefined, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdateFromZip(response: AxiosResponse): Promise<void>;
    publish(moduleId: string | null, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processPublish(response: AxiosResponse): Promise<void>;
    downloadFile(moduleId: string | null, contentId: string | null, fileId: string | null, cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processDownloadFile(response: AxiosResponse): Promise<FileResponse>;
    export(moduleId: string | null, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<CreateModuleContentSettingsOfQuizSettings>;
    protected processExport(response: AxiosResponse): Promise<CreateModuleContentSettingsOfQuizSettings>;
    example(cancelToken?: CancelToken | undefined): Promise<QuizSettings>;
    protected processExample(response: AxiosResponse): Promise<QuizSettings>;
    schema(cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processSchema(response: AxiosResponse): Promise<FileResponse>;
}
export declare class RevisionAttemptClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param moduleId (optional)
     */
    getAllForActor(actorId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, moduleId: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfModuleAttemptOfRevisionResult>;
    protected processGetAllForActor(response: AxiosResponse): Promise<ListOfModuleAttemptOfRevisionResult>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param moduleId (optional)
     * @param actorType (optional)
     * @param from (optional)
     * @param to (optional)
     */
    getAllForGroup(groupId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, moduleId: string | null | undefined, actorType: ActorType | null | undefined, from: Date | null | undefined, to: Date | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfModuleAttemptOfRevisionResult>;
    protected processGetAllForGroup(response: AxiosResponse): Promise<ListOfModuleAttemptOfRevisionResult>;
    get(moduleAttemptId: string | null, cancelToken?: CancelToken | undefined): Promise<ModuleAttemptOfRevisionResult>;
    protected processGet(response: AxiosResponse): Promise<ModuleAttemptOfRevisionResult>;
    update(moduleAttemptId: string | null, settings: UpdateModuleAttemptSettingsOfRevisionResult, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(moduleAttemptId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    create(settings: CreateModuleAttemptSettingsOfRevisionResult, cancelToken?: CancelToken | undefined): Promise<ModuleAttemptOfRevisionResult>;
    protected processCreate(response: AxiosResponse): Promise<ModuleAttemptOfRevisionResult>;
    examplePass(moduleId: string | null, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<RevisionResult>;
    protected processExamplePass(response: AxiosResponse): Promise<RevisionResult>;
}
export declare class RevisionContentClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     */
    getAll(moduleId: string | null, skip: number | undefined, take: number | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfModuleContentOfRevisionSettings>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfModuleContentOfRevisionSettings>;
    create(moduleId: string | null, settings: CreateModuleContentSettingsOfRevisionSettings, cancelToken?: CancelToken | undefined): Promise<ModuleContentOfRevisionSettings>;
    protected processCreate(response: AxiosResponse): Promise<ModuleContentOfRevisionSettings>;
    get(moduleId: string | null, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<ModuleContentOfRevisionSettings>;
    protected processGet(response: AxiosResponse): Promise<ModuleContentOfRevisionSettings>;
    update(moduleId: string | null, contentId: string | null, settings: UpdateModuleContentSettingsOfRevisionSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(moduleId: string | null, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    createFromZip(moduleId: string | null, file: FileParameter | null | undefined, cancelToken?: CancelToken | undefined): Promise<ModuleContentOfRevisionSettings>;
    protected processCreateFromZip(response: AxiosResponse): Promise<ModuleContentOfRevisionSettings>;
    updateFromZip(moduleId: string | null, contentId: string | null, file: FileParameter | null | undefined, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdateFromZip(response: AxiosResponse): Promise<void>;
    publish(moduleId: string | null, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processPublish(response: AxiosResponse): Promise<void>;
    downloadFile(moduleId: string | null, contentId: string | null, fileId: string | null, cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processDownloadFile(response: AxiosResponse): Promise<FileResponse>;
    export(moduleId: string | null, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<CreateModuleContentSettingsOfRevisionSettings>;
    protected processExport(response: AxiosResponse): Promise<CreateModuleContentSettingsOfRevisionSettings>;
    example(cancelToken?: CancelToken | undefined): Promise<RevisionSettings>;
    protected processExample(response: AxiosResponse): Promise<RevisionSettings>;
    schema(cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processSchema(response: AxiosResponse): Promise<FileResponse>;
}
export declare class TrainingSessionClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param groupId (optional)
     * @param from (optional)
     * @param status (optional)
     */
    getAll(search: string | null | undefined, skip: number | undefined, take: number | undefined, groupId: string | null | undefined, from: Date | null | undefined, status: TrainingSessionStatus | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfTrainingSession>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfTrainingSession>;
    create(settings: CreateTrainingSessionSettings, cancelToken?: CancelToken | undefined): Promise<TrainingSession>;
    protected processCreate(response: AxiosResponse): Promise<TrainingSession>;
    get(trainingSessionId: string | null, cancelToken?: CancelToken | undefined): Promise<TrainingSession>;
    protected processGet(response: AxiosResponse): Promise<TrainingSession>;
    update(trainingSessionId: string | null, settings: UpdateTrainingSessionSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(trainingSessionId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
}
export declare class VideoAttemptClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param moduleId (optional)
     */
    getAllForActor(actorId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, moduleId: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfModuleAttemptOfVideoResult>;
    protected processGetAllForActor(response: AxiosResponse): Promise<ListOfModuleAttemptOfVideoResult>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param moduleId (optional)
     * @param actorType (optional)
     * @param from (optional)
     * @param to (optional)
     */
    getAllForGroup(groupId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, moduleId: string | null | undefined, actorType: ActorType | null | undefined, from: Date | null | undefined, to: Date | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfModuleAttemptOfVideoResult>;
    protected processGetAllForGroup(response: AxiosResponse): Promise<ListOfModuleAttemptOfVideoResult>;
    get(moduleAttemptId: string | null, cancelToken?: CancelToken | undefined): Promise<ModuleAttemptOfVideoResult>;
    protected processGet(response: AxiosResponse): Promise<ModuleAttemptOfVideoResult>;
    update(moduleAttemptId: string | null, settings: UpdateModuleAttemptSettingsOfVideoResult, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(moduleAttemptId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    create(settings: CreateModuleAttemptSettingsOfVideoResult, cancelToken?: CancelToken | undefined): Promise<ModuleAttemptOfVideoResult>;
    protected processCreate(response: AxiosResponse): Promise<ModuleAttemptOfVideoResult>;
    examplePass(moduleId: string | null, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<VideoResult>;
    protected processExamplePass(response: AxiosResponse): Promise<VideoResult>;
}
export declare class VideoContentClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     */
    getAll(moduleId: string | null, skip: number | undefined, take: number | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfModuleContentOfVideoSettings>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfModuleContentOfVideoSettings>;
    create(moduleId: string | null, settings: CreateModuleContentSettingsOfVideoSettings, cancelToken?: CancelToken | undefined): Promise<ModuleContentOfVideoSettings>;
    protected processCreate(response: AxiosResponse): Promise<ModuleContentOfVideoSettings>;
    get(moduleId: string | null, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<ModuleContentOfVideoSettings>;
    protected processGet(response: AxiosResponse): Promise<ModuleContentOfVideoSettings>;
    update(moduleId: string | null, contentId: string | null, settings: UpdateModuleContentSettingsOfVideoSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(moduleId: string | null, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    createFromZip(moduleId: string | null, file: FileParameter | null | undefined, cancelToken?: CancelToken | undefined): Promise<ModuleContentOfVideoSettings>;
    protected processCreateFromZip(response: AxiosResponse): Promise<ModuleContentOfVideoSettings>;
    updateFromZip(moduleId: string | null, contentId: string | null, file: FileParameter | null | undefined, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdateFromZip(response: AxiosResponse): Promise<void>;
    publish(moduleId: string | null, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processPublish(response: AxiosResponse): Promise<void>;
    downloadFile(moduleId: string | null, contentId: string | null, fileId: string | null, cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processDownloadFile(response: AxiosResponse): Promise<FileResponse>;
    export(moduleId: string | null, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<CreateModuleContentSettingsOfVideoSettings>;
    protected processExport(response: AxiosResponse): Promise<CreateModuleContentSettingsOfVideoSettings>;
    example(cancelToken?: CancelToken | undefined): Promise<VideoSettings>;
    protected processExample(response: AxiosResponse): Promise<VideoSettings>;
    schema(cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processSchema(response: AxiosResponse): Promise<FileResponse>;
}
export declare class AssessmentAttemptClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param moduleId (optional)
     */
    getAllForActor(actorId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, moduleId: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfModuleAttemptOfAssessmentResult>;
    protected processGetAllForActor(response: AxiosResponse): Promise<ListOfModuleAttemptOfAssessmentResult>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param moduleId (optional)
     * @param actorType (optional)
     * @param from (optional)
     * @param to (optional)
     */
    getAllForGroup(groupId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, moduleId: string | null | undefined, actorType: ActorType | null | undefined, from: Date | null | undefined, to: Date | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfModuleAttemptOfAssessmentResult>;
    protected processGetAllForGroup(response: AxiosResponse): Promise<ListOfModuleAttemptOfAssessmentResult>;
    get(moduleAttemptId: string | null, cancelToken?: CancelToken | undefined): Promise<ModuleAttemptOfAssessmentResult>;
    protected processGet(response: AxiosResponse): Promise<ModuleAttemptOfAssessmentResult>;
    update(moduleAttemptId: string | null, settings: UpdateModuleAttemptSettingsOfAssessmentResult, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(moduleAttemptId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    create(settings: CreateModuleAttemptSettingsOfAssessmentResult, cancelToken?: CancelToken | undefined): Promise<ModuleAttemptOfAssessmentResult>;
    protected processCreate(response: AxiosResponse): Promise<ModuleAttemptOfAssessmentResult>;
    examplePass(moduleId: string | null, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<AssessmentResult>;
    protected processExamplePass(response: AxiosResponse): Promise<AssessmentResult>;
}
export declare class AssessmentContentClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     */
    getAll(moduleId: string | null, skip: number | undefined, take: number | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfModuleContentOfAssessmentSettings>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfModuleContentOfAssessmentSettings>;
    create(moduleId: string | null, settings: CreateModuleContentSettingsOfAssessmentSettings, cancelToken?: CancelToken | undefined): Promise<ModuleContentOfAssessmentSettings>;
    protected processCreate(response: AxiosResponse): Promise<ModuleContentOfAssessmentSettings>;
    get(moduleId: string | null, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<ModuleContentOfAssessmentSettings>;
    protected processGet(response: AxiosResponse): Promise<ModuleContentOfAssessmentSettings>;
    update(moduleId: string | null, contentId: string | null, settings: UpdateModuleContentSettingsOfAssessmentSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(moduleId: string | null, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    createFromZip(moduleId: string | null, file: FileParameter | null | undefined, cancelToken?: CancelToken | undefined): Promise<ModuleContentOfAssessmentSettings>;
    protected processCreateFromZip(response: AxiosResponse): Promise<ModuleContentOfAssessmentSettings>;
    updateFromZip(moduleId: string | null, contentId: string | null, file: FileParameter | null | undefined, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdateFromZip(response: AxiosResponse): Promise<void>;
    publish(moduleId: string | null, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processPublish(response: AxiosResponse): Promise<void>;
    downloadFile(moduleId: string | null, contentId: string | null, fileId: string | null, cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processDownloadFile(response: AxiosResponse): Promise<FileResponse>;
    export(moduleId: string | null, contentId: string | null, cancelToken?: CancelToken | undefined): Promise<CreateModuleContentSettingsOfAssessmentSettings>;
    protected processExport(response: AxiosResponse): Promise<CreateModuleContentSettingsOfAssessmentSettings>;
    example(cancelToken?: CancelToken | undefined): Promise<AssessmentSettings>;
    protected processExample(response: AxiosResponse): Promise<AssessmentSettings>;
    schema(cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processSchema(response: AxiosResponse): Promise<FileResponse>;
}
export declare class AssessmentSubAttemptClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param assessmentId (optional)
     */
    getAllForActor(actorId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, assessmentId: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfAssessmentSubAttempt>;
    protected processGetAllForActor(response: AxiosResponse): Promise<ListOfAssessmentSubAttempt>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param assessmentId (optional)
     * @param actorType (optional)
     * @param from (optional)
     * @param to (optional)
     */
    getAllForGroup(groupId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, assessmentId: string | null | undefined, actorType: ActorType | null | undefined, from: Date | null | undefined, to: Date | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfAssessmentSubAttempt>;
    protected processGetAllForGroup(response: AxiosResponse): Promise<ListOfAssessmentSubAttempt>;
    get(subAttemptId: string | null, cancelToken?: CancelToken | undefined): Promise<AssessmentSubAttempt>;
    protected processGet(response: AxiosResponse): Promise<AssessmentSubAttempt>;
    update(subAttemptId: string | null, settings: UpdateAssessmentSubAttemptSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(subAttemptId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    create(settings: CreateAssessmentSubAttemptSettings, cancelToken?: CancelToken | undefined): Promise<AssessmentSubAttempt>;
    protected processCreate(response: AxiosResponse): Promise<AssessmentSubAttempt>;
}
export declare class AuthenticationClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * Set authentication cookie
     */
    signIn(settings: AuthenticationSettings, cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processSignIn(response: AxiosResponse): Promise<FileResponse>;
    /**
     * Clear authentication cookie
     */
    signOut(cancelToken?: CancelToken | undefined): Promise<void>;
    protected processSignOut(response: AxiosResponse): Promise<void>;
    /**
     * Generate a TokenModel
     */
    token(settings: AuthenticationSettings, cancelToken?: CancelToken | undefined): Promise<ChallengeToken>;
    protected processToken(response: AxiosResponse): Promise<ChallengeToken>;
    refreshToken(cancelToken?: CancelToken | undefined): Promise<Token>;
    protected processRefreshToken(response: AxiosResponse): Promise<Token>;
    /**
     * Generate a TokenModel on behalf of userId
     */
    impersonate(userId: string | null, cancelToken?: CancelToken | undefined): Promise<Token>;
    protected processImpersonate(response: AxiosResponse): Promise<Token>;
    /**
     * Revert the supplied TokenModel to one with no
    impersonating data
     */
    unimpersonate(cancelToken?: CancelToken | undefined): Promise<Token>;
    protected processUnimpersonate(response: AxiosResponse): Promise<Token>;
    /**
     * Gets the Identity
     */
    identity(cancelToken?: CancelToken | undefined): Promise<Identity>;
    protected processIdentity(response: AxiosResponse): Promise<Identity>;
    /**
     * Checks if the authenticated Identity has the given permission
     * @param permission (optional) The required permission
     * @param groupId (optional) The GroupId. If this is null or empty, all the current identity's
    groups will be searched.
     * @param orChildren (optional) If groupId is provided and orChildren
    is true, all child groups of groupId
    will also be checked
     * @return Returns true if the current identity is permitted
     * @deprecated
     */
    permitted(permission: string | null | undefined, groupId: string | null | undefined, orChildren: boolean | null | undefined, cancelToken?: CancelToken | undefined): Promise<boolean>;
    protected processPermitted(response: AxiosResponse): Promise<boolean>;
    /**
     * @param permission The required permission
     * @return Returns true if the current identity is permitted
     */
    permittedAll(permission: string | null, groupIds: string[], cancelToken?: CancelToken | undefined): Promise<string[]>;
    protected processPermittedAll(response: AxiosResponse): Promise<string[]>;
}
export declare class CommunicationPreferencesClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    get(userId: string | null, cancelToken?: CancelToken | undefined): Promise<CommunicationPreferences>;
    protected processGet(response: AxiosResponse): Promise<CommunicationPreferences>;
    update(userId: string | null, settings: UpdateCommunicationPreferencesSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    unsubscribe(token: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<UnsubscribeToken>;
    protected processUnsubscribe(response: AxiosResponse): Promise<UnsubscribeToken>;
    unsubscribe2(token: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<UnsubscribeToken>;
    protected processUnsubscribe2(response: AxiosResponse): Promise<UnsubscribeToken>;
}
export declare class EmailRegistrationClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * Check if the given email is registered in the system.
     * @return 200 OK if the email is found, else a 404
     */
    get(settings: EmailSettings, cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processGet(response: AxiosResponse): Promise<FileResponse>;
}
export declare class GroupCommentClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param includeChildGroups (optional)
     */
    getAll(groupId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, includeChildGroups: boolean | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfGroupComment>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfGroupComment>;
    create(groupId: string | null, settings: CreateCommentSettings, cancelToken?: CancelToken | undefined): Promise<GroupComment>;
    protected processCreate(response: AxiosResponse): Promise<GroupComment>;
    get(groupId: string | null, commentId: string | null, cancelToken?: CancelToken | undefined): Promise<GroupComment>;
    protected processGet(response: AxiosResponse): Promise<GroupComment>;
    update(groupId: string | null, commentId: string | null, settings: UpdateCommentSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(groupId: string | null, commentId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     */
    getAllReplies(groupId: string | null, commentId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfComment>;
    protected processGetAllReplies(response: AxiosResponse): Promise<ListOfComment>;
}
export declare class GroupClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    get(groupId: string | null, cancelToken?: CancelToken | undefined): Promise<Group>;
    protected processGet(response: AxiosResponse): Promise<Group>;
}
export declare class GroupFileClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param includeChildGroups (optional)
     */
    getAll(groupId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, includeChildGroups: boolean | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfGroupFile>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfGroupFile>;
    create(groupId: string | null, settings: CreateFileSettings, cancelToken?: CancelToken | undefined): Promise<GroupFile>;
    protected processCreate(response: AxiosResponse): Promise<GroupFile>;
    get(groupId: string | null, fileId: string | null, cancelToken?: CancelToken | undefined): Promise<GroupFile>;
    protected processGet(response: AxiosResponse): Promise<GroupFile>;
    update(groupId: string | null, fileId: string | null, settings: UpdateFileSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(groupId: string | null, fileId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    download(groupId: string | null, fileId: string | null, cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processDownload(response: AxiosResponse): Promise<FileResponse>;
}
export declare class JobTypeClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     */
    getAll(search: string | null | undefined, skip: number | undefined, take: number | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfJobType>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfJobType>;
    create(settings: CreateJobTypeSettings, cancelToken?: CancelToken | undefined): Promise<JobType>;
    protected processCreate(response: AxiosResponse): Promise<JobType>;
    get(jobTypeId: string | null, cancelToken?: CancelToken | undefined): Promise<JobType>;
    protected processGet(response: AxiosResponse): Promise<JobType>;
    update(jobTypeId: string | null, settings: UpdateJobTypeSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(jobTypeId: string | null, version: number | undefined, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
}
export declare class LabelClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     */
    getAllForGroup(groupId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfLabel>;
    protected processGetAllForGroup(response: AxiosResponse): Promise<ListOfLabel>;
    get(labelId: string | null, cancelToken?: CancelToken | undefined): Promise<Label>;
    protected processGet(response: AxiosResponse): Promise<Label>;
    update(labelId: string | null, settings: UpdateLabelSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(labelId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    create(settings: CreateLabelSettings, cancelToken?: CancelToken | undefined): Promise<Label>;
    protected processCreate(response: AxiosResponse): Promise<Label>;
}
export declare class MemberClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param status (optional)
     * @param jobTypeIds (optional)
     * @param jobCategories (optional)
     * @param roles (optional)
     * @param includeDeactivated (optional)
     */
    getAllForGroup(groupId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, status: MemberStatus | null | undefined, jobTypeIds: string[] | null | undefined, jobCategories: string[] | null | undefined, roles: string[] | null | undefined, includeDeactivated: boolean | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfMember>;
    protected processGetAllForGroup(response: AxiosResponse): Promise<ListOfMember>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param status (optional)
     * @param jobTypeIds (optional)
     * @param jobCategories (optional)
     * @param memberRoles (optional)
     * @param identityPermission (optional)
     * @param includeDeactivated (optional)
     */
    getAllForChildGroups(groupId: string | null, childGroupType: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, status: MemberStatus | null | undefined, jobTypeIds: string[] | null | undefined, jobCategories: string[] | null | undefined, memberRoles: string[] | null | undefined, identityPermission: string | null | undefined, includeDeactivated: boolean | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfMember>;
    protected processGetAllForChildGroups(response: AxiosResponse): Promise<ListOfMember>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param status (optional)
     */
    getAllForUser(userId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, status: MemberStatus | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfMember>;
    protected processGetAllForUser(response: AxiosResponse): Promise<ListOfMember>;
    /**
     * Gets the list of users in a group at the given time.
     * @param groupId Id of the group to get the users from.
     * @param at (optional) The UTC time at which to get users. If not specified, the current time is used.
     * @param status (optional) The status used to filter the result.
     * @param role (optional) The role used to filter the result
     * @return The list of users with their membership status and roles within the group at the given time.
     */
    getAllGroupHistory(groupId: string | null, at: Date | null | undefined, status: MemberStatus | null | undefined, role: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<MemberHistory[]>;
    protected processGetAllGroupHistory(response: AxiosResponse): Promise<MemberHistory[]>;
    get(groupId: string | null, userId: string | null, cancelToken?: CancelToken | undefined): Promise<Member>;
    protected processGet(response: AxiosResponse): Promise<Member>;
    add(groupId: string | null, userId: string | null, settings: AddGroupMemberSettings, cancelToken?: CancelToken | undefined): Promise<Member>;
    protected processAdd(response: AxiosResponse): Promise<Member>;
    join(groupId: string | null, cancelToken?: CancelToken | undefined): Promise<Member>;
    protected processJoin(response: AxiosResponse): Promise<Member>;
    update(groupId: string | null, userId: string | null, settings: UpdateGroupMemberSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    remove(groupId: string | null, userId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processRemove(response: AxiosResponse): Promise<void>;
    ban(groupId: string | null, userId: string | null, reason: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processBan(response: AxiosResponse): Promise<void>;
    leave(groupId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processLeave(response: AxiosResponse): Promise<void>;
    acceptGroupInvitation(invitationId: string | null, cancelToken?: CancelToken | undefined): Promise<Member>;
    protected processAcceptGroupInvitation(response: AxiosResponse): Promise<Member>;
    emailAll(groupId: string | null | undefined, message: string | null | undefined, role: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processEmailAll(response: AxiosResponse): Promise<void>;
    email(groupId: string | null, userId: string | null, message: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processEmail(response: AxiosResponse): Promise<void>;
}
export declare class OrganisationAccessTokenClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param organisationId (optional)
     */
    getAll(search: string | null | undefined, skip: number | undefined, take: number | undefined, organisationId: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfOrganisationAccessToken>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfOrganisationAccessToken>;
    create(settings: CreateOrganisationAccessTokenSettings, cancelToken?: CancelToken | undefined): Promise<OrganisationAccessToken>;
    protected processCreate(response: AxiosResponse): Promise<OrganisationAccessToken>;
    getAll2(tokenId: string | null, cancelToken?: CancelToken | undefined): Promise<OrganisationAccessToken>;
    protected processGetAll2(response: AxiosResponse): Promise<OrganisationAccessToken>;
    delete(tokenId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
}
export declare class OrganisationClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param identityPermissions (optional)
     */
    getAll(search: string | null | undefined, skip: number | undefined, take: number | undefined, identityPermissions: string[] | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfOrganisation>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfOrganisation>;
    create(settings: CreateOrganisationSettings, cancelToken?: CancelToken | undefined): Promise<Organisation>;
    protected processCreate(response: AxiosResponse): Promise<Organisation>;
    get(organisationId: string | null, cancelToken?: CancelToken | undefined): Promise<Organisation>;
    protected processGet(response: AxiosResponse): Promise<Organisation>;
    update(organisationId: string | null, settings: UpdateOrganisationSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(organisationId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
}
export declare class PasswordClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    get(userId: string | null, cancelToken?: CancelToken | undefined): Promise<Password>;
    protected processGet(response: AxiosResponse): Promise<Password>;
    update(userId: string | null, settings: UpdatePasswordSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    updateTwoFactorAuthentication(userId: string | null, settings: UpdateTwoFactorAuthenticationSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdateTwoFactorAuthentication(response: AxiosResponse): Promise<void>;
    requestReset(settings: RequestResetPasswordSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processRequestReset(response: AxiosResponse): Promise<void>;
    reset(settings: ResetPasswordSettings, cancelToken?: CancelToken | undefined): Promise<Token>;
    protected processReset(response: AxiosResponse): Promise<Token>;
}
export declare class PhoneNumberRegistrationClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * Check if the phoneNumber is registered in the system
     * @return 200 OK if the phoneNumber is found, else a 404
     */
    get(phoneNumber: string | null, cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processGet(response: AxiosResponse): Promise<FileResponse>;
}
export declare class RoleClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    getAll(groupType: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfRole>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfRole>;
    get(roleName: string | null, cancelToken?: CancelToken | undefined): Promise<Role>;
    protected processGet(response: AxiosResponse): Promise<Role>;
}
export declare class TeamClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param organisationId (optional)
     * @param identityPermissions (optional)
     */
    getAll(search: string | null | undefined, skip: number | undefined, take: number | undefined, organisationId: string | null | undefined, identityPermissions: string[] | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfTeam>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfTeam>;
    create(settings: CreateTeamSettings, cancelToken?: CancelToken | undefined): Promise<Team>;
    protected processCreate(response: AxiosResponse): Promise<Team>;
    get(teamId: string | null, cancelToken?: CancelToken | undefined): Promise<Team>;
    protected processGet(response: AxiosResponse): Promise<Team>;
    update(teamId: string | null, settings: UpdateTeamSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(teamId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
}
export declare class UserActivityClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param moduleType (optional)
     * @param programId (optional)
     * @param from (optional)
     * @param to (optional)
     */
    getAllForGroup(groupId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, moduleType: string | null | undefined, programId: string | null | undefined, from: Date | null | undefined, to: Date | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfUserActivity>;
    protected processGetAllForGroup(response: AxiosResponse): Promise<ListOfUserActivity>;
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     * @param moduleType (optional)
     * @param programId (optional)
     * @param from (optional)
     * @param to (optional)
     */
    getAllForPublisher(publisherId: string | null, search: string | null | undefined, skip: number | undefined, take: number | undefined, moduleType: string | null | undefined, programId: string | null | undefined, from: Date | null | undefined, to: Date | null | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfUserActivity>;
    protected processGetAllForPublisher(response: AxiosResponse): Promise<ListOfUserActivity>;
}
export declare class UserClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * @param search (optional)
     * @param skip (optional)
     * @param take (optional) The number (0 - 1000 inclusive) of items to get from the API.
     */
    getAll(search: string | null | undefined, skip: number | undefined, take: number | undefined, cancelToken?: CancelToken | undefined): Promise<ListOfUser>;
    protected processGetAll(response: AxiosResponse): Promise<ListOfUser>;
    create(settings: CreateUserSettings, cancelToken?: CancelToken | undefined): Promise<User>;
    protected processCreate(response: AxiosResponse): Promise<User>;
    get(userId: string | null, cancelToken?: CancelToken | undefined): Promise<User>;
    protected processGet(response: AxiosResponse): Promise<User>;
    update(userId: string | null, settings: UpdateUserSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    delete(userId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processDelete(response: AxiosResponse): Promise<void>;
    onboard(settings: OnboardUserSettings, cancelToken?: CancelToken | undefined): Promise<User>;
    protected processOnboard(response: AxiosResponse): Promise<User>;
    activate(userId: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processActivate(response: AxiosResponse): Promise<void>;
    merge(settings: MergeUserSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processMerge(response: AxiosResponse): Promise<void>;
    contact(userId: string | null, message: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processContact(response: AxiosResponse): Promise<void>;
    sendWelcomeEmail(userId: string | null, settings: SendWelcomeEmailSettings, cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processSendWelcomeEmail(response: AxiosResponse): Promise<FileResponse>;
    welcomeEmailTemplate(userName: string | null | undefined, userEmail: string | null | undefined, creatorName: string | null | undefined, message_CreatorName: string | null | undefined, message_CreatorImageUri: string | null | undefined, message_CreatorDescription: string | null | undefined, message_Message: string | null | undefined, welcomeButtonUri: string | null | undefined, welcomeButtonText: string | null | undefined, group_Title: string | null | undefined, group_ImageUri: string | null | undefined, group_Uri: string | null | undefined, group_Description: string | null | undefined, group_Subtitle: string | null | undefined, group_SubtitleImageUri: string | null | undefined, group_ActionButton: string | null | undefined, group_ActionUri: string | null | undefined, applicationName: string | null | undefined, productName: string | null | undefined, supportUri: string | null | undefined, termOfServiceUri: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processWelcomeEmailTemplate(response: AxiosResponse): Promise<FileResponse>;
    contactEmailTemplate(userName: string | null | undefined, creatorEmail: string | null | undefined, creatorName: string | null | undefined, message_CreatorName: string | null | undefined, message_CreatorImageUri: string | null | undefined, message_CreatorDescription: string | null | undefined, message_Message: string | null | undefined, group_Title: string | null | undefined, group_ImageUri: string | null | undefined, group_Uri: string | null | undefined, group_Description: string | null | undefined, group_Subtitle: string | null | undefined, group_SubtitleImageUri: string | null | undefined, group_ActionButton: string | null | undefined, group_ActionUri: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processContactEmailTemplate(response: AxiosResponse): Promise<FileResponse>;
}
export declare class UserEmailClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    get(userId: string | null, cancelToken?: CancelToken | undefined): Promise<UserEmails>;
    protected processGet(response: AxiosResponse): Promise<UserEmails>;
    add(userId: string | null, settings: UserEmailSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processAdd(response: AxiosResponse): Promise<void>;
    remove(userId: string | null, settings: UserEmailSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processRemove(response: AxiosResponse): Promise<void>;
    changePrimary(userId: string | null, settings: UserEmailSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processChangePrimary(response: AxiosResponse): Promise<void>;
    sendVerification(userId: string | null, settings: UserEmailSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processSendVerification(response: AxiosResponse): Promise<void>;
    verify(verificationToken: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<UserEmailVerificationToken>;
    protected processVerify(response: AxiosResponse): Promise<UserEmailVerificationToken>;
    verify2(verificationToken: string | null, cancelToken?: CancelToken | undefined): Promise<UserEmailVerificationToken>;
    protected processVerify2(response: AxiosResponse): Promise<UserEmailVerificationToken>;
    contact(userId: string | null, message: string | null | undefined, groupId: string | null | undefined, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processContact(response: AxiosResponse): Promise<void>;
}
export declare class UserPhoneNumberClient {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    get(userId: string | null, cancelToken?: CancelToken | undefined): Promise<UserPhoneNumber>;
    protected processGet(response: AxiosResponse): Promise<UserPhoneNumber>;
    update(userId: string | null, settings: UpdateUserPhoneNumberSettings, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUpdate(response: AxiosResponse): Promise<void>;
    sendVerification(userId: string | null, cancelToken?: CancelToken | undefined): Promise<VerificationRequestResult>;
    protected processSendVerification(response: AxiosResponse): Promise<VerificationRequestResult>;
    verify(verificationCode: string | null, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processVerify(response: AxiosResponse): Promise<void>;
}
export interface ListOfEmail {
    totalItemCount: number;
    items: Email[];
}
export interface Email {
    id?: string | undefined;
    type?: EmailType;
    from?: EmailAddress | undefined;
    to?: EmailAddress[] | undefined;
    subject?: string | undefined;
    bodyHtml?: string | undefined;
    created?: Date;
    modified?: Date;
    status?: EmailStatus;
}
export declare enum EmailType {
    None = "None",
    EventInvite = "EventInvite",
    EventChanged = "EventChanged",
    ScheduledLink = "ScheduledLink",
    RequestSurvey = "RequestSurvey",
    AddedToGroup = "AddedToGroup",
    AddedToClass = "AddedToClass",
    ModuleAttempt = "ModuleAttempt",
    Authentication = "Authentication",
    Confirm = "Confirm",
    ContactUser = "ContactUser",
    PublishingRequested = "PublishingRequested",
    PublishingRequestApproved = "PublishingRequestApproved",
    PublishingRequestRejected = "PublishingRequestRejected",
    RequestResetPassword = "RequestResetPassword",
    Welcome = "Welcome",
    Support = "Support",
    SupportConfirmation = "SupportConfirmation",
    SupportStatusChanged = "SupportStatusChanged",
    RequestResetPasswordFailed = "RequestResetPasswordFailed"
}
export interface EmailAddress {
    address?: string | undefined;
    name?: string | undefined;
}
/** 0 = None 1 = Submitted 2 = Received 3 = Read 4 = Clicked 5 = Spammed 6 = Error */
export declare enum EmailStatus {
    None = 0,
    Submitted = 1,
    Received = 2,
    Read = 3,
    Clicked = 4,
    Spammed = 5,
    Error = 6
}
export interface ListOfUserAttendance {
    totalItemCount: number;
    items: UserAttendance[];
}
export interface Attendance {
    id?: string | undefined;
    memberId?: string | undefined;
    status?: AttendanceStatus;
    created?: Date;
    modified?: Date;
    version?: number;
}
export interface UserAttendance extends Attendance {
    userId?: string | undefined;
    userName?: string | undefined;
    userImageUri?: string | undefined;
    userJobTypeId?: string | undefined;
    userJobTypeName?: string | undefined;
    userJobTypeCategory?: string | undefined;
    userQualifications?: string | undefined;
}
/** 0 = None 1 = Yes 2 = No 3 = Maybe */
export declare enum AttendanceStatus {
    None = 0,
    Yes = 1,
    No = 2,
    Maybe = 3
}
export interface UpdateAttendanceSettings {
    status?: AttendanceStatus;
    version: number;
}
export interface ListOfMeeting {
    totalItemCount: number;
    items: Meeting[];
}
export interface Meeting {
    id?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
    location?: Location;
    parentId?: string | undefined;
    version?: number;
}
export interface Location {
    address?: string | undefined;
    coordinates?: Coordinates;
}
export interface Coordinates {
    longitude?: number;
    latitude?: number;
}
export interface CreateMeetingSettings {
    parentId: string;
    name: string;
    description?: string | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
    location?: LocationBuilder | undefined;
    files?: CreateFileSettings[] | undefined;
}
export interface LocationBuilder {
    address?: string | undefined;
    longitude?: number;
    latitude?: number;
}
export interface CreateFileSettings {
    name: string;
    description?: string | undefined;
    dataUri: string;
}
export interface UpdateMeetingSettings {
    name: string;
    description?: string | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
    location?: LocationBuilder | undefined;
    version: number;
    notify?: boolean;
    eventUri?: string | undefined;
}
export interface ListOfFile {
    totalItemCount: number;
    items: File[];
}
export interface File {
    id?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    byteCount?: number;
    contentType?: string | undefined;
    extension?: string | undefined;
    creatorId?: string | undefined;
    creatorName?: string | undefined;
    created?: Date;
    modified?: Date;
    parentId?: string | undefined;
    version?: number;
}
export interface UpdateFileSettings {
    name: string;
    description?: string | undefined;
    dataUri?: string | undefined;
    version: number;
}
export interface ListOfGroupAttendance {
    totalItemCount: number;
    items: GroupAttendance[];
}
export interface GroupAttendance extends Attendance {
    groupName?: string | undefined;
}
export interface ListOfBackup {
    totalItemCount: number;
    items: Backup[];
}
export interface Backup {
    id?: string | undefined;
    started?: Date;
    completed?: Date | undefined;
    status?: BackupStatus;
    message?: string | undefined;
}
/** 0 = Running 1 = Completed 2 = Error */
export declare enum BackupStatus {
    Running = 0,
    Completed = 1,
    Error = 2
}
export interface ListOfExternalApplication {
    totalItemCount: number;
    items: ExternalApplication[];
}
export interface ExternalApplication {
    id?: string | undefined;
    name?: string | undefined;
    imageUri?: string | undefined;
    endpoint?: string | undefined;
    isDefault?: boolean;
    version?: number;
}
export interface CreateExternalApplicationSettings {
    name: string;
    imageUri?: string | undefined;
    endpoint?: string | undefined;
    isDefault?: boolean;
}
export interface UpdateExternalApplicationSettings {
    name: string;
    imageUri?: string | undefined;
    endpoint?: string | undefined;
    isDefault?: boolean;
    version: number;
}
export interface ResizedImage {
    uri?: string | undefined;
    width?: number;
    height?: number;
}
export interface ListOfLog {
    totalItemCount: number;
    items: Log[];
}
export interface Log {
    id?: string | undefined;
    created?: Date;
    message?: string | undefined;
    level?: number;
    context?: string | undefined;
}
export interface Platform {
    id?: string | undefined;
    name?: string | undefined;
    environment?: string | undefined;
    timeZoneId?: string | undefined;
    version?: ApplicationVersion;
    compileConfiguration?: string | undefined;
    compileDate?: Date | undefined;
    reCaptchaSiteKey?: string | undefined;
    supportEmailAddress?: string | undefined;
    systemEmailAddress?: string | undefined;
    cultures?: Culture[] | undefined;
}
export interface ApplicationVersion {
    major?: number;
    minor?: number;
    build?: number;
}
export interface Culture {
    id?: string | undefined;
    name?: string | undefined;
    datePattern?: string | undefined;
    shortDatePattern?: string | undefined;
    timePattern?: string | undefined;
    shortTimePattern?: string | undefined;
}
export interface ProjectionList {
    items?: Projection[] | undefined;
    totalItemCount?: number;
}
export interface Projection {
    name?: string | undefined;
    status?: ProjectionStatus;
    lastBuild?: ProjectionBuild | undefined;
}
/** 0 = Built 1 = Building 2 = Maintenance -1 = Failed */
export declare enum ProjectionStatus {
    Built = 0,
    Building = 1,
    Maintenance = 2,
    Failed = -1
}
export interface ProjectionBuild {
    started?: Date;
    elapsed?: string;
    eventsProcessed?: number;
    estimatedTotalEvents?: number;
    error?: string | undefined;
}
export interface ListOfNotification {
    totalItemCount: number;
    items: Notification[];
}
export interface Notification {
    id?: string | undefined;
    type?: string | undefined;
    recipientId?: string | undefined;
    parameters?: any | undefined;
    seen?: boolean;
    read?: boolean;
    creatorId?: string | undefined;
    creatorName?: string | undefined;
    created?: Date;
    version?: number;
}
export interface UpdateNotificationSettings {
    seen?: boolean;
    read?: boolean;
    version: number;
}
export interface ListOfScheduledEmail {
    totalItemCount: number;
    items: ScheduledEmail[];
}
export interface ScheduledEmail {
    id?: string | undefined;
    type?: string | undefined;
    title?: string | undefined;
    note?: string | undefined;
    externalApplicationId?: string | undefined;
    groupId?: string | undefined;
    groupName?: string | undefined;
    organisationId?: string | undefined;
    timeZoneId?: string | undefined;
    creatorId?: string | undefined;
    created?: Date;
    recipientIds?: string[] | undefined;
    parameters?: any | undefined;
    schedule?: ScheduleOption | undefined;
    version?: number;
}
export interface ScheduleOption {
    start?: Date;
    repeatType?: RepeatType;
    repeatInterval?: number;
    repeatOn?: number[] | undefined;
    end?: Date | undefined;
}
/** 0 = None 1 = Daily 2 = Weekly 3 = MonthlyByDay 4 = MonthlyByDayOfWeek 5 = Yearly */
export declare enum RepeatType {
    None = 0,
    Daily = 1,
    Weekly = 2,
    MonthlyByDay = 3,
    MonthlyByDayOfWeek = 4,
    Yearly = 5
}
export interface CreateScheduledEmailSettings {
    type: string;
    title?: string | undefined;
    note?: string | undefined;
    groupId: string;
    schedule: ScheduleOption;
    recipientIds?: string[] | undefined;
    externalApplicationId?: string | undefined;
    parameters: any;
}
export interface UpdateScheduledEmailSettings {
    title?: string | undefined;
    note?: string | undefined;
    schedule?: ScheduleOption | undefined;
    recipientIds?: string[] | undefined;
    externalApplicationId?: string | undefined;
    parameters?: any | undefined;
    version?: number;
}
export interface ListOfObservationContent {
    totalItemCount: number;
    items: ObservationContent[];
}
export interface ObservationContent {
    id?: string | undefined;
    publisherId?: string | undefined;
    definitionId?: string | undefined;
    questions?: any[] | undefined;
    published?: boolean;
    created?: Date;
    modified?: Date;
    version?: number;
}
export interface CreateObservationContentSettings {
    definitionId: string;
    questions: any[];
    published?: boolean;
}
export interface UpdateObservationContentSettings {
    questions: any[];
    version?: number;
}
export interface ListOfLocatableObservation {
    totalItemCount: number;
    items: LocatableObservation[];
}
export interface Observation {
    id?: string | undefined;
    name?: string | undefined;
    performed?: Date;
    answers?: any[] | undefined;
    groupId?: string | undefined;
    groupName?: string | undefined;
    groupType?: string | undefined;
    organisationId?: string | undefined;
    observerId?: string | undefined;
    observerName?: string | undefined;
    definitionId?: string | undefined;
    publisherId?: string | undefined;
    contentId?: string | undefined;
    creatorId?: string | undefined;
    version?: number;
}
export interface LocatableObservation extends Observation {
    coordinates?: Coordinates | undefined;
}
export interface PageOptions {
    skip?: number;
    /** The number (0 - 1000 inclusive) of items to get from the API. */
    take?: number;
}
export interface ObservationAreaOptions extends PageOptions {
    southWest?: CoordinatesBuilder | undefined;
    northEast?: CoordinatesBuilder | undefined;
    friendly?: boolean | undefined;
}
export interface CoordinatesBuilder {
    longitude?: number;
    latitude?: number;
}
export interface ListOfObservation {
    totalItemCount: number;
    items: Observation[];
}
export interface CreateObservationSettings {
    contentId: string;
    groupId: string;
    observerId?: string | undefined;
    answers?: any[] | undefined;
    performed?: Date;
}
export interface UpdateObservationSettings {
    observerId?: string | undefined;
    answers?: any[] | undefined;
    performed?: Date;
    version: number;
}
export interface PredictObservationSettings {
    dataUri: string;
}
export interface ListOfObservationDefinition {
    totalItemCount: number;
    items: ObservationDefinition[];
}
export interface ObservationDefinition {
    id?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    publisherId?: string | undefined;
    publisherName?: string | undefined;
    published?: boolean;
    publishedContentId?: string | undefined;
    programs?: ProgramInObservationDefinition[] | undefined;
    version?: number;
}
export interface ProgramInObservationDefinition {
    id?: string | undefined;
    name?: string | undefined;
}
export interface CreateObservationDefinitionSettings {
    publisherId: string;
    name: string;
    description: string;
}
export interface UpdateObservationDefinitionSettings {
    name: string;
    description: string;
    version: number;
}
export interface ListOfObservationForm {
    totalItemCount: number;
    items: ObservationForm[];
}
export interface ObservationForm {
    id?: string | undefined;
    publisherId?: string | undefined;
    definitionId?: string | undefined;
    contentId?: string | undefined;
    fileQuestionIndex?: number | undefined;
    modelId?: string | undefined;
    modelVersion?: string | undefined;
    widthMillimetres?: number;
    heightMillimetres?: number;
    modified?: Date;
    version?: number;
}
export interface CreateObservationFormSettings {
    contentId: string;
    /** The index of the file question in the target observation content
that will be used to store the OCR image. */
    fileQuestionIndex?: number | undefined;
    /** ID of the ML training model. */
    modelId: string;
    /** Version of the ML training model. */
    modelVersion: string;
    widthMillimetres?: number;
    heightMillimetres?: number;
}
export interface UpdateObservationFormSettings {
    fileQuestionIndex?: number | undefined;
    modelId: string;
    modelVersion: string;
    widthMillimetres?: number;
    heightMillimetres?: number;
    version?: number;
}
export interface MigrateObservationDefinitionSettings {
    publisherId: string;
    version: number;
}
export interface DuplicateObservationDefinitionSettings {
    name: string;
    description: string;
    /** List of consumers to be migrated with the new observation definition. */
    consumerIds: string[];
    dryRun?: boolean;
}
export interface BatchMergeObservationAnonymousUsersSettings {
    definitionId: string;
    groupId: string;
    anonymousUsers: string[];
    userId: string;
}
export interface ListOfObservationSettings {
    totalItemCount: number;
    items: ObservationSettings[];
}
export interface ObservationSettings {
    id?: string | undefined;
    organisationId?: string | undefined;
    definitionId?: string | undefined;
    publisherId?: string | undefined;
    privacy?: PrivacyLevel;
    version?: number;
}
/** 0 = Public 1 = Closed 2 = Secret */
export declare enum PrivacyLevel {
    Public = 0,
    Closed = 1,
    Secret = 2
}
export interface CreateObservationSettingsSettings {
    organisationId: string;
    definitionId: string;
    privacy?: PrivacyLevel;
}
export interface UpdateObservationSettingsSettings {
    privacy?: PrivacyLevel;
    version?: number;
}
export interface Customer {
    id?: string | undefined;
    userId?: string | undefined;
}
export interface Merchant {
    id?: string | undefined;
    publisherId?: string | undefined;
    verified?: boolean;
}
export interface Payment {
    id?: string | undefined;
    created?: Date;
    userId?: string | undefined;
    customerId?: string | undefined;
    publisherId?: string | undefined;
    merchantId?: string | undefined;
    productId?: string | undefined;
    itemId?: string | undefined;
    currencyCode?: string | undefined;
    amount?: number;
    merchantAmount?: number;
    status?: PaymentStatus;
}
/** 0 = None 1 = Pending 2 = Succeeded 3 = Failed 4 = Refunded */
export declare enum PaymentStatus {
    None = 0,
    Pending = 1,
    Succeeded = 2,
    Failed = 3,
    Refunded = 4
}
export interface CreatePaymentSettings {
    productId: string;
    token: string;
}
export interface Region {
    name?: string | undefined;
    countries?: Country[] | undefined;
}
export interface Country {
    name?: string | undefined;
    code?: string | undefined;
    currencies?: Currency[] | undefined;
}
export interface Currency {
    name?: string | undefined;
    code?: string | undefined;
    symbol?: string | undefined;
}
export interface Product {
    id?: string | undefined;
    itemName?: string | undefined;
    itemType?: string | undefined;
    itemDescription?: string | undefined;
    publisherId?: string | undefined;
    publisherName?: string | undefined;
    publisherApproved?: boolean;
    programId?: string | undefined;
    programName?: string | undefined;
    merchantId?: string | undefined;
    itemId?: string | undefined;
    prices?: Price[] | undefined;
    published?: boolean;
    version?: number;
}
export interface Price {
    countryCode?: string | undefined;
    currencyCode?: string | undefined;
    amount?: number;
}
export interface CreateProductSettings {
    publisherId: string;
    itemId: string;
    published?: boolean;
    prices?: Price[] | undefined;
}
export interface UpdateProductSettings {
    prices?: Price[] | undefined;
    published?: boolean;
    version: number;
}
export interface ListOfPublisher {
    totalItemCount: number;
    items: Publisher[];
}
export interface Publisher {
    id?: string | undefined;
    requested?: boolean;
    request?: PublishingOptions | undefined;
    approved?: boolean;
    publishing?: PublishingOptions | undefined;
}
export interface PublishingOptions {
    freeBusinessToConsumer?: boolean;
    paidBusinessToConsumer?: boolean;
    businessToBusiness?: boolean;
}
export interface RequestPublisherSettings {
    options: PublishingOptions;
    notes?: string | undefined;
    approvalUri?: string | undefined;
}
export interface ApprovePublisherSettings {
    options: PublishingOptions;
    notes?: string | undefined;
    publishingUri?: string | undefined;
}
export interface ListOfImplementation {
    totalItemCount: number;
    items: Implementation[];
}
export interface Implementation {
    id?: string | undefined;
    templateId?: string | undefined;
    creatorId?: string | undefined;
    publisherId?: string | undefined;
    publisherName?: string | undefined;
    publisherLogoUri?: string | undefined;
    consumerId?: string | undefined;
    consumerName?: string | undefined;
    consumerLogoUri?: string | undefined;
    teamId?: string | undefined;
    teamName?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    startDate?: Date | undefined;
    archived?: boolean;
    phases?: PhaseInImplementation[] | undefined;
    version?: number;
}
export interface PhaseInImplementation {
    name?: string | undefined;
    order?: number;
    tasks?: TaskInImplementation[] | undefined;
}
export interface TaskInImplementation {
    id?: string | undefined;
    name?: string | undefined;
    order?: number;
    status?: TaskStatus;
}
/** 0 = None 1 = NotStarted 2 = Started 3 = Complete 4 = Rejected */
export declare enum TaskStatus {
    None = 0,
    NotStarted = 1,
    Started = 2,
    Complete = 3,
    Rejected = 4
}
export interface ListOfTask {
    totalItemCount: number;
    items: Task[];
}
export interface Task {
    id?: string | undefined;
    groupId?: string | undefined;
    creatorId?: string | undefined;
    creatorName?: string | undefined;
    creatorImageUri?: string | undefined;
    templateId?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    estimatedDuration?: string;
    status?: TaskStatus;
    due?: Date | undefined;
    subtasks?: SubtaskInTask[] | undefined;
    assignees?: AssigneeInTask[] | undefined;
    version?: number;
}
export interface SubtaskInTask {
    id?: string | undefined;
    name?: string | undefined;
    order?: number;
    estimatedDuration?: string;
    status?: TaskStatus;
    due?: Date | undefined;
}
export interface AssigneeInTask {
    id?: string | undefined;
    name?: string | undefined;
    imageUri?: string | undefined;
}
export interface CreateImplementationSettings {
    publisherId: string;
    templateId?: string | undefined;
    consumerId?: string | undefined;
    teamId?: string | undefined;
    name: string;
    description?: string | undefined;
    startDate?: Date | undefined;
    phases?: ImplementationPhase[] | undefined;
}
export interface ImplementationPhase {
    name?: string | undefined;
    order?: number;
    tasks?: PhaseTask[] | undefined;
}
export interface PhaseTask {
    id?: string | undefined;
    order?: number;
}
export interface UpdateImplementationSettings {
    name: string;
    description?: string | undefined;
    phases?: ImplementationPhase[] | undefined;
    startDate?: Date | undefined;
    archived?: boolean;
    version?: number;
}
export interface ListOfItemActivation {
    totalItemCount: number;
    items: ItemActivation[];
}
export interface ItemActivation {
    id?: string | undefined;
    itemId?: string | undefined;
    itemType?: string | undefined;
    itemName?: string | undefined;
    programs?: ProgramInItemActivation[] | undefined;
    publisherId?: string | undefined;
    publisherName?: string | undefined;
    consumerOrganisationId?: string | undefined;
    consumerType?: string | undefined;
    consumerId?: string | undefined;
    consumerName?: string | undefined;
    activated?: boolean;
    version?: number;
    created?: Date;
    modified?: Date;
}
export interface ProgramInItemActivation {
    id?: string | undefined;
    name?: string | undefined;
}
export interface ListOfProgramActivation {
    totalItemCount: number;
    items: ProgramActivation[];
}
export interface ProgramActivation {
    id?: string | undefined;
    programId?: string | undefined;
    consumerType?: string | undefined;
    consumerId?: string | undefined;
    consumerName?: string | undefined;
    launchedAt?: Date;
    sponsor?: string | undefined;
    currentPhaseId?: string | undefined;
    phaseActivations?: PhaseActivationInProgramActivation[] | undefined;
    version?: number;
}
export interface PhaseActivationInProgramActivation {
    id?: string | undefined;
    status?: ProgramPhaseActivationStatus;
}
/** 0 = NotActivated 1 = Requested 2 = Activated 3 = Deactivated */
export declare enum ProgramPhaseActivationStatus {
    NotActivated = 0,
    Requested = 1,
    Activated = 2,
    Deactivated = 3
}
export interface ActivateProgramPhaseSettings {
    consumerId: string;
    programPhaseId: string;
    sponsor?: string | undefined;
}
export interface ListOfProgram {
    totalItemCount: number;
    items: Program[];
}
export interface Program {
    id?: string | undefined;
    name?: string | undefined;
    logoUri?: string | undefined;
    bannerUri?: string | undefined;
    publisherId?: string | undefined;
    publisherName?: string | undefined;
    publisherLogoUri?: string | undefined;
    resources?: ProgramResource[] | undefined;
    phases?: ProgramPhaseInProgram[] | undefined;
    version?: number;
}
export interface ProgramResource {
    id?: string | undefined;
    type?: ProgramResourceType;
}
/** 0 = Course 1 = ObservationDefinition 2 = Survey 3 = Implementation */
export declare enum ProgramResourceType {
    Course = 0,
    ObservationDefinition = 1,
    Survey = 2,
    Implementation = 3
}
export interface ProgramPhaseInProgram {
    id?: string | undefined;
    resources?: ProgramResource[] | undefined;
}
export interface CreateProgramSettings {
    publisherId: string;
    name: string;
    bannerUri?: string | undefined;
    logoUri?: string | undefined;
    resources?: ProgramResource[] | undefined;
}
export interface UpdateProgramSettings {
    name: string;
    bannerUri?: string | undefined;
    logoUri?: string | undefined;
    resources?: ProgramResource[] | undefined;
    version?: number;
}
export interface ProgramPhase {
    id?: string | undefined;
    publisherId?: string | undefined;
    publisherName?: string | undefined;
    publisherLogoUri?: string | undefined;
    programId?: string | undefined;
    programName?: string | undefined;
    programLogoUri?: string | undefined;
    programBannerUri?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    resources?: ProgramResource[] | undefined;
    version?: number;
}
export interface CreateProgramPhaseSettings {
    programId: string;
    name: string;
    description?: string | undefined;
    resources?: ProgramResource[] | undefined;
}
export interface UpdateProgramPhaseSettings {
    name: string;
    description?: string | undefined;
    resources?: ProgramResource[] | undefined;
    version?: number;
}
export interface ListOfComment {
    totalItemCount: number;
    items: Comment[];
}
export interface Comment {
    id?: string | undefined;
    rootId?: string | undefined;
    parentId?: string | undefined;
    content?: string | undefined;
    creatorId?: string | undefined;
    creatorName?: string | undefined;
    creatorImageUri?: string | undefined;
    creatorJobTypeId?: string | undefined;
    creatorJobTypeName?: string | undefined;
    created?: Date;
    modifierId?: string | undefined;
    modifierName?: string | undefined;
    modified?: Date;
    replyCount?: number;
    version?: number;
}
export interface CreateCommentSettings {
    parentId?: string | undefined;
    content: string;
}
export interface UpdateCommentSettings {
    content: string;
    version?: number;
}
export interface CreateTaskSettings {
    groupId: string;
    templateId?: string | undefined;
    name: string;
    description?: string | undefined;
    estimatedDuration?: string;
    due?: Date | undefined;
    subtasks?: TaskSubtask[] | undefined;
    assigneeIds?: string[] | undefined;
}
export interface TaskSubtask {
    id?: string | undefined;
    order?: number;
}
export interface UpdateTaskSettings {
    name: string;
    description?: string | undefined;
    estimatedDuration?: string;
    status?: TaskStatus;
    due?: Date | undefined;
    subtasks?: TaskSubtask[] | undefined;
    assigneeIds?: string[] | undefined;
    version?: number;
}
export interface Sharing {
    id?: string | undefined;
    aliasId?: string | undefined;
    note?: string | undefined;
    type?: SharingType;
    payload?: any | undefined;
    creatorId?: string | undefined;
    creatorType?: IdentityType;
    created?: Date;
    expires?: Date;
    disabled?: boolean;
}
export declare enum SharingType {
    GroupInvitation = "GroupInvitation"
}
/** 0 = None 1 = User 2 = Organisation */
export declare enum IdentityType {
    None = 0,
    User = 1,
    Organisation = 2
}
export interface ListOfSharing {
    totalItemCount: number;
    items: Sharing[];
}
export interface CreateSharingSettingsBase {
    aliasId?: string | undefined;
    note?: string | undefined;
    duration?: string | undefined;
}
export interface CreateGroupInvitationSharingSettings extends CreateSharingSettingsBase {
    groupId: string;
    roles?: string[] | undefined;
}
export interface ListOfTicket {
    totalItemCount: number;
    items: Ticket[];
}
export interface Ticket {
    id?: string | undefined;
    version?: number;
    message?: string | undefined;
    ticketType?: TicketType;
    userId?: string | undefined;
    userEmail?: string | undefined;
    userName?: string | undefined;
    created?: Date;
    modified?: Date;
    status?: TicketStatus;
    statusReason?: string | undefined;
}
/** 0 = None 1 = GeneralEnquiry */
export declare enum TicketType {
    None = 0,
    GeneralEnquiry = 1
}
/** 0 = Open 1 = Resolved 2 = Rejected */
export declare enum TicketStatus {
    Open = 0,
    Resolved = 1,
    Rejected = 2
}
export interface CreateTicketSettings {
    userEmail: string;
    userName: string;
    message: string;
    type?: TicketType;
}
export interface UpdateTicketSettings {
    status?: TicketStatus;
    reason?: string | undefined;
    version: number;
}
export interface ListOfSurveyContent {
    totalItemCount: number;
    items: SurveyContent[];
}
export interface SurveyContent {
    id?: string | undefined;
    publisherId?: string | undefined;
    surveyId?: string | undefined;
    sections?: QuestionSection[] | undefined;
    published?: boolean;
    created?: Date;
    modified?: Date;
    version?: number;
}
export interface QuestionSection {
    title?: string | undefined;
    questions?: any[] | undefined;
}
export interface CreateSurveyContentSettings {
    sections: QuestionSection[];
    published?: boolean;
}
export interface UpdateSurveyContentSettings {
    sections: QuestionSection[];
    version?: number;
}
export interface SurveyQuestionTypes {
    listQuestion?: ListQuestion | undefined;
    compositeQuestion?: CompositeQuestion | undefined;
    decimalQuestion?: DecimalQuestion | undefined;
    integerQuestion?: IntegerQuestion | undefined;
    multipleChoiceQuestion?: MultipleChoiceQuestion | undefined;
    stringQuestion?: StringQuestion | undefined;
    percentageQuestion?: PercentageQuestion | undefined;
    dateTimeQuestion?: DateTimeQuestion | undefined;
    timeSpanQuestion?: TimeSpanQuestion | undefined;
    userQuestion?: UserQuestion | undefined;
    groupQuestion?: GroupQuestion | undefined;
    fileQuestion?: FileQuestion | undefined;
    binaryQuestion?: BinaryQuestion | undefined;
    timeOfDayQuestion?: TimeOfDayQuestion | undefined;
    emailQuestion?: EmailQuestion | undefined;
    labelQuestion?: LabelQuestion | undefined;
}
export interface QuestionBase {
    type?: string | undefined;
    name?: string | undefined;
    body?: string | undefined;
    required?: boolean;
}
export interface ListQuestion extends QuestionBase {
    layout?: LayoutType;
    question?: any | undefined;
    minimumAnswers?: number | undefined;
    maximumAnswers?: number | undefined;
}
/** 0 = None 1 = Horizontal 2 = Vertical */
export declare enum LayoutType {
    None = 0,
    Horizontal = 1,
    Vertical = 2
}
export interface CompositeQuestion extends QuestionBase {
    layout?: LayoutType;
    questions?: any[] | undefined;
}
export interface DecimalQuestion extends QuestionBase {
    minimum?: number | undefined;
    maximum?: number | undefined;
}
export interface IntegerQuestion extends QuestionBase {
    display?: IntegerQuestionDisplayType;
    minimum?: number | undefined;
    maximum?: number | undefined;
}
/** 0 = None 1 = Counter */
export declare enum IntegerQuestionDisplayType {
    None = 0,
    Counter = 1
}
export interface MultipleChoiceQuestion extends QuestionBase {
    options?: string[] | undefined;
    minimumResponses?: number | undefined;
    maximumResponses?: number | undefined;
}
export interface StringQuestion extends QuestionBase {
    lineType?: LineType;
    minimumLength?: number | undefined;
    maximumLength?: number | undefined;
}
/** 0 = None 1 = SingleLine 2 = MultiLine */
export declare enum LineType {
    None = 0,
    SingleLine = 1,
    MultiLine = 2
}
export interface PercentageQuestion extends QuestionBase {
    minimum?: number | undefined;
    maximum?: number | undefined;
}
export interface DateTimeQuestion extends QuestionBase {
    constraint?: DateTimeConstraintType;
    minimum?: Date | undefined;
    maximum?: Date | undefined;
}
/** 0 = None 1 = Date */
export declare enum DateTimeConstraintType {
    None = 0,
    Date = 1
}
export interface TimeSpanQuestion extends QuestionBase {
    constraint?: TimeSpanConstraintType;
    minimum?: string | undefined;
    maximum?: string | undefined;
}
/** 0 = None 1 = Days 2 = Hours 3 = Minutes 4 = Seconds */
export declare enum TimeSpanConstraintType {
    None = 0,
    Days = 1,
    Hours = 2,
    Minutes = 3,
    Seconds = 4
}
export interface UserQuestion extends QuestionBase {
    jobTypeCategories?: string[] | undefined;
    jobTypeIds?: string[] | undefined;
}
export interface GroupQuestion extends QuestionBase {
    groupType?: string | undefined;
}
export interface FileQuestion extends QuestionBase {
    contentTypes?: string[] | undefined;
}
export interface BinaryQuestion extends QuestionBase {
}
export interface TimeOfDayQuestion extends QuestionBase {
}
export interface EmailQuestion extends QuestionBase {
    constraint?: DomainConstraint | undefined;
}
export interface DomainConstraint {
    type?: DomainConstraintType;
    domains?: string[] | undefined;
}
/** 0 = Black 1 = White */
export declare enum DomainConstraintType {
    Black = 0,
    White = 1
}
export interface LabelQuestion extends QuestionBase {
    minimumResponses?: number | undefined;
    maximumResponses?: number | undefined;
}
export interface SurveyAnswerTypes {
    listAnswer?: ListAnswer | undefined;
    compositeAnswer?: CompositeAnswer | undefined;
    decimalAnswer?: DecimalAnswer | undefined;
    integerAnswer?: IntegerAnswer | undefined;
    multipleChoiceAnswer?: MultipleChoiceAnswer | undefined;
    stringAnswer?: StringAnswer | undefined;
    percentageAnswer?: PercentageAnswer | undefined;
    dateTimeAnswer?: DateTimeAnswer | undefined;
    timeSpanAnswer?: TimeSpanAnswer | undefined;
    userAnswer?: UserAnswer | undefined;
    groupAnswer?: GroupAnswer | undefined;
    fileAnswer?: FileAnswer | undefined;
    binaryAnswer?: BinaryAnswer | undefined;
    timeOfDayAnswer?: TimeOfDayAnswer | undefined;
    emailAnswer?: EmailAnswer | undefined;
    labelAnswer?: LabelAnswer | undefined;
}
export interface AnswerBase {
    type?: string | undefined;
    questionIndex?: number;
}
export interface ListAnswer extends AnswerBase {
    answers?: any[] | undefined;
}
export interface CompositeAnswer extends AnswerBase {
    answers?: any[] | undefined;
}
export interface DecimalAnswer extends AnswerBase {
    value?: number | undefined;
}
export interface IntegerAnswer extends AnswerBase {
    value?: number | undefined;
}
export interface MultipleChoiceAnswer extends AnswerBase {
    options?: number[] | undefined;
}
export interface StringAnswer extends AnswerBase {
    value?: string | undefined;
}
export interface PercentageAnswer extends AnswerBase {
    value?: number | undefined;
}
export interface DateTimeAnswer extends AnswerBase {
    value?: Date | undefined;
}
export interface TimeSpanAnswer extends AnswerBase {
    value?: string | undefined;
}
export interface UserAnswer extends AnswerBase {
    valueType?: UserValueType;
    value?: string | undefined;
}
/** 0 = Id 1 = Name */
export declare enum UserValueType {
    Id = 0,
    Name = 1
}
export interface GroupAnswer extends AnswerBase {
    groupId?: string | undefined;
}
export interface FileAnswer extends AnswerBase {
    uri?: string | undefined;
}
export interface BinaryAnswer extends AnswerBase {
    value?: boolean;
}
export interface TimeOfDayAnswer extends AnswerBase {
    value?: string | undefined;
}
export interface EmailAnswer extends AnswerBase {
    value?: string | undefined;
}
export interface LabelAnswer extends AnswerBase {
    answers?: string[] | undefined;
}
export interface SurveySettings {
    sections?: QuestionSection[] | undefined;
}
export interface ListOfSurvey {
    totalItemCount: number;
    items: Survey[];
}
export interface Survey {
    id?: string | undefined;
    publisherId?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    isPublic?: boolean;
    published?: boolean;
    publishedContentId?: string | undefined;
    version?: number;
}
export interface CreateSurveySettings {
    publisherId: string;
    name: string;
    description?: string | undefined;
    isPublic?: boolean;
}
export interface UpdateSurveySettings {
    name: string;
    description?: string | undefined;
    isPublic?: boolean;
    version?: number;
}
export interface ListOfSurveyRequest {
    totalItemCount: number;
    items: SurveyRequest[];
}
export interface SurveyRequest {
    id?: string | undefined;
    surveyId?: string | undefined;
    surveyName?: string | undefined;
    surveyPublisherId?: string | undefined;
    groupId?: string | undefined;
    respondentId?: string | undefined;
    respondentName?: string | undefined;
    creatorId?: string | undefined;
    creatorName?: string | undefined;
    token?: string | undefined;
    created?: Date;
    version?: number;
}
export interface Token {
    value?: string | undefined;
}
export interface CreateSurveyRequestSettings {
    surveyId: string;
    groupId: string;
    respondentId: string;
    message?: string | undefined;
}
export interface ListOfSurveyResponse {
    totalItemCount: number;
    items: SurveyResponse[];
}
export interface SurveyResponse {
    id?: string | undefined;
    surveyId?: string | undefined;
    surveyName?: string | undefined;
    surveyPublisherId?: string | undefined;
    surveyContentId?: string | undefined;
    surveyRequestId?: string | undefined;
    groupId?: string | undefined;
    parentGroupIds?: string[] | undefined;
    respondentId?: string | undefined;
    respondentName?: string | undefined;
    respondentIPAddress?: string | undefined;
    respondentUserAgent?: string | undefined;
    respondentJobTypeId?: string | undefined;
    sections?: AnswerSection[] | undefined;
    started?: Date;
    submitted?: Date | undefined;
    version?: number;
}
export interface AnswerSection {
    sectionIndex?: number;
    answers?: any[] | undefined;
}
export interface CreateSurveyResponseSettings {
    surveyContentId: string;
    groupId: string;
    surveyRequestId?: string | undefined;
    sections?: AnswerSection[] | undefined;
    submitted?: boolean;
}
export interface UpdateSurveyResponseSettings {
    sections?: AnswerSection[] | undefined;
    submitted?: boolean;
    version: number;
}
export interface Actor {
    id?: string | undefined;
    name?: string | undefined;
    imageUri?: string | undefined;
    type?: ActorType;
}
/** 0 = None 1 = User 2 = TrainingSession 3 = Team */
export declare enum ActorType {
    None = 0,
    User = 1,
    TrainingSession = 2,
    Team = 3
}
export interface ListOfModuleAttemptOfBookResult {
    totalItemCount: number;
    items: ModuleAttemptOfBookResult[];
}
export interface ModuleAttempt {
    id?: string | undefined;
    actorId?: string | undefined;
    actorType?: ActorType;
    actorName?: string | undefined;
    actorImageUri?: string | undefined;
    creatorId?: string | undefined;
    creatorName?: string | undefined;
    publisherId?: string | undefined;
    publisherName?: string | undefined;
    publisherLogoUri?: string | undefined;
    moduleId?: string | undefined;
    moduleName?: string | undefined;
    moduleContentId?: string | undefined;
    moduleType?: string | undefined;
    result?: any | undefined;
    calculatedResult?: CalculatedModuleResult;
    classIds?: string[] | undefined;
    trainingSessionId?: string | undefined;
    trainingSessionModuleAttemptId?: string | undefined;
    created?: Date;
    modified?: Date;
    passed?: Date | undefined;
    version?: number;
}
export interface ModuleAttemptOfBookResult extends ModuleAttempt {
    result?: BookResult | undefined;
}
export interface BookResult {
    bookmark?: Bookmark | undefined;
    maxBookmark?: Bookmark | undefined;
}
export interface Bookmark {
    percentage?: number;
}
export interface CalculatedModuleResult {
    passed?: boolean;
    progress?: number;
    score?: number;
}
export interface CreateModuleAttemptSettingsOfBookResult {
    /** Id of the actor of ActorType being assessed */
    actorId: string;
    moduleContentId: string;
    result: BookResult;
}
export interface UpdateModuleAttemptSettingsOfBookResult {
    result: BookResult;
    version?: number;
}
export interface ListOfModuleContentOfBookSettings {
    totalItemCount: number;
    items: ModuleContentOfBookSettings[];
}
export interface ModuleContent {
    id?: string | undefined;
    publisherId?: string | undefined;
    moduleId?: string | undefined;
    type?: string | undefined;
    settings?: any | undefined;
    published?: boolean;
    created?: Date;
    modified?: Date;
    version?: number;
}
export interface ModuleContentOfBookSettings extends ModuleContent {
    settings?: BookSettings | undefined;
}
export interface BookSettings {
    chapters: Chapter[];
}
export interface Chapter {
    title?: string | undefined;
    body?: string | undefined;
    slides?: string[] | undefined;
}
export interface ModuleContentSettingsOfBookSettings {
    settings: BookSettings;
    files?: ModuleContentFileSettings[] | undefined;
}
export interface CreateModuleContentSettingsOfBookSettings extends ModuleContentSettingsOfBookSettings {
    published?: boolean;
}
export interface ModuleContentFileSettings {
    name: string;
    dataUri: string;
}
export interface UpdateModuleContentSettingsOfBookSettings extends ModuleContentSettingsOfBookSettings {
    version?: number;
}
export interface ListOfCertificate {
    totalItemCount: number;
    items: Certificate[];
}
export interface Certificate {
    id?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    logoUri?: string | undefined;
    publisherId?: string | undefined;
    publisherName?: string | undefined;
    publisherLogoUri?: string | undefined;
    validityPeriod?: string;
    version?: number;
}
export interface CreateCertificateSettings {
    publisherId: string;
    name: string;
    description?: string | undefined;
    logoUri?: string | undefined;
    validityPeriod?: string;
}
export interface UpdateCertificateSettings {
    name: string;
    description?: string | undefined;
    logoUri?: string | undefined;
    validityPeriod?: string;
    version?: number;
}
export interface ListOfCertification {
    totalItemCount: number;
    items: Certification[];
}
export interface Certification {
    id?: string | undefined;
    certificateId?: string | undefined;
    certificateName?: string | undefined;
    certificateLogoUri?: string | undefined;
    traineeId?: string | undefined;
    traineeName?: string | undefined;
    started?: Date;
    certified?: Date | undefined;
    expires?: Date | undefined;
    validityPeriod?: string;
}
export interface ListOfCertificationFact {
    totalItemCount: number;
    items: CertificationFact[];
}
export interface CertificationFact {
    id?: string | undefined;
    certificationId?: string | undefined;
    certificateId?: string | undefined;
    traineeId?: string | undefined;
    created?: Date;
    started?: Date | undefined;
    certified?: Date | undefined;
    validityPeriod?: string | undefined;
}
/** 0 = None 1 = Left 2 = Requested 3 = Joined 4 = Banned */
export declare enum MemberStatus {
    None = 0,
    Left = 1,
    Requested = 2,
    Joined = 3,
    Banned = 4
}
export interface ListOfClass {
    totalItemCount: number;
    items: Class[];
}
export interface Class {
    id?: string | undefined;
    description?: string | undefined;
    gracePeriod?: string;
    allowAssessmentRequests?: boolean;
    teamId?: string | undefined;
    teamName?: string | undefined;
    teamCourseActivationId?: string | undefined;
    teamCourseActivated?: boolean;
    organisationId?: string | undefined;
    organisationName?: string | undefined;
    organisationLogoUri?: string | undefined;
    organisationCourseActivationId?: string | undefined;
    organisationCourseActivated?: boolean;
    publisherId?: string | undefined;
    publisherName?: string | undefined;
    publisherLogoUri?: string | undefined;
    courseId?: string | undefined;
    courseName?: string | undefined;
    courseDescription?: string | undefined;
    courseBannerUri?: string | undefined;
    courseLogoUri?: string | undefined;
    programs?: ProgramInClass[] | undefined;
    courseRecommendedJobTypeIds?: string[] | undefined;
    version?: number;
}
export interface ProgramInClass {
    id?: string | undefined;
    name?: string | undefined;
}
export interface CreateClassSettings {
    teamId: string;
    courseId: string;
    description?: string | undefined;
    gracePeriod?: string;
    allowAssessmentRequests?: boolean;
}
export interface UpdateClassSettings {
    description?: string | undefined;
    gracePeriod?: string;
    allowAssessmentRequests?: boolean;
    version?: number;
}
export interface NotifyAssessorsSettings {
    enrolmentId: string;
    assessmentId: string;
    traineeId: string;
}
export interface ListOfCourse {
    totalItemCount: number;
    items: Course[];
}
export interface Course {
    id?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    bannerUri?: string | undefined;
    logoUri?: string | undefined;
    mediaUris?: string[] | undefined;
    publisherId?: string | undefined;
    publisherName?: string | undefined;
    publisherLogoUri?: string | undefined;
    programs?: ProgramInCourse[] | undefined;
    sections?: SectionInCourse[] | undefined;
    certificates?: CertificateInCourse[] | undefined;
    recommendedJobTypeIds?: string[] | undefined;
    processReports?: ProcessReportInCourse[] | undefined;
    preSurvey?: SurveyInCourse | undefined;
    postSurvey?: SurveyInCourse | undefined;
    version?: number;
}
export interface ProgramInCourse {
    id?: string | undefined;
    name?: string | undefined;
}
export interface SectionInCourse {
    name?: string | undefined;
    modules?: ModuleInCourse[] | undefined;
}
export interface ModuleInCourse {
    id?: string | undefined;
    name?: string | undefined;
    type?: string | undefined;
    imageUri?: string | undefined;
    open?: boolean;
}
export interface CertificateInCourse {
    id?: string | undefined;
    name?: string | undefined;
    logoUri?: string | undefined;
    validityPeriod?: string;
    moduleIds?: string[] | undefined;
}
export interface ProcessReportInCourse {
    id?: string | undefined;
    name?: string | undefined;
    type?: string | undefined;
}
export interface SurveyInCourse {
    id?: string | undefined;
    name?: string | undefined;
    required?: boolean;
}
export interface CreateCourseSettings {
    publisherId: string;
    name: string;
    /** A base64 encoded image or a URL of existing image
             */
    bannerUri?: string | undefined;
    /** A base64 encoded image or a URL of existing image
             */
    logoUri?: string | undefined;
    /** A list of promotional medias. Elements can be:
    - base64 encoded image
    - uri of image
    - url of video (i.e. video has to be hosted elsewhere, at least for now) */
    mediaUris?: string[] | undefined;
    description?: string | undefined;
    sections?: CourseSection[] | undefined;
    recommendedJobTypeIds?: string[] | undefined;
    processReportIds?: string[] | undefined;
    preSurvey?: CourseSurvey | undefined;
    postSurvey?: CourseSurvey | undefined;
}
export interface CourseSection {
    name?: string | undefined;
    modules?: CourseModule[] | undefined;
}
export interface CourseModule {
    id?: string | undefined;
    open?: boolean;
    certificateIds?: string[] | undefined;
}
export interface CourseSurvey {
    id?: string | undefined;
    required?: boolean;
}
export interface UpdateCourseSettings {
    name: string;
    bannerUri?: string | undefined;
    logoUri?: string | undefined;
    mediaUris?: string[] | undefined;
    description?: string | undefined;
    open?: boolean;
    sections?: CourseSection[] | undefined;
    recommendedJobTypeIds?: string[] | undefined;
    processReportIds?: string[] | undefined;
    preSurvey?: CourseSurvey | undefined;
    postSurvey?: CourseSurvey | undefined;
    version?: number;
}
export interface ListOfEnrolment {
    totalItemCount: number;
    items: Enrolment[];
}
export interface Enrolment2 {
    id?: string | undefined;
    traineeId?: string | undefined;
    traineeName?: string | undefined;
    traineeImageUri?: string | undefined;
    traineeJobTypeId?: string | undefined;
    traineeJobTypeName?: string | undefined;
    traineeCourseActivationId?: string | undefined;
    traineeCourseActivated?: boolean;
    publisherId?: string | undefined;
    publisherName?: string | undefined;
    publisherLogoUri?: string | undefined;
    programs?: ProgramInEnrolment[] | undefined;
    courseId?: string | undefined;
    courseName?: string | undefined;
    courseBannerUri?: string | undefined;
    courseLogoUri?: string | undefined;
    classes?: ClassInEnrolment[] | undefined;
}
export interface Enrolment extends Enrolment2 {
    courseSections?: CourseSectionInEnrolment[] | undefined;
    certifications?: CertificationInEnrolment[] | undefined;
    preSurveyResponse?: SurveyResponseInEnrolment | undefined;
    postSurveyResponse?: SurveyResponseInEnrolment | undefined;
}
export interface CourseSectionInEnrolment {
    name?: string | undefined;
    modules?: ModuleInEnrolment[] | undefined;
}
export interface ModuleInEnrolment {
    id?: string | undefined;
    name?: string | undefined;
    type?: string | undefined;
    imageUri?: string | undefined;
    open?: boolean;
    result?: CalculatedModuleResult | undefined;
    modified?: Date | undefined;
}
export interface CertificationInEnrolment {
    id?: string | undefined;
    certificateId?: string | undefined;
    certificateName?: string | undefined;
    certificateLogoUri?: string | undefined;
    certificateModuleIds?: string[] | undefined;
    started?: Date | undefined;
    certified?: Date | undefined;
    expires?: Date | undefined;
}
export interface SurveyResponseInEnrolment {
    surveyId?: string | undefined;
    surveyName?: string | undefined;
    required?: boolean;
    started?: Date | undefined;
    submitted?: Date | undefined;
}
export interface ProgramInEnrolment {
    id?: string | undefined;
    name?: string | undefined;
}
export interface ClassInEnrolment {
    id?: string | undefined;
    teamId?: string | undefined;
    teamName?: string | undefined;
    teamCourseActivationId?: string | undefined;
    teamCourseActivated?: boolean;
    organisationId?: string | undefined;
    organisationName?: string | undefined;
    organisationCourseActivationId?: string | undefined;
    organisationCourseActivated?: boolean;
    joined?: Date;
    gracePeriod?: string;
    description?: string | undefined;
}
export interface ListOfModuleAttempt {
    totalItemCount: number;
    items: ModuleAttempt[];
}
export interface ListOfModule {
    totalItemCount: number;
    items: Module[];
}
export interface Module {
    id?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    imageUri?: string | undefined;
    publisherId?: string | undefined;
    publisherName?: string | undefined;
    publisherLogoUri?: string | undefined;
    type?: string | undefined;
    published?: boolean;
    publishedContentId?: string | undefined;
    version?: number;
}
export interface CreateModuleSettings {
    publisherId: string;
    type: string;
    name: string;
    description?: string | undefined;
    imageUri?: string | undefined;
    files?: CreateFileSettings[] | undefined;
}
export interface UpdateModuleSettings {
    name: string;
    description?: string | undefined;
    imageUri?: string | undefined;
    version?: number;
}
export interface ListOfModuleNps {
    totalItemCount: number;
    items: ModuleNps[];
}
export interface ModuleNps {
    id?: string | undefined;
    score?: number;
    comments?: string | undefined;
    dismissed?: boolean;
    created?: Date;
    creatorId?: string | undefined;
    creatorName?: string | undefined;
    creatorImageUri?: string | undefined;
    creatorJobTypeId?: string | undefined;
    creatorJobTypeName?: string | undefined;
    moduleId?: string | undefined;
    moduleName?: string | undefined;
    moduleType?: string | undefined;
}
export interface Nps {
    id?: string | undefined;
    itemId?: string | undefined;
    score?: number;
    comments?: string | undefined;
    dismissed?: boolean;
    created?: Date;
    creatorId?: string | undefined;
    creatorName?: string | undefined;
    creatorImageUri?: string | undefined;
    creatorJobTypeId?: string | undefined;
    creatorJobTypeName?: string | undefined;
}
export interface CreateNpsSettings {
    moduleId: string;
    comments?: string | undefined;
    score?: number;
    dismissed?: boolean;
}
export interface ListOfModuleAttemptOfQuizResult {
    totalItemCount: number;
    items: ModuleAttemptOfQuizResult[];
}
export interface ModuleAttemptOfQuizResult extends ModuleAttempt {
    result?: QuizResult | undefined;
}
export interface QuizResult {
    sections?: QuizSectionResult[] | undefined;
    submitted?: boolean;
}
export interface QuizSectionResult {
    index?: number;
    questions?: QuizQuestionResult[] | undefined;
}
export interface QuizQuestionResult {
    index?: number;
    answers?: number[] | undefined;
}
export interface CreateModuleAttemptSettingsOfQuizResult {
    /** Id of the actor of ActorType being assessed */
    actorId: string;
    moduleContentId: string;
    result: QuizResult;
}
export interface UpdateModuleAttemptSettingsOfQuizResult {
    result: QuizResult;
    version?: number;
}
export interface ListOfModuleContentOfQuizSettings {
    totalItemCount: number;
    items: ModuleContentOfQuizSettings[];
}
export interface ModuleContentOfQuizSettings extends ModuleContent {
    settings?: QuizSettings | undefined;
}
export interface QuizSettings {
    sections: QuizSection[];
    /** The percentage required to pass the module. */
    passScore: number;
    /** If true, will cause the quiz to keep looping until participant passes all questions. */
    loop?: boolean;
}
export interface QuizSection {
    title?: string | undefined;
    questions?: QuizQuestion[] | undefined;
}
export interface QuizQuestion {
    label?: string | undefined;
    body?: string | undefined;
    answers?: QuizAnswer[] | undefined;
}
export interface QuizAnswer {
    label?: string | undefined;
    body?: string | undefined;
    correct?: boolean;
}
export interface ModuleContentSettingsOfQuizSettings {
    settings: QuizSettings;
    files?: ModuleContentFileSettings[] | undefined;
}
export interface CreateModuleContentSettingsOfQuizSettings extends ModuleContentSettingsOfQuizSettings {
    published?: boolean;
}
export interface UpdateModuleContentSettingsOfQuizSettings extends ModuleContentSettingsOfQuizSettings {
    version?: number;
}
export interface ListOfModuleAttemptOfRevisionResult {
    totalItemCount: number;
    items: ModuleAttemptOfRevisionResult[];
}
export interface ModuleAttemptOfRevisionResult extends ModuleAttempt {
    result?: RevisionResult | undefined;
}
export interface RevisionResult {
    topics?: RevisionTopicResult[] | undefined;
}
export interface RevisionTopicResult {
    index?: number;
    attempts?: TopicAttempt[] | undefined;
}
export interface TopicAttempt {
    form?: TopicForm;
    correct?: boolean;
}
/** 0 = Flipcard 1 = TrueOrFalse 2 = MultipleChoices */
export declare enum TopicForm {
    Flipcard = 0,
    TrueOrFalse = 1,
    MultipleChoices = 2
}
export interface CreateModuleAttemptSettingsOfRevisionResult {
    /** Id of the actor of ActorType being assessed */
    actorId: string;
    moduleContentId: string;
    result: RevisionResult;
}
export interface UpdateModuleAttemptSettingsOfRevisionResult {
    result: RevisionResult;
    version?: number;
}
export interface ListOfModuleContentOfRevisionSettings {
    totalItemCount: number;
    items: ModuleContentOfRevisionSettings[];
}
export interface ModuleContentOfRevisionSettings extends ModuleContent {
    settings?: RevisionSettings | undefined;
}
export interface RevisionSettings {
    topics: Topic[];
    /** The percentage required to pass the module. */
    passScore: number;
}
export interface Topic {
    term: string;
    definition: string;
    hint?: string | undefined;
}
export interface ModuleContentSettingsOfRevisionSettings {
    settings: RevisionSettings;
    files?: ModuleContentFileSettings[] | undefined;
}
export interface CreateModuleContentSettingsOfRevisionSettings extends ModuleContentSettingsOfRevisionSettings {
    published?: boolean;
}
export interface UpdateModuleContentSettingsOfRevisionSettings extends ModuleContentSettingsOfRevisionSettings {
    version?: number;
}
export interface ListOfTrainingSession {
    totalItemCount: number;
    items: TrainingSession[];
}
export interface TrainingSession {
    id?: string | undefined;
    groupId?: string | undefined;
    groupName?: string | undefined;
    organisationId?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    location?: Location;
    modules?: ModuleInTrainingSession[] | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
    status?: TrainingSessionStatus;
    version?: number;
}
export interface ModuleInTrainingSession {
    id?: string | undefined;
    name?: string | undefined;
    type?: string | undefined;
}
/** 0 = None 1 = NotStarted 2 = Started 3 = Complete */
export declare enum TrainingSessionStatus {
    None = 0,
    NotStarted = 1,
    Started = 2,
    Complete = 3
}
export interface CreateTrainingSessionSettings {
    /** The organisation or team id of the training session */
    groupId: string;
    name: string;
    description?: string | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
    location?: LocationBuilder | undefined;
    modules?: TrainingSessionModule[] | undefined;
}
export interface TrainingSessionModule {
    id?: string | undefined;
}
export interface UpdateTrainingSessionSettings {
    name: string;
    description?: string | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
    location?: LocationBuilder | undefined;
    modules?: TrainingSessionModule[] | undefined;
    status?: TrainingSessionStatus;
    version?: number;
}
export interface ListOfModuleAttemptOfVideoResult {
    totalItemCount: number;
    items: ModuleAttemptOfVideoResult[];
}
export interface ModuleAttemptOfVideoResult extends ModuleAttempt {
    result?: VideoResult | undefined;
}
export interface VideoResult {
    position?: string;
    maxPosition?: string;
    duration?: string;
}
export interface CreateModuleAttemptSettingsOfVideoResult {
    /** Id of the actor of ActorType being assessed */
    actorId: string;
    moduleContentId: string;
    result: VideoResult;
}
export interface UpdateModuleAttemptSettingsOfVideoResult {
    result: VideoResult;
    version?: number;
}
export interface ListOfModuleContentOfVideoSettings {
    totalItemCount: number;
    items: ModuleContentOfVideoSettings[];
}
export interface ModuleContentOfVideoSettings extends ModuleContent {
    settings?: VideoSettings | undefined;
}
export interface VideoSettings {
    type: VideoType;
    /** A URI for the video. */
    source: string;
    /** The duration of the video */
    duration?: string;
}
/** 0 = None 1 = Vimeo 2 = Youtube 3 = Azure 4 = Wistia */
export declare enum VideoType {
    None = 0,
    Vimeo = 1,
    Youtube = 2,
    Azure = 3,
    Wistia = 4
}
export interface ModuleContentSettingsOfVideoSettings {
    settings: VideoSettings;
    files?: ModuleContentFileSettings[] | undefined;
}
export interface CreateModuleContentSettingsOfVideoSettings extends ModuleContentSettingsOfVideoSettings {
    published?: boolean;
}
export interface UpdateModuleContentSettingsOfVideoSettings extends ModuleContentSettingsOfVideoSettings {
    version?: number;
}
export interface ListOfModuleAttemptOfAssessmentResult {
    totalItemCount: number;
    items: ModuleAttemptOfAssessmentResult[];
}
export interface ModuleAttemptOfAssessmentResult extends ModuleAttempt {
    result?: AssessmentResult | undefined;
}
export interface AssessmentResult {
    attempts?: AssessmentAttempt[] | undefined;
}
export interface AssessmentAttempt {
    id?: string | undefined;
    assessorId?: string | undefined;
    sections?: AssessmentSectionResult[] | undefined;
    performed?: Date;
    notes?: string | undefined;
}
export interface AssessmentSectionResult {
    index?: number;
    selectedCriteria?: number[] | undefined;
}
export interface CreateModuleAttemptSettingsOfAssessmentResult {
    /** Id of the actor of ActorType being assessed */
    actorId: string;
    moduleContentId: string;
    result: AssessmentResult;
}
export interface UpdateModuleAttemptSettingsOfAssessmentResult {
    result: AssessmentResult;
    version?: number;
}
export interface ListOfModuleContentOfAssessmentSettings {
    totalItemCount: number;
    items: ModuleContentOfAssessmentSettings[];
}
export interface ModuleContentOfAssessmentSettings extends ModuleContent {
    settings?: AssessmentSettings | undefined;
}
export interface AssessmentSettings {
    /** The number of times the assessment must be passed for the module to be considered passed. */
    requiredPasses: number;
    /** The number of times the assessment must be passed, after the initial pass, for the module to be considered passed. */
    subsequentRequiredPasses?: number | undefined;
    /** The percentage required to pass the assessment. */
    passScore: number;
    sections: AssessmentSection[];
}
export interface AssessmentSection {
    title?: string | undefined;
    criteria: Criterion[];
}
export interface Criterion {
    body: string;
}
export interface ModuleContentSettingsOfAssessmentSettings {
    settings: AssessmentSettings;
    files?: ModuleContentFileSettings[] | undefined;
}
export interface CreateModuleContentSettingsOfAssessmentSettings extends ModuleContentSettingsOfAssessmentSettings {
    published?: boolean;
}
export interface UpdateModuleContentSettingsOfAssessmentSettings extends ModuleContentSettingsOfAssessmentSettings {
    version?: number;
}
export interface ListOfAssessmentSubAttempt {
    totalItemCount: number;
    items: AssessmentSubAttempt[];
}
export interface AssessmentSubAttempt {
    id?: string | undefined;
    attemptId?: string | undefined;
    actorId?: string | undefined;
    actorName?: string | undefined;
    actorType?: ActorType;
    assessorId?: string | undefined;
    assessorName?: string | undefined;
    sections?: AssessmentSectionResult[] | undefined;
    created?: Date;
    modified?: Date;
    performed?: Date;
    notes?: string | undefined;
    assessmentId?: string | undefined;
    assessmentName?: string | undefined;
    assessmentContentId?: string | undefined;
    passScore?: number;
    score?: number;
    passed?: boolean;
    publisherId?: string | undefined;
    classIds?: string[] | undefined;
    trainingSessionId?: string | undefined;
    trainingSessionModuleAttemptId?: string | undefined;
}
export interface CreateAssessmentSubAttemptSettings {
    /** Id of the actor of ActorType being assessed */
    actorId: string;
    assessorId: string;
    moduleId: string;
    moduleContentId: string;
    sections: AssessmentSectionResult[];
    performed: Date;
    notes?: string | undefined;
}
export interface UpdateAssessmentSubAttemptSettings {
    assessorId: string;
    sections: AssessmentSectionResult[];
    performed: Date;
    notes?: string | undefined;
    version?: number;
}
export interface AuthenticationSettings {
    method?: AuthenticationMethod;
    email: string;
    /** This will be the password if using password to login, or the one-time passcode if using one-time passcode
to login. */
    password?: string | undefined;
    /** Optional 2FA code. */
    twoFactorAuthenticationCode?: string | undefined;
}
/** 0 = Password 1 = OneTimePasscode */
export declare enum AuthenticationMethod {
    Password = 0,
    OneTimePasscode = 1
}
export interface ChallengeToken extends Token {
    success?: boolean;
    twoFactorAuthenticationChallenge?: TwoFactorAuthenticationType;
    rateLimit?: string;
}
/** 0 = None 1 = Sms 2 = Email */
export declare enum TwoFactorAuthenticationType {
    None = 0,
    Sms = 1,
    Email = 2
}
export interface Identity {
    id?: string | undefined;
    type?: IdentityType;
    name?: string | undefined;
    email?: string | undefined;
    description?: string | undefined;
    imageUri?: string | undefined;
    groups?: IdentityGroup[] | undefined;
    impersonatorId?: string | undefined;
}
export interface IdentityGroup {
    groupId?: string | undefined;
    groupType?: string | undefined;
    parentGroups?: GroupIdAndType[] | undefined;
    displayId?: string | undefined;
    labelIds?: string[] | undefined;
    roles?: string[] | undefined;
}
export interface GroupIdAndType {
    type?: string | undefined;
    id?: string | undefined;
}
export interface CommunicationPreferences {
    userId?: string | undefined;
    emails?: EmailPreference[] | undefined;
    version?: number;
}
export interface EmailPreference2 {
    type?: string | undefined;
    ignore?: boolean;
}
export interface EmailPreference extends EmailPreference2 {
    category?: string | undefined;
    reason?: string | undefined;
}
export interface UpdateCommunicationPreferencesSettings {
    emails?: EmailPreference2[] | undefined;
    version?: number;
}
export interface UnsubscribeToken {
    userId?: string | undefined;
    emailType?: string | undefined;
}
export interface EmailSettings {
    email: string;
}
export interface ListOfGroupComment {
    totalItemCount: number;
    items: GroupComment[];
}
export interface GroupComment extends Comment {
    groupName?: string | undefined;
}
export interface Group {
    id?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    type?: string | undefined;
    organisationId?: string | undefined;
    teamId?: string | undefined;
}
export interface ListOfGroupFile {
    totalItemCount: number;
    items: GroupFile[];
}
export interface GroupFile extends File {
    groupName?: string | undefined;
}
export interface ListOfJobType {
    totalItemCount: number;
    items: JobType[];
}
export interface JobType {
    id?: string | undefined;
    name?: string | undefined;
    category?: string | undefined;
    version?: number;
}
export interface CreateJobTypeSettings {
    name: string;
    category?: string | undefined;
}
export interface UpdateJobTypeSettings {
    name: string;
    category?: string | undefined;
    version?: number;
}
export interface ListOfLabel {
    totalItemCount: number;
    items: Label[];
}
export interface Label {
    id?: string | undefined;
    version?: number;
    groupId?: string | undefined;
    groupType?: string | undefined;
    groupName?: string | undefined;
    name?: string | undefined;
    colour?: Colour;
}
export interface Colour {
    red?: number;
    green?: number;
    blue?: number;
    alpha?: number;
}
export interface CreateLabelSettings {
    groupId: string;
    name: string;
    colour?: Colour;
}
export interface UpdateLabelSettings {
    name: string;
    colour?: Colour;
    version?: number;
}
export interface ListOfMember {
    totalItemCount: number;
    items: Member[];
}
export interface Member {
    id?: string | undefined;
    groupId?: string | undefined;
    groupType?: string | undefined;
    groupName?: string | undefined;
    parentGroups?: GroupIdAndType[] | undefined;
    templateId?: string | undefined;
    templateParentIds?: string[] | undefined;
    userId?: string | undefined;
    userName?: string | undefined;
    userImageUri?: string | undefined;
    userEmail?: string | undefined;
    userJobTypeId?: string | undefined;
    userJobTypeName?: string | undefined;
    userJobTypeCategory?: string | undefined;
    userQualifications?: string | undefined;
    userActivated?: boolean;
    userLastActive?: Date | undefined;
    displayId?: string | undefined;
    status?: MemberStatus;
    roles?: string[] | undefined;
    version?: number;
    created?: Date;
    modified?: Date;
    joined?: Date;
    labelIds?: string[] | undefined;
}
export interface MemberHistory {
    id?: string | undefined;
    userId?: string | undefined;
    status?: MemberStatus;
    roles?: string[] | undefined;
}
export interface AddGroupMemberSettings {
    displayId?: string | undefined;
    additionalRoles?: string[] | undefined;
    notify?: boolean;
    message?: string | undefined;
}
export interface UpdateGroupMemberSettings {
    displayId?: string | undefined;
    additionalRoles?: string[] | undefined;
    labelIds?: string[] | undefined;
}
export interface ListOfOrganisationAccessToken {
    totalItemCount: number;
    items: OrganisationAccessToken[];
}
export interface OrganisationAccessToken {
    id?: string | undefined;
    name?: string | undefined;
    organisationId?: string | undefined;
    roles?: string[] | undefined;
    created?: Date;
    creatorId?: string | undefined;
    creatorName?: string | undefined;
    lastUsed?: Date | undefined;
    /** Only available at time of creation */
    token?: string | undefined;
}
export interface CreateOrganisationAccessTokenSettings {
    name: string;
    organisationId: string;
    roles: string[];
}
export interface ListOfOrganisation {
    totalItemCount: number;
    items: Organisation[];
}
export interface Organisation {
    id?: string | undefined;
    version?: number;
    name?: string | undefined;
    description?: string | undefined;
    contactEmail?: string | undefined;
    bannerUri?: string | undefined;
    logoUri?: string | undefined;
    location?: Location;
    privacy?: PrivacyLevel;
    website?: string | undefined;
    cultureCode?: string | undefined;
    timeZoneId?: string | undefined;
    portalUri?: string | undefined;
    colour?: Colour;
    registrationWhitelist?: string[] | undefined;
    publishingApproved?: boolean;
    shifts?: Shift[] | undefined;
}
export interface Shift {
    start?: string;
    end?: string;
}
export interface CreateOrganisationSettings {
    name: string;
    description?: string | undefined;
    contactEmail?: string | undefined;
    bannerUri?: string | undefined;
    logoUri?: string | undefined;
    colour?: Colour;
    location?: LocationBuilder | undefined;
    website?: string | undefined;
    portalUri?: string | undefined;
    cultureCode?: string | undefined;
    timeZoneId?: string | undefined;
    privacy?: PrivacyLevel;
    registrationWhitelist?: string[] | undefined;
    shifts?: Shift[] | undefined;
}
export interface UpdateOrganisationSettings {
    name: string;
    description?: string | undefined;
    contactEmail?: string | undefined;
    bannerUri?: string | undefined;
    logoUri?: string | undefined;
    colour?: Colour;
    location?: LocationBuilder | undefined;
    website?: string | undefined;
    portalUri?: string | undefined;
    privacy?: PrivacyLevel;
    timeZoneId?: string | undefined;
    cultureCode?: string | undefined;
    registrationWhitelist?: string[] | undefined;
    shifts?: Shift[] | undefined;
    version?: number;
}
export interface Password {
    version?: number;
    exists?: boolean;
    twoFactorAuthentication?: TwoFactorAuthenticationType;
}
export interface UpdatePasswordSettings {
    password: string;
    version?: number;
}
export interface UpdateTwoFactorAuthenticationSettings {
    type?: TwoFactorAuthenticationType;
    userVersion?: number;
}
export interface RequestResetPasswordSettings {
    email: string;
}
export interface ResetPasswordSettings {
    token: string;
    password: string;
}
export interface ListOfRole {
    totalItemCount: number;
    items: Role[];
}
export interface Role {
    name?: string | undefined;
    groupType?: string | undefined;
    owner?: boolean;
    default?: boolean;
    fallback?: boolean;
    description?: string | undefined;
}
export interface ListOfTeam {
    totalItemCount: number;
    items: Team[];
}
export interface Team {
    id?: string | undefined;
    version?: number;
    name?: string | undefined;
    description?: string | undefined;
    bannerUri?: string | undefined;
    privacy?: PrivacyLevel;
    tags?: string[] | undefined;
    organisationId?: string | undefined;
    organisationName?: string | undefined;
    organisationLogoUri?: string | undefined;
    organisationPrivacy?: PrivacyLevel;
}
export interface CreateTeamSettings {
    organisationId: string;
    name: string;
    description?: string | undefined;
    bannerUri?: string | undefined;
    privacy?: PrivacyLevel;
    tags?: string[] | undefined;
}
export interface UpdateTeamSettings {
    name: string;
    description?: string | undefined;
    bannerUri?: string | undefined;
    privacy?: PrivacyLevel;
    tags?: string[] | undefined;
    version?: number;
}
export interface ListOfUserActivity {
    totalItemCount: number;
    items: UserActivity[];
}
export interface UserActivity {
    id?: string | undefined;
    trackId?: string | undefined;
    activityType?: UserActivityType;
    userId?: string | undefined;
    creatorId?: string | undefined;
    creatorType?: IdentityType;
    payload?: any | undefined;
    created?: Date;
    modified?: Date;
}
export declare enum UserActivityType {
    Unknown = "Unknown",
    Joined = "Joined",
    Left = "Left",
    Banned = "Banned",
    RolesAdded = "RolesAdded",
    RolesRemoved = "RolesRemoved",
    ModuleAttempt = "ModuleAttempt",
    SurveyResponse = "SurveyResponse"
}
export interface ListOfUser {
    totalItemCount: number;
    items: User[];
}
export interface User {
    id?: string | undefined;
    name?: string | undefined;
    imageUri?: string | undefined;
    description?: string | undefined;
    qualifications?: string | undefined;
    jobTypeId?: string | undefined;
    jobTypeName?: string | undefined;
    jobTypeCategory?: string | undefined;
    version?: number;
}
export interface CreateUserSettings {
    name: string;
    email: string;
    password: string;
    reCaptchaResponse?: string | undefined;
    redirect?: string | undefined;
}
export interface OnboardUserSettings {
    name: string;
    email: string;
    groupId: string;
    displayId?: string | undefined;
    jobTypeId?: string | undefined;
    additionalRoles?: string[] | undefined;
    labelIds?: string[] | undefined;
    notify?: boolean;
    message?: string | undefined;
}
export interface UpdateUserSettings {
    name: string;
    qualifications?: string | undefined;
    description?: string | undefined;
    jobTypeId?: string | undefined;
    imageUri?: string | undefined;
    version?: number;
}
export interface MergeUserSettings {
    primaryUserId: string;
    secondaryUserId: string;
}
export interface SendWelcomeEmailSettings {
    groupId?: string | undefined;
    message?: string | undefined;
    redirect?: string | undefined;
}
export interface UserEmails {
    id?: string | undefined;
    emails?: UserEmail[] | undefined;
    primaryEmail?: string | undefined;
    version?: number;
}
export interface UserEmail {
    email?: string | undefined;
    verified?: boolean;
}
export interface UserEmailSettings {
    email: string;
    version?: number;
}
export interface UserEmailVerificationToken extends Token {
    /** If is verifying the primary email. */
    primary?: boolean;
    /** If the email has been already been verified. */
    regression?: boolean;
}
export interface UserPhoneNumber {
    id?: string | undefined;
    number?: string | undefined;
    verified?: boolean;
    version?: number;
}
export interface UpdateUserPhoneNumberSettings {
    userVersion?: number;
    phoneNumber?: string | undefined;
}
export interface VerificationRequestResult {
    sent?: boolean;
    waitSeconds?: number;
}
export interface FileParameter {
    data: any;
    fileName: string;
}
export interface FileResponse {
    data: Blob;
    status: number;
    fileName?: string;
    headers?: {
        [name: string]: any;
    };
}
export declare class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: {
        [key: string]: any;
    };
    result: any;
    constructor(message: string, status: number, response: string, headers: {
        [key: string]: any;
    }, result: any);
    protected isApiException: boolean;
    static isApiException(obj: any): obj is ApiException;
}
//# sourceMappingURL=rumble-client.d.ts.map