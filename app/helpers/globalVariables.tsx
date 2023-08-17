// normally the value of these constants is stored in an environment file but for practical purposes I will leave it here
export const globalVariables = {
    LOCAL_USERNAME: 'oscarr.memory-game.username',
    API_IMGES_URL :`https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20`,
    DEFAULT_GAME_RESULT: {
        message: '',
        errorPoints: 0,
        successPoints: 0,
        isSuccess: false,
        isError: false,
        colorMessage: "",
        maxNumberOfCards: 10,
        minNumberOfCards: 3,
        reseted: false,
        numberOfCards: 9
    }
}