import { Workout } from './../workouts/workout.model';
import { Exercise, Descriptor } from './../exercises/exercises.model';

export const DESCRIPTOR: Descriptor [] = [
    {name: 'Hard', id: 1},
    {name: 'Legs', id: 2},
    {name: 'Easy', id: 3},
    {name: 'Chest', id: 4},
    {name: 'Tough', id: 5},
    {name: 'Shoulders', id: 6},
    {name: 'Back', id: 7},
    {name: 'Arms', id: 8},
] 

export const EXERCISES: Exercise[] = [
    {
        id: 1,
        name: 'Deadlift', 
        description: 'A short description',
        instructions: "pull it off the ground",
        creatorId: 1,
        creatorName: 'Austin',
        descriptor: [DESCRIPTOR[0], DESCRIPTOR[1], DESCRIPTOR[6]]
    },
    {
        name: 'Sqaut', 
        description: 'A short description',
        id: 2,
        instructions: "bend knees and hips at same time",
        creatorId: 1,
        creatorName: 'Austin',
        descriptor: [DESCRIPTOR[0], DESCRIPTOR[1], DESCRIPTOR[6]]
    },
    {
        name: 'Lunge',
        description: 'A short description', 
        id: 3,
        instructions: "slowly",
        creatorId: 1,
        creatorName: 'Austin',
        descriptor: [DESCRIPTOR[0], DESCRIPTOR[1], DESCRIPTOR[6]]
    },
    {
        name: 'Front Sqaut',
        description: 'A short description', 
        id: 4,
        instructions: "get low",
        creatorId: 1,
        creatorName: 'Austin',
        descriptor: [DESCRIPTOR[0], DESCRIPTOR[1], DESCRIPTOR[6]]
    },
    {
        name: 'Bench Press',
        description: 'A short description', 
        id: 5,
        instructions: "push the bar up",
        creatorId: 1,
        creatorName: 'Austin',
        descriptor: [DESCRIPTOR[2], DESCRIPTOR[3]]
    },
    {
        name: 'Shoulder Press',
        description: 'A short description', 
        id: 6,
        instructions: "push the bar up",
        creatorId: 1,
        creatorName: 'Austin',
        descriptor: [DESCRIPTOR[2], DESCRIPTOR[5]]
    },
    {
        name: 'Pull Up',
        description: 'A short description',
        id: 7,
        instructions: "pull yourself up",
        creatorId: 1,
        creatorName: 'Austin',
        descriptor: [DESCRIPTOR[2], DESCRIPTOR[6]]
    },
    {
        name: 'Row',
        description: 'A short description', 
        id: 8,
        instructions: "pull it off the ground",
        creatorId: 1,
        creatorName: 'Austin',
        descriptor: [DESCRIPTOR[2], DESCRIPTOR[6]]
    },
]

export const WORKOUTS: Workout[] = [
    {
        id: 1,
        name: 'Leg Day', 
        description: 'Every day is leg day',
        creatorId: 1,
        creatorName: 'Austin',
        descriptors: [DESCRIPTOR[0], DESCRIPTOR[1], DESCRIPTOR[6]],
        exercises: [EXERCISES[0], EXERCISES[1], EXERCISES[2], EXERCISES[3]]
    },
    {
        id: 2,
        name: 'Upper body day', 
        description: 'push and pull',
        creatorId: 1,
        creatorName: 'Austin',
        descriptors: [DESCRIPTOR[0], DESCRIPTOR[1], DESCRIPTOR[6]],
        exercises: [EXERCISES[4], EXERCISES[5], EXERCISES[6], EXERCISES[7]]
    },
    {
        id: 3,
        name: 'Leg Day', 
        description: 'Every day is leg day',
        creatorId: 1,
        creatorName: 'Austin',
        descriptors: [DESCRIPTOR[0], DESCRIPTOR[1], DESCRIPTOR[6]],
        exercises: [EXERCISES[0], EXERCISES[1], EXERCISES[2], EXERCISES[3]]
    },
    {
        id: 4,
        name: 'Upper body day', 
        description: 'push and pull',
        creatorId: 1,
        creatorName: 'Austin',
        descriptors: [DESCRIPTOR[0], DESCRIPTOR[1], DESCRIPTOR[6]],
        exercises: [EXERCISES[4], EXERCISES[5], EXERCISES[6], EXERCISES[7]]
    },
    {
        id: 5,
        name: 'Leg Day', 
        description: 'Every day is leg day',
        creatorId: 1,
        creatorName: 'Austin',
        descriptors: [DESCRIPTOR[0], DESCRIPTOR[1], DESCRIPTOR[6]],
        exercises: [EXERCISES[0], EXERCISES[1], EXERCISES[2], EXERCISES[3]]
    },
]

