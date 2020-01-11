export class Exercise {
    public name: string;
    public description: string;
    public id: number;
    public instructions: string;
    public creatorId: number;
    public creatorName: string;
    public descriptor: Descriptor[];
}

export class Descriptor {
    public name: string;
    public id: number;
}