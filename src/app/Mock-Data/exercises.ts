import { Exercise, Descriptor } from './../exercises/exercises.model';

export const DESCRIPTOR: Descriptor [] = [
    {descriptorName: 'Hard', descriptorId: 1},
    {descriptorName: 'Legs', descriptorId: 2},
    {descriptorName: 'Easy', descriptorId: 3},
    {descriptorName: 'Chest', descriptorId: 4},
    {descriptorName: 'Tough', descriptorId: 5},
    {descriptorName: 'Shoulders', descriptorId: 6},
    {descriptorName: 'Back', descriptorId: 7},
    {descriptorName: 'Arms', descriptorId: 8},
] 

export const EXERCISES: Exercise[] = [
    {
        exerciseName: 'Deadlift', 
        exerciseId: 1,
        instructions: "pull it off the ground",
        creatorId: 1,
        creatorName: 'Austin',
        descriptor: [DESCRIPTOR[0], DESCRIPTOR[1], DESCRIPTOR[6]]
    },
    {
        exerciseName: 'Sqaut', 
        exerciseId: 2,
        instructions: "bend knees and hips at same time",
        creatorId: 1,
        creatorName: 'Austin',
        descriptor: [DESCRIPTOR[0], DESCRIPTOR[1], DESCRIPTOR[6]]
    },
    {
        exerciseName: 'Lunge', 
        exerciseId: 3,
        instructions: "slowly",
        creatorId: 1,
        creatorName: 'Austin',
        descriptor: [DESCRIPTOR[0], DESCRIPTOR[1], DESCRIPTOR[6]]
    },
    {
        exerciseName: 'Front Sqaut', 
        exerciseId: 4,
        instructions: "get low",
        creatorId: 1,
        creatorName: 'Austin',
        descriptor: [DESCRIPTOR[0], DESCRIPTOR[1], DESCRIPTOR[6]]
    },
    {
        exerciseName: 'Bench Press', 
        exerciseId: 5,
        instructions: "push the bar up",
        creatorId: 1,
        creatorName: 'Austin',
        descriptor: [DESCRIPTOR[2], DESCRIPTOR[3]]
    },
    {
        exerciseName: 'Shoulder Press', 
        exerciseId: 6,
        instructions: "push the bar up",
        creatorId: 1,
        creatorName: 'Austin',
        descriptor: [DESCRIPTOR[2], DESCRIPTOR[5]]
    },
    {
        exerciseName: 'Pull Up', 
        exerciseId: 7,
        instructions: "pull yourself up",
        creatorId: 1,
        creatorName: 'Austin',
        descriptor: [DESCRIPTOR[2], DESCRIPTOR[6]]
    },
    {
        exerciseName: 'Row', 
        exerciseId: 8,
        instructions: "pull it off the ground",
        creatorId: 1,
        creatorName: 'Austin',
        descriptor: [DESCRIPTOR[2], DESCRIPTOR[6]]
    },
]

