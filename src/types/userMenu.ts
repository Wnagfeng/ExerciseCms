export interface Children {
    id: number;
    url: string;
    name: string;
    sort: number;
    type: number;
    children?: any;
    parentId: number;
}

export interface Usermenu {
    id: number;
    name: string;
    type: number;
    url: string;
    icon: string;
    sort: number;
    children: Children[];
}