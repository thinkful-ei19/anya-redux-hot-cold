export const MAKE_GUESS = 'MAKE_GUESS';
export const make_guess = (guess) => ({
    type: MAKE_GUESS,
    guess
})

export const NEW_GAME = 'NEW_GAME';
export const new_game = (correctAnswer) => ({
    type: NEW_GAME,
    correctAnswer
})

export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';
export const generateAuralUpdate = () => ({
    type: GENERATE_AURAL_UPDATE
}); 