export class Exercise {
    public exerciseName: string;
    public exerciseId: number;
    public instructions: string;
    public creatorId: number;
    public creatorName: string;
    public descriptor: Descriptor[];
}

export class Descriptor {
    public descriptorName: string;
    public descriptorId: number;
}