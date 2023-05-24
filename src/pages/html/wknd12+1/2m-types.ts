// 추상화할 때, 대부분의 대상은 최소 객체
type Host = { name: string; id: string };
export type HostList = Host[];
type OsInfo = { name: string; cpu: number; memory: number };
export type OsInfoList = OsInfo[];
