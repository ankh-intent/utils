export declare class Eventable {
    private static _e_uid;
    private _e_listeners;
    on(event: string, handler: Function): number;
    once(event: string, handler: Function): number;
    off(event?: string, uid?: number): void;
    emit(event: string, ...payload: any[]): number;
}
